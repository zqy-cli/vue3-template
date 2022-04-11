import { ref, reactive } from 'vue';

export type rowSelection = {
  onSelect: (record, selected) => void;
  onSelectAll: (selected, selectedRows, changeRows) => void;
  onChange: () => void;
  selectedRowKeys: any[];
  selectedRowValues: any[];
  getCheckboxProps?: (record) => void;
  clear: () => void;
};

const checkedKeys = ref<any[]>([]);
const checkedValues = ref<any[]>([]);

export function useRowSelection(rowKey = 'id') {
  const rowSelection = reactive<rowSelection>({
    onSelect: (record, selected) => {
      if (selected) {
        rowSelection.selectedRowKeys.push(record[rowKey]);
        rowSelection.selectedRowValues.push(record);
      } else {
        rowSelection.selectedRowKeys.splice(
          rowSelection.selectedRowKeys.findIndex((x) => x === record[rowKey]),
          1,
        );
        rowSelection.selectedRowValues.splice(
          rowSelection.selectedRowValues.findIndex((x) => x[rowKey] === record[rowKey]),
          1,
        );
      }
    },
    onSelectAll: (selected, _selectedRows, changeRows) => {
      const keys = changeRows.map((item) => item[rowKey]);
      if (selected) {
        rowSelection.selectedRowKeys = [...rowSelection.selectedRowKeys, ...keys];
        rowSelection.selectedRowValues = [...rowSelection.selectedRowValues, ...changeRows];
      } else {
        rowSelection.selectedRowKeys = rowSelection.selectedRowKeys.filter((x) =>
          keys.every((y) => y !== x),
        );
        rowSelection.selectedRowValues = rowSelection.selectedRowValues.filter((x) =>
          changeRows.every((y) => y[rowKey] !== x[rowKey]),
        );
      }
    },
    onChange: () => {
      checkedKeys.value = rowSelection.selectedRowKeys;
      checkedValues.value = rowSelection.selectedRowValues;
    },
    selectedRowKeys: [],
    selectedRowValues: [],
    clear: () => {
      rowSelection.selectedRowKeys = [];
      rowSelection.selectedRowValues = [];
    },
  });
  return { rowSelection };
}

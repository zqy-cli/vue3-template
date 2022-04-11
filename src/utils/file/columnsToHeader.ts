import { BasicColumn } from '../../components/Table';
import * as R from 'ramda';

/**
 * @description 将列表的列名转换为表头
 * @param columns 列表的列名
 */
export const columnsToHeader = (columns: BasicColumn[]) => {
  return columns.reduce((acc, column) => {
    return {
      ...acc,
      [column.dataIndex as string]: column.title,
    };
  }, {});
};

/**
 * @description 根据列表的列名pick表格数据
 * @param columns 列表的列名
 * @param data 表格数据
 */
export const pickDataFromColumns = (data: any[], columns: BasicColumn[]) => {
  const header = R.map(R.prop('dataIndex'), columns);
  return R.map(R.pick(header), data);
};

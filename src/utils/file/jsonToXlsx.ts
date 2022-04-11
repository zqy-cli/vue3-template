import { jsonToSheetXlsx } from '../../components/Excel';
import { columnsToHeader, pickDataFromColumns } from './columnsToHeader';

/**
 * 将json数据转换为xlsx
 * @param data json数据
 * @param columns 列配置
 * @param name 导出文件名
 */
export const jsonToXlsx = (data, columns, name) => {
  jsonToSheetXlsx({
    data: pickDataFromColumns(data, columns),
    header: columnsToHeader(columns),
    filename: name,
  });
};

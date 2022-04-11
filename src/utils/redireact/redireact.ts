import { queryRiskPortrait } from '/@/api/risk/table';
import { openWindow } from '../index';
import * as R from 'ramda';
import { useUserStoreWithOut } from '../../store/modules/user';

export type options = {
  customerId?: string;
  flowableId?: string;
  operateId?: string;
};

const keys = [
  'cardNumber',
  'clueType',
  'customerNo',
  'taskId',
  'reportTime',
  'runId',
  'bankCard',
  'customerName',
  'id',
];

export type type = '0' | '1' | '2' | '3' | '4';

const taskKeys = ['customerId', 'flowableId', 'operateId'];

const userKeys = ['userCode', 'orgCode', 'postCode'];

export async function redirect(customerNo: string, type: type, options: options = {} as options) {
  const useStore = useUserStoreWithOut();
  const userInfo = useStore.getUserInfo;
  const { result, total } = await queryRiskPortrait({ customerNo });
  const MULTI_URL = '/content/multiRiskPicture';
  const NO_URL = '/content/noRiskPicture';
  if (total === 0) {
    // 无卡
    const query = [
      `type=${type}`,
      pickProperties(userInfo, userKeys),
      pickProperties(options, taskKeys),
      `customerNo=${customerNo}`,
    ];
    openWindow(`${NO_URL}?${query.join('&')}`);
  } else {
    // 多卡或单卡
    const query = [
      `type=${type}`,
      pickProperties(userInfo, userKeys),
      pickProperties(options, taskKeys),
      pickProperties(result[0], keys),
    ];
    openWindow(`${MULTI_URL}?${query.join('&')}`);
  }
}

export const pickProperties = (data, keys) => {
  const params = R.pick(keys, data);
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
};

import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess } from '../_util';
import { blackList } from './listData';

export default [
  {
    url: '/basic-api/table/getBlackList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, blackList);
    },
  },
] as MockMethod[];

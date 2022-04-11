import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

import { cardList } from './listData';

export default [
  {
    url: '/basic-api/suspicious/getCardList',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess(cardList);
    },
  },
] as MockMethod[];

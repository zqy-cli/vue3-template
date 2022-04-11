import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess } from '../_util';
import {
  accountList,
  addSuspiciousList,
  demoList,
  identifyAlreadySuspiciousList,
  identifyYetSuspiciousList,
  largeGenerateMessageList,
  reviewAlreadySuspiciousList,
  reviewYetSuspiciousList,
  suspiciousList,
  TobeGeneratedList,
  ReceiptManagedList,
  AreadyGeneratedList,
  getDatasupplementList,
  suspiciousGenerateMessageList,
} from './listData';

export default [
  {
    url: '/basic-api/table/getDemoList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, demoList);
    },
  },
  {
    url: '/basic-api/table/getSuspiciousList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, suspiciousList);
    },
  },
  {
    url: '/basic-api/table/getAddSuspiciousList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, addSuspiciousList);
    },
  },
  {
    url: '/basic-api/table/getAccountList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, accountList);
    },
  },
  {
    url: '/basic-api/table/getIdentifyYetSuspiciousList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, identifyYetSuspiciousList);
    },
  },
  {
    url: '/basic-api/table/getIdentifyAlreadySuspiciousList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, identifyAlreadySuspiciousList);
    },
  },
  {
    url: '/basic-api/table/getReviewYetSuspiciousList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, reviewYetSuspiciousList);
    },
  },
  {
    url: '/basic-api/table/getReviewAlreadySuspiciousList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, reviewAlreadySuspiciousList);
    },
  },
  {
    url: '/basic-api/table/getGenerateMessageList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, largeGenerateMessageList);
    },
  },
  {
    url: '/basic-api/table/getSuspiciousCorrectMessageList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, suspiciousGenerateMessageList);
    },
  },
  {
    url: '/basic-api/table/gettobeGeneratedLsit',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, TobeGeneratedList);
    },
  },
  {
    url: '/basic-api/table/getAreadyGeneratedLsit',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, AreadyGeneratedList);
    },
  },
  {
    url: '/basic-api/table/getreceptManageLsit',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, ReceiptManagedList);
    },
  },
  {
    url: '/basic-api/table/getDatasupplementList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, getDatasupplementList);
    },
  },
] as MockMethod[];

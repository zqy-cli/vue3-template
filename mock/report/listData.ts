import { Random } from 'mockjs';

function getRandomPics(count = 10): string[] {
  const arr: string[] = [];
  for (let i = 0; i < count; i++) {
    arr.push(Random.image('800x600', Random.color(), Random.color(), Random.title()));
  }
  return arr;
}

export const demoList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      beginTime: '@datetime',
      endTime: '@datetime',
      address: '@city()',
      name: '@cname()',
      name1: '@cname()',
      name2: '@cname()',
      name3: '@cname()',
      name4: '@cname()',
      name5: '@cname()',
      name6: '@cname()',
      name7: '@cname()',
      name8: '@cname()',
      avatar: Random.image('400x400', Random.color(), Random.color(), Random.first()),
      imgArr: getRandomPics(Math.ceil(Math.random() * 3) + 1),
      imgs: getRandomPics(Math.ceil(Math.random() * 3) + 1),
      date: `@date('yyyy-MM-dd')`,
      time: `@time('HH:mm')`,
      'no|100000-10000000': 100000,
      'status|1': ['normal', 'enable', 'disable'],
    });
  }
  return result;
})();

export const suspiciousList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      number: 'KYAL-202110104422322',
      'type|1': ['信息更正', '主动纠错'],
      host: '@cname()',
      organization: '@city()',
      date: `@date('yyyy-MM-dd')`,
      'status|1': ['已排除', '甄别中', '审核中', '审批中', '上报中', '已上报'],
      'way|1': ['系统', '人工'],
      time: '已过期',
    });
  }
  return result;
})();

export const addSuspiciousList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      number: 'KYAL-202110104422322',
      'type|1': ['信息更正', '主动纠错'],
      host: '@cname()',
      organization: '@city()',
      date: `@date('yyyy-MM-dd')`,
      'status|1': ['已排除', '甄别中', '审核中', '审批中', '上报中', '已上报'],
      'way|1': ['系统', '人工'],
    });
  }
  return result;
})();

export const accountList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      number: 'KYAL-202110104422322',
      'type|1': ['信息更正', '主动纠错'],
      name: '@cname()',
      organization: '@city()',
      date: `@date('yyyy-MM-dd')`,
      close_date: `@date('yyyy-MM-dd')`,
      card: '6121102020122340',
    });
  }
  return result;
})();

export const cardList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 5; index++) {
    result.push({
      id: `${index}`,
      'number|1000000-9999999': 1,
    });
  }
  return result;
})();

/**
 * 待甄别
 */
export const identifyYetSuspiciousList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      number: 'KYAL-202110104422322',
      'type|1': ['信息更正', '主动纠错'],
      host: '@cname()',
      organization: '@city()',
      date: `@date('yyyy-MM-dd')`,
      'status|1': ['0', '1'],
      'way|1': ['系统', '人工'],
    });
  }
  return result;
})();

/**
 * 已甄别
 */
export const identifyAlreadySuspiciousList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      number: 'KYAL-202110104422322',
      'type|1': ['信息更正', '主动纠错'],
      host: '@cname()',
      organization: '@city()',
      date: `@date('yyyy-MM-dd')`,
      'result|1': ['通过', '不通过'],
      'way|1': ['系统', '人工'],
    });
  }
  return result;
})();

/**
 * 待审核
 */
export const reviewYetSuspiciousList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      number: 'KYAL-202110104422322',
      'type|1': ['信息更正', '主动纠错'],
      host: '@cname()',
      organization: '@city()',
      date: `@date('yyyy-MM-dd')`,
      'status|1': ['0', '1'],
      'way|1': ['系统', '人工'],
    });
  }
  return result;
})();

/**
 * 已审核
 */
export const reviewAlreadySuspiciousList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      number: 'KYAL-202110104422322',
      'type|1': ['信息更正', '主动纠错'],
      host: '@cname()',
      organization: '@city()',
      date: `@date('yyyy-MM-dd')`,
      'result|1': ['通过', '不通过'],
      'way|1': ['系统', '人工'],
    });
  }
  return result;
})();

/**
 * 大额交易生成报文
 */
export const largeGenerateMessageList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      identity_number: 'KYAL-202110104422322',
      account: '6121102020122340',
      name: '@cname()',
      way: '现金',
      sign: '',
      use: '',
      org: '@city()',
      otherName: '@cname()',
      date: `@date('yyyy-MM-dd')`,
      remark: '@city()',
    });
  }
  return result;
})();

/**
 * 交易交易生成纠错报文
 */
export const suspiciousGenerateMessageList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      identity_number: 'KYAL-202110104422322',
      account: '6121102020122340',
      name: '@cname()',
      org: '@city()',
      otherName: '@cname()',
      date: `@date('yyyy-MM-dd')`,
      remark: '@city()',
    });
  }
  return result;
})();

export const TobeGeneratedList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      'ReportNumber|1000000-1999999': 1,
      'CaseNumber|1000-9999': 1,
      'CaseType|1': ['大额', '可疑'],
      CaseDate: `@date('yyyy-MM-dd')`,
      'ReportType|1': ['正常新增', '非正常新增'],
      'ReportTypeSon|1': ['正常新增', '非正常新增'],
      Institution: '南京银行',
      'Type|1': ['1', '2'],
      'status|1': ['normal', 'enable', 'disable'],
    });
  }
  return result;
})();

export const AreadyGeneratedList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      'DatapacketName|1000000-1999999': 1,
      'DatapacketType|1': ['新增', '删除', '纠错', '可疑'],
      'ReportType|1': ['大额', '可疑'],
      SubmissionDate: `@date('yyyy-MM-dd')`,
      'SubmissionBatch|1000-9999': 1,
      ReportBody: '南京银行',
      'Reportstatus|1': ['已生成', '已下载', '已回执'],
      'Type|1': ['1', '2'],
    });
  }
  return result;
})();

export const ReceiptManagedList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      receiptNumber: Random.id(),
      receiptName: Random.guid(),
      'receiptType|1': ['正确回执', '错误回执', '补正回执'],
      uploadDate: `@date('yyyy-MM-dd')`,
      buildDate: `@date('yyyy-MM-dd')`,
      'receiptStatus|1': ['已回执', '未回执'],
      'Type|1': ['1', '2', '3'],
    });
  }
  return result;
})();

export const getDatasupplementList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      ServerPid: Random.id(),
      TransactionDate: `@date('yyyy-MM-dd HH:mm:ss')`,
      'TradingInstitution|1': ['南京胜太路支行', '南京大明路支行', '南京软件大道支行'],
      CustomerNumber: Random.id(),
      'ReceiptPayment|1': ['收', '付'],
      'Currentransfer|1': ['现', '转'],
      'TransactionAmount|10000-1000000': 1,
      'reportType|1': ['大额', '可疑'],
      'errorType|1': ['类型1', '类型2'],
      ReceiptDate: `@date('yyyy-MM-dd HH:mm:ss')`,
      'Type|1': ['1', '2', '3'],
    });
  }
  return result;
})();

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

export const blackList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      CustomerName: '@cname()',
      'Liststatus|1-4': 1,
      ModifyContent: '@ctitle',
      'CustomerNumber|100000-10000000000': 1,
      'CustomerType|1': ['对公', '对私'],
      'IDType|1': ['居民身份证', '统一社会信用代码', '军官证', '港澳台侨证'],
      IDNumber: '@ID',
      'institution|1': [
        '总行',
        '北京分行',
        '南京分行',
        '南京鼓楼支行',
        '北京大兴支行',
        '北京西三环支行',
        '北京通州支行',
      ],
      createdate: `@date('yyyy-MM-dd HH:mm:ss')`,
      'LisType|1-12': 1,
      'Isitvalid|1': ['有效', '已失效'],
      'ApplicableType|1': ['1', '0'],
    });
  }
  return result;
})();

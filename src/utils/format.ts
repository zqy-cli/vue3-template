import dayjs from 'dayjs';
import * as R from 'ramda';
import { isObject } from './is';
import rt from 'dayjs/plugin/relativeTime'; // 引入相对时间插件
import 'dayjs/locale/zh-cn'; // 引入汉化包
dayjs.extend(rt); // 此处需要继承相对时间插件的方法

export type map = {
  value: string | number;
  label: string;
};

/**
 * @description 格式化时间
 * @param time
 * @param template
 */
export function format(time: Date, template = 'YYYY-MM-DD'): string {
  if (R.isNil(time)) return time;
  return dayjs(time).format(template);
}

export function suffixTime(time: string, type: 'start' | 'end' = 'start') {
  if (R.isNil(time)) return time;
  const suffix = type === 'start' ? '00:00:00' : '23:59:59';
  return `${time} ${suffix}`;
}

/**
 * @description 格式化时间
 * @param time
 * @param template
 */
export function formatHss(time: Date, template = 'YYYY-MM-DD HH:mm:ss') {
  if (R.isNil(time)) return time;
  return dayjs(time).format(template);
}

const convertValueToNull = (value) =>
  value === '' ? null : isObject(value) ? formatValue(value) : value;

/**
 * @description 处理值为空字符串的对象
 * @param obj
 */
export function formatValue(obj: object) {
  if (!isObject(obj)) return obj; // 非空和非对象前置判断
  return R.map(convertValueToNull, obj);
}

/**
 * @description 根据指定key，返回相应的value
 * @param key
 * @param map
 */
export const convertKeyValue = (key: string, map: map[]) => {
  const { label } = map.find((item) => item.value === key) as map;
  return label || '';
};

/**
 * @description 将特殊字符串转换为数组
 * @description 形如"[\"江苏\",\"南京\"]" => ['江苏', '南京']
 */
export const convertStringToValue = (value: string) => {
  if (!value) return [value];
  return value.replaceAll('[', '').replaceAll(']', '').replaceAll('"', '').split(',');
};

export function remainTime(time) {
  if (!isNaN(time)) {
    time = parseInt(time);
  }

  if (new Date().getTime() > time) {
    return '0天';
  }

  return dayjs().locale('zh-cn').to(dayjs(time)); // 此处为核心使用方法
}

import * as R from 'ramda';
/**
 * @description 千分位数字
 * @author chuck
 */
const isEmpty = (num) => {
  return R.isNil(num) || R.isEmpty(num);
};

export function thousandNum(num) {
  return isEmpty(num) ? num : num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

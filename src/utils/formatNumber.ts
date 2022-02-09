import numeral from "numeral";

/**
 * 转换为百分数
 */
export function fPercent(number: number) {
  return numeral(number / 100).format("0.0%");
}

/**
 * 转换为数字
 */
export function fNumber(number: string | number) {
  return numeral(number).format();
}

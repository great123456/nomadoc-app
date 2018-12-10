/**
 * 公共配置变量
 * API_PATH 接口URL
 * PRICE_RANGE 匹配价格区间
 */

var API_PATH="https://jiang.bidou88.cn/api"
const isDEV = process.env.NODE_ENV === 'development'

// 正则表达式
const PHONEREG = /^(0|86|17951)?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/
const PRICE_RANGE = /^\d*-\d+$/

export {
  API_PATH,
  isDEV,
  PHONEREG,
  PRICE_RANGE
}
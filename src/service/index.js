// 首页
import wxRequest from '../config/wxRequest'
import { API_PATH } from '../config/env'

// 登录获取token
export const weixinlogin = (ajaxParams) => wxRequest(API_PATH + '/login', ajaxParams, 'GET')

// 获取用户信息
export const apiGetUserInfo = (ajaxParams) => wxRequest(API_PATH + '/getUserinfo', ajaxParams, 'GET')

// 用户信息（订单处可用）
export const apiUserInfo = (ajaxParams) => wxRequest(API_PATH + '/auth/show', ajaxParams, 'GET')

// 首页列表
export const apiIndexList = (ajaxParams) => wxRequest(API_PATH + '/home', ajaxParams, 'GET')

// 课程详情
export const apiCourseDetail = (ajaxParams) => wxRequest(API_PATH + '/course/detail', ajaxParams, 'GET')

// 课程支付
export const apiCoursePay = (ajaxParams) => wxRequest(API_PATH + '/pay', ajaxParams, 'POST')
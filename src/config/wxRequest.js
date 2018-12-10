import Taro, { Component } from '@tarojs/taro'

export default async(url, params, method) => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: url,
      method: method || 'GET',
      data: params,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'token': wx.getStorageSync('token') || ''
      },
      success: (response) => {
        if(response.data.code == 401){
          wx.reLaunch({
            url: '/pages/login/login'
          })
        }else{
          resolve(response.data)
        }
      },
      fail: (error) => {
        reject(error)
      }
    })
  })
}

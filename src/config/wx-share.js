import Taro, { Component } from '@tarojs/taro'
import shareImg from  '../images/banner@2x.png'

export default function shareConfig(){
	return {
		title: '游牧未来',
		path: 'pages/index/index',
		imageUrl: shareImg,
		success() {
		  Taro.showToast({
		    title: '转发成功',
		    icon: 'success',
		    duration: 2000
		  })
		}
	}
}
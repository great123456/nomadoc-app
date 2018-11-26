import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index', // 首页
      'pages/center/index', // 个人中心
      'pages/wallet/index', // 我的钱包
      'pages/course-detail/index', // 课程详情
      'pages/promote/index', // 推广页面
      'pages/earnings/index', // 收益明细
      'pages/record/index', // 提现记录
      'pages/course-learn/index' // 课程学习
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#b5b6b7',
      selectedColor: '#2c2d2f',
      backgroundColor: '#ffffff',
      list: [{
        pagePath: "pages/index/index",
        text: "商学院",
        iconPath: 'images/shangxueyuan@2x.png',
        selectedIconPath: 'images/shangxueyuan@2x.png'
      }, {
        pagePath: "pages/center/index",
        text: "我的",
        iconPath: 'images/guankanrenshu@2x.png',
        selectedIconPath: 'images/wode@2x.png'
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

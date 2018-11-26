import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import './earnings.scss'
import dataImage from '../../images/zanwushuju@2x.png'

class Earnings extends Component {

  config = {
    navigationBarTitleText: '收益明细'
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='container'>
        <View className='data-img'>
          <Image
            mode="widthFix"
            src={dataImage}
          />
        </View>
        <View className='not-data'>暂无数据</View>
      </View>
    )
  }
}

export default Earnings

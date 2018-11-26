import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import './record.scss'
import dataImage from '../../images/zanwushuju@2x.png'

class Record extends Component {

  config = {
    navigationBarTitleText: '提现记录'
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

export default Record

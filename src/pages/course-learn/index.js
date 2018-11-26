import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import './learn.scss'
import peopleImage from '../../images/xiaotouxiang1@2x.png'

class Learn extends Component {

  config = {
    navigationBarTitleText: '课程学习'
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='container'>
        <Video
          className='video-container'
          src='https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f410000bfnu75fqaba09a8ndjs0&line=0'
          controls={true}
          autoplay={false}
          poster='https://xierdunapi.hxgtech.com/upload/img/20181117/20181117173118-5befdfe61ff69.png'
          initialTime='0'
          id='video'
          loop={false}
          muted={false}
        />
        <View className='detail-header'>
          <View>课程名称: 为什么要做游牧未来?</View>
        </View>

        <View className='detail-option'>
          <View className='course-title'>课程介绍</View>
          <View className='corse-introduce'>
             帮助大家更精准的表达出每日一淘的核心价值,更好的说服VIP会员
          </View>
        </View>

        <View className='detail-bottom'>
          <View>加入游牧未来</View>
        </View>
      </View>
    )
  }
}

export default Learn

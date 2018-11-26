import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import './promote.scss'
import posterImage from '../../images/haibao1@2x.png'
import posterImage2 from '../../images/haibao2@2x.png'

class Promote extends Component {

  config = {
    navigationBarTitleText: '推广'
  }
  
  constructor (props) {
    super(props)
    this.state = {
      posterImg: [posterImage,posterImage2]
    }
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { posterImg } = this.state
    const posterItem = posterImg.map((item)=>{
      return (
        <Image
          key={item}
          className='poster-img'
          mode='widthFix'
          src={item}
        />
      )
    })
    return (
      <View className='container'>
        <View className='promote-content'>
          <View className='promote-title'>您的推广海报</View>
          <View className='poster-container'>
            {posterItem}
          </View>
          <View className='poster-remark'>
            推广码海报功能一样,分享给新用户看到是你的信息,自己看到始终是你的上级!
          </View>
          <View className='dowload-btn'>下载推广名片</View>
          <View className='remark-title'>说明:</View>
          <View className='remark-text'>
            1,你可以下载二维码推广名片邀请用户注册
          </View>
          <View className='remark-text'>
            2,用户通过你的二维码进入,会成为你的团队
          </View>
          <View className='remark-text'>
            3,最终解释权归本程序所有
          </View>
        </View>
      </View>
    )
  }
}

export default Promote

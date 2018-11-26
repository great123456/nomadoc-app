import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, OpenData } from '@tarojs/components'

import './center.scss'
import { AtAvatar,AtList, AtListItem } from 'taro-ui'
import iconImage from '../../images/qianbao@2x.png'
import iconImage2 from '../../images/tuiguang2@2x.png'
import iconImage3 from '../../images/kefu@2x.png'

class Center extends Component {

  config = {
    navigationBarBackgroundColor: '#2d2d2d',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: '个人中心'
  }
  state = {
    userInfo: {
      nickName: ''
    }
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  walletPage(){
    Taro.navigateTo({
      url: '/pages/wallet/index'
    })
  }

  promotePage(){
    Taro.navigateTo({
      url: '/pages/promote/index'
    })
  }

  render () {
    const openData = {
       type: 'userAvatarUrl'
    }
    return (
      <View className='container'>
       <View className='center-header'>
         <AtAvatar size='large' circle openData={openData} style='display:inline-block;'></AtAvatar>
         <View className='user-info'>
           <OpenData type='userNickName'  />
           <View className='user-rank'>级别: 游客</View>
         </View>
         <View className='center-header-option'>
           <View className='option'>
             <View>0.00</View>
             <View>我的钱包</View>
           </View>
           <View className='option'>
             <View>0</View>
             <View>访客次数</View>
           </View>
           <View className='option border-none'>
             <View>0</View>
             <View>我的团队</View>
           </View>
         </View>
       </View>
       <View className='center-card'>
         <AtList>
           <AtListItem
             title='我的钱包'
             arrow='right'
             thumb={iconImage}
             onClick={this.walletPage}
           />
           <AtListItem
             title='我要推广'
             arrow='right'
             onClick={this.promotePage}
             thumb={iconImage2}
           />
           <AtListItem
             title='我的客服'
             arrow='right'
             thumb={iconImage3}
           />
         </AtList>
         <Button open-type="contact" className='btn-contact' plain type='primary'>按钮</Button>
       </View>
      </View>
    )
  }
}

export default Center

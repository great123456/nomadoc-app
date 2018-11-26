import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, OpenData } from '@tarojs/components'

import './wallet.scss'
import { AtAvatar,AtList, AtListItem } from 'taro-ui'
import iconImage from '../../images/tixian@2x.png'
import iconImage2 from '../../images/shouyi@2x.png'
import iconImage3 from '../../images/tixianjilu@2x.png'

class Wallet extends Component {

  config = {
    navigationBarBackgroundColor: '#2d2d2d',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: '我的钱包'
  }
  state = {
    userInfo: {
      nickName: ''
    }
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  earningsPage(){
    Taro.navigateTo({
      url: '/pages/earnings/index'
    })
  }
  earningsPage(){
    Taro.navigateTo({
      url: '/pages/record/index'
    })
  }
  render () {
    const openData = {
       type: 'userAvatarUrl'
    }
    return (
      <View className='container'>
       <View className='center-header'>
         <View className='user-account'>
           0.00
         </View>
         <View className='center-header-option'>
           <View className='option'>
             <View>0.00</View>
             <View>总收益</View>
           </View>
           <View className='option border-none'>
             <View>0.00</View>
             <View>已提现金额</View>
           </View>
         </View>
       </View>
       <View className='center-card'>
         <AtList>
           <AtListItem
             title='提现'
             arrow='right'
             thumb={iconImage}
           />
           <AtListItem
             title='收益明细'
             arrow='right'
             onClick={this.earningsPage}
             thumb={iconImage2}
           />
           <AtListItem
             title='提现记录'
             arrow='right'
             onClick={this.earningsPage}
             thumb={iconImage3}
           />
         </AtList>
       </View>
      </View>
    )
  }
}

export default Wallet

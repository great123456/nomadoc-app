import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem } from '@tarojs/components'

import './index.scss'
import shareConfig from  '../../config/wx-share'
import tabImage from '../../images/IP@2x.png'
import tabImage2 from '../../images/tuandui@2x.png'
import tabImage3 from '../../images/maihuozhuanhua@2x.png'
import tabImage4 from '../../images/tuiguang@2x.png'
import courseImage from '../../images/neirongtu1@2x.png'

class Index extends Component {

  config = {
    navigationBarTitleText: '课程'
  }
  onShareAppMessage(){
    return shareConfig()
  }
  constructor (props) {
    super(props)
    this.state = 
    {
      banner: ['../../images/banner@2x.png','../../images/banner@2x.png'],
      courseList: [{
        id: 1,
        img: courseImage,
        title: '每日一淘如何布局排列收益才能最大化',
        name: '一淘总经理',
        type: '推广吸粉',
        number: '713',
        price: '19.9'
      },{
        id: 2,
        img: courseImage,
        title: '每日一淘如何布局排列收益才能最大化',
        name: '一淘总经理',
        type: '推广吸粉',
        number: '712',
        price: '19.9'
      },{
        id: 3,
        img: courseImage,
        title: '每日一淘如何布局排列收益才能最大化',
        name: '一淘总经理',
        type: '推广吸粉',
        number: '712',
        price: '19.9'
      }]
    }
  }
  componentWillUnmount () { }

  componentDidShow () { 
    
  }

  componentDidHide () { }

  courseDetailPage(){
    Taro.navigateTo({
      url: '/pages/course-detail/index'
    })
  }
  render () {
    const { banner, courseList } = this.state
    const SwiperItem = banner.map((item) =>{
      return(
        <SwiperItem key={item}>
            <Image
              style='width: 100%;'
              className='swiper-image'
              src={item}
            />
        </SwiperItem>
      )
    })
    
    const listItem = courseList.map((content)=>{
      return(
        <View className="course-item" key={content.id} onClick={this.courseDetailPage}>
          <Image
            className='course-image'
            mode="widthFix"
            src={content.img}
          />
          <View className='course-right'>
            <View><Text className='course-title'>每日一淘如何布局排列收益才能最大化</Text></View>
            <View style='margin-top:10px;'><Text className='course-name'>{content.name}</Text></View>
            <View style='margin-top:5px;'>
              <Text className='course-type'>推广吸粉</Text>
              <Text className='course-number'>{content.number}已学习</Text>
              <Text className='course-price'>￥{content.price}元</Text>
            </View>
          </View>
        </View>
      )
    })
    return (
      <View className="container">
        <Swiper
        className='swiper-banner'
        indicatorColor='#999'
        indicatorActiveColor='#222222'
        circular
        indicatorDots
        autoplay>
          {SwiperItem}
        </Swiper>
        <View className="tab-flex">
          <View className="tab-flex-item">
            <Image
              className='tab-image'
              src={tabImage}
            />
            <View>IP打造</View>
          </View>
          <View className="tab-flex-item">
            <Image
              className='tab-image'
              src={tabImage2}
            />
            <View>团队打造</View>
          </View>
          <View className="tab-flex-item">
            <Image
              className='tab-image'
              src={tabImage3}
            />
            <View>卖货转化</View>
          </View>
          <View className="tab-flex-item">
            <Image
              className='tab-image'
              src={tabImage4}
            />
            <View>推广吸粉</View>
          </View>
        </View>
        <View className="course-list">
          {listItem}
        </View>
        <View className='not-data'>已经加载完毕</View>
      </View>
    )
  }
}

export default Index

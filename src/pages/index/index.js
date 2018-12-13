import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
import './index.scss'
import shareConfig from  '../../config/wx-share'
import tabImage from '../../images/IP@2x.png'
import tabImage2 from '../../images/tuandui@2x.png'
import tabImage3 from '../../images/maihuozhuanhua@2x.png'
import tabImage4 from '../../images/tuiguang@2x.png'
// import courseImage from '../../images/neirongtu1@2x.png'
import { weixinlogin, apiGetUserInfo, apiIndexList } from '../../service/index'

class Index extends Component {

  config = {
    navigationBarTitleText: '课程'
  }
  onShareAppMessage(){
    return shareConfig()
  }
  onReachBottom() {
    const { courseList, currentPage, totalRows } = this.state
    if (courseList.length >= totalRows){
      return
    }
    this.setState({
      currentPage: currentPage + 1
    })
    this.getindexList()
  }

  constructor (props) {
    super(props)
    this.state = 
    {
      banner: [],
      courseList: [],
      currentPage: 1,
      pageSize: 10,
      totalRows: 1,
      Overlay: false,
      isOpen: false
    }
  }
  componentWillUnmount () { }

  componentDidShow () { 
    this.getindexList()
    const login = Taro.getStorageSync('login')
    if (!login) {
      this.setState({
        isOpen: true
      })
    }
  }
  
  getindexList() { // 获取首页列表数据
    Taro.showLoading({
      title: '数据加载中...'
    })
    const { currentPage, pageSize, courseList} = this.state
    apiIndexList({
      page: currentPage,
      limit: pageSize
    })
    .then((res) => {
      Taro.hideLoading()
      if (res.code == 200) {
        let list = JSON.parse(JSON.stringify(courseList))
        if (!res.data.courselist.list.length){
          return
        }
        if (currentPage > 1){
          list = list.concat(res.data.courselist.list)
        }else {
          list = res.data.courselist.list
        }
        this.setState({
          banner: res.data.banner,
          courseList: list,
          totalRows: res.data.totalRows
        })
      }else {
        Taro.showToast({
          title: res.msg,
          icon: 'none',
          duration: 2000
        })
      }
    })
  }

  getUserInfo(e) { // 用户登录
    const iv = e.detail.iv
    const encryptedData = e.detail.encryptedData
    this.setState({
      isOpen: false
    })
    Taro.login({
      success (res) {
        if (res.code) {
          const code = res.code
          weixinlogin({
            code: res.code
          })
          .then(res => {
            console.log('code', res.data)
            const session_key = res.data.session_key
            apiGetUserInfo({
              code: code,
              sessionKey: session_key,
              encryptedData: encryptedData,
              iv: iv
            })
            .then((response) => {
              if(response.code == 200) {
                Taro.setStorage({ key: 'login', data: true })
                Taro.setStorage({ key: 'userInfo', data: response.data.userinfo })
              }else {
                Taro.showToast({
                  title: response.msg,
                  icon: 'none',
                  duration: 2000
                })
              }
            })
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }

  componentDidHide () { }

  courseDetailPage(id){ // 课程详情
    Taro.navigateTo({
      url: '/pages/course-detail/index?id=' + id
    })
  }
  render () {
    const { banner, courseList, Overlay } = this.state
    const SwiperItem = banner.map((item) =>{
      return(
        <SwiperItem key={item}>
            <Image
              style='width: 100%;'
              className='swiper-image'
              src={item.url}
            />
        </SwiperItem>
      )
    })
    
    const listItem = courseList.map((content)=>{
      return(
        <View className="course-item" key={content.id} onClick={this.courseDetailPage.bind(this, content.id)}>
          <Image
            className='course-image'
            mode="widthFix"
            src={content.course_img}
          />
          <View className='course-right'>
            <View style='margin-top:10px;'><Text className='course-name'>{content.course_title}</Text></View>
            <View style='margin-top:5px;'>
              <Text className='course-type'>新人必看</Text>
              <Text className='course-number'>{content.view_numbers}人已学习</Text>
              <Text className='course-price'>￥{content.course_ticket_price}元</Text>
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
        <AtModal isOpened={this.state.isOpen} closeOnClickOverlay={Overlay}>
          <AtModalHeader>微信授权</AtModalHeader>
          <AtModalContent>
            获取你的公开信息(昵称,头像等)
          </AtModalContent>
          <AtModalAction><Button open-type="getUserInfo" lang="zh_CN" ongetuserinfo={this.getUserInfo}>确定</Button> </AtModalAction>
        </AtModal>
        <View className='not-data'>已经加载完毕</View>
      </View>
    )
  }
}

export default Index

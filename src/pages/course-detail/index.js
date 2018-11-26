import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Canvas } from '@tarojs/components'
import { AtActionSheet, AtActionSheetItem, AtButton } from "taro-ui"

import './detail.scss'
import shareConfig from  '../../config/wx-share'
import peopleImage from '../../images/xiaotouxiang1@2x.png'
import shareImage from '../../images/zhuanfa@2x.png'
import shareImage2 from '../../images/shengcheng@2x.png'
import posterImage from '../../images/poster.png'

class Detail extends Component {

  config = {
    navigationBarTitleText: '课程详情'
  }
  
  onShareAppMessage(){
    return shareConfig()
  }

  constructor(props){
    super(props)
    this.state = {
      showActionSheet: false,
      showCanvas: true
    }
  }

  componentWillUnmount () { }

  componentDidShow () { 
    this.setState({
      showCanvas: false
    })
  }

  componentDidHide () { }
  
  setShowActionSheet(){
    this.setState({
      showActionSheet: true
    })
  }
  // 生成海报
  drawCanvasBac(){
    Taro.showLoading({
      title: '卡片生成中',
      mask: true
    })
    this.setState({
      showCanvas: true
    })
    const ctx = Taro.createCanvasContext('canvas', this.$scope)
    ctx.drawImage(posterImage, 0, 0, 375, 600)
    ctx.draw()
    const self = this
    setTimeout(function(){
      self.saveImage()
    },200)
  }
  
  saveImage(){
    const self = this
    wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 375,
        height: 600,
        destWidth: 375*2,
        destHeight: 600*2,
        canvasId: 'canvas',
        success(res) {
          console.log(res.tempFilePath)
          self.setState({
            showCanvas: false
          })
          Taro.hideLoading()
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              wx.saveImageToPhotosAlbum({
                  filePath: res.tempFilePath,
                  success(res) {
                    wx.showToast({
                      title: '海报已保存至相册',
                      icon: 'success',
                      duration: 2000
                    })
                  },
                  fail(err){
                    wx.showToast({
                      title: err.errMsg,
                      icon: 'none',
                      duration: 2000
                    })
                  }
              })
            }
          })
        },
        fail(err){
          console.log('err',err)
          self.setState({
            showCanvas: false
          })
          Taro.hideLoading()
        }
    })
  }
  courseLearnPage(){
    Taro.navigateTo({
      url: '/pages/course-learn/index'
    })
  }
  render () {
    const canvasItem = null
    if (this.state.showCanvas){
      canvasItem = (
        <Canvas style='width: 375px; height: 600px;margin-top:100px;' canvasId='canvas' />
      )
    }
    return (
      <View className='container'>
        <Video
          className='video-container'
          src='https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f770000bfn82c7iv42dm6nko1jg&line=0'
          controls={true}
          autoplay={false}
          poster='https://xierdunapi.hxgtech.com/upload/img/20181117/20181117173118-5befdfe61ff69.png'
          initialTime='0'
          id='video'
          loop={false}
          muted={false}
        />
        <View className='detail-header'>
          <View>标题: 如何精准的表达发展VIP会员</View>
          <View>票价: 
            <Text className='course-price'>￥9.9元</Text>
            <View className='course-number'>
              <Image
                className='number-img'
                src='../../images/guankanrenshu@2x.png'
              />
              <Text>1639人</Text>
            </View>
          </View>
        </View>

        <View className='detail-option'>
          <View className='detail-item'>
            <View>讲师: 赵雅贞</View>
            <View>
              <Text className='check-more'>点击查看更多</Text>
              <Text className='play-btn'></Text>
            </View>
          </View>
          <View className='detail-item' style='margin-top:12px;'>
            <View>学习成员</View>
            <View>
              <Image
                className='people-img'
                src={peopleImage}
              />
              <Image
                className='people-img'
                src={peopleImage}
              />
              <Image
                className='people-img'
                src={peopleImage}
              />
            </View>
          </View>
        </View>

         <View className='detail-option'>
           <View className='course-title'>课程介绍</View>
           <View className='corse-introduce'>
             帮助大家更精准的表达出每日一淘的核心价值,更好的说服VIP会员
           </View>
         </View>

         <View className='detail-bottom'>
           <View style='margin-right:15px;'>付费观看课程</View>
           <View style='margin-left:15px;' onClick={this.setShowActionSheet}>分享赚5元</View>
         </View>

         <AtActionSheet isOpened={this.state.showActionSheet} cancelText='取消'>
           <AtActionSheetItem>
             <View className='action-share'>
               <View className='share-container'>
                 <Image
                   mode="widthFix"
                   src={shareImage}
                 />
                 <View>转发给好友</View>
                 <Button className='share-btn' openType='share' plain type='primary'></Button>
               </View>
               <View onClick={this.drawCanvasBac}>
                 <Image
                   mode="widthFix"
                   src={shareImage2}
                 />
                 <View>生成卡片</View>
               </View>
             </View>
           </AtActionSheetItem>
         </AtActionSheet>

         {canvasItem}
      </View>
    )
  }
}

export default Detail

// pages/movie-detail/movie-detail.js
const app = getApp()
import {convertToCastString} from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:{}
  },

  // 图片点击放大事件
  onViewPost(event){
    wx.previewImage({
      urls:[this.data.movie.images.large]
    })
  },
  // 处理电影数据
  processMoiveData(movie){
    const data = {}
    data.directors = convertToCastString(movie.directors)
    data.casts = convertToCastString(movie.casts)
    data.image = movie.images.large
    data.title = movie.title
    data.subtitle = movie.countries[0] + ' · ' + movie.year
    data.wishCount = movie.wish_count
    data.commentsCount = movie.comments_count
    data.rating = movie.rating.stars/10
    this.setData({
      movie:data
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const mid = options.mid
    wx.request({
      url: app.gBaseUrl + 'subject/' + mid,
      success:(res)=>{
        this.processMoiveData(res.data)
        // this.setData({
        //   movie:res.data
        // })
        console.log(this.data.movie)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
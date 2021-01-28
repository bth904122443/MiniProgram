// pages/movie-detail/movie-detail.js
import{convertToCastString,convertToCastAvatar} from "../../utils/utils.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    const mid = options.mid
    wx.request({
      url: 'http://t.talelin.com/v2/movie/subject/'+ mid,
      success:(res)=>{
        console.log(res)
        this.processMovieData(res.data)
        // this.setData({
        //   movieList:res.data
        // })
      }
    })
  },
  processMovieData(movieList){
    // console.log(movieList)
    const data = {}
    data.directors = convertToCastString(movieList.directors)
    data.casts = convertToCastString(movieList.casts)
    data.image = movieList.images.large
    data.title = movieList.title
    data.subtitle = movieList.countries + ' · ' + movieList.year
    data.wishCount = movieList.wish_count
    data.reviewsCount = movieList.reviews_count
    data.rate = movieList.rating.stars/10
    data.genres = movieList.genres.join('、')
    data.summary = movieList.summary
    data.castAvatar = convertToCastAvatar(movieList.casts)
    console.log(data.castAvatar)
    this.setData({
      movieList:data
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
// pages/movies/movies.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters:[],
    comingSoon:[],
    top250:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onGotoMore(event){
    // console.log(event)
    const type = event.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/more-movie/more-movie?type=' + type,
    })
  },
  onConfirm(event){
    // console.log(event)
    wx.request({
      url: app.gBaseUrl + 'search',
      data:{
        q:event.detail.value
      },
      success:(res)=>{
        
      }
    })
  },

  onLoad: function (options) {
    const that = this
    wx.request({
      url: app.gBaseUrl + 'in_theaters?count=3&start=0',
      // data:{
      //   start:0,
      //   count:3
      // },
      success(res){
        // console.log(res.data)
        that.setData({
          inTheaters:res.data.subjects
        })
      }
    }),
    wx.request({
      url: app.gBaseUrl + 'coming_soon?count=3&start=0',
      success(res){
        // console.log(res.data)
        that.setData({
          comingSoon:res.data.subjects
        })
      }
    }),
    wx.request({
      url: app.gBaseUrl + 'top250?count=3&start=0',
      success(res){
        // console.log(res.data)
        that.setData({
          top250:res.data.subjects
        })
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
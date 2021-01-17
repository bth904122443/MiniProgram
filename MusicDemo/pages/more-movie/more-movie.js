// pages/more-movies/more-movie.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    _type:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    const type = options.type
    this.data._type = type
    // console.log(type)
    const that = this
    wx.request({
      // url: app.gBaseUrl + 'coming_soon?count=20&start=0',
      url: app.gBaseUrl + type,
      data:{
        start:0,
        count:12
      },
      success(res){
        // console.log(res.data)
        that.setData({
          movies:res.data.subjects
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let title = ''
    switch(this.data._type){
      case 'in_theaters':
        title = '正在热映'
        break;
      case 'coming_soon':
        title = '即将上映'
        break;
      case 'top250':
        title = '豆瓣Top250'
        break;
    }
    console.log(title)
    wx.setNavigationBarTitle({
      title:title
    })
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
    wx.request({
      url: app.gBaseUrl + this._type,
      data:{
        start:0,
        count:12
      },
      success(res){
        that.setData({
          movies:res.data.subjects
        })
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const that = this
    wx.showNavigationBarLoading()
    wx.request({
      url: app.gBaseUrl + this._type,
      data:{
        start:this.data.movies.length,
        count:12
      },
      success(res){
        that.setData({
          movies:that.data.movies.concat(res.data.subjects)
        })
        wx.hideNavigationBarLoading()
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
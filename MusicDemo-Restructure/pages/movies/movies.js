// pages/movies/movies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters:[],
    comingSoon:[],
    top250:[],
    isSearch:false,
    searchResult:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://t.talelin.com/v2/movie/in_theaters?start=0&count=3',
      success:(res)=>{
        // console.log(res.data.subjects)
        this.setData({
          inTheaters:res.data.subjects
        })
      }
    })
    wx.request({
      url: 'http://t.talelin.com/v2/movie/coming_soon?start=0&count=3',
      success:(res)=>{
        this.setData({
          comingSoon:res.data.subjects
        })
      },
      fail:(e)=>{
        console.log(e)
      }
    })
    wx.request({
      url: 'http://t.talelin.com/v2/movie/top250?start=0&count=3',
      success:(res)=>{
        this.setData({
          top250:res.data.subjects
        })
      }
    })
  },
  onTapSearch(event){
    // console.log(event)
    const result = event.detail.value
    wx.request({  //根据搜索结果请求接口
      url: 'http://t.talelin.com/v2/movie/search?' + result,
      success:(res)=>{
        // console.log(res.data.subjects)
        this.setData({
          searchResult:res.data.subjects
        })
      }
    })
    this.setData({
      isSearch:true
    })
  },
  onTapBack(event){
    this.setData({
      isSearch:false
    })
  },
  onTapToDetail(event){
    // console.log(event)
    const mid = event.detail
    wx.navigateTo({
      url: '/pages/movie-detail/movie-detail?mid=' + mid,
    })
  },
  onSearchToDetail(event){
    // console.log(event)
    const mid = event.detail.mid
    wx.navigateTo({
      url: '/pages/movie-detail/movie-detail?mid=' + mid,
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
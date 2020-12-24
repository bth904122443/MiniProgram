Page({

  /**
   * 页面的初始数据
   */
  data: {
    rate:8
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    var that = this;
    // 电影数据
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index',
      data:{
        key:"27aabc39c500f115697bb5009076c0a2",
      },
      success:function(res){
        var movies = res.data.result.data
        that.setData({
          movies:movies
        })
      }
    }),
    // 电视剧
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index',
      data:{
        key:"27aabc39c500f115697bb5009076c0a2",
      },
      success:function(res){
        var tvs = res.data.result.data
        that.setData({
          tvs:tvs
        })
      }
    }),
    // 综艺
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index',
      data:{
        key:"27aabc39c500f115697bb5009076c0a2",
      },
      success:function(res){
        var shows = res.data.result.data
        that.setData({
          shows:shows
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
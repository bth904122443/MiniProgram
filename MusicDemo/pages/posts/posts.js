// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var content = [{
      title:"2020LPL夏季赛观后感",
      content:"8月9好，LPL常规赛收官之战结束，在使馆赛后赛伦茨的比赛中关键对局中，SN战胜了FPX，为本赛季常规赛画上句号",
      dateTime:"24小时前",
      headImgSrc:"/images/article-1.jpg",
      avatar:"/images/avatar.jpg",
      date:"Nov 20 2020",
      reading:102,
      collection:92,
      postId:3,
    },
    {
      title:"2020LPL夏季赛观后感",
      content:"8月9好，LPL常规赛收官之战结束，在使馆赛后赛伦茨的比赛中关键对局中，SN战胜了FPX，为本赛季常规赛画上句号",
      dateTime:"24小时前",
      headImgSrc:"/images/article-1.jpg",
      avatar:"/images/avatar.jpg",
      date:"Nov 20 2020",
      reading:102,
      collection:92,
      postId:3,
    }];
    this.setData({
      posts:content
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
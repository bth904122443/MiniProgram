// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      articles:[
        {
          id:'1',
          title:'《钢铁是怎样炼成的》'
        },
        {
          id:'2',
          title:'《三国演义》'
        }
      ]
  },

  onArticleClick:function(event){
    console.log(event)
  },
  
  onViewClick:function(event){
    console.log('你好')
  },
  onOutterViewClick:function(event){
    console.log('outterView be clicked')
  },
  onInnerViewClick:function(event){
    console.log('innerView be clicked')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
import {PostList} from '../../data/data.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList:[],
    isCollected:false,
    pid:null,
    _postCollect:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.pid = options.pid
    const postCollect = wx.getStorageSync('postCollect')
    // 判断缓存是否存在
    if(postCollect){
      this.data._postCollect = postCollect
    }
    
    let collected = postCollect[this.data.pid]
    console.log(collected)
    if(collected === undefined){
      // 如果undefined 说明文章从来没有被收藏过
      collected = false
      console.log(collected)
    }

    this.setData({
      postList:PostList[options.pid],
      isCollected:postCollect[options.pid]
    })
  },
 // 点击收藏
  onTapSetCollect(){
    const _postCollect = this.data._postCollect  //_postCollect 是一个js对象 {1:true,2:false}
    const postsCollect = _postCollect
    console.log(typeof postsCollect)  //postsCollect打印结果是string
    // console.log(!this.data.isCollected)
    wx.setStorageSync('postCollect',postsCollect)
    this.setData({
      isCollected:!this.data.isCollected
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
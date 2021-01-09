// pages/post-detail/post-detail.js
import {postList} from "../../data/data.js"


Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 文章详情数据
    postData:{},
    // 文章收藏状态
    collected:false,
    // 非数据绑定数据
    _pid:null,
    _postsCollected:{}
  },
  // postData文章数据
  // postsCollected文章收藏状态
  // _postsCollected缓存中文章收藏状态
  // collected当前文章收藏状态
  //  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 取出当前文章数据
    const postData = postList[options.pid]
    // 取出当前文章id
    this.data._pid = options.pid
    // 读取缓存
    const postsCollected = wx.getStorageSync('posts_collected')
    // 赋值
    this.data._postsCollected = postsCollected
    // 当前文章收藏状态
    const collected = postsCollected[this.data._pid]
    this.setData({
      postData,
      collected
    })
  },

  onCollect(event){
    // 假设当前文章未收藏
    // 哪篇文章被收藏
    // 数据结构 多篇文章是否被收藏
    const postsCollected = this.data._postsCollected
    // 事件函数改变当前文章收藏状态
    postsCollected[this.data._pid] = !this.data.collected
    // 传递数据到data
    this.setData({
      collected:!this.data.collected
    })
    // 保存数据至缓存
    wx.setStorageSync('posts_collected',postsCollected)
    wx.showToast({
      title:this.data.collected?"收藏成功":"取消收藏",
      duration:3000
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
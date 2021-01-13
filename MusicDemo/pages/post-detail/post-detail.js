// pages/post-detail/post-detail.js
import {postList} from "../../data/data.js"
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 文章详情数据
    postData:{},
    // 文章收藏状态
    collected:false,
    // 播放状态
    isPlaying:false,
    // 非数据绑定数据
    _pid:null,
    _postsCollected:{},
    _mgr:null
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
    console.log(options)
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
      collected,
      isPlaying:this.currentMusicIsPlaying(),
    })
    const mgr = wx.getBackgroundAudioManager()
    this.data._mgr = mgr
    mgr.onPlay(this.onMusicStart)
    mgr.onPause(this.onMusicStop)
  },
  currentMusicIsPlaying(){
    if(app.gIsPlaying && app.gIsPlayingPostId === this.data._pid){
      return true
    }
    return false
  },

  onMusicStart(event){
    const mgr = this.data._mgr
    const music = postList[this.data._pid].music
    mgr.src = music.url
    mgr.title = music.title
    mgr.coverImgUrl = music.coverImg
    this.setData({
      isPlaying:true
    })
    app.gIsPlayingMusic = true
    app.gIsPlayPostId = this.data._pid
  },
  onMusicStop(){
    const mgr = this.data._mgr
    mgr.stop()
    this.setData({
      isPlaying:false
    })
    app.gIsPlayingMusic = false
    app.gIsPlayPostId = -1
  },

  async onCollect(event){
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
    // 收藏状态结果提示
    wx.showToast({
      title:this.data.collected?"收藏成功":"取消收藏",
      duration:1000
    })
  },

  onShare(event){
    wx.showActionSheet({
      itemList: ["分享到QQ","分享到微信","分享到朋友圈"],
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
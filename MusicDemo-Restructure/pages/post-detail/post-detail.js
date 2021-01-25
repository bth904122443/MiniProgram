import {PostList} from '../../data/data.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 页面数据
    postList:[],
    // 控制收藏状态
    isCollected:false,
    _pid:null,
    // 音乐是否播放
    isPlaying:false,
    _mgr:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data._pid = options.pid
    const mgr = wx.getBackgroundAudioManager()
    this.data._mgr = mgr
    mgr.onPlay(this.onMusicPlay)
    mgr.onPause(this.onMusicPause)
    // console.log(this.currentMusicIsPlay())
    this.setData({
      postList:PostList[options.pid],
      isPlaying:this.currentMusicIsPlay()
    })
  },
 // 点击收藏
  onTapSetCollect(){
    const postCollect = {}
    const isCollected = this.data.isCollected
    postCollect[this.data._pid] = isCollected
    wx.setStorageSync('postCollect', postCollect)  //缓存格式 pid:true或者pid:false
    this.setData({
      isCollected:!this.data.isCollected
    })
  },
  // 点击
  onMusicPlay(){
    const _mgr = this.data._mgr
    _mgr.src = PostList[0].music.url
    _mgr.title = PostList[0].music.title
    _mgr.coverImgUrl = PostList[0].music.coverImg
    // 计入全局播放状态
    app.globalData.isPlaying = !this.data.isPlaying
    app.globalData.postId = this.data._pid
    // console.log(app.globalData.isPlaying)
    // console.log(app.globalData.postId)
    this.setData({
      isPlaying:true
    })
  },
  onMusicPause(){
    const _mgr = this.data._mgr
    _mgr.pause()
    app.globalData.isPlaying = this.data.isPlaying
    app.globalData.postId = -1
    this.setData({
      isPlaying:false
    })
  },
  currentMusicIsPlay(){
    if(app.globalData.isPlaying && app.globalData.postId === this.data._pid){
      return true
    }
    else{
      return false
    }
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
// pages/index/index.js
import request from "../../utils/request.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName:"",
    avatarUrl:"",
    bannerList:[], //轮播图数据
    recommendList:[] //推荐歌单数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let result = await request("/banner",{type:2});
    let recommendList = await request("/personalized",{limit:6});
    console.log("结果数据：",result);
    console.log("推荐歌单数据：",recommendList);
    this.setData({
      bannerList:result.banners,
      recommendList:recommendList.result
    })
  },
  handleGetUserInfo(res){
    console.log(res);
    this.setData({
      nickName : res.detail.userInfo.nickName,
      avatarUrl : res.detail.userInfo.avatarUrl
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
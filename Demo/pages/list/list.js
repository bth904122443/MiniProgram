// pages/list/list.js
import {network} from "../../utils/network"
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
    var that = this
    var type = options.type;
    var title = "";
    // 页面loading
    wx.showLoading({
      title: '正在加载中...',
    })
    if(type === "movie"){
      //请求电影数据
      network.getMovieList({
        success:function(items){
          that.setData({
            items:items
          })
          wx.hideLoading()
        },
        count:100
      })
    }else if(type === "tv"){
      //请求电视剧数据
      network.getTvList({
        success:function(items){
          that.setData({
            items:items
          })
          wx.hideLoading()
        },
        count:100
      })
    }else if(type === "show"){
      //请求综艺数据
      network.getShowList({
        success:function(items){
          that.setData({
            items:items
          })
          wx.hideLoading()
        },
        count:100
      })
    }
    // network.getMovieList({
    //   success:function(movies){
    //     that.setData({
    //       movies:movies
    //     })
    //   }
    // })
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
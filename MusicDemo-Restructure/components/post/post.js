// components/post/post.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    res:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  // 组件的方法列表，组件的调用方式应该由调用组件的人决定

  methods: {
    onTap(event){
      // console.log(event)
      const pid = event.currentTarget.dataset.postId
      // wx.navigateTo({
      //   url: '/pages/post-detail/post-detail?pid=' + pid,
      // })
      this.triggerEvent('lintap',{
        pid
      })
    },
  }
})

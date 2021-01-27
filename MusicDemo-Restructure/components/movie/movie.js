// components/movie/movie.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movieList:Object,
    img:String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // onTap(event){
    //   const pid = this.properties.res.pid
    //   this.triggerEvent('movietap',{
    //     pid
    //   })
    // }
    onTap(event){
      // console.log(event.currentTarget.dataset.movieId)
      const mid = event.currentTarget.dataset.movieId
      // console.log(mid)
      // wx.navigateTo({
      //   url: '/pages/post-detail/post-detail?pid=' + pid,
      // })
      this.triggerEvent('lintap',{
        mid
      })
    },
    errorFunction(event){
      // console.log(event)
      this.setData({
        img:'/images/banner/banner1.jpg'
      })
      }
    }
})

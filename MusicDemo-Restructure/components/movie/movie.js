// components/movie/movie.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    onTap(event){
      const pid = this.properties.res.pid
      this.triggerEvent('movietap',{
        pid
      })
    }
  }
})

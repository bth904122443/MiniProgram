// components/movie-list/movie-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movieLists:Array
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
      // console.log(event.target.dataset.movieId)
      const mid = event.target.dataset.movieId
      this.triggerEvent("lintap",mid)
    }
  }
})

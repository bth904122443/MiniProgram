// components/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate:{
      type:Number,
      value:''
    }
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

  },

  lifetimes:{
    attached:function(){
      var that = this
      var rate = that.properties.rate
      var inRate = parseInt(rate)
      var light = parseInt(inRate/2)
      var half = inRate%2
      var gray = 5 - light - half
    }
  }
})

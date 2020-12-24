import {globalUrls} from "../../utils/urls.js"
const network = {
  getMovieList:function(params){
    wx.request({
      url: globalUrls.movieList,
      data:{
        key:"27aabc39c500f115697bb5009076c0a2",
      },
      success:function(res){
        var movies = res.data.result.data;
        console.log(movies)
        if(params && params.success){
          params.success(movies)
        }
      }
    })
  },
  getTVList:function(params){
    wx.request({
      url: globalUrls.tvList,
      data:{
        key:"27aabc39c500f115697bb5009076c0a2",
      },
      success:function(res){
        var tvs = res.data.result.data;
        if(params && params.success){
          params.success(tvs)
        }
      }
    })
  },
  getShowList:function(params){
    wx.request({
      url: globalUrls.showList.data,
      data:{
        key:"27aabc39c500f115697bb5009076c0a2",
      },
      success:function(res){
        var shows = res.data.result;
        if(params && params.success){
          params.success(shows)
        }
      }
    })
  }
}

export{network}
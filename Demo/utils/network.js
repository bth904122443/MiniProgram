import {globalUrls} from "urls.js"
const network = {
  getMovieList:function(params){
    params.type = "movie";
    this.getItemList(params);
  },
  getTVList:function(params){
    params.type = "tv";
    this.getItemList(params);
  },
  getShowList:function(params){
    params.type = "show";
    this.getItemList(params);
  },
  getItemList:function(params){
    var url = "";
    if(params.type === "movie"){
      url = globalUrls.movieList;
    }else if(params.type === "tv"){
      url = globalUrls.tvList;
    }else if(params === "show"){
      url = globalUrls.showList;
    }
    var count = params.count?params.count:7;
    wx.request({
      url: url,
      data:{
        key:"27aabc39c500f115697bb5009076c0a2",
        count:count,
      },
      success:function(res){
        var items = res.data.result.data;
        if(params && params.success){
          params.success(items)
        }
      }
    })
  }
}

export{network}
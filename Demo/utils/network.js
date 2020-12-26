import {globalUrls} from "urls.js"

const network = {
  getItemList:function(params){
    var url = "";
    if(params.type === "movie"){
      url = globalUrls.movieList;
    }else if(params.type === "tv"){
      url = globalUrls.tvList;
    }else if(params.type === "show"){
      url = globalUrls.showList;
    }
    var count = params.count?params.count:7;
    wx.request({
      url:url,
      data:{
        key:"27aabc39c500f115697bb5009076c0a2",
        count:count,
      },
      success:function(res){
        var items = res.data.result.data;
        var itemsCount = items.length;
        var left = itemsCount%3;
        if(left === 2){
          items.push(null);
        }
        if(params && params.success){
          params.success(items);
        }
      }
    })
  },
  getMovieList:function(params){
    params.type = "movie";
    this.getItemList(params);
  },
  getTvList:function(params){
    params.type = "tv";
    this.getItemList(params);
  },
  getShowList:function(params){
    params.type = "show";
    this.getItemList(params);
  }
}

export{network}
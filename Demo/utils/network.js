import {globalUrls} from "urls.js"

const network = {
  getItemList:function(params){
    var url = "";
    if(params.type === "top"){
      url = globalUrls.movieList;
    }else if(params.type === "shehui"){
      url = globalUrls.tvList;
    }else if(params.type === "guonei"){
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
    params.type = "top";
    this.getItemList(params);
  },
  getTvList:function(params){
    params.type = "shehui";
    this.getItemList(params);
  },
  getShowList:function(params){
    params.type = "guonei";
    this.getItemList(params);
  },
  
  getItemDetail:function(params){
    var type = params.type;
    var id = params.id;
    var url = '';
    if(type === 'top'){
      url:globalUrls.movieDetail + id;
    }else if(type === 'shehui'){
      url:globalUrls.tvDetail + id;
    }else if(type === 'guonei'){
      url:globalUrls.showDetail + id;
    }
    wx.request({
      url: url,
      success:function(res){
        var item = res.data
        if(params.success){
          params.success(item);
        }
      }
    })
  },
  getSearch:function(params){
    var q = params.q
    var url = globalUrls.searchUrl(q)
    wx.request({
      url: url,
      success:function(res){
        var subjects = res.data.subjucts;
        if(params.success){
          params.success(subjucts);
        }
      }
    })
  }

}

export{network}
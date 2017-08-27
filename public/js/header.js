//$(()=>{
    //企业简介

    //企业文化
    $("#navbar-main li.about").on("click","a.culture",function(e){
        $("div #aboutus-culture").css("display","block")
            .siblings().css("display","none");
        e.preventDefault();
    })
    //发展历程
    $("#navbar-main li.about").on("click","a.progress",function(e){
        $("div #aboutus-progress").css("display","block")
            .siblings().css("display","none");
        e.preventDefault();

    })
     //管理团队
    $("#navbar-main li.about").on("click","a.team",function(e){
        $("div #aboutus-team").css("display","block")
            .siblings().css("display","none");
        e.preventDefault();

    })
//})
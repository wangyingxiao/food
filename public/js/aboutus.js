$("#aboutus-team img").mouseover((e)=>{
    var tar=$(e.target);
    //alert(tar);
    tar.toggleClass("animated pulse");
})

//点击进行切换
//企业简介
$("#aboutus-nav [href='#aboutus-intro']").click(function(e){
    e.preventDefault();
    $tar=$(e.target);
    $tar.css("color","#000");
    $("#aboutus-nav ul").find("a").not($tar).css("color","#aaa");
    $("div #aboutus-intro").css("display","block")
        .siblings().css("display","none");

})
//企业文化
$("#aboutus-nav [href='#aboutus-culture']").click(function(e){
    e.preventDefault();
    $tar=$(e.target);
    $tar.css("color","#000");
    $("#aboutus-nav ul").find("a").not($tar).css("color","#aaa");
    $("div #aboutus-culture").css("display","block")
        .siblings().css("display","none");

})
//发展历程

$("#aboutus-nav [href='#aboutus-progress']").click(function(e){
    e.preventDefault();
    $tar=$(e.target);
    $tar.css("color","#000");
    $("#aboutus-nav ul").find("a").not($tar).css("color","#aaa");

    $("div #aboutus-progress").css("display","block")
        .siblings().css("display","none");

})
//管理团队
$("#aboutus-nav [href='#aboutus-team']").click(function(e){
    e.preventDefault();
    $tar=$(e.target);
    $tar.css("color","#000");
    $("#aboutus-nav ul").find("a").not($tar).css("color","#aaa");
    $("div #aboutus-team").css("display","block")
        .siblings().css("display","none");

})
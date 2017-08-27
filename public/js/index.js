//动态的加载头部
$("#nav .container").load("header.html");
$("#foot").load("footer.html");

//首页
//滚动条监听事件
//为导航条添加动画
window.onscroll=function() {
    var t = $(document).scrollTop();
    if (t = 10) {
        $("#nav").addClass("animated fadeInDown");
    }
}

/**********导航条**********/
    $(()=>{
var $a=$("#nav ul.navbar-right>li>a");
$a.mouseover(e=>{
    e.preventDefault();
   var $tar=$(e.target);//当前元素为a
    $tar.parent().addClass("current");
   $tar.parents().siblings().removeClass("current");
});
    })

//轮播图
//任务函数
function task(){
    var $img=$("#banner img.z-index");
    $img.removeClass("z-index");
    $img.next().addClass("z-index");
    if($img.next().length==0){
        $img.removeClass("z-index");
        $("#banner img:first-child").addClass("z-index");
    }
}
var timer=setInterval(task,3000);




//我们的团队
function taskPerson(){
    $("#teams .person").eq(1).removeClass("big");
    var $div=$("#teams .container ");
   var $first=$("#teams .person").first();
    $first.removeClass("big");
    $first.remove();
    var $last=$("#teams .person").last();
    $last.removeClass("big");
    $div.append($first);
    var $two=$("#teams .person").eq(1);
    $two.addClass("big");
}
//task1();

var timer=setInterval(taskPerson,3000);

//获取屏幕的宽度
var width=$(window).width();
if(width<767){
    clearInterval(timer);
    timer=null;
}

//从后台获取数据
//料理菜单
$.ajax({
    type:"GET",
    url:"/menuAll",
    success:function(data){
       var html='';
        for(var obj of data){
            html+=`
                <div class="col-md-3 col-sm-4 col-xs-6">
                <a href="detailsMenu.html">
                    <img src="images/${obj.pic}" class="img-responsive" alt="${obj.mid}"/>
                    <p class="mask text-center">${obj.mname}</p>
            </a>
            </div>
        `
        }
        html+='<div class="col-md-3 col-sm-4 col-xs-6"> ' +
        '<a href="menu.html"> <p class="mask text-center more">更多+</p> </a> </div>';
        $("#index-menu .menu-details .row").html(html);
    }
})

//代理品牌
$.ajax({
    type:"GET",
    url:"/brand",
    success:function(data){
        var html='';
        for(var obj of data){
            html+=`
             <div class="col-md-3 col-sm-6">
            <a href="#">
                <img src="images/${obj.bpic}" class="img-responsive" alt=""/>

                <h3>${obj.bname}</h3>
                <b></b>
                <p>
                    ${obj.bintro}
                </p>
            </a>
        </div>

            `
        }
        $("#agency-brand .row").html(html);
    },
    error:function(){}
})
//加盟合作
$.ajax({
    type:"GET",
    url:"/teamwork",
    success:function(data){
        var html='';
        for(var obj of data){
            html+=`
             <div class="content-details">
        <h4>${obj.time.slice(0,10)}</h4>
        <a href="teamwork.html"><h3>${obj.title}</h3></a>
        <p>${obj.content}</p>
    </div>

            `
        }
        $("#together .content").html(html);
    },
    error:function(){}
})


//获取数据存入sessionStorage 料理菜单

$("#index-menu .row").on("click","img",function(e){

    var mid=($(this).attr("alt"));
    sessionStorage.setItem("mid",mid);
})
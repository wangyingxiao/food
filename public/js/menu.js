
$("#menu-search").focus(function(){
    $("input#menu-search").css("border","1px solid #000");
})
$("#menu-search").focusout(function(){
    $("input#menu-search").css("border","1px solid #E4EAEC");
})


//异步加载菜单料理
//全部
$("#menu-main a.all").click(function(e){
    e.preventDefault();
    $tar=$(e.target);
    $tar.css("color","#000")
        .siblings().css("color","#aaa");
    $.ajax({
        type:"GET",
        url:"/menuAll",
        success:function(data){
            var html='';
            for(var obj of data){
                html+=`
                 <div class="col-md-3 col-sm-4 col-xs-6 menu-list">
            <a href="detailsMenu.html">
                <img src="images/${obj.pic}" class="img-responsive" alt="${obj.mid}}"/>
                <p class="text-center">${obj.mname}</p>
                <div class="mask">
                    <div class="add text-center">+</div>
                </div>
            </a>
        </div>

                `
            }
            $("#menu-details .row").html(html);
        },
        error:function(){}
    })
})
//中式
$("#menu-main a.z1").click(function(e){
    e.preventDefault();
    $tar=$(e.target);
    $tar.css("color","#000");
   $tar.siblings().css("color","#aaa");
    $.ajax({
        type:"GET",
        url:"/menu1",
        success:function(data){
            var html='';
            for(var obj of data){
                html+=`
                 <div class="col-md-3 col-sm-4 col-xs-6 menu-list">
            <a href="detailsMenu.html">
                <img src="images/${obj.pic}" class="img-responsive" alt="${obj.mid}"/>
                <p class="text-center">${obj.mname}</p>
                <div class="mask">
                    <div class="add text-center">+</div>
                </div>
            </a>
        </div>

                `
            }
            $("#menu-details .row").html(html);
        },
        error:function(){}
    })
})
//西式
$("#menu-main a.x2").click(function(e){
    e.preventDefault();
    $tar=$(e.target);
    $tar.css("color","#000");
    $tar.siblings().css("color","#aaa");
    $.ajax({
        type:"GET",
        url:"/menu2",
        success:function(data){
            var html='';
            for(var obj of data){
                html+=`
                 <div class="col-md-3 col-sm-4 col-xs-6 menu-list">
            <a href="detailsMenu.html">
                <img src="images/${obj.pic}" class="img-responsive" alt="${obj.mid}"/>
                <p class="text-center">${obj.mname}</p>
                <div class="mask">
                    <div class="add text-center">+</div>
                </div>
            </a>
        </div>

                `
            }
            $("#menu-details .row").html(html);
        },
        error:function(){}
    })
})
//日式菜品
$("#menu-main a.r3").click(function(e){
    e.preventDefault();
    $tar=$(e.target);
    $tar.css("color","#000");
    $tar.siblings().css("color","#aaa");
    $.ajax({
        type:"GET",
        url:"/menu3",
        success:function(data){
            var html='';
            for(var obj of data){
                html+=`
                 <div class="col-md-3 col-sm-4 col-xs-6 menu-list">
            <a href="detailsMenu.html">
                <img src="images/${obj.pic}" class="img-responsive" alt="${obj.mid}"/>
                <p class="text-center">${obj.mname}</p>
                <div class="mask">
                    <div class="add text-center">+</div>
                </div>
            </a>
        </div>

                `
            }
            $("#menu-details .row").html(html);
        },
        error:function(){}
    })
})

$("#menu-details .menu-list").on("click","img",function(e){
    //e.preventDefault();
    var mid=($(this).attr("alt"));
    sessionStorage.setItem("mid",mid);

})
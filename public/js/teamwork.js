$.ajax({
    type:"GET",
    url:"/teamwork",
    success:function(data){
        var html='';
        for(var obj of data){
            html+=`
                 <div class="content row">
                    <!-- 1.左 图-->
                    <div class="col-sm-3 col-xs-5">
                        <img src="images/${obj.tpic}" class="img-responsive" alt=""/>
                    </div>
                    <!-- 2.右 文字-->
                    <div class="col-sm-9 col-xs-7">
                        <h2><a href="#">${obj.title}</a></h2>
                        <p>${obj.content}</p>
                        <b class="time">${obj.time.slice(0,10)}  admin</b>
                    </div>
                </div>
            `
        }
        $("#teamwork-main .row .left").html(html);
        //右侧
       var html='';
        for(var obj of data){
            html+=`
            <li>
                <a href="#">${obj.title}</a>
             </li>
            `
        }
        $("#teamwork-main .row .right ul").html(html);
    },
    error:function(){
        alert("网络出现故障，请检查！");
    }
})


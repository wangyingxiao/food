



var mid=sessionStorage.getItem("mid");

$.ajax({
    type:"GET",
    url:"/detailsmenu",
    data:{mid:mid},
    success:function(data){
        for(var obj of data){
          var  html='';
       html+=`
            <div class="col-md-7">
                <img src="images/${obj.pic}" class="img-responsive" alt=""/>
            </div>
            <div class="col-md-5">
                <h2>${obj.mname}</h2>
                <p class="text">
                    壹点壹作为台湾入驻大陆企业，在践行发扬“人本主义”——客户是一切的出发点的基础上，以健康美食、
                    新鲜生活为导向，为消费者提供台湾各种潮流美食，秉承健康、平衡、时尚的台式饮食生活 理念，
                    向国人展示天然、安全、健康的品牌形象，让台湾饮食文化在大陆绽放，不断推广台湾美食文化，
                    以制造绿色食品，传播地道美味的宗旨，不断加强与祖国大陆餐饮行业交流合作。
                    除了地道的口味之外，质量和安全也是壹点壹自诞生以来始终不变
                </p>
                <ul class="list-unstyled list-inline">
                    <li>餐品名称 : ${obj.mname}</li>
                    <li>所属行业 : 特色西餐</li>
                    <li>创业方式 : 加盟</li>
                    <li>投资金额 : 10~15万</li>
                </ul>
            </div>

            `
        }
        $("#details-pic .row").html(html);

        var html='';
        for(var obj of data){
        html=`

                <h4>详细信息</h4>
                <p>
                    壹点壹作为台湾入驻大陆企业，在践行发扬“人本主义”——客户是一切的出发点的基础上，
                    以健康美食、新鲜生活为导向，为消费者提供台湾各种潮流美食，秉承健康、平衡、
                    时尚的台式饮食生活 理念，向国人展示天然、安全、健康的品牌形象，让台湾饮食文化在大陆绽放，
                    不断推广台湾美食文化，以制造绿色食品，传播地道美味的宗旨，不断加强与祖国大陆餐饮行业交流合作。
                    除了地道的口味之外，质量和安全也是壹点壹自诞生以来始终不变的追求，同时不断在大陆倡导台湾的生活
                    方式进而搭建两岸在饮食文化的沟通桥梁。
                </p>
                <img src="images/${obj.pic}" class="img-responsive" alt=""/>
        `
        }
        $("#detailIntro .row .left").html(html);
    },
    error:function(){
        alert("网络故障，请检查");
    }
})
$.ajax({
    type:"GET",
    url:"/menuAll",
    success:function(data){
        html='';
        for(var obj of data){
            html+=`
            <li>
                <a href="menu.html"><img src="images/${obj.pic}" class="img-responsive" alt="${obj.mid}"/></a>
                <p class="text-center">${obj.mname}</p>
            </li>

            `
        }
        $("#detailIntro .row .right ul").html(html);
    },
    error:function(){}


})



$("#detailIntro .row .right ul").on("click","img",function(e){
    e.preventDefault();
    var mid=($(this).attr("alt"));
    $.ajax({
        type:"GET",
        url:"/detailsmenu",
        data:{mid:mid},
        success:function(data){
            for(var obj of data){
                var  html='';
                html+=`
            <div class="col-md-7">
                <img src="images/${obj.pic}" class="img-responsive" alt=""/>
            </div>
            <div class="col-md-5">
                <h2>${obj.mname}</h2>
                <p class="text">
                    壹点壹作为台湾入驻大陆企业，在践行发扬“人本主义”——客户是一切的出发点的基础上，以健康美食、
                    新鲜生活为导向，为消费者提供台湾各种潮流美食，秉承健康、平衡、时尚的台式饮食生活 理念，
                    向国人展示天然、安全、健康的品牌形象，让台湾饮食文化在大陆绽放，不断推广台湾美食文化，
                    以制造绿色食品，传播地道美味的宗旨，不断加强与祖国大陆餐饮行业交流合作。
                    除了地道的口味之外，质量和安全也是壹点壹自诞生以来始终不变
                </p>
                <ul class="list-unstyled list-inline">
                    <li>餐品名称 : ${obj.mname}</li>
                    <li>所属行业 : 特色西餐</li>
                    <li>创业方式 : 加盟</li>
                    <li>投资金额 : 10~15万</li>
                </ul>
            </div>

            `
            }
            $("#details-pic .row").html(html);

            var html='';
            for(var obj of data){
                html=`

                <h4>详细信息</h4>
                <p>
                    壹点壹作为台湾入驻大陆企业，在践行发扬“人本主义”——客户是一切的出发点的基础上，
                    以健康美食、新鲜生活为导向，为消费者提供台湾各种潮流美食，秉承健康、平衡、
                    时尚的台式饮食生活 理念，向国人展示天然、安全、健康的品牌形象，让台湾饮食文化在大陆绽放，
                    不断推广台湾美食文化，以制造绿色食品，传播地道美味的宗旨，不断加强与祖国大陆餐饮行业交流合作。
                    除了地道的口味之外，质量和安全也是壹点壹自诞生以来始终不变的追求，同时不断在大陆倡导台湾的生活
                    方式进而搭建两岸在饮食文化的沟通桥梁。
                </p>
                <img src="images/${obj.pic}" class="img-responsive" alt=""/>
        `
            }
            $("#detailIntro .row .left").html(html);
        },
        error:function(){
            alert("网络故障，请检查");
        }
    })
})
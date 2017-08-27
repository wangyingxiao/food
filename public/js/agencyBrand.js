$.ajax({
    type:"GET",
    url:"/brandAll",
    success:function(data){
        html='';
        for(var obj of data){
            html+=`
             <div class="col-md-3 col-sm-4 col-xs-6 menu-list">
                <a>
                    <img src="images/${obj.bpic}" class="img-responsive" alt=""/>
                    <p class="text-center">${obj.bname}</p>

                </a>
            </div>
            `
        }
        $("#menu-details .row").html(html);
    },
    error:function(){}
})

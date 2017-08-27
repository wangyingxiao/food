//项目主程序
//1:加载相关模块 http express mysql qs
const http = require("http");
const express = require("express");
const mysql = require("mysql");
const qs = require("querystring");
//2:创建连接池  25
var pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"food",
    port:3306,
    connectionLimit:25
});
//3:创建express对象
var app = express();
//4:创建服务器对象
var server = http.createServer(app);
//5:绑定监听端口
server.listen(8082);
//6:处理所有静态文件
//express提供非常实用功能:静态文件中间件(函数)
//你指需要指定(目录)  public
//该目录下所有静态资源请求，读取，发送，帮助我们自动完成
//示例:首页   http://127.0.0.1:8081/index.html
app.use(express.static("public"));
app.get("/menu",(req,res)=>{
    res.sendFile(__dirname+"/public/menu.html");
})
app.get("/index",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})
//7:模块一:菜单列表
app.get("/menuAll",(req,res)=>{
    //3:获取连接
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        //4:创建sql语句并且发送SQL语句
        var sql = "SELECT * FROM menu";
        conn.query(sql,(err,result)=>{
            if(err)throw err;
            //5:将查询结果转json发送
            res.json(result);
            //6:归还连接
            conn.release();
        });
    });
});
app.get("/menu1",(req,res)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql="SELECT * FROM menu WHERE mtype=1";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.json(result);
            conn.release();
        })
    })
})
app.get("/menu2",(req,res)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql="SELECT * FROM menu WHERE mtype=2";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.json(result);
            conn.release();
        })
    })
})
app.get("/menu3",(req,res)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql="SELECT * FROM menu WHERE mtype=3";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.json(result);
            conn.release();
        })
    })
})
//模块二：详细菜单
app.get("/detailsmenu",(req,res)=>{
   //获取参数
 var mid=req.query.mid;
    //获取连接
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql="SELECT * FROM menu WHERE mid=?";
        conn.query(sql,[mid],(err,result)=>{
            if(err) throw err;
            res.json(result);
            conn.release();//归还连接
        })
    })

})



//模块三：代理品牌
app.get("/brand",(req,res)=>{
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        var sql="SELECT * FROM brand WHERE bid<5";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.json(result);
            conn.release();
        })
    })
})
app.get("/brandAll",(req,res)=>{
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        var sql="SELECT * FROM brand";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.json(result);
            conn.release();
        })
    })
})

//模块四 加盟合作
app.get("/teamwork",(req,res)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql="SELECT * FROM teamwork";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.json(result);
            conn.release();
        })
    })
})




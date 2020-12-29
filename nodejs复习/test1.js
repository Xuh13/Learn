// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req,res){
//     res.writeHead(200,{"Content-type":"html"});
//     res.end("<h1>hello world!</h1>");
// }).listen(3000);
// console.log("Start serve 3000");

// var dns = require('dns');
// urls = ["http://www.qq.com","http://www.sohu.com","http://www.bilibili.com"];



// var http = require('http');
// http.createServer(function(req,res){
//     res.writeHead(200,{"Content-type":"text/html"});
//     res.end("<h1>Hello World!</h1>");
// }).listen(3000);
// console.log("Server start 3000");

//var fs = require('fs');
// fs.readFile("./1.txt","UTF-8",function(err,data){
//     if(err){
//         throw err;
//     }else{
//         console.log(data);
//     }
// });
// var data = fs.readFileSync("./1.txt","UTF-8");
// console.log(data);
// console.log("同步完成");

// fs.readFile("./1.txt","UTF-8",function(err,data){
//     if(err){
//         throw err;
//     }else{
//         FFXIV(data);
//     }
// })

// var FFXIV = function(data){
//     setTimeout(function(){
//         console.log(data);
//     },2000);
// }


// var dns = require('dns');
// var name = ["www.baidu.com","www.bilibili.com","www.npmjs.com"];


// dns.resolve4("www.bilibili.com",function(err,addresses){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(addresses);
//     }
// })    


// function Person(){
//     this.think=function(callback){
//         console.log("I am thinking");
//         setTimeout(function(){callback();},5000);
//     };
//     this.answer=function(){
//         console.log("I am answering the other question");
//     };
// }
// var a = new Person();
// a.think(function(){
//     console.log("I know the answer");
// })
// a.answer();


// function havelunch(food,drink,callback){
//     console.log("I ordered",food,"and",drink+".");
//     if(callback && typeof(callback)==="function"){
//         setTimeout(function(){
//             callback();
//         },5000);
//     }
// }
// havelunch("toast","coffee",function(){
//     console.log("I finished my lunch");
// })

// var http = require('http');
// var fs = require('fs');
// var url = require("url");
// http.createServer(function(req,res){
//     var newPath = url.parse(req.url).pathname;
//     if(newPath=="/"){
//         var indexUrl=__dirname+"/"+url.parse("static.html").pathname;
//         var indexPath=fs.readFileSync(indexUrl,"UTF-8");
//         res.writeHead(200,{"Content-type":"text/html"});
//         res.end(indexPath);
//     }else{

//     }

// }).listen(3000);
// console.log("Start serve 3000");


// var http = require('http');
// var fs = require('fs');
// var url = require("url");
// var path = require("path");
// var querystring = require("querystring");
// var dns = require("dns");
// http.createServer(function(req,res){
//     var newPath = url.parse(req.url).pathname;
//     // switch(newPath){
//     //     case '/':
//     //         postIndex(res);
//     //         break;
//     //     case '/jpg':
//     //         postJpg(res);
//     //         break;
//     //     default:
//     //         break;
//     // }
//     if(newPath=='/'){
//         postIndex(res);
//     }else if(newPath=="/search"){
//         var newPath=url.parse(req.url).query;
//         var getPath = querystring.parse(newPath);
//         dns.resolve4(getPath.url,function(err,addresses){
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(addresses);
//             }
//         })    
//     }

// }).listen(3000);

// function postIndex(res){
//     var indexUrl=__dirname+"/"+url.parse("static.html").pathname;
//     var indexPath=fs.readFileSync(indexUrl,"UTF-8");
//     res.writeHead(200,{"Content-type":"text/html"});
//     res.end(indexPath);
// }

// function getUrl(req){
//     var newPath=url.parse(req.url).query;
//     console.log(newPath);
//     var getPath = querystring.parse(newPath);
//     console.log(getPath);
// }

// console.log("Start serve 3000");



// var http = require("http");
// var url = require("url");
// var querystring = require("querystring");
// http.createServer(function(req,res){
//     var newPath=url.parse(req.url).query;
//     var getPath = querystring.parse(newPath);
//     console.log(getPath);
// }).listen(3000);

// console.log("serve start 3000");


var http = require('http');
var fs = require('fs');
var url = require("url");
var path = require("path");
var querystring = require("querystring");
var dns = require("dns");
http.createServer(function (req, res) {
    var newPath = url.parse(req.url).pathname;
    if (newPath == '/') {
        postIndex(res);
    } else if (newPath == "/post") {
        getUrl(res, req);
    }

}).listen(3000);

function postIndex(res) {
    var indexUrl = __dirname + "/" + url.parse("post.html").pathname;
    var indexPath = fs.readFileSync(indexUrl, "UTF-8");
    res.writeHead(200, {"Content-type": "text/html"});
    res.end(indexPath);
}

function getUrl(res, req) {
    var postData="";
    req.setEncoding("UTF8");

    req.addListener("data",function(postChunkData){
        postData+=postChunkData;
    })

    req.addListener("end",function(){
        var postDataTranslate = querystring.parse(postData);
        dns.resolve4(postDataTranslate.url,function(addresses){
            res.writeHead(200,{"Content-type":"text/html"});
            res.write(addresses,"utf8");
            res.end();
        })
    })
}

console.log("Start serve 3000");
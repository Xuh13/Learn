var http=require('http');
var url=require('url');
var fs=require('fs');
http.createServer((req, res)=>{
    var pathname=url.parse(req.url).pathname;
    var realPath=__dirname+'/static'+pathname;
    var pathname=__dirname+'/static/'+url.parse('index.html').pathname;
	var indexPage=fs.readFileSync(pathname,"utf-8");
	res.writeHead(200,{"Content-type":"text/html"});
	res.end(indexPage);
}).listen(3000)
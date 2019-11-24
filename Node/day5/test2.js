var http=require('http');
var url=require('url');
var fs=require('fs');
http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    var realPath=__dirname+'/static'+pathname;
    console.log(pathname);
    if(pathname=='/favicon.ico'){
        return;
    }else if(pathname=='/'||pathname=='/index'){
        goIndex(res);
    }else{
        dealWithStatic(pathname,realPath,res);
    }
}).listen(3000);

function goIndex(res){
    var pathname=__dirname+'/static/'+url.parse('index.html').pathname;
	var indexPage=fs.readFileSync(pathname,"utf-8");
	res.writeHead(200,{"Content-type":"text/html"});
	res.end(indexPage);
}

function dealWithStatic(pathname,realPath,res){
    fs.exists(realPath,function(exists){
        if(!exists){
            res.writeHead(404,{"Content-type":"text/plain"});
            res.writeHead("Not Found");
            res.end();
        }else{
            var pointPosition=pathname.lastIndexOf(".");
			var mmieString=pathname.substring(pointPosition+1);
			//console.log(mmieString);
            var mmieType;
            switch(mmieString){
                case 'css':
                    mmieType='text/css';
                    break;
                case 'jpg':
                    mmieType='image/jpeg';
                    break;
                default:
                    mmieType='text/plain';
                    break;
            }
            fs.readFile(realPath,'binary',function(err,file){
                if(err){
                    res.writeHead(500,{"Content-type":"text/plain"});
	                res.end(err);
                }else{
                    res.writeHead(404,{"Content-type":mmieType});
                    res.write(file,'binary');
                    res.end();
                }
            })
        }
    })
}
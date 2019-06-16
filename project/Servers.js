var http=require('http')

var server = http.createServer()
server.on('request',function (request, response) {
    console.log('shoudao'+request.url)
    if(request.url='index'){
        response.write('index')
    }else if(request.url='download'){
        response.write('download')
    }else if(request.url='login'){
        response.write('login')
    }
    response.end()


})

server.listen(3000,function () {
    console.log('666')
})
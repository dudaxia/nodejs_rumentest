
var http = require('http');

http.createServer(function (req,res) {
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("<h1>Node.js我们已经创建服务了ya</h1>");
	res.end("<p>PCAT</p>");
}).listen(3000);

console.log("Http server is listening at port 3000");
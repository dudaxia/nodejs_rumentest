
var fs = require('fs');

fs.readFile('fs_test.txt',"UTF-8",function(err,data){
// fs.readFile('111.doc',"UTF-8",function(err,data){
	if(err){
		console.log("err",err);
	}else{
		console.log("data",data);
	}
})

console.log("read file end ---------")

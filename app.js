const http = require('http');
const server = http.createServer((req,res)=>{
    console.log("hello sai");
})
server.listen(4000);
const http = require('http');
const server = http.createServer((req,res)=>{
    console.log("hello sai");
    const url = req.url;
    const method=req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>home</title></head>');
        res.write('<body><h1>welcome home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/about'){
        res.write('<html>');
        res.write('<head><title>about</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/node'){
        res.write('<html>');
        res.write('<head><title>about</title></head>');
        res.write('<body><h1>Welcome to node js project</h1></body>');
        res.write('</html>');
        return res.end();
    }
})
server.listen(4001);

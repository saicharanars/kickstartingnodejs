const http = require("http");
const fs = require('fs');
const server = http.createServer((req, res) => {
  console.log("hello sai");
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>home</title></head>");
    res.write(
      '<body><form action="/message" method = "POST"><div>${data}</div><input type="text" name="message" /><button type="submit" >Submit</button></Form</body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsebody = Buffer.concat(body).toString();
      console.log(parsebody);
      const message = parsebody.split("=")[1];
      console.log(message);
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      //res.setHeader('Location', '/');
      return res.end();
    });
    res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write("<head><title>about</title></head>");
    res.write("<body><h1>Welcome to About Us page</h1></body>");
    res.write("</html>");
    return res.end();
  }

  res.write("<html>");
  res.write("<head><title>about</title></head>");
  res.write("<body><h1>Welcome to node js project</h1></body>");
  res.write("</html>");
  return res.end();
});
server.listen(4000);

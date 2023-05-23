const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    // Read the contents of the "message.txt" file
    const data = fs.readFileSync("./message.txt", {
      encoding: "utf8",
      flag: "r",
    });

    // Generate the HTML response
    res.write("<html>");
    res.write("<head><title>home</title></head>");
    res.write("<body>");
    res.write(
      `<form action="/message" method="POST"><div>${data}</div><input type="text" name="message" /><button type="submit">Submit</button></form>`
    );
    res.write("</body>");
    res.write("</html>");

    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsebody = Buffer.concat(body).toString();
      const message = parsebody.split("=")[1];

      // Write the received message to the "message.txt" file
      fs.writeFileSync("message.txt", message);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  } 
});

server.listen(4000);

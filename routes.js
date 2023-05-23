// routes.js
const fs = require('fs');

function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    // Handle the root URL ("/")
    // Read the contents of the "message.txt" file
    const data = fs.readFileSync('./message.txt', { encoding: 'utf8', flag: 'r' });

    // Generate the HTML response
    res.write("<html>");
    res.write("<head><title>Home</title></head>");
    res.write("<body>");
    res.write(`<form action="/message" method="POST"><div>${data}</div><input type="text" name="message" /><button type="submit">Submit</button></form>`);
    res.write("</body>");
    res.write("</html>");

    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    // Handle the "/message" URL with the POST method
    // ...

    // Redirect the user to the root URL ("/")
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  return res.end();
}

module.exports = requestHandler;

var sys = require("sys");
    http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("hello world!");
    response.end();
}).listen(8888);

sys.puts("Server running at http://localhost:8888");

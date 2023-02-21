const http = require("http");

function website(req, res){
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("Efrain Cataño Pescador");
}

let server = http.createServer(website);


server.listen(8080, "127.0.0.1");

console.log("Server listening on 8080");

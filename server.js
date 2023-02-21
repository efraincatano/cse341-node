const http = require("http");

function website(req, res){
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("Efrain Cataño Pescador");
}

let server = http.createServer(website);


server.listen(8080, "https://efrain-w1-a1.onrender.com");

console.log("Server listening on 8080");

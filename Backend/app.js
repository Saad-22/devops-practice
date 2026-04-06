const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/api") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            message: "Backend is running 🚀",
            status: "success"
        }));
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});

import { config } from "dotenv";
import path from "path";

config({ path: path.join(__dirname, "../.env") });

import http from "http";

const PORT = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            message: "hello node js with typescript..",
            path: req.url,
        }));
    }
});

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}...`);
});
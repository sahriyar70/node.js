"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
(0, dotenv_1.config)({ path: path_1.default.join(__dirname, "../.env") });
const http_1 = __importDefault(require("http"));
const PORT = Number(process.env.PORT) || 3000;
const server = http_1.default.createServer((req, res) => {
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

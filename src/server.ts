import http, { IncomingMessage, Server, ServerResponse } from "http"
import path from "path"
const server: Server = http.createServer((req: IncomingMessage, res:ServerResponse)=>{
    console.log("server is runing...")
    if ( req.url== "/"&&req.method=="GET"){
        res.writeHead(200,{"content-type":"aplication/json"})
        res.end(JSON.stringify({
            massage:"hello node js with typescript..",
            path: req.url,
        }))
    }
}) 
server.listen(5000, ()=>{
    console.log(`server is runing ${5000}`)
})
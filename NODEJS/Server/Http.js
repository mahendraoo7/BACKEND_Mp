const http = require('http');
const port =8989;
const server = http.createServer((req, res) => {
     res.writeHead(200,{'Constant-Type' : 'Text/plain'})
     res.end('hello world');
     console.log('hello world');
})

server.listen(port ,() => {
    console.log(`server start at http://localhost:${port}`)
})
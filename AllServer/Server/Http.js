const http = require('http');
const port =8989;
const server = http.createServer((req, res) => {
     res.writeHead(200,{'Constant-Type' : 'Text/plain'})
     res.end('hello world');
})

server.listen(port ,(req, res) => {
    console.log(`Server Start at http://localhost:${port}`)
})

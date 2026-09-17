const http=require('http');
const PORT=3002;

const server=http.createServer((req,res)=>{
    console.log(`Request received: ${req.method} ${req.url}`);

    //set status code and headers
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.setHeader('X-Powered-By','Node.js');

    // send response body
    res.end('Hello Students! Welcome to Node.js Server');
});

server.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
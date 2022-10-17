import http from 'http';

http.createServer((req,res)=> {
    console.log(req.url);
    console.log(req.headers["user-agent"]);
    let body: any[] | Uint8Array[] = [];
    req.on('data', (chunk) =>{
        body.push(chunk);
    }).on('data', () => {
        let data = Buffer.concat(body).toString();
        console.log(data);
        res.statusCode = 200;
        res.end(data);        
    }) 
}).listen(3000, () => {
    console.log(` Server is running`)
})
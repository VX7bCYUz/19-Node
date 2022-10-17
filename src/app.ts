import http from 'http';

http.createServer((req,res)=> {
    req.on('data', () => {
        res.end('response123');
    })
}).listen(3000, () => {
    console.log(` Server is running`)
})
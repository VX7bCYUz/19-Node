import http from 'http';

http.createServer((req,res)=> {
    console.log(req.url);
    console.log(req.headers["user-agent"]);
    let url = req.url;
    if (url === '/about') {
        res.writeHead(200, {"Content-type": 'text/html'});
        res.write('<h1>about</h1>');
    } else if (url === '/contact') {
        res.writeHead(200, {"Content-type": 'text/json'});
        res.write(JSON.stringify({"name": "Kate", "phone": 123}));
    } else {
        res.writeHead(404);
        res.write("Not found!");
    }
    res.end();        
}).listen(3000, () => {
    console.log(` Server is running`)
})
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/'){ // '/' = home
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.end('<h1>Home</h1>');
    }
});

const PORT = process.env.PORT || 5001; //runs on whatever host decides, or 5000 if nothing is selected
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//Importing core modules
const http = require('http')
const fs = require('fs')
const url = require('url')


//Reading Synchronously the pages
const index = fs.readFileSync(`${__dirname}/pages/index.html`, 'utf-8');
const overview = fs.readFileSync(`${__dirname}/pages/overview.html`, 'utf-8');
const product = fs.readFileSync(`${__dirname}/pages/product.html`, 'utf-8');
const overviewCard = fs.readFileSync(`${__dirname}/pages/overview-card.html`, 'utf-8');

//Creating the sever
const server = http.createServer((req, res) => {
    res.end(overview)
})

//Listening to incoming request
server.listen(8101, '127.0.0.1', () => {
    console.log('Listening to req on port 8101')
})
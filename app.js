const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('short'));

app.get('/', (req, res) => {
    res.end('index');
})
app.post('/', (req, res) => {
    let body = '';
    req.on('data',(data) => {
        body += data;
    })
req.on('end', () => {
    console.log(body);
    console.log(typeof body);
    res.end('index');
})

    
})

app.listen(3000);
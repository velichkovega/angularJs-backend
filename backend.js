var express = require('express'); //фреймворк ноды
var cors = require('cors'); //кросдоменные запросы
var bodyParser = require('body-parser'); //пост запросы
var app = express(); //использование укспресса

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors()); // использование кроссдоменных запроссов

// массив, что будет отдваваться
var books = [
    {
        name: 'angular'
    },
    {
        name: 'react'
    },
    {
        name: 'nativeJs'
    },
    {
        name: 'jquery'
    }
];

app.post('/books', function(req, res) {
    books.push({
        name: req.body.name
    });
    res.send(200);
});

//отдать массив по запроссу /books
app.get('/books', function(req, res) {
    res.send(books);
});


var server = app.listen(3001, function() {
    console.log('start');
})
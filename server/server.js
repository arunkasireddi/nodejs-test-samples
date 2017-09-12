const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    var user1 = {
        name: 'Arun',
        age: 28
    };
    var user2 = {
        name: 'Andrew',
        age: 25
    };
    res.status(200).send([user1, user2]);
});

app.listen(3000);

module.exports.app = app;
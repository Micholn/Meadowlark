var express = require('express');

var app = express();

var fortune = require('./lib/fortune.js');

app.get('/about', function(req, res){
    res.render('about', { fortune: fortune.getFortune() });
})

var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();

var bodyParser = require('body-parser')
var expressLayouts = require('express-ejs-layouts')


var routes = require('./routes/index');
var admin = require('./routes/admin');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')    // Setamos que nossa engine será o ejs
app.use(expressLayouts)          // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
app.use(bodyParser.urlencoded({ extended: true })) // Com essa configuração, vamos conseguir parsear o corpo das requisições

app.use('/bower_components', express.static(__dirname + '../../bower_components'));
app.use('/cssFiles', express.static(__dirname + '/assets/css'));

// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', routes);
app.use('/admin', admin);



app.use(function(req,res,next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});




//start server
app.listen(1337, function () {
    console.log('Listening at port 1337');
});
//1. dependencies
var express = require('express');


////custom modules


//2. db connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restApi041916');

var itemSchema = mongoose.Schema({
    name: String,
    lastName: String
});

var Item = mongoose.model('Item', itemSchema);


//3. app instantiation
var app = express();


//4. app.set (configuration)


//5. app.use (middleware)


//6. routes
app.get('/', function(req, res) {
    res.send('this is the home page');
});


app.get('/items', function(req, res) {

});

app.post('/items', function(req, res) {

});

app.get('/items/:item_id', function(req, res) {

});

app.put('/items/:item_id', function(req, res) {

});

app.delete('/items/:item_id', function(req, res) {

});



////catch-all route
app.all('*', function(req, res) {
    res.status(404).send('this is the 404 Error message.');
});




//7. app server start in host and port
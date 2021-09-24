const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/curso_react',{
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

var USERS =[
    {'id': 1, 'username': 'wallaceazevedo', 'password': '123456'},
    {'id': 2, 'username': 'paul', 'password': '123456'},
];

var HELLO = [
    {'msg': 'Hello express'}
];

function getHello(){
    return HELLO;
}

function getUsers(){
    return USERS;
}

app.use(bodyParser.json());


app.get('/', function(req, res){
    res.send(getHello());
});

const userRouter = require('./src/routes/user-route');

app.use('/users', userRoute);


app.listen(4000, function(){
    console.log('Hello Express listen on port 4000');
});
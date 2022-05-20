const express = require('express');
const path = require('path');
const port = 7777;
const app = express();
const bodyParser = require('body-parser')
const router = express.Router();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    }))
    
// app.use('/',require('./routes'));
app.get("/", (req, res) => {
    res.send("Hello world!");
});

const usersControllers = require('./models/users');

app.get('/get:id',usersControllers.getUser);
app.get('/get',usersControllers.getUsers);

app.listen(port,function(err){
    if(err){
        console.log("Error is: ",err);
    }
    console.log("App running on port : ",port);
})
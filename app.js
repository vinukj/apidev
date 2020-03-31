const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config(); // to store connection strings etc

//Middlewares
app.use(cors());
app.use(bodyParser.json()); // ensure the json body parser runs evertime

//Import Routes ( after the structuring)
//const userRoute = require('./routes/user');
const postsRoute = require('./routes/posts');

//Middlewares - function that executes when routes are being hit and functions being executed within them
// app.use('/posts',(req,res)=>{
//     console.log("execute this")
// }); 
// create a route page , export the route and bring it to this page
//app.use('/user',userRoute);
app.use('/posts',postsRoute);



//Routes - get/post/patch/delete
app.get('/',(req,res)=>{
    res.send('we are at home');
});



//How do we listen to server 
app.listen(3000);

//connect to DB - take the string from node.js driver - add password and change the db name in string
mongoose.connect(
process.env.DB_CONNECTION,
{useUnifiedTopology: true, useNewUrlParser:true});
mongoose.connection.once('open', function(){
    console.log('Conection has been made!');
  }).on('error', function(error){
      console.log('Error is: ', error);
  });

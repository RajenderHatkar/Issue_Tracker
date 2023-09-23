const express=require("express");
require('dotenv').config();
const port=5001;
const app=express();
const db=require('./config/mongoose');
const { config } = require("dotenv");
app.use(express.urlencoded({extended:true}));

//static files set up

app.use(express.static('./Assets'))
//route setup
app.use('/',require('./Routers'));
app.use(express.json());

//view engine to render ejs files aka html
//install ejs
app.set('view engine','ejs');
app.set('views','./views')


app.listen(port, (err)=>{
    if(err){
        console.log("something went wrong:",err);
       
    }
    console.log("running on port:" ,port);
})
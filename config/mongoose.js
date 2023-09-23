const mongoose=require('mongoose');

const url=process.env.DB_URL

mongoose.connect(url);

//mongoose.connect('mongodb://127.0.0.1:27017/Issue_tracker');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error to connect the db'));

db.once('open',function(){
    console.log('Successfully connected to the DataBase!!!');
});
module.exports=db;
const mongoose = require('mongoose');
const Issue=require('./Issue')
const createSchema=new mongoose.Schema({
    name:{
        type:String
        
    },
    description:{
        type:String
    },
    author:{
        type:String

    },

    issues:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Issue",
        }
    ],

},{
    timestamps:true
});
const Create_project =mongoose.model('Create_project',createSchema);
module.exports = Create_project;
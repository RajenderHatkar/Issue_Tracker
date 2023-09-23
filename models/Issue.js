const mongoose = require('mongoose');
// create a schema for issue
const issueSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    descriptions:{
        type: String,
        required: true
    },
    authors:{
        type: String,
        required: true
    },
    labels: [
        {
          type: String,
          trim: true,
          required: true,
        },
    ],
},{
    timestamps:true
});
console.log("second schema");
const Issue = mongoose.model('Issue', issueSchema);
module.exports = Issue
const mongoose = require('mongoose');
const Project=require('../models/create_pro');
const Issue=require('../models/Issue');

const { findById } = require('../models/create_pro');


module.exports.home = async function (req, res) {
  let project= await Project.findById(req.params.id).populate("issues");

return res.render('details',{title:'Project Detail',project});
  
};
  
module.exports.issuepage= async function(req,res){
     //res.end(`<h1>create Issue of project</h1>`)
     /*return res.render('Issue',{
         title:'Create Issue ',
     })*/
     let project = await Project.findById(req.params.id);
    return res.render('Issue', {title: 'Issue Form', project})
}
//creating issue
module.exports.create= async function (req,res){
    let project = await Project.findById(req.params.id);
    if (project) {
        let issue = await Issue.create({
          title: req.body.title,
          descriptions: req.body.descriptions,
          labels: req.body.labels,
          authors: req.body.authors,
        });
        //to saving issue in project
       project.issues.push(issue); 
        
        await project.save();
        return res.redirect(`/details/${project.id}`);
    }
    return res.redirect('/');
}




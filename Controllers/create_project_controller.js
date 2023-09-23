const Create_project=require('../models/create_pro');

const mongoose=require('mongoose');
module.exports.home = async function (req, res) {
    try {
        // You can perform any asynchronous operations here, if needed.

        return res.render('create_project', {
            title: 'New Project',
        });
    } catch (err) {
        console.error('An error occurred:', err);
        // Handle the error as needed, e.g., send an error response.
        res.status(500).json({ error: 'An error occurred' });
    }
};
//creating project

module.exports.create = async function (req, res) {
    try {
        await Create_project.create({
            name: req.body.name,
            description: req.body.description,
            author: req.body.author,
        });

        console.log(req.body.name);
        return res.redirect('/');
    } catch (err) {
        console.error('Error in creating project:', err);
        // Handle the error as needed, such as sending an error response.
        res.status(500).json({ error: 'Error in creating project' });
    }
}
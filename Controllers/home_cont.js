//module.exports.ActionName=function(req, res)

const Create_project=require('../models/create_pro');

module.exports.home = async function (req, res) {
    try {
        const projectList = await Create_project.find({});
        return res.render('home', {
            title: 'Issue tracker',
            project_list: projectList
        });
    } catch (err) {
        console.error('Error in fetching data from DB:', err);
        // Handle the error as needed, e.g., send an error response.
        res.status(500).json({ error: 'Error in fetching data from DB' });
    }
};
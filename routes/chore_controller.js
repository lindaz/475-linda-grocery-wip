var Chore = require('../models/chore.js');

exports.post = function(req, res){
    console.log("--- REQ.BODY.CHORE_NAME: ", req.body.chore_name,+" ---");
    console.log("--- REQ.BODY.description: ", req.body.description,+" ---");
    new Chore({
        chore_name:req.body.chore_name,
        description:req.body.description,
        active:true
    }).save();
    res.redirect('assign_add');
};


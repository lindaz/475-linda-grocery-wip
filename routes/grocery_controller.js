var groceries = require("../models/mymongo.js"),
    this_user = require('../models/auth').this_user;
var grocerylist            = require('../models/grocerylist');

exports.addGrocery = function(req, res){
	var newGrocery = {
        name: req.body.name,
        quantity: req.body.quantity
    };
    groceries.insert(
    	"housemates",
    	"groceries",
    	newGrocery,
    	function(model) {
			res.render('grocery', {
			    user:this_user,
				name : newGrocery.name,
				quantity: newGrocery.quantity
			});
		}
    );
}

exports.getGroceries = function(req, res){
	        var message ='<ul>';
            grocerylist.find({}, function(err, grocery) {
            // if there are any errors, return the error
            if (err)
                res.send(err);
            else
            {
            // check to see if theres already a user with that email
            if (grocery) {
            	console.log(grocery[0]); //returns undefined
                for( var i =0;i< grocery.length;i++ ) {
    			var item = grocery[i];
    			message = message + '<li>' + item.quantity + ' ' + item.name;
  				}
  				message = message +'</ul>';
  				res.send(message);
            } 
            else
            {
            	res.send('no data');
            }
            }
        });    
}
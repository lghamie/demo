/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    _config: {
        actions: false,
        shortcuts: false,
        rest: false
    },
    login: function(req, res) {
    	sails.log.debug("User", req.param("email"), " logging in", "with params" , JSON.stringify(req.params));

        User.find({
        	email : req.param("email")
        }).exec(function(err, data){
        	console.log("DATA", data);
        	if(err){
	        	res.status(400);
	        	res.send("Please check you username and password");	
        	}
        	if(data.length > 0){
	        	req.session.authenticated = true;
	        	req.session.user = data[0];
	        	res.status(200);
	        	res.send(data[0]);
	       	} else {
   		    	sails.log.debug("User ", req.param("email"), " logged in with wrong password");
	       		res.status(400);
	        	res.send("Please check you username and password");	
	       	}
        });
    },
    logout: function(req, res) {
        req.session.authenticated = false;
    	res.redirect("/");
    }
};


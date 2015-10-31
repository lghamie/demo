/* CHEQUEA SI ESTAS AUTENTICADO PIBE */
module.exports = function(req, res, next) {

	sails.log.debug("User", req.user, " auth is ", req.session.authenticated);
	if (req.session.authenticated) {
	    return next();
	}
	else{
	    return res.redirect('/login');
	}
};

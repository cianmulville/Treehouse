var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.title = "CRM | Dataflow International";
	// locals.section is used to set the currently selected
	// item in the header navigation.
	//locals.section = 'crm';

	// Render the view
	view.render('crm');
};

var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.title = "Education | Dataflow International";
	// locals.section is used to set the currently selected
	// item in the header navigation.
	//locals.section = 'education';

	// Render the view
	view.render('education');
};

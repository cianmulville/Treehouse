/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
var _ = require('lodash');


/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/
exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		// { label: 'Home', key: 'home', href: '/' },
		{ label: 'About us', key: 'about-us', href: '/about-us', title: "About Dataflow"},
		{ label: 'Education', key: 'education', href: '/education', title: "Explore Dataflow offerings in Education" },
		{ label: 'Healthcare', key: 'healthcare', href: '/healthcare', title: "Explore Dataflow offerings in Healthcare" },
		{ label: 'Business', key: 'business', href: '/business', title: "Explore Business solutions by Dataflow" },
		{ label: 'Custom Solutions', key: 'custom', href: '/custom', title: "Custom technology solutions by Dataflow" },
		{ label: 'Careers', key: 'careers', href: '/careers', title: "Learn about working at Dataflow" },
		{ label: 'Contact Us', key: 'contact', href: '/contact', title: "Contact Dataflow" }
	];
	res.locals.user = req.user;
	next();
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};

var config = require('../config')
var common = require('./CommonSpecs')

describe('Git Hub - Sign In', function () {

	//Defining the global Variables to be used across the different spec Blocks
	var signInLink = element(by.linkText('Sign in'));
	var signInButton = element(by.name('commit'));

	//Verifies Sign In link.
	it('VerifySignInLink', function () {
		//Loads the url
		common.loadURL(config.url);
		
		//Clicks on sign In link
		signInLink.click();

		//Asserts Sign In button text of login page
		expect(signInButton.getAttribute('value')).toEqual('Sign in');

		console.log('signInLink Test passed');
	});
});
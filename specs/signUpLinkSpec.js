var config = require('../config')
var common = require('./CommonSpecs')

describe('GitHub - Sign Up', function () {
	//Defining the global Variables to be used across the different spec Blocks
	var signUpLink = element(by.linkText('Sign up'));
	var createYourPersonalAccount = element(by.className('f2-light mb-1'));

	//Verifies the sign up link		
	it('VerifySignUpLink', function () {
		//Loads the url and verifies the Sign Up link
		common.loadURL(config.url);
		signUpLink.click();

		//Asserts the create your account text in the GitHub join page
		expect(createYourPersonalAccount.getText()).toEqual('Create your personal account');

		console.log('sign Up link Test passed');
	});

});
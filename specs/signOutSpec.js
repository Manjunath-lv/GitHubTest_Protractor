var config = require('../config')
var common = require('./CommonSpecs')

describe('Git Hub - SignOut', function () {

	//Defining the global Variables to be used across the different spec Blocks
	var signInLink = element(by.linkText('Sign in'));
		
	//SignIn and verify the SignOut link.
	it('VerifySignOutLink', function () {
		//Loads the url and login to web page
		common.loadURL(config.url);
		common.logInToGitHub(config.username, config.password);

		//Logouts from the web page
		common.logOutFromGitHub();

		//Asserts Update Profile Button text in profile page
		expect(signInLink.getText()).toEqual('Sign in');
		
		console.log('SignOut Test Passed');
	});
});
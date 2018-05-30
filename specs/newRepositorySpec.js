var config = require('../config')
var common = require('./commonSpecs')

describe('Git Hub - New Repository', function () {

	//Defining the global Variables to be used across the different spec Blocks
	var plusIcon = element(by.className('dropdown-caret mt-1'));
	var newRepositoryLink = element(by.linkText('New repository'));
	var createRepositoryBtn = element(by.className('btn btn-primary first-in-line'));

	//SignIn and verify the NewRepository link.
	it('VerifyNewRepositoryLink', function () {
		//Loads the url and login to web page
		common.loadURL(config.url);
		common.logInToGitHub(config.username, config.password);

		//Click on navBar and then NewRepositoryLink
		plusIcon.click();
		newRepositoryLink.click();

		//Asserts Create repository button text in create new repository page
		expect(createRepositoryBtn.getText()).toEqual('Create repository');

		//Logouts from the web page
		common.logOutFromGitHub();

		console.log('New Repository Test passed');
	});

});
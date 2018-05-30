var config = require('../config')
var common = require('./CommonSpecs')

describe('Git Hub - Settings', function() {

	//Defining the global Variables to be used across the different spec Blocks
		var userImage = element(by.className('HeaderNavlink name mt-1'));
		var settingsLink =element(by.linkText('Settings'));
		var uploadNewPicture = element(by.className('position-relative btn button-change-avatar mt-3 width-full text-center'));

	//SignIn and verify the Settings link.
	it('VerifySettingsLink', function() {
		//Loads the url and login to web page
		common.loadURL(config.url);
		common.logInToGitHub(config.username, config.password);

		//Clicks on User image of the profile
		userImage.click();

		//Clicks on Seetings link
		settingsLink.click();

		//Asserts Upload new image button text in profile page
		expect(uploadNewPicture.getText()).toEqual('Upload new picture');

		//Logouts from the web page
		common.logOutFromGitHub();
			
		console.log('Settings link Test Passed');
		
	});

});
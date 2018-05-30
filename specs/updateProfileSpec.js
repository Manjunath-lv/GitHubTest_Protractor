var config = require('../config')
var common = require('./CommonSpecs')

describe('Git Hub - Update Profile', function () {

	//Defining the global Variables to be used across the different spec blocks
	var userImage = element(by.className('HeaderNavlink name mt-1'));
	var settingsLink = element(by.linkText('Settings'));
	var uploadNewPicture = element(by.className('position-relative btn button-change-avatar mt-3 width-full text-center'));
	var updateProfileButton = element(by.className('btn btn-primary'));

	//SignIn and verify the Update Profile link.
	it('VerifyUpdateProfileLink', function () {
		//Loads the url and login to web page
		common.loadURL(config.url);
		common.logInToGitHub(config.username, config.password);

		//Clicks on settings link
		userImage.click();
		settingsLink.click();

		//Verifies the upload new picture button
		expect(uploadNewPicture.getText()).toEqual('Upload new picture');

		//Asserts Update Profile Button text in profile page
		updateProfileButton.click();
		expect(updateProfileButton.getText()).toEqual('Update profile');
		
		//Logouts from the web page
		common.logOutFromGitHub();

		console.log('Update Profile Settings Test Passed');
	});

});
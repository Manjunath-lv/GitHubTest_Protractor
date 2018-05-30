var config = require('../config')
var common = require('./CommonSpecs')

describe('Git Hub - Your Profile', function () {
	//Defining the global Variables to be used across the different spec Blocks
	var userImage = element(by.className('HeaderNavlink name mt-1'));
	var yourProfileLink = element(by.linkText('Your profile'));
	var profileName = element(by.className('p-nickname vcard-username d-block'));

	//Verifies the Your Profile link
	it('VerifyYourProfileLink', function () {
		//Loads the url and login to web page
		common.loadURL(config.url);
		common.logInToGitHub(config.username, config.password);

		//Clicks on User Image
		userImage.click();

		//Clicks on Your Profile link
		yourProfileLink.click();

		//Asserts the profile name
		expect(profileName.getText()).toEqual(config.username);

		//Logouts from the web page
		common.logOutFromGitHub();

		console.log('Your profile link Test Passed');

	});
  
});
var config = require('../config')
var common = require('./CommonSpecs')

describe('Git Hub - Search', function () {

	//Defining the global Variables to be used across the different spec Blocks
	var searchTxt = element(by.name('q'))
	var searchHeader = element(by.className('mb-1'));

	//Verifies the search function of the GitHub.
	it('VerifySearchField', function () {
		common.loadURL(config.url);

		//Enters "React" in search text box
		searchTxt.clear();
		searchTxt.sendKeys('React');

		//Clicks on "Enter" button of the key board
		var enter = browser.actions().sendKeys(protractor.Key.ENTER);
		enter.perform();

		//Asserts the search header
		expect(searchHeader.getText()).toEqual('React');

		console.log('Search Field Test Passed');
	});
});
//Module for Report Creation with the library: protractor-jasmine2-html-reporter
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

//Taking screenshots on demand with full path of the library: protractor-take-screenshots-on-demand
var screenshots = require('protractor-take-screenshots-on-demand');
var config = require('./config');

exports.config = {
	//Framework
	framework: 'jasmine2',

	//Connection to the browser drivers..
	directConnect: true,
	
	//Selenium servers to be used for other browsers
	//seleniumAddress: 'http://localhost:4444/wd/hub',

	//Capabilites to be passed to the webdriver instances
	multiCapabilities: [{
		browserName: 'chrome',
	}],

	// Spec patterns are relative to the location of the spec file.
  suites: {

	//specs are executing in-order, user can add/remove the spec files here
	specs: [
		'./specs/signUpLinkSpec.js',
		'./specs/signInLinkSpec.js',
		'./specs/searchFieldSpec.js',
		'./specs/newRepositorySpec.js',
		'./specs/yourProfileSpec.js',
		'./specs/settingsSpec.js',
		'./specs/updateProfileSpec.js',
		'./specs/signOutSpec.js'
	]
  },

	//Jasmine option to wait max. interval to load the elements
	jasmineNodeOpts: {
		defaultTimeoutInterval: 2500000
	},

	//Report creation for the Spec files run
	onPrepare: function () {

		//Maximizing the browser
		console.log("Maximizing the browser");
		browser.manage().window().maximize();

		//Getting the web-browser name for the current instance
		return browser.getCapabilities().then(function (caps) {

			//Fetching current date and time for the creation of the folder for test reports
			var today = new Date();
			//Current Date in the format YYYY-MM-DD
			var date = today.getFullYear().toString() + '-' + (today.getMonth() + 1).toString() + '-' + today.getDate().toString() + '-'; //getMonth()+1 as January = 0
			//Currect time in the format HH-MM-SS
			var time = today.getHours().toString() + '-' + today.getMinutes().toString() + '-' + today.getSeconds().toString();
			//Folder Name where the reports are saved after the execution
			var folder = date + time;
			console.log(folder);

			//Full path of the project folder to create the TestReport
			var path = config.reportsDirPath + folder;

			jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
				//Path of the TestReports
				savePath: path,

				//File name of Html Report in the format: example: Report - chrome 
				fileName: 'Report - ' + caps.get('browserName'),

				//Take screenShot only on failure
				takeScreenshotsOnlyOnFailures: true,

				//Once the execution is completed, the folder where the reports are saved is not be deleted
				cleanDestination: false
			}));

			//joiner between browser name and file name
			screenshots.browserNameJoiner = ' - ';
			//folder of screenshots
			screenshots.screenShotDirectory = path + "/screenshots";
			//creates folder of screenshots
			screenshots.createDirectory();

		});
	}
};

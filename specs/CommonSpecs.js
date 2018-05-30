
//Defining the global Variables to be used across the different spec Blocks
var signInLink = element(by.linkText('Sign in'));
var userNameTextBox = element(by.id('login_field'));
var passWordTextBox = element(by.id('password'));
var signInButton = element(by.name('commit'));
var logOutLink = element(by.className('logout-form'));
var userImage = element(by.className('HeaderNavlink name mt-1'));

//Reusable Function to load the URL.
exports.loadURL = function (url) {
    browser.ignoreSynchronization = true;
    browser.get(url);
}

//Reusable Function to login
exports.logInToGitHub = function (userName, password) {
    signInLink.click();
    userNameTextBox.clear();
    userNameTextBox.sendKeys(userName);
    passWordTextBox.clear();
    passWordTextBox.sendKeys(password);
    signInButton.click();
}

//Reusable Function to logout.
exports.logOutFromGitHub = function () {
    userImage.click();
    logOutLink.click();
}
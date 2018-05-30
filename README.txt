1) To run this test suite we need to execute the following commands.

	i) npm install -g protractor
	ii) npm install protractor-jasmine2-html-reporter --save-dev
	iii) npm install protractor-take-screenshots-on-demand --save-dev

2) Change the configuration in config folder index.js
3) Goto project location in command prompt and start webdriver using following command 
  
   webdriver-manager start (Don't close this cmd prompt).

4) Goto the project location with new command prompt and execute the following command

   protractor runTestSuite.js --suite specs

5) After finishing the execution verify the test result in command prompt no.of specs passed and failed.
6) Verify the test report in configured path in config/index.js

reference:
https://www.protractortest.org

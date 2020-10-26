let chai = require("chai");

exports.config = {

    // Test Scripts
    specs: [
        "TC_001_Login.js",
    ],
    capabilities: [
        {
            browserName: "chrome"
        }
    ],
    runner: 'local',

    // Declare server info
    hostname: 'localhost',
    port: 9515,
    path: '//',

    // Test Framework
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },

    // Reporter config
    reporters: [
        ['junit', {
            outputDir: './reports'
        }]
    ],

    before: () => {
        global.expect = chai.expect;
    },

    afterTest: (test) => {
        // 1. I wanna save a PNG File when the test failed
        console.log("11111111111111111111111111111111111");
        console.log(test.passed);
        if(test.passed === false){
            let fileName = test.fullTitle;
            browser.saveScreenshot('./' + fileName + '.png')
        }
    }
}
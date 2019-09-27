/**
 * WebdriverIO config file to run tests on native mobile apps.
 * Config file helps us configure all the settings and setup environments
 * to run our tests.
 */

const host = '127.0.0.1';   // default appium host
const port = 4730;          // default appium port

const waitforTimeout = 30 * 60000;
const commandTimeout = 30 * 60000;

exports.config = {
    host: host,
    port: port,

    maxInstances: 1,
    runner: 'local',
    debug: false,

    specs: [
        './features/login.feature',
        './features/onboarding.feature',
    ],

    reporters: ['spec', ['allure', {
        outputDir: './allure-results/',
        disableWebdriverStepsReporting: false,
    }]],


    capabilities: [
        {
            automationName: "UiAutomator2",
            platformName: 'Android',
            app: '/Users/wxie/Development/welab/welab-rn-front-end/android/app/build/outputs/apk/dev/debug/app-dev-debug.apk',          // Path to your native app
            platformVersion: '9',              // Android platform version of the device
            deviceName: 'Nexus_5X_API_28',              // device name of the mobile device
            waitforTimeout: waitforTimeout,
            commandTimeout: commandTimeout,
            newCommandTimeout: 30 * 60000,
        }
    ],

    services: ['appium'],
    appium: {
        waitStartTime: 6000,
        waitforTimeout: waitforTimeout,
        command: 'appium',
        logPath: './logs',
        args: {
            preLaunch: true,
            logTimestamp: true,
            logLevel: 'debug',
            address: host,
            port: port,
            sessionOverride: true,
            debugLogSpacing: true
        }
    },

    /**
     * test configurations
     */
    logLevel: 'debug',
    coloredLogs: true,
    framework: 'cucumber',          // cucumber framework specified
    cucumberOpts: {
        compiler: ['ts:ts-node/register'],
        backtrace: true,
        failFast: false,
        timeout: 5 * 60 * 60000,
        require: [
            './stepDefinitions/loginSteps.ts',
        ] // importing/requiring step definition files
    },

    /**
     * hooks help us execute the repeatitive and common utilities
     * of the project.
     */
    onPrepare: function () {
        console.log('<<< NATIVE APP TESTS STARTED >>>');
    },

    afterScenario: function (scenario) {
        browser.screenshot();
     },

    onComplete: function () {
        console.log('<<< TESTING FINISHED >>>');
    }

};

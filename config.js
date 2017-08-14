exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./tests.js'],
  framework: 'jasmine',
  chromeOptions: {
    args: [
      '--start-maximized',
      'disable-extensions',
      '--disable-infobars'
    ]
  },
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 150000
  },
}
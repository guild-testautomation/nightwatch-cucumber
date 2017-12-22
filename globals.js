
// We require the chromedriver module here.
const chromedriver = require('chromedriver');

const htmlReporter = require('nightwatch-html-reporter');
const reporter = new htmlReporter({
    openBrowser: true,
    reportsDirectory: `${__dirname}/reports`
});

// Now we can define the driver to start before a test and close after.
module.exports = {
    before : function(done) {
        chromedriver.start();
        done();
    },

    after : function(done) {
        chromedriver.stop();

        done();
    },
    reporter: reporter.fn
};

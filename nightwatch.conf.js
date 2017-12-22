// setup cucumber
require('nightwatch-cucumber')({
    /* other configuration options */
});

module.exports = (function(settings) {
    return settings;
})(require('./nightwatch.json'));

/* jshint strict:false */

module.exports = function (grunt, options) {
    return {
        files:  [ 'videochat/**/*.js' ],
        tasks:  [ 'watch:reload' ],
        options: {
            spawn: false
        }
    };
};
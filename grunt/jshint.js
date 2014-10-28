/* jshint strict:false */

module.exports = function (grunt, options) {
    return {
        options: {
            jshintrc: true
        },
        lint: [
            'grunt/**/*.js',
            'videochat/**/*.js',
            '!videochat/public/js/**/*.js'
        ]
    };
};
/* jshint strict:false */

module.exports = function (grunt, options) {
    return {
        options: {
            port: 3000
        },
        dev: {
            options:{
                script: './videochat/app.js'
            }
        }
    };
};
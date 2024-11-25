const path = require('path'); // CommonJS

module.exports = {
    mode: 'devlopment',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assest', 'js'),
        filename: 'bundle.js'
    },
    module: {},
    devtool: 'source-map'
};
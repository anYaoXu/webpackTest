const merge = require('webpack-merge');
const common = require('./webpack-common.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(common,{
    plugins:[
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
})
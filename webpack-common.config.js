const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const  CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),  // 转换成绝对路径,也可以使用相对路径,比如 './dist'
        publicPath: '', //开发代码中url的转换拼接处理,通常是代码中各种资源的地址,比如图片等, url目录前缀或完整网址url前缀'http://cdn.com/'\
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, // (不处理node_modules 和 bower_components下的js文件) 优化处理加快速度
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],  // presets设置的就是当前js的版本,根据配置的目标运行环境（environment）自动启用需要的 babel 插件
                    }

                }
            }
        ]
    }
};
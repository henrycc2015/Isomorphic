const config=require('./webpack.config.js');
const path=require('path');
const {ReactLoadablePlugin}=require('react-loadable/webpack');
const CleanWebpackPlugin = require("clean-webpack-plugin");//删除文件
let newPlugins=[
    new CleanWebpackPlugin(['./build']),
    //文件复制
    //惰性加载
    new ReactLoadablePlugin({
        filename: './build/react-loadable.json',
    })
]

config.plugins=config.plugins.concat(newPlugins);
module.exports=Object.assign({},config);
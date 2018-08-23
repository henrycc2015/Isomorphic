const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config.js');//加载基础配置

config.plugins.push(//添加插件
    new webpack.HotModuleReplacementPlugin()//热加载
)

let devConfig = {
    context:path.resolve(__dirname,'src'),
    devtool: 'eval-source-map',
    devServer: {//dev-server参数
        contentBase: path.join(__dirname,'./build'),
        inline:true,
        hot:true,//启动热加载
        open : true,//运行打开浏览器
        port: 8900,
        historyApiFallback:true,
        watchOptions: {//监听配置变化
            aggregateTimeout: 300,
            poll: 1000
        },
    }
}

module.exports = Object.assign({},config,devConfig);
const path=require('path');
const webpack=require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');//html生成
const ExtractTextPlugin = require('extract-text-webpack-plugin');//css文件分离
const CopyWebpackPlugin = require('copy-webpack-plugin');//复制文件
module.exports={
    entry: {
        main:path.join(__dirname,'./src/index.js'),
        vendors:['react','react-redux']//组件分离
    },
    output:{
        path: path.resolve(__dirname,'build'),
        publicPath: '/',
        filename:'[name].js',
        chunkFilename:'[name].[id].js'
    },
    context:path.resolve(__dirname,'src'),
    module:{
        rules:[
            {
				test: [/\.bmp$/, /\.gif$/, /\.jpeg$/, /\.png$/,/\.svg$/],
                loader: 'url-loader?name=[name].[ext]',
			},{
                test:/\.(js|jsx)$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['env','react','stage-0'],
                        plugins:[
							//解决 import {} 文件变大的问题
							["direct-import",["react-router-dom","react-router-redux","react-router"]]
						]
                    },
                }]
            },{
                test: /\.scss$|\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
              },
        ]
    },
    resolve:{extensions:['.js','.jsx','.less','.scss','.css']},
    plugins:[
        new HTMLWebpackPlugin({//根据index.ejs 生成index.html文件
            title:'Webpack配置',
            inject: true,
            filename: 'index.html',
            template: path.join(__dirname,'./index.ejs')
        }),
        new webpack.DefinePlugin({
		    'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV || 'development'),
		    'process.env.RUN_ENV':JSON.stringify(process.env.RUN_ENV || 'dev')
		}),
        new webpack.optimize.CommonsChunkPlugin({//公共组件分离
              names: ['vendors', 'manifest']
        }),
        new ExtractTextPlugin('css/[name].css'),
        new CopyWebpackPlugin([
            {from:path.join(__dirname,'./src/static'),to:'./static'}
          ]),
    ],
}

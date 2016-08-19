var path = require('path')
var webpack = require('webpack')
    ////提取公用插件
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js')
module.exports = {
    entry: [
        // 'webpack/hot/dev-server',
        // 'webpack-dev-server/client?http://localhost:8888',
        './app/app.js'
    ],
    resolve: {
        extensions: ['', '.js','.html']
    },
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: "bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        commonsPlugin
    ],
    module: {
        loaders: [{
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            },
            // 此项配置暂时有问题 无法实现效果
            {
              test:/\.jsx?$/,
              exclude:/node_modules/,
              loader:'babel',
              query: {
                presets: ['es2015']
              }
            }
        ]
    }
}

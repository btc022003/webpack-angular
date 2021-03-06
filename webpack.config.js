var path = require('path');
var webpack = require('webpack');
    ////提取公用插件
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

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
        filename: "bundle.js",
        publicPath: "bundle/",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        commonsPlugin,
        new DashboardPlugin(dashboard.setData)
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
};

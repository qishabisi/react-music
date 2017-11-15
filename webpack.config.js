var webpack = require('webpack');
// var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports={
    entry:'./index.js',
    output:{
        path:__dirname+'/',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['react','stage-0'] } },
             { test: /\.less$/, exclude: /node_modules/, loader: 'style-loader!css-loader!less-loader' },
             { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' },
             // { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
             // { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
        ]
    },
    // plugins:[
    //     //// html 模板插件
    //     // new htmlWebpackPlugin({
    //     //     template:'./app/index.tem.html',
    //     //     inject:'body'
    //     // }),
    //     // 热加载插件
    //     new webpack.HotModuleReplacementPlugin(),
    //     // 打开浏览器
    //     new OpenBrowserPlugin({
    //       url: 'http://localhost:8080'
    //     }),
    // ]
}
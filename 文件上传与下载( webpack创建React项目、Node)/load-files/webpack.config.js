const path = require('path');  //引入路径
const HtmlWebpackPlugin = require('html-webpack-plugin')   //引入html插件
module.exports = {      //  导出
    entry: './src/main.js',    //    项目入口
    output: {                  //    输出 
      filename: 'bundle.js',    //    打包后的名字
      path: path.resolve(__dirname, './dist')   //  当前路径下
    },
    module: {
      rules: [
        {
          test: /\.js$/,         //  打包 .js文件
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"    //  使用 babel-loader
          }
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'load-files',
          template: './src/index.html'   //  模板
        })
    ]
  };
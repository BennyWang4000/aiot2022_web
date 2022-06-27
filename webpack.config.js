const { NONAME } = require('dns');
const path = require('path');
const webpack = require('webpack')

const config = {
    //這個webpack打包的對象，這裡面加上剛剛建立的index.js
    // entry: glob.sync('./static/**.js').reduce(function (obj, el) {
    //     obj[path.parse(el).name] = el;
    //     return obj
    // }, {}),
    entry: ['./static/index.jsx'],
    mode: 'development',
    output: {
        //這裡是打包後的檔案名稱
        filename: './static/bundle.js',
        //打包後的路徑，這裡使用path模組的resolve()取得絕對位置，也就是目前專案的根目錄
        path: path.resolve('./'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/, exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },
                },
            },
            {
                test: /\.js$/, exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
            , {
                test: /\.css$/i, exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
        ],

    },

    plugins: [
        // fix "process is not defined" error:
        // (do "npm install process" before running the build)
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ]
};

module.exports = config;
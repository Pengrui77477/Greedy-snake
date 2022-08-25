const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    //入口文件
    entry: './src/index.ts',

    //指定打包文件的目录
    output: {
        path: path.resolve(__dirname, 'dist'),
        //删除原有文件
        clean: true,
        //打包后的文件
        filename: "bundle.js"
    },
    "mode": "development",
    //指定webpack打包时要使用的模块
    module: {
        //指定要加载的规则
        rules: [
            {
                //test指定的是规则生成的文件
                test: /\.ts$/,
                //要使用的loader
                use: [
                    //配置babel
                    // {
                    //     //指定加载器
                    //     loader: "babel-loader",
                    //     //设置option
                    //     options: {
                    //         //设置预定义的环境
                    //         presets: [
                    //             //指定环境的插件
                    //             "@babel/preset-env",
                    //             //配置信息
                    //             {
                    //                 targets: {
                    //                     //兼容的浏览器
                    //                     "chrome": "105"
                    //                 },
                    //             }
                    //         ]
                    //     }
                    // },
                    'ts-loader'
                ],
                //要排除的文件
                exclude: /node-modules/
            },
            //设置less文件的处理
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    //引入postcss
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:"last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },

    //配置webpack插件
    plugins: [
        new HTMLWebpackPlugin({
            // title:'webpack 自定义的title',
            template: "./src/index.html"
        }),
    ],

    //用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}
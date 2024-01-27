const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '_static/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        assetModuleFilename: '[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                oneOf: [
                    {
                        test: /dashboard\.css$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            'postcss-loader'
                        ]
                    },
                    {
                        use: [
                            'style-loader',
                            'css-loader',
                            'postcss-loader'
                        ]
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            },
            {
                test: /\.(png|jpg|jpeg|webp|avif|svg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "Nina Cebotaru",
            filename: "index.html",
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'dashboard.css',
        })
    ]
}
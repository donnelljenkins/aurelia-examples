module.exports = {
    entry: "./config.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
              test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
              loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
};

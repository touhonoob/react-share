const webpack = require("webpack");
const path = require("path");

// Builds bundle usable <script>. Includes RGL and all deps, excluding React.
module.exports = {
    mode: "production",
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'react-share.min.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd",
        library: "ReactShare"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
    ],
};

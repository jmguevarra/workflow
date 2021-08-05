const path = require('path');

module.exports = {
    //webpack entry for optmizing/compiling script
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'), //need absolute path of bundle.js but just the folder on this line
        filename: 'bundle.js',          //file paste compress virtual code
    },
    //webpack to run local server
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/'          //it gets the index.html to load
    },
    //babel that converts new format syntax to old format
    module:{
        rules:[{                        //every single object is a rule here
            test: /\.js$/,              //all js file
            exclude: /node_module/,     //find .js files except on this folder
            use: {
                loader: 'babel-loader', //use babel loader
                options: {
                    presets: ["@babel/preset-env"]       //.bebelrc is nolonger need because of this
                }
            }
        }]
    }

};
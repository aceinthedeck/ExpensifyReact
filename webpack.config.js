

module.exports={

    entry:__dirname+'/src/react101.js',
    output:{
        path:__dirname+'/public',
        filename:'bundle.js'
    },
    devServer: {
        contentBase: "./public",
        historyApiFallback:true
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },{
            test:/\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
    ]
    },
    devtool:'cheap-module-eval-source-map'
};
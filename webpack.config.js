

module.exports={

    entry:__dirname+'/src/app.js',
    output:{
        path:__dirname+'/public',
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        }]
    }
};
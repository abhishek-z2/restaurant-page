const { watch } = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
    watch:true,
    mode:'development',
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist"),
        clean:true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/template.html",
        }),
    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader","css-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
        ]
    },
    devtool:"eval-source-map",
    devServer:{
        watchFiles:["./src/template.html","/home/achu/restaurant-page/src/styles.css"],
        static:'./dist',
        watch:true,
        
    }

}
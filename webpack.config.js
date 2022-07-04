 const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path =require('path'); 

var config = {
	// context:path.join(__dirname,'./src'),
	mode:'production',
	entry:'./src/index.js',
	output:{
		path: path.join(__dirname,'dist'),
		// publicPath:'/dist/',
		filename:'bundle.js',
	},
	module:{
		rules:[
			{
				test:/\.css$/i,
				use:['style-loader',{
					loader:'css-loader',
					// options:{
					// 	modules:true,
					// 	localIdentName:'[name]__[local]__[hash:base64:5]',
					// }
				}],
			}
		],
	},
	plugins:[
		new MiniCssExtractPlugin({
			filename:'[name].css',	//同步加载的名字
			chunkFilename:'[id].css',//异步加载的名字
		})
	],
	devServer:{
		static:'./dist'
		
	},
};

module.exports = config;
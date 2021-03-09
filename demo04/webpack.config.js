module.exports = {
    devtool: "eval-source-map",
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle-[hash:5].js'
    },

    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        inline: true,
        port: 8080,
        open:true,
        proxy: {
            '/api': { // 如果接口中带有 API 标志，那么就需要开始代理
                target: 'http://localhost:8001',
                changeOrigin: true, // target 是域名的话，需要这个参数，
                secure: false // 设置支持 https 协议的代理，不检查安全与否
            }
        }
    },

    modules:{
    	rules:[ // 
    		{
    			test:/(\.jsx|\.js)$/,
    			use:{
    				loader:"babel-loader",
    				options:{
    					presets:['env','react']
    				}
    			},
    			exclude: /node_modules/
    		}
    	]
    }
}
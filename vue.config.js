const url = process.env.NODE_ENV == 'development' ? "https://apigw.myzebravip.com" : "https://apigwtest.myzebravip.com";
const path = require("path");
const CompressionPlugin = require('compression-webpack-plugin');//引入compression-webpack-plugin

// const PreloadWebpackPlugin = require("preload-webpack-plugin");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    publicPath: process.env.NODE_ENV == 'development' ? "/" : "/test/",
    lintOnSave: true,
    css: {
        loaderOptions: {
            scss: {
                //prependData: `@import "@/assets/scss/_variable.scss";` //引入全局变量 
                additionalData: `@import "@/assets/style/scss/_variable.scss";` //引入全局变量 
            }

        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        performance: {
            // hints: process.env.NODE_ENV == "development" ? "error" : "warning",
            hints: process.env.NODE_ENV == "warning",
            //入口文件的最大体积
            maxEntrypointSize: 4000000,
            //生成文件的最大体积
            maxAssetSize: 30000000,
            //控制用于计算性能提示的文件
            assetFilter: function (assetFileName) {
                return assetFileName.endsWith('js')
            }
        },
        plugins: [
            new CompressionPlugin({
                filename: '[path].gz[query]',
                //压缩算法
                algorithm: 'gzip',
                //匹配文件
                test: /\.js$|\.css$|\.html$/,
                //压缩超过此大小的文件,以字节为单位
                // threshold: 10240,
                threshold: 100,
                minRatio: 0.8,
                //删除原始文件只保留压缩后的文件
                deleteOriginalAssets: false

            })
        ]
    },
    chainWebpack: config => {
        if (process.env.use_analyzer) {
            config.plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        }

        // config.set('externals', {
        //     "vue": "Vue",
        //     "element-ui": "ELEMENT",
        //     "mint-ui": "MINT",
        //     "vue-router": "VueRouter",
        //     "axios": "axios"
        // })
   

        // // 移除 prefetch 插件
        // config.plugins.delete('prefetch')
        // 移除 preload 插件
        // config.plugins.delete('preload');


        // config.plugin('preload').tap(
        //     args => {
        //         args[0].include='allAssets';
        //         return args
        //     })
    },

    devServer: {
        proxy: {
            '/ruban': {
                target: url,
                ws: true,
                changeOrign: true
            }
        }
    }

}
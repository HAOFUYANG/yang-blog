--- 
{
  'title':'vue.config.js配置案例'
}
---

## vue.config.js配置案例

```js
// 打包多入口文件基本配置
let developmentPath = './';//开发环境-npm run serve时引用文件路径
let productionPath = './';//生产环境-npm run build打包后引用文件路径

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')//生产环境取消打印
const CompressionWebpackPlugin = require('compression-webpack-plugin')//gzip压缩

const productionGzipExtensions = ['js', 'css']
const Version = 'V6.1'
const Timestamp = new Date().getTime()
function getPagesInfo() {
    let pages = {}
    const glob = require('glob') // 引入glob模块,用于扫描全部src/pages/**/main.js（返回的是一个数组）
    glob.sync('src/pages/**/main.js').forEach((entry, i) => {
        let name = entry.slice(10, -8)
        pages[name] = {
            entry: entry,
            template: 'public.index.html',
            filename: name + '.html',
            title: '',
            chunks: ["chunk-vendors", "chunk-common", name]
        }
    })
    return pages
}
// 打包相关
module.exports = {
    pages: getPagesInfo(),//多页面应用配置
    publicPath: process.env.NODE_ENV === 'production' ? productionPath : developmentPath, // 基本路径-引用文件的路 __dirname + '/server/dist', //build之后静态文件输出路径
    assetsDir: 'static',//静态资源大包位置
    outputDir: __dirname + '/server/dist', //build之后静态文件输出路径
    lintOnSave: process.env.NODE_ENV !== 'production',// 打包的时候eslint-loader检查 
    productionSourceMap: false,//source map 检查
    // 启动服务器
    devServer: {
        index: '/login.html',   //默认打开文件
        open: true,             //自动打开浏览器
        host: 'localhost',      //默认打开域名
        port: 8080,             //默认打开端口号
        https: false,           //开启关闭https请求
        hotOnly: false,         //热更
        // 反向代理
        proxy: {
            // 配置跨域
            '/api': {
                target: 'http://dev.aabb.cn:8082/', //代理地址，这里设置的地址会代替axios中设置的baseURL
                ws: true,   //// proxy websockets
                changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
                pathRewrite: {                //pathRewrite方法重写url
                    '^/api': '/',
                },
            },
            "/api2": {
                    target: "http://172.12.12.12:2018",
                    changeOrigin: true,
                    //ws: true,//websocket支持
                    secure: false,
                    pathRewrite: {
                        "^/api2": "/"
                    }
                }
        }
    }
    // webpack配置  链式
    chainWebpack: (config) => {
        // 1、取消预加载增加加载速度
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')

        // 2、vue中使用SVG图标，并且想批量导入，然后需要使用的时候直接添加就可以
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]',
            })
            .end()

        // 3、图片处理
        const imagesRule = config.module.rule('images')
        imagesRule.uses.clear() //清除原本的images loader配置
        imagesRule
            .test(/\.(jpg|gif|png|svg)$/)
            .exclude.add(path.join(__dirname, '../node_modules')) //不对node_modules里的图片转base64
            .end()
            .use('url-loader')
            .loader('url-loader')
            .options({ name: 'img/[name].[hash:8].[ext]', limit: 6000000 })

        config.optimization.splitChunks({
            cacheGroups: {

                vendors: {
                    name: 'chunk-vendors',
                    minChunks: pageNum,
                    test: /node_modules/,
                    priority: -10,
                    chunks: 'initial',
                },

                elementUI: {
                    name: 'chunk-elementUI', // split elementUI into a single package
                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
                },

                commons: {
                    name: 'chunk-commons',
                    test: resolve('src/components'), // can customize your rules
                    minChunks: 3, //  minimum common number
                    priority: 5,
                    reuseExistingChunk: true,
                },
            },
        })
    },
    // webpack配置
    configureWebpack: (config) => {
          // 为生产环境修改配置
        if (process.env.NODE_ENV === 'production') {
      
            config.plugins.push(
                  // 1、取消打印
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            drop_debugger: true,//生产环境自动删除debugger
                            drop_console: true, //生产环境自动删除console
                        },
                        warnings: false,
                    },
                    sourceMap: false,   //关掉sourcemap 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
                    parallel: true, //使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
                }),

                // 2、gzip压缩
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 10240,
                    minRatio: 0.8,
                })
            )
        }

        // 在这里配置后，减少了压缩的包内容，需要在public/index.html通过cdn方式再引入,注意对应的版本
        config.externals = { 
            vue: 'Vue',
            'vue-router': 'VueRouter',
            vuex: 'Vuex',
            axios: 'axios',
            jquery: '$',
            moment: 'moment',
            'mint-ui': 'MINT'
        },


         // 别名配置
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                alias: {
                '@': path.resolve(__dirname, './src'),
                '@c': path.resolve(__dirname, './src/components'),
                '@p': path.resolve(__dirname, './src/pages')
                }
            }
        }),

        config.output.filename = `[name].${Version}.${Timestamp}.js`  //打包生成的文件
        config.output.chunkFilename = `[name].${Version}.${Timestamp}.js`
    },
    // css相关
    css: {
        loaderOptions: {
            // 配置全局sass
            scss: {
                additionalData: `@import "@/assets/css/reset.scss";@import "@/assets/css/globle.scss";`  //注意配置的键名
            },
            // lib-flexible
            postcss: {
                plugins: [
                    //remUnit这个配置项的数值是多少呢？？？ 通常我们是根据设计图来定这个值，原因很简单，便于开发。
                    //假如设计图给的宽度是750，我们通常就会把remUnit设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
                    require('postcss-px2rem')({
                        remUnit: 37.5
                    })
                ]
            }
        }
    },
    parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    pwa: {}, // PWA 插件相关配置 
    pluginOptions: {},  // 第三方插件配置
};
```

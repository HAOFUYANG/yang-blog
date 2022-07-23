---
{
  'title':'loader和plugin'
}
---

### loader

由于webpack 本身只能打包js文件，所以，针对css，图片等格式的文件没法打包，就需要引入第三方的模块进行打包。loader虽然是扩展了 webpack ，但是它只专注于转化文件（transform）这一个领域，完成压缩，打包，语言翻译。loader是运行在NodeJS中。

- `css-loader`和`style-loader`模块是为了打包css的
- `babel-loader`和`babel-core`模块时为了把ES6的代码转成ES5
- `url-loader`和`file-loader`是把图片进行打包的

### plugin

plugin也是为了扩展webpack的功能，但是 plugin 是作用于webpack本身上的。而且plugin不仅只局限在打包，资源的加载上，它的功能要更加丰富。从打包优化和压缩，到重新定义环境变量，功能强大到可以用来处理各种各样的任务。webpack提供了很多开箱即用的插件CommonChunkPlugin主要用于提取第三方库和公共模块，避免首屏加载的bundle文件，或者按需加载的bundle文件体积过大，导致加载时间过长，是一把优化的利器。而在多页面应用中，更是能够为每个页面间的应用程序共享代码创建bundle

- `FileManagerPlugin`配置打包后可自动压缩打包文件

```js
plugins:[
  new FileManagerPlugin({
    events:{
      onEnd:{
        delete:['./dist.zip'], //删除上次一打包的压缩文件
        archieve:[
          {
            source:'./dist',
            destination:'./dist.zip' //压缩
          }
        ]
      }
    }
  })
]

```

- `HtmlWebpackPlugin`

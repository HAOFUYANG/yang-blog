# vue 中 ts 的使用

[整体的思路理一下](https://blog.csdn.net/liming89/article/details/124400757)

## vue2 项目中 ts 的加持

- 1.[安装引入 ts](#1)
- 2.[webpack 配置](#2)
- 3.[vue-shim.d.ts，使项目识别 ts](#3)
- 4.[组件中搭配装饰器使用](#4)

### 1. <span id='1'>安装引入</span>

```js
npm install vue-class-component vue-property-decorator --save
npm install ts-loader typescript tslint tslint-loader tslint-config-standard --save-dev

```

`vue-class-component`：扩展 vue 支持 typescript，将原有的 vue 语法通过声明的方式来支持 ts

`vue-property-decorator`：基于 vue-class-component 扩展更多装饰器

`ts-loader`：让 webpack 能够识别 ts 文件

`tslint-loader`：tslint 用来约束文件编码

`tslint-config-standard`： tslint 配置 standard 风格的约束

### 2.<span id='2'>配置</span>

#### webpack 配置

```js
 configureWebpack: {
    resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        }
      ]
    }
  }
```

#### 在根目录建 tsconfig.json 文件

编译 ts 的跟目录，文件中的配置指定了编译 ts 的选项

```ts
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "strictNullChecks": true,
    "esModuleInterop": true,
    "experimentalDecorators": true
  }
}
```

### 3.<span id='3'>vue-shim.d.ts，使项目识别 ts</span>

由于 TypeScript 默认并不支持 \*.vue 后缀的文件，所以在 vue 项目中引入的时候需要创建一个 vue-shim.d.ts 文件，放在根目录下

```ts
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
```

### 4.<span id='4'>vue 文件中搭配装饰器使用</span>

```ts
<script lang="ts">
  import { Component, Prop, Vue, Watch, Emit } from "vue-property-decorator";
  @Component({
  components: {
    Hello
  }
})
  export default class Test extends Vue {
      @Prop({
        type: Number,
        default: 1,
        required: false
      })
      @Watch('propA',{
      deep:true
  })
  };
</script>
```

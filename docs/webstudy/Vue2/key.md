# key

key是给每一个vnode的唯一id，也是diff的一种优化策略，可以根据key，更准确， 更快的找到对应的vnode节点

## 大概需要思考如下几个问题?

- 1、vue中的就地复用策略，设置key值一定能提高diff效率吗？
- 2、v-for中的key的作用，key能不能用index?哪些场景可以使用index作为key，那些场景不能用？
- 3、如果key使用index，通过push在list中间某处插入几条数据，请问会有什么问题吗？
- 4、动态组件中的key的使用
- 5、深入key在diff中的使用

### 1、vue中的就地复用策略

文档原话:
当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用 “就地复用” 策略。如果数据项的顺序被改变，Vue将不是移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素.**这个默认的模式是有效的，但是只适用于不依赖子组件状态或临时 DOM 状态（例如：表单输入值）的列表渲染输出。**

在浏览器运行如下代码：
你会发现：

- `vue默认的就地复用策略中(不用key)`,点击button, input输入框并不会随文本一起下移，为什么？**是因为输入框没有与数据(data)绑定, 所以vuejs默认使用已经渲染的dom**, 然而文本是与数据绑定的, 所以文本被重新渲染，这种复用方式是高效的。但dom的结构会与我们预期想要的不同，在日常开发中，这也是一个问题。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>key的就地复用</title>
  </head>
  <body>
    <script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.min.js"></script>
    <div id="app">
      <h3>就地复用</h3>
      <div v-for="(p, i) in persons">
        {{p.name}}
        <input type="text" />
        <button @click="down(i)" v-if="i != persons.length - 1">下移</button>
      </div>

      <h3>不采用就地复用策略(设置key)</h3>
      <div v-for="(p, i) in persons" :key="p.id">
        {{p.name}}
        <input type="text" />
        <button @click="down(i)" v-if="i != persons.length - 1">下移</button>
      </div>
    </div>

    <script>
      new Vue({
        el: "#app",
        data: {
          persons: [
            { id: 1, name: "inputA" },
            { id: 2, name: "inputB" },
            { id: 3, name: "inputC" },
          ],
        },
        methods: {
          down: function (i) {
            if (i == this.persons.length - 1) return;
            var listClone = this.persons.slice();
            var one = listClone[i];
            listClone[i] = listClone[i + 1];
            listClone[i + 1] = one;
            this.persons = listClone;
          },
        },
      });
    </script>
  </body>
</html>
```

#### 设置key值一定能提高diff效率吗？

其实默认的就地复用策略是高效的，但是只适用于`不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出`
所以,key并非高效，但在实际开发中我们需要使用key

### 2、key的使用

如果你的列表元素存在与用户交互的场景(比如form表单或者重新排序等), 那么请你为 v-for指令设置key参数,key指向列表中每个元素的唯一值.

但，建议`v-for`时提供`key`

#### 使用key和不使用key的区别

下面看一张图
![](/Vue/insert-vnode.png)

`不使用key`

- A，A，相同类型的节点，进行patch，但数据相同，不发生dom操作
- B，B，相同类型的节点，进行patch，但数据相同，不发生dom操作
- C，F，相同类型的节点，进行patch，数据不同，发生dom操作
- D，C，相同类型的节点，进行patch，数据不同，发生dom操作
- E，D，相同类型的节点，进行patch，数据不同，发生dom操作
- 循环结束，将E插入到DOM中
- **3次更新，1次插入操作**

如果`使用key`

- A，A，相同类型的节点，进行patch，但数据相同，不发生dom操作
- B，B，相同类型的节点，进行patch，但数据相同，不发生dom操作
- C，F，不相同类型的节点
  然后
- E、E，相同类型的节点，进行patch，但数据相同，不发生dom操作
- D、D，相同类型的节点，进行patch，但数据相同，不发生dom操作
- C、C，相同类型的节点，进行patch，但数据相同，不发生dom操作
- 循环结束，将F插入到C之前
- **0次更新，1次插入操作**

#### `总结:key能够大大减少对页面的DOM操作，提高了diff效率`

### 3、看一下key使用index的情况

使用index作为key

#### 在数组后面追加一条数据

 前面的数据页面不会重新渲染，直接复用老的，只会新渲染最后一条数据，此时用index作为key，没有问题。

#### 在数组中间插入一条数据

根据下面的代码可以看出,除了num：1的数据，剩下的数据都需要重新计算渲染

```js
key: 0  index: 0 num: 1     key: 0  index: 0 num: 1
key: 1  index: 1 num: 2     key: 1  index: 1 num: '此处是新插入的数据4'
key: 2  index: 2 num: 3     key: 2  index: 2 num: 2
                            key: 3  index: 3 num: 3
```

### 4、动态组件中的key的使用

### 5、diff中的key

判断sameVnode

```js
function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
        ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}
```

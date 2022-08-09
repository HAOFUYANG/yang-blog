---
{ "title": "Vue响应式原理" }
---

# Vue 的响应式原理

[Vue 源码解读](https://ustbhuangyi.github.io/vue-analysis/v2/data-driven/new-vue.html)

## Vue 响应式原理的核⼼就是`Observer`、`Dep`、`Watcher`

[一篇异常详细的掘金](https://juejin.cn/post/7074422512318152718)

- Observer 中进⾏响应式的绑定，监听数据变化，在数据被读的时候，触发 get ⽅法，执⾏ Dep 来收集依赖，也就是收集 Watcher
- 在数据被改的时候，触发 set ⽅法，通过对应的所有依赖(Watcher)，去执⾏更新。

<img :src="$withBase('/Vue/发布订阅.png')" alt="foo"></img>

vue 文档中的原图
<img :src="$withBase('/Vue/vue响应式.png')" alt="foo"></img>

## 如何监听数据的变化

### **Observer**

简单说就是通过劫持数据，在 setter 中向 Dep（调度中心）添加观察者，在 getter 中通知观察者更新

详细一点`Object.defineProperty()`

- 对象传入 vue 实例作为 data 选项
- Vue 将遍历此对象所有的`property`，通过`Object.defineProperty`把 property 转化为`getter`/`setter`
- 当 Observer 中对象的属性被`访问`，则通过 getter 返回值
- 当 Observer 中对象的属性被`编辑修改`，则通过 setter 更新 data 中的值

思考三个问题？
1、Vue2 的深度监听
2、对于对象的新增属性，vue 如何实现数据绑定
3、如何对数组进行监听，如下代码中有写到

```js
// 模拟触发更新视图
function updateView() {
  console.log("视图更新");
}

// 重新定义数组原型
const oldArrayProperty = Array.prototype;
// 创建新对象，原型指向 oldArrayProperty ，再扩展新的方法不会影响原型
const arrProto = Object.create(oldArrayProperty);
["push", "pop", "shift", "unshift", "splice"].forEach((methodName) => {
  arrProto[methodName] = function () {
    updateView(); // 触发视图更新
    oldArrayProperty[methodName].call(this, ...arguments);
    // Array.prototype.push.call(this, ...arguments)
  };
});

// 重新定义属性，监听起来
function defineReactive(target, key, value) {
  // 深度监听
  observer(value);
  // 核心 API
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        // 深度监听
        observer(newValue);

        // 设置新值
        // 注意，value 一直在闭包中，此处设置完之后，再 get 时也是会获取最新的值
        value = newValue;

        // 触发更新视图
        updateView();
      }
    },
  });
}
// 监听对象属性
function observer(target) {
  if (typeof target !== "object" || target === null) {
    // 不是对象或数组
    return target;
  }
  // 污染全局的 Array 原型
  // Array.prototype.push = function () {
  //     updateView()
  //     ...
  // }
  if (Array.isArray(target)) {
    target.__proto__ = arrProto;
  }

  // 重新定义各个属性（for in 也可以遍历数组）
  for (let key in target) {
    defineReactive(target, key, target[key]);
  }
}
// 准备数据
const data = {
  name: "zhangsan",
  age: 18,
  info: {
    address: "shanghai", // 需要深度监听
  },
  nums: [10, 20, 30],
};
// 监听数据
observer(data);

data.name = "lisi";
data.age = 21;
data.x = "100"; // 新增属性，监听不到 —— 所以有 Vue.set
delete data.name; // 删除属性，监听不到 —— 所有已 Vue.delete
data.info.address = "上海"; // 深度监听
data.nums.push(4); // 监听数组
```

#### defineProperty 的缺点

1. 深度监听需要通过`递归实现`，比如对象内对象多层嵌套的双向绑定需要进行递归
2. 无法监听新增属性和删除属性，需要使用 Vue.set,Vue.delete
3. 无法直接监听数组的一些操作，那为什么我们在使用 vue 时候是可以监听数组的呢？因为 vue 对数组的一些方法进行重写，如上代码（为了不污染全局的 Array 原型，使用 Object.create()创建新的对象，新对象中新增编辑的方法不会污染原生的 Array）

#### 请问 vue2 源码重写了哪些数组方法

重写了会改变数组自身的方法

```js
[
  "push", //向数组的末尾添加一个或更多元素，并返回新的长度。
  "pop", //删除数组的最后一个元素并返回删除的元素。
  "shift", //    删除并返回数组的第一个元素。
  "unshift", //向数组的开头添加一个或更多元素，并返回新的长度。
  "reverse", //反转数组的元素顺序。
  "sort", //对数组进行排序（可以穿进去一个函数）
  "splice", //splice(n,m)删除数组的第n个到第m-1个（不包含m个）从数组中添加或删除元素。
];
```

### **Dep**依赖管理

- Dep 是 data 每个对象包括子对象都拥有一个该对象, 当所绑定的数据有变更时, 通过 dep.notify()通知 Watcher
- 一个属性可能有多个依赖，每个响应式数据都有一个 Dep 来管理它的依赖

<img :src="$withBase('/Vue/dep依赖收集.png')" alt="foo"></img>

#### Dep 怎么收集依赖

```js
function defineReactive(obj, key, val) {
  let Dep; // 依赖

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      // 被读取了，将这个依赖收集起来
      Dep.depend(); // 本次新增
      return val;
    },
    set: (newVal) => {
      if (val === newVal) {
        return;
      }
      val = newVal;
      // 值被改变，通知依赖去更新
      Dep.notify(); // 本次新增
      console.log("数据被改变了，通知所有的wather去调用update!");
    },
  });
}
```

### **Watcher**

Watcher 和 Dep 比较难理解，可以暂时这样理解，Dep 和 data 挂钩，每一个 Dep 实例就对应 data 的一个键值对，Watcher 实例则依赖于 Dep，那么有三个情况会依赖，也就是三个 watcher

Watcher 就是类似观察者的角色，他的主要作用是为观察属性提供回调函数以及收集依赖（如计算属性 computed，vue 会把该属性所依赖数据的 dep 添加到自身的 deps 中），当被观察的值发生变化时，会接收到来自 dep 的通知，执行 watcher.update()

```js
class Watcher {
  addDep() {
    // 我这个Watcher要被Observer添加到Dep里去了~~
  },
  update() {
    // Dep通知我要更新
  },
}
```

## Vue2 响应式

通过 `Object.defineProperty` API 劫持数据的变化，在数据被访问的时候收集依赖，然后在数据被修改的时候通知依赖更新

### 缺点

- Object.defineProperty 只对初始对象里的属性有监听作用，而对新增的属性无效,所以有`Vue.$set，$delete`
- 对数组的操作有限,`利用索引直接设置一个数组项时`,`当你修改数组的长度`都不是响应式
- 需要对每个属性进行遍历监听，如果嵌套对象，需要深层监听，造成性能问题

### 缺点的弥补

- set、delete 方法
- 重写数组方法

```js
// 数组重写
const originalProto = Array.prototype;
const arrayProto = Object.create(originalProto)[
  ("push", "pop", "shift", "unshift", "splice", "reverse", "sort")
].forEach((method) => {
  arrayProto[method] = function () {
    originalProto[method].apply(this.arguments);
    dep.notice();
  };
});
```

## Vue3 响应式

`Proxy`直接可以劫持整个对象，并返回一个新对象，我们可以只操作新的对象达到响应式目的

```js
function reactive(obj) {
  if (typeof obj !== "object" && obj != null) {
    return obj;
  }
  const observed = new Proxy(obj, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      console.log(`获取${key}:${res}`);
      return res;
    },
    set(target, key, value, receiver) {
      const res = Reflect.set(target, key, value, receiver);
      console.log(`设置${key}:${value}`);
      return res;
    },
    deleteProperty(target, key) {
      const res = Reflect.deleteProperty(target, key);
      console.log(`删除${key}:${res}`);
      return res;
    },
  });
  return observed;
}
```

---
{ "title": "Vue响应式原理" }
---

# Vue 的响应式原理

[Vue源码解读](https://ustbhuangyi.github.io/vue-analysis/v2/data-driven/new-vue.html)

## Vue 响应式原理的核⼼就是`Observer`、`Dep`、`Watcher`

[一篇异常详细的掘金](https://juejin.cn/post/7074422512318152718)

- Observer 中进⾏响应式的绑定，监听数据变化，在数据被读的时候，触发 get ⽅法，执⾏ Dep 来收集依赖，也就是收集 Watcher
- 在数据被改的时候，触发 set ⽅法，通过对应的所有依赖(Watcher)，去执⾏更新。

vue 文档中的原图
<img :src="$withBase('/Vue/vue响应式.png')" alt="foo"></img>

## 如何监听数据的变化

### **Observer**观察者

简单说就是通过劫持数据，在 setter 中向 Dep（调度中心）添加观察者，在 getter 中通知观察者更新

详细一点`Object.defineProperty()`

- 对象传入 vue 实例作为 data 选项
- Vue 将遍历此对象所有的`property`，通过`Object.defineProperty`把 property 转化为`getter`/`setter`
- 当 Observer 中对象的属性被`访问`，则通过 getter 返回值
- 当 Observer 中对象的属性被`编辑修改`，则通过 setter 更新 data 中的值

```js
//observer
let data = {
  name: "hahaha",
  age: 18,
};
//创建一个监视的实例对象，用于监视data中属性的变化
const obs = new Observer(data);
//创建实例对象
let vm = {};
vm._data = data = obs;

//Object.defineProperty通过实现一个observer
function Observer(obj) {
  //汇总对象中所有的属性形成一个数组
  const keys = Object.keys(obj);
  //遍历
  keys.forEach((key) => {
    Object.defineProperty(this, key, {
      get() {
        return obj[key]; //根据key返回对象中的值
      },
      set(val) {
        obj[key] = val; //通过set修改data中的值
      },
    });
  });
}
```

### **Dep**依赖管理

收集依赖，通知观察者

Dep 扮演的角色是调度中心/订阅器，主要的作用就是收集观察者 Watcher 和通知观察者目标更新。每个属性拥有自己的消息订阅器 dep，用于存放所有订阅了该属性的观察者对象，当数据发生改变时，会遍历观察者列表（dep.subs），通过 dep.notify()所有的 watch，让订阅者 watcher 执行自己的 update 逻辑

### **Watcher**订阅者

Watcher 扮演的角色是订阅者，他的主要作用是为观察属性提供回调函数以及收集依赖（如计算属性 computed，vue 会把该属性所依赖数据的 dep 添加到自身的 deps 中），当被观察的值发生变化时，会接收到来自 dep 的通知，从而触发回调函数

<img :src="$withBase('/Vue/发布订阅.png')" alt="foo"></img>

## Vue2 响应式

通过 `Object.defineProperty` API 劫持数据的变化，在数据被访问的时候收集依赖，然后在数据被修改的时候通知依赖更新

### 缺点

- Object.defineProperty 只对初始对象里的属性有监听作用，而对新增的属性无效,所以有`Vue.$set，$delete`
- 对数组的操作有限,`利用索引直接设置一个数组项时`,`当你修改数组的长度`都不是响应式
- 需要对每个属性进行遍历监听，如果嵌套对象，需要深层监听，造成性能问题

### 缺点的弥补

- set、delete方法
- 重写数组方法

```js
// 数组重写
const originalProto = Array.prototype
const arrayProto = Object.create(originalProto)
['push', 'pop', 'shift', 'unshift', 'splice', 'reverse', 'sort'].forEach(method => {
  arrayProto[method] = function () {
    originalProto[method].apply(this.arguments)
    dep.notice()
  }
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

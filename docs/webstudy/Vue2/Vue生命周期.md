---
{ "title": "Vue生命周期" }
---

# Vue 生命周期

## 每个钩子都做了什么

- beforeCreate:创建实例之前执行，元素和数据都是 undefined。
- created:实例初始化完成后执行，可以访问数据或方法，不能操作 DOM。可以做一些初始数据的获取，发送 ajax。
- beforeMount:挂载前执行，虚拟 DOM 创建完成，即将开始渲染。
- Mounted:页面渲染完成后执行，可以对 DOM 进行操作。
- beforeUpdate：数据发生更新时执行。此时 vue 实例中的数据是最新的，但是页面数据仍是旧值。
- updated：数据发生更新导致的 DOM 重新渲染完成时执行。
- beforeDestroy：实例销毁前执行。实例仍然可以使用，一般在这个时候清除定时器或者解除事件绑定等。
- destroyed：实例销毁完成。

## Vue3 和 Vue2 比较

- beforeCreate===>setup()
- created =======> setup()
- beforeMount ===> onBeforeMount
- mounted =======> onMounted
- beforeUpdate ===> onBeforeUpdate
- updated =======>onUpdated
- beforeDestroy ==> onBeforeUnmount
- destroyed =====> onUnmounted

## 父子组件生命周期顺序

### 初始、挂载阶段

父组件 beforeCreate => 父组件 created => 父组件 beforeMount => 子组件 beforeCreate => 子组件 created => 子组件 beforeMount => 子组件 mounted => 父组件 mounted
为什么？

- 有父才有子，所以一开始是父组件先创建实例
- mounted 本身就是挂在到页面上的钩子，所以必须要等所有的子组件完成后再一起挂载到页面中

### 更新阶段

父组件 beforeUpdate => 子组件 beforeUpdate => 子组件 updated => 父组件 updated

### 销毁阶段

父组件 beforeDestroy => 子组件 beforeDestroy => 子组件 destroyed => 父组件 destroyed

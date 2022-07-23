---
{
  'title':'Vue生命周期'
}
---
# Vue生命周期

## 每个钩子都做了什么

- beforeCreate:创建实例之前执行，元素和数据都是undefined。
- created:实例初始化完成后执行，可以访问数据或方法，不能操作DOM。可以做一些初始数据的获取，发送ajax。
- beforeMount:挂载前执行，虚拟DOM创建完成，即将开始渲染。
- Mounted:页面渲染完成后执行，可以对DOM进行操作。
- beforeUpdate：数据发生更新时执行。此时vue实例中的数据是最新的，但是页面数据仍是旧值。
- updated：数据发生更新导致的 DOM 重新渲染完成时执行。
- beforeDestroy：实例销毁前执行。实例仍然可以使用，一般在这个时候清除定时器或者解除事件绑定等。
- destroyed：实例销毁完成。

## Vue3和Vue2比较

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

父组件beforeCreate => 父组件created => 父组件beforeMount => 子组件beforeCreate => 子组件created => 子组件beforeMount => 子组件mounted => 父组件mounted

### 更新阶段

父组件beforeUpdate => 子组件beforeUpdate => 子组件updated => 父组件updated

### 销毁阶段

父组件beforeDestroy => 子组件beforeDestroy => 子组件destroyed => 父组件destroyed

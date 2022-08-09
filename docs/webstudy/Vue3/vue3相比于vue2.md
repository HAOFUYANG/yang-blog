---
{ title:'vue3相比于vue2' }
---

# vue3 相比于 vue2

## 对比

### 1、vue3-composition API 和 vue2-options Api

#### hooks

在此想到和 vue2 mixin 有关的缺陷就不解释，hooks 的使用很好的规避使用 mixin 的问题

- 使用 Vue3 的组合 API 封装的可复用的功能函数

- 知道复用功能代码的引用来源, 不会出现像 mixin 这种隐式引用的弊端

##### 实现一个获取鼠标位置的 hooks

```js
import { ref, onMounted, onUnmounted, Ref } from "vue";
interface Position {
  x: Ref<number>;
  y: Ref<number>;
}
function getMousePosition(): Position {
  const x = ref(0);
  const y = ref(0);

  const updateMouse = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  onMounted(() => {
    document.addEventListener("click", updateMouse);
  });

  onUnmounted(() => {
    document.removeEventListener("click", updateMouse);
  });

  return { x, y };
}
export default getMousePosition;
```

组件中使用

```vue
<template>
  <div>
    <p>X: {{ x }}</p>
    <p>Y: {{ y }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// 引入hooks
import getMousePosition from "../../hooks/MousePosition";
export default defineComponent({
  setup() {
    // 使用hooks功能
    const { x, y } = useMousePosition();
    return {
      x,
      y,
    };
  },
});
</script>
```

### 2、生命周期

- beforeCreate===>setup()
- created =======> setup()
- beforeMount ===> onBeforeMount
- mounted =======> onMounted
- beforeUpdate ===> onBeforeUpdate
- updated =======>onUpdated
- beforeDestroy ==> onBeforeUnmount
- destroyed =====> onUnmounted

### 3、vue3 对全局 API 的优化

在 Vue3 中，全局和内部 API 都经过了重构，并考虑到了 `tree-shaking `的支持。因此，全局 API 现在只能作为 ES 模块构建的命名导出进行访问

```js
import { nextTick } from "vue";
nextTick(() => {
  //操作Dom
});
```

### 4、ts 的支持

#### ts 重构 vue2 的痛

之前通过 ts 重构过 vue2 的项目，总体来说，对原有代码的改变很大，需要使用 vue-class-component 等装饰器，写入 vue2 的 watch,computed,props 等，对原有代码的翻新量很大，就意味着重构的成本很高

`但Vue 3 中，TS 是原生支持的，因为 Vue 3 本身就是用 TS 编写的`

### 5、Proxy

### 6、Fragment, Teleport, Suspense

#### Fragment（碎片）告别一个 template 标签包起整个组件,组件可以没有根标签

#### Teleport 传送门

##### `使用`

假如我们在一个父组件中引用了一个子组件，那么渲染成页面后这个子组件 HTML 也是必然被父组件 HTML 包含的。但是，如果我们把子组件放置到了 teleport 组件中。那么我们就可以指定该子组件渲染到父组件之外的其它 DOM 节点下，比如 body、或者其它的 DOM 等

**注意**：teleport 改变的只是内部元素的渲染地方，相当于只是影响 CSS 样式，并没有更改 JS 逻辑，所以它们父子组件的逻辑还是存在的。

```vue
//可以传送节点或者自定义组件等，disable属性可以控制是否禁止传送
<Teleport to="body" :disabled="true">
  <my-component></my-component>
</Teleport>
```

##### `为什么使用？`

假如一种场景，n 个弹窗，那么我们如何管理同时弹窗时的层级关系，如果每个弹窗都在各自的父组件中，那么我们是没法控制的，所有我们有必要把它们都拧出来，放在同一个父元素下面，这样就可以方便的设置层级关系了

#### Suspense

[在掘金上的一篇，很详细](https://juejin.cn/post/6854573214547312654#heading-5)

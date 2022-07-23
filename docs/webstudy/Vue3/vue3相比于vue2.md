---
{
  title:'vue3相比于vue2'
}
---
# vue3相比于vue2

## 对比

### 1、vue3-composition API和vue2-options Api

#### hooks

在此想到和vue2 mixin有关的缺陷就不解释，hooks的使用很好的规避使用mixin的问题

- 使用Vue3的组合API封装的可复用的功能函数

- 知道复用功能代码的引用来源, 不会出现像mixin这种隐式引用的弊端

##### 实现一个获取鼠标位置的hooks

```js
import { ref, onMounted, onUnmounted, Ref } from 'vue'
interface Position {
  x: Ref<number>,
  y: Ref<number>
}
function getMousePosition(): Position {
  const x = ref(0)
  const y = ref(0)

  const updateMouse = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    document.addEventListener('click', updateMouse)
  })

  onUnmounted(() => {
    document.removeEventListener('click', updateMouse)
  })

  return { x, y }
}
export default getMousePosition
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
import { defineComponent} from 'vue'
// 引入hooks
import getMousePosition from '../../hooks/MousePosition'
export default defineComponent({
  setup () {
    // 使用hooks功能
    const { x, y } = useMousePosition()
    return {
      x,
      y
    }
  }
})
</script>
```

### 2、生命周期

### 3、vue3对全局API的优化

在 Vue3 中，全局和内部 API 都经过了重构，并考虑到了 tree-shaking 的支持。因此，全局 API现在只能作为 ES 模块构建的命名导出进行访问

```js
import { nextTick } from 'vue'
nextTick(() => {
  //操作Dom
})
```

### 4、ts的支持

### 5、Proxy

### 6、Fragment, Teleport, Suspense

- Fragment（碎片）告别一个template标签包起整个组件

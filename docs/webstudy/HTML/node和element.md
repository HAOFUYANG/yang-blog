---
 {
   'title':'node和element'
 }
---

### node和element

<img :src="$withBase('/html/node和element.jpg')" alt="foo"></img>

- DOM树的每一个节点都是node
- Node是一个基类，是Element的基类
- ELement是其他HTML元素的基类，如HTMLDivElement

### HTMLCollection和NodeList

- HTMLCollection是Element的集合
- NodeList是node的集合

```html
<html>
  <p id="p1">
    <span>标签1</span><b>标签2</b>
  </p>
</html>
<script>
  const p = document.getElementById('p1')
  console.log('p :>> ', p); 
  //children和childNodes的明显区别
  //children是Element中的节点，div，span等标签
  console.log('p.children :>> ', p.children); //HTMLCollection(2)  [span, b]
  //childNodes包含node节点，包括text和comment等
  console.log('p.childNodes :>> ', p.childNodes); //NodeList(4)  [text, span, b, text]
</script>
```

> 注：HTMLCollection和NodeList不是数组，是类数组

#### 那么如何将类数组编程数组

- Array.from(list)
- Array.prototype.slice.call(list)
- [...list]

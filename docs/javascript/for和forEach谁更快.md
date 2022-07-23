---
{ "title": "for和forEach谁更快" }
---

# for 和 forEach 谁更快

- for 更快，forEach 可读性更好

## 为什么？

for 直接在当前函数中执行，forEach 每次都要新创建一个函数。
函数有单独的作用域和上下文（可回顾“堆栈模型”），所以耗时更久。

## 如何验证？

```js
const arr = [];
for (let i = 0; i < 1000 * 10000; i++) {
  arr.push(i);
}
const length = arr.length;

console.time("for");
let n1 = 0;
for (let i = 0; i < length; i++) {
  n1++;
}
console.timeEnd("for"); // for: 11.7373046875 ms

console.time("forEach");
let n2 = 0;
arr.forEach(() => n2++);
console.timeEnd("forEach"); // forEach: 67.514892578125 ms
```

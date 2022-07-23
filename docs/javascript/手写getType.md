---
{
  title:'手写getType',
}
---
# 手写getType

重点是使用Object.prototype.toString.call()

- 获取详细的数据类型

```ts
/**
 * 获取详细的数据类型
 * @param val
 */
function getType(val: any): string {
  //调用原型中的方法
  const typeProto = Object.prototype.toString.call(val) //[object String]
  const spaceIndex = typeProto.indexOf(' ')
  const type = typeProto.slice(spaceIndex + 1, -1)
  return type.toLowerCase()
}
console.info(getType(() => { }))
console.log(getType(100))
console.log(getType({}))
```

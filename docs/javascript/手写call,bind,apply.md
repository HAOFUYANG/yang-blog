---
{
  "title":'手写call,bind,apply'
}
---

## 手写bind

- 调用bind过程中不会执行方法,只会返回一个方法

```js
Function.prototype.newbind = function(){
  const args = Array.prototype.slice.call(arguments)
  //获取数组的第一项
  const t = args.shift()
  //fn.bind()中的fn 
  const self = this
  //返回函数
  return function(){
    return self.apply(t,args)
  }
}
function fn1(a,b,c){
  console.log('this :>> ', this);
  return 'this.is fn1'
}
const fn2 = fn1.newbind({x:100},1,2,3,4)
const res = fn2()
```

## 手写call

```js
Function.prototype.myCall= function (context,...args) {
  context = context || {}
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}
```

## 手写apply

```js
Function.prototype.myApply = function (context,args) {
  context = context || {}
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}
```

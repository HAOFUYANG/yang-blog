---
{
  "title":'reduce'
}
---
## reduce

### 基本

> arr.reduce(callback, [initialValue])

callback包括四个参数

- accumulator
- currentValue
- currentIndex
- array

### 使用

#### 求和

```js
let arr = [1,2,3,4]
arr.reduce((accumulator, currentValue, currentIndex)=>{
  return accumulator+currentValue
},0)
```

#### 求最大值最小值

```js
let arr = [200,2,3,4,100];
 let arrresult = arr.reduce((accumulator, currentValue, currentIndex) => {
    return Math.max(accumulator, currentValue)
 })
 console.log(arrresult) //200
 let arrresult1 = arr.reduce((accumulator, currentValue, currentIndex) => {
          return Math.min(accumulator, currentValue)
 })
 console.log(arrresult1) //2
 //过于麻烦
 //不如
 Math.max(...[1,2,3,4])
```

#### 去重unique

```js
 let array = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
  { id: 5, name: "d" },
  { id: 1, name: "e" },
];
function unique(arr,key){
  let obj = {}
  return arr.reduce((accumulator,currentValue,currentIndex)=>{
   //当前key键的value值存在于obj函数中时,说明重复
    if(!obj[currentValue[key]]){
      obj[currentValue[key]]=true
      accumulator.push(currentValue)
    }
    return accumulator
  },[])
}
console.log('unique(array,id) :>> ', unique(array,'id'));
```

#### 扁平化flatten

```js
function flatten(arr){
  return arr.reduce((accumulator,currentValue,currentIndex)=>{
    return accumulator.concat(Array.isArray(currentValue)?flatten(currentValue):currentValue)
  },[])
}
console.log(flatten([1,[2,3],[4,5,[6,7]]]))
```

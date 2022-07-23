---
{
  'title':'for in和for of'
}
---

## for in和for of

- `for in`可以遍历对象返回key，遍历数组，返回下标index
- `for of`可以遍历数组，返回值，不能遍历对象

```js
//遍历对象
  let obj = {
    name:'yang',
    age:18
  }
  for(let i in obj){
    console.log('i :>> ', i); // name  age
  }
  for(let i of obj){
    console.log('i :>> ', i); //obj is not iterable
  }

  // 遍历数组
  let arr = [1,2,3,4]
  for(let item in arr){
    console.log('item :>> ', item); //0 1 2 3
  }
  for(let item of arr){
    console.log('item :>> ', item); // 1 2 3 4
  }
```

- `for of`可以遍历`Set`,`Map`

```js
 //map
  let map = new Map([
    ['name','yang'],
    ['age',18]
  ])
  for(let i of map){
    console.log('i :>> ', i);
    //i :>>  ['name', 'yang']
    //i :>>  ['age', 18]
  }

  //Set
  let set = new Set([1,2,3,3,4,4,5])
  for(let i of set) {
    console.log('i :>> ', i);
  }
```

> for in用于可枚举数据，如数组，对象，字符串

```js
let obj = {'name':'yang'}
Object.getOwnPropertyDescriptors(obj)
// {
//     "name": {
//         "value": "yang",
//         "writable": true,
//         "enumerable": true, //可枚举属性为true
//         "configurable": true
//     }
// }
```

- Object.getOwnPropertyDescriptor()——获取所有属性里面的数据描述符

> for of用于可迭代数据，数组、字符串、Map、Set

### 对象根据主键去重

根据对象的主键去重，如果对象a中存在与b对象主键相同的元素，则删除掉，最后输出a

```js
let obj1 = {
    '0x123456':'a',
    '0x123455':'b',
    '0x195237':'c',
    '0x145839':'d'
  }
  let obj2 = {
    '0x123456':'adede',
    '0x123465':'brrg',
    '0x195247':'cvvfv',
    '0x123455':'dcsq'
  }
 
  function getUniqueObj(a,b){
    for(let i in a) {
    for(let e in b){
      if(i===e){
        delete a[i]
      }
    }
  }
  return a
  }
  console.log(getUniqueObj(obj1,obj2))
```

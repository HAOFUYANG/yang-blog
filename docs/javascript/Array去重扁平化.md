---
{ "title": "Array去重扁平化" }
---

### 数组去重

#### reduce(数组对象去重)

```js
let array = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
  { id: 5, name: "d" },
  { id: 1, name: "e" },
];
function unique(arr, key) {
  let obj = {};
  return arr.reduce((accumulator, currentValue, currentIndex) => {
    //当前key键的value值存在于obj函数中时,说明重复
    if (!obj[currentValue[key]]) {
      obj[currentValue[key]] = true;
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
}
console.log("unique(array,id) :>> ", unique(array, "id"));
```

### 数组扁平化(Array flatten)

#### 递归+reduce

```ts
export function flattenByReduce(arr:any[]=[]):any[] {
  let res:any = []
  arr.reduce((acc,cur,index)=>{
    res = acc.concat(Array.isArray(cur)?flattenByReduce(cur):cur)
  },[])
  return res
}
console.log('flatten() :>> ', flattenByConcat([1,2,[3],[4,[5,[6]]]]));
```

#### 递归 +concat

```ts
/**
 * concat
 */

export function flattenByConcat(arr: any[]): any[] {
  let res: any = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res = res.concat(flattenByConcat(item));
    } else {
      res = res.concat(item);
    }
  });
  return res;
}
console.log("flatten() :>> ", flattenByConcat([1, 2, [3], [4, [5, [6]]]]));
```

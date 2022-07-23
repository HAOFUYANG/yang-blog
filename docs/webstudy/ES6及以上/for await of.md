---
{
  'title':'for await of'
}
---

## for await of(异步迭代器)

### for await of

循环等待每个Promise对象变为resolved状态才进入下一步

```js
function getData(data){
    return new Promise(resovle=>{
      setTimeout(()=>{
        resovle(data)
      },1500)
    })
  }
  //使用Promise.all
  (async function(){
    const apiList = [getData(100),getData(200),getData(300)]
    Promise.all(apiList).then(res=>{
      console.log('res :>> ', res); //[100,200,300]
    })
  })()
  //使用for await of
  (async function(){
    const apiList = [getData(100),getData(200),getData(300)]
    for await(let res of apiList){
      console.log('res :>> ', res);
    }
  })()
```

> for await of等同于Promise.all,写法更加优雅

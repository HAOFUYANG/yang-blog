---
{ "title": "手写promise" }
---

### 手写promise

```js
class promise {
  constructor(executor){
    //初始化pending
    this.state = 'pending'
    //success
    this.value = undefined
    //失败
    this.reason = undefined
    //resolve
    let resolve = value=>{
      if(this.state === 'pending'){
        this.state = 'fulfilled'
        this.value = value
      }
    }
    //reject
    let reject = reson=>{
      if(this.state = 'pending'){
        this.state = 'rejected'
        this.reason = reason
      }
    }
    try {
      executor(resolve,reject)
    }catch(err)=>{
      reject(err)
    }
  }
}
```

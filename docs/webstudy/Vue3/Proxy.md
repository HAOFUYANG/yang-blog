# Proxy

## Proxy demo

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1,maximum-scale=1,user-scalable=no"
    />
    <meta name="format-detection" content="telephone=no" />
    <title>Observe demo</title>
  </head>
  <body>
    <script src="./proxy-demo.js">
      //如何监听Array
      // const data = [1,2,3,4]
      //如何监听Object
      const data = {
        a:1,
        b:2
      }
      const proxyData = new Proxy(data,{
        get(target, key, receiver) {
          // 只处理本身（非原型的）属性
          const ownKeys = Reflect.ownKeys(target)
          if(ownKeys.includes(key)){
            console.log('get', key) // 此处监听
          }
          const result = Reflect.get(target, key, receiver)
          console.log('result :>> ', result);
          return result // 返回结果
        },
        set(target, key, val, receiver) {
          // 重复的数据，不处理
          if (val === target[key]) {
            return true
          }
          const result = Reflect.set(target, key, val, receiver)
          console.log('result', result) // true
          return result // 是否设置成功
        },
        deleteProperty(target, key) {
          const result = Reflect.deleteProperty(target, key)
          console.log('result', result) // true
          return result // 是否删除成功
        }
      })
    </script>
  </body>
</html>
```

## 实现 Proxy-Observe

### 代码

```js
// 创建响应式
function reactive(target = {}) {
  if (typeof target !== "object" || target == null) {
    // 不是对象或数组，则返回
    return target;
  }

  // 代理配置
  const proxyConf = {
    get(target, key, receiver) {
      // 只处理本身（非原型的）属性
      const ownKeys = Reflect.ownKeys(target);
      //判断当前target是否有此属性
      if (ownKeys.includes(key)) {
        console.log("get", key); // 监听
      }
      const result = Reflect.get(target, key, receiver);
      // 深度监听
      // 性能如何提升的？
      // vue2，一开始就直接将所有数据递归完成实现响应式
      // 而vue3中，get到哪一个层级之后才进行递归，是一种惰性的操作
      return reactive(result);
    },
    set(target, key, val, receiver) {
      // 重复的数据，不处理
      if (val === target[key]) {
        return true;
      }
      //如何判断新增属性
      //根据Reflect.ownKeys，通过比较现有的，来识别是否是新增的属性
      const ownKeys = Reflect.ownKeys(target);
      if (ownKeys.includes(key)) {
        console.log("已有的 key", key);
      } else {
        console.log("新增的 key", key);
      }

      const result = Reflect.set(target, key, val, receiver);
      console.log("set", key, val);
      // console.log('result', result) // true
      return result; // 是否设置成功
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key);
      console.log("delete property", key);
      // console.log('result', result) // true
      return result; // 是否删除成功
    },
  };

  // 生成代理对象
  const observed = new Proxy(target, proxyConf);
  return observed;
}

// 测试数据
const data = {
  name: "hahaha",
  age: 20,
  address: {
    a: {
      b: {
        c: {
          d: "abc121211",
        },
      },
    },
  },
};
//实现监听数据
const proxyData = reactive(data);
```

### Proxy 优势

- 深度监听，性能更好
- 可以监听数组变化
- 可以监听新增和删除对象属性

## Reflect（反射）

```js
const obj = { a: 1, b: 2, c: 3 };
//检查对象中是否有某个属性
"a" in obj; //true
Reflect.has(obj, "a"); //true
//删除某属性
delete obj.a;
Reflect.deleteProperty(obj, "a"); //建议使用此Api
//获取属性
Object.getOwnPropertyNames(obj); ////['a','b','c']
Reflect.ownKeys(obj); //['a','b','c']
```

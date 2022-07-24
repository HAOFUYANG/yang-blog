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

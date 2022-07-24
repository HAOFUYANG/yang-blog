
# vue-router

vue中的router的底层就是通过浏览器的onhashChange，onpopstate等时间实现

## hash实现路由

- hash的变化会触发网页的跳转，及浏览器的前进和后退
- hash的变化不会刷新页面，这是SPA需要的特点，让这个网页看起来像一个独立的应用，页面内部的刷新通过框架的钩子或者特定方法完成
- hash不会提交到server端（url中的#在浏览器端的接口请求中不会存在

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>hash test</title>
</head>
<body>
    <p>hash test</p>
    <button id="btn1">修改 hash</button>

    <script>
        // hash 变化，包括：
        // a. JS 修改 url
        // b. 手动修改 url 的 hash
        // c. 浏览器前进、后退
        window.onhashchange = (event) => {
            console.log('old url', event.oldURL)
            console.log('new url', event.newURL)

            console.log('hash:', location.hash)
        }
        // 页面初次加载，获取 hash
        document.addEventListener('DOMContentLoaded', () => {
            console.log('hash:', location.hash)
        })
        // JS 修改 url
        document.getElementById('btn1').addEventListener('click', () => {
            location.href = '#/user'
        })
    </script>
</body>
</html>
```

## history实现路由

- 用url规范的路由，跳转不刷新页面
- hisory.pushState
- window.onpopstate

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>history API test</title>
  </head>
  <body>
    <p>history API test</p>
    <button id="btn1">修改 url</button>

    <script>
      // 页面初次加载，获取 path
      document.addEventListener("DOMContentLoaded", () => {
        console.log("load", location.pathname);
      });

      // 打开一个新的路由
      // 【注意】用 pushState 方式，浏览器不会刷新页面
      document.getElementById("btn1").addEventListener("click", () => {
        const state = { name: "page1" };
        console.log("切换路由到", "page1");
        window.history.pushState(state, "", "page1"); // 重要！！
      });
      // 监听浏览器前进、后退
      window.onpopstate = (event) => {
        console.log("event :>> ", event);
        console.log("onpopstate", event.state, location.pathname);
      };
    </script>
  </body>
</html>

```

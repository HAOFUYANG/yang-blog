---
{
  'title':'token和cookie'
}
---
# token和cookie

## cookie

http 请求是无状态的，即每次请求之后都会断开链接。<br>
所以，<br>
引入cookie，客户端向同一个域名下发送请求，会携带相同的 cookie，服务器拿到 cookie 进行解析，便能拿到客户端的状态。而服务端可以通过响应头中的Set-Cookie字段来对客户端写入Cookie<br>
由于每次请求都携带 cookie ，所以 cookie 大小限制 4kb 以内。

![](/http/cookie.png)

### cookie跨域限制

浏览器存储 cookie 是按照域名区分的，在浏览器无法通过 JS `document.cookie` 获取到其他域名的 cookie

#### 解决cookie跨域

http 请求传递 cookie 默认有跨域限制。如果想要开启，需要客户端和服务器同时设置允许

- 客户端：使用 fetch 和 XMLHttpRequest 或者 axios 需要配置 `withCredentials`
- 服务端：需要配置 header `Access-Control-Allow-Credentials`

### 浏览器禁用第三方 cookie

现代浏览器都开始禁用第三方 cookie （第三方 js 设置 cookie），打击第三方广告，保护用户个人隐私。

例如一个电商网站 A 引用了淘宝广告的 js

- 你访问 A 时，淘宝 js 设置 cookie ，记录下商品信息
- 你再次访问淘宝时，淘宝即可获取这个 cookie 内容
- 再和你的个人信息（也在 cookie 里）一起发送到服务端，这样就知道了你看了哪个商品

### cookie+session登录

使用 cookie 做登录校验

- 前端输入用户名密码，传给后端
- 后端验证成功，返回信息给客户端信息时set-cookie，cookie里面有唯一标识该用户的sessionID
- 接下来所有接口访问，都自动带上 cookie（浏览器的默认行为， http 协议的规定),在服务器验证信息

#### 什么是 session ？

- cookie 只存储 userId ，不去暴露用户信息
- 用户信息存储在 session 中
- session 就是服务端的一个 hash 表
- 存储session 就要需要考虑吧内存的问题（基于Redis 存储 Session）

## token认证

- cookie是http 协议规范的，而 token 是自定义的，可以用任何方式传输（如 header body query-string 等）
- token 默认不会在浏览器存储
- token 没有跨域限制

### token+localstorage登录

- 用户登录，后端验证成功，token值到redis，并且返回给客户端token
- token一般是一串随机的字符(比如UUID)，value一般是用户ID，并且设置一个过期时间
- token可以存在localstorage或者vuex中
- 每次请求服务的时候带上token在请求头，
- 后端接收到token则根据token查一下redis是否存在，
- 如果存在则表示用户已认证，
- 如果token不存在则跳到登录界面让用户重新登录，登录成功后返回一个token值给客户端

#### JWT(JSON Web Token)

- 前端输入用户名密码，传给后端
- 后端验证成功，返回一段 token 字符串 - 将用户信息加密之后得到的
- 前端获取 token 之后，存储下来
- 以后访问接口，都在 header 中带上这段 token

![](/http/token.png)

## cookie和token区别

- cookie 是 http 规范，而 token 是自定义传递；
- cookie 会默认被浏览器存储，而 token 需要自己存储；
- cookie 默认有跨域限制，token 默认没有跨域限制；
- cookie 一般配合 session 使用，token 一般用于 jwt（json web token）

## session和JWT哪个更优

Session 优点

- 原理简单，易于学习
- 用户信息存储在服务端，可以快速封禁某个登录的用户 —— 有这方强需求的人，一定选择 Session

Session 缺点

- 占用服务端内存，有硬件成本
- 多进程、多服务器时，不好同步 —— 一般使用第三方 redis 存储 ，成本高
- 跨域传递 cookie ，需要特殊配置

JWT 的优点

- 不占用服务器内存
- 多进程、多服务器，不受影响
- 不受跨域限制

JWT 的缺点

- 无法快速封禁登录的用户
- token 体积一般大于 cookie，会增加请求的数据量

总结：如果没有“快速封禁登录用户”的需求，建议使用 JWT 方式。

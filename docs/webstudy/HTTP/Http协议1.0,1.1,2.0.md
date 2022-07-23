---
{
  'title':'Http协议1.0,1.1,2.0'
}
---
# Http协议

超文本传输协议HTTP协议被用于在Web浏览器和网站服务器之间传递信息
HTTP协议传输的数据都是未加密的，也就是明文的，因此使用HTTP协议传输隐私信息非常不安全，为了保证这些隐私数据能加密传输，于是网景公司设计了SSL（Secure Sockets Layer）协议用于对HTTP协议传输的数据进行加密，从而就诞生了HTTPS。简单来说，HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全。

## Http1.0

- 只能支持get和post请求

## Http1.1

- 引入更多的缓存策略，如 `cache-control` `E-tag`
- 支持断点续传，状态吗 `206`
- 增加新的 method `PUT` `DELETE` 等，可以设计**Restful API**
- 长链接，默认开启 `Connection: keep-alive` ，多次 http 请求减少了 TCP 连接次数

## Http2.0

- 支持header 压缩，以减少请求体积
- 多路复用，一个 TCP 连接中可以多个 http 并行请求。拼接资源（如雪碧图、多 js 拼接一个）将变的多余
- 服务器端推送

### Restful API

> 用URL定位资源、用HTTP动词（GET,POST,PUT,DELETE)描述操作

- GET（SELECT）：从服务器取出资源。
- POST（CREATE）：在服务器新建一个资源。
- PUT（UPDATE）：在服务器更新资源。
- DELETE（DELETE）：从服务器删除资源。

## https

http + TLS/SSL = https ，即加密传输信息。只有客户端和服务端可以解密为明文，中间的过程无法解密。

## http Headers

### request Headers

- `accept: */*` 可接受的数据格式
- `accept-encoding: gzip, deflate, br` 浏览器可接收的压缩算法
- `accept-language: zh-CN,zh;q=0.9,en;q=0.8` 语言
- `user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36`
- `cookie`
- `host` 请求的域名
- `Content-type` 发送数据的格式
- `Expires` 强缓存http1.0
- `Cache-Control` 强缓存http1.1

### Response Headers

- `content-type` 服务端向客户端返回的数据的格式
- `Content-length` 返回数据的大小
- `set-cookie` 服务端向客户端设置cookie
- `Date`
- `Content-Encoding` 浏览器可接收的压缩算法

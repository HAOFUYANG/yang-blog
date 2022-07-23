---
{
  'title':'webSocket'
}
---
# webSocket

### 简介

- WebSocket是一种在单个TCP连接上进行全双工通信的协议
- Websocket 通过HTTP/1.1 协议的101状态码进行握手
- webSocket 和 http 都是应用层，支持端对端的通讯。可以由服务端发起，也可以由客户端发起。<br>

**常见的应用场景**：消息通知，直播讨论区，聊天室，协同编辑

### webSocket 建立连接

会先发起一个 http 请求，根服务端建立连接。连接成功之后再升级为 webSocket 协议，然后再通讯

![](/http/ws连接.png)

### webSocket 和 http 区别

- 协议名称不同——websccoket是 `ws` 和 http是`http`
- http 一般只能浏览器发起请求，webSocket 可以双端发起请求
- webSocket 无跨域限制
- webSocket 通过 `send` 和 `onmessage` 进行通讯，http 通过 `req` 和 `res` 通讯

### wss

`ws` 可以升级为 `wss` 协议，像 `http` 升级到 `https` 一样，增加 `SSL` 安全协议。

(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{502:function(t,v,_){"use strict";_.r(v);var a=_(59),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"tcp和udp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp和udp"}},[t._v("#")]),t._v(" TCP和UDP")]),t._v(" "),_("h3",{attrs:{id:"tcp协议和udp协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp协议和udp协议"}},[t._v("#")]),t._v(" TCP协议和UDP协议")]),t._v(" "),_("p",[t._v("TCP 是一种面向有连接的传输层协议，能够对自己提供的连接实施控制。适用于要求可靠传输的应用，例如文件传输。面向字节流，传输慢")]),t._v(" "),_("p",[t._v("UDP 是一种面向无连接的传输层协议，不会对自己提供的连接实施控制。适用于实时应用，例如：IP电话、视频会议、直播等。，以报文的方式传输，效率高")]),t._v(" "),_("h3",{attrs:{id:"网络协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络协议"}},[t._v("#")]),t._v(" 网络协议")]),t._v(" "),_("ul",[_("li",[t._v("HTTP 在应用层，直接被程序使用，http1/2基于TCP传输协议")]),t._v(" "),_("li",[t._v("TCP 和 UDP 在传输层，底层")])]),t._v(" "),_("h3",{attrs:{id:"udp-的特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#udp-的特点"}},[t._v("#")]),t._v(" UDP 的特点")]),t._v(" "),_("p",[t._v("UDP 是一种无连接的、不可靠的传输层协议。而 TCP 需要连接、断开连接，参考“三次握手、四次挥手”。")]),t._v(" "),_("p",[t._v("不需要连接，所以 UDP 的效率比 TCP 高。")]),t._v(" "),_("p",[t._v("虽然 UDP 从协议层是不稳定的，但随着现代网络硬件环境的提升，也能保证绝大部分情况下的稳定性。所以，UDP 一直处于被发展的趋势。")]),t._v(" "),_("p",[t._v("例如视频会议、语音通话这些允许中段、不完全保证持续连接的场景，又需要较高的传输效率，就很适合 UDP 协议。")]),t._v(" "),_("h3",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("ul",[_("li",[t._v("HTTP 在应用层，而 UDP 和 TCP 在传输层")]),t._v(" "),_("li",[t._v("HTTP 是有连接的、可靠的，UDP 是无连接的、不可靠的")])]),t._v(" "),_("h2",{attrs:{id:"连环问-http-1-0-1-1-2-0-区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连环问-http-1-0-1-1-2-0-区别"}},[t._v("#")]),t._v(" 连环问：http 1.0 1.1 2.0 区别")]),t._v(" "),_("p",[t._v("http 1.0 最基础的 http 协议")]),t._v(" "),_("p",[t._v("http 1.1")]),t._v(" "),_("ul",[_("li",[t._v("引入更多的缓存策略，如 "),_("code",[t._v("cache-control")]),t._v(" "),_("code",[t._v("E-tag")])]),t._v(" "),_("li",[t._v("长链接，默认开启 "),_("code",[t._v("Connection: keep-alive")]),t._v(" ，多次 http 请求减少了 TCP 连接次数")]),t._v(" "),_("li",[t._v("断点续传，状态吗 "),_("code",[t._v("206")])]),t._v(" "),_("li",[t._v("增加新的 method "),_("code",[t._v("PUT")]),t._v(" "),_("code",[t._v("DELETE")]),t._v(" 等，可以设计 Restful API")])]),t._v(" "),_("p",[t._v("http2.0")]),t._v(" "),_("ul",[_("li",[t._v("header 压缩，以减少体积")]),t._v(" "),_("li",[t._v("多路复用，一个 TCP 连接中可以多个 http 并行请求。拼接资源（如雪碧图、多 js 拼接一个）将变的多余")]),t._v(" "),_("li",[t._v("服务器端推送")])])])}),[],!1,null,null,null);v.default=e.exports}}]);
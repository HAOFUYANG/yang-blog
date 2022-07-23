(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{515:function(e,s,_){"use strict";_.r(s);var v=_(59),r=Object(v.a)({},(function(){var e=this,s=e.$createElement,_=e._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"nodejs-多进程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-多进程"}},[e._v("#")]),e._v(" nodejs 多进程")]),e._v(" "),_("h2",{attrs:{id:"进程-process-和线程-thread"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程-process-和线程-thread"}},[e._v("#")]),e._v(" 进程 process 和线程 thread")]),e._v(" "),_("p",[_("code",[e._v("进程")]),e._v("-是操作系统进行资源调度和分配的基本单位，每个进程都拥有自己独立的内存区域（参考“堆栈模型”）。\n一个进程无法直接访问另一个进程的内存数据，除非通过合法的进程通讯。")]),e._v(" "),_("p",[e._v("执行一个 nodejs 文件，即开启了一个进程，可以通过 "),_("code",[e._v("process.pid")]),e._v(" 查看进程 id 。")]),e._v(" "),_("p",[_("code",[e._v("线程")]),e._v("-是操作系统进行运算调度的最小单位，线程是附属于进程的。一个进程可以包含多个线程（至少一个），多线程之间可共用进程的内存数据。"),_("br"),e._v("\n如操作系统是一个工厂，进程就是一个车间，线程就是一个一个的工人。")]),e._v(" "),_("p",[e._v("JS 是单线程的，即执行 JS 时启动一个进程（如 JS 引擎，nodejs 等），然后其中再开启一个线程来执行。"),_("br"),e._v("\n虽然单线程，JS 是基于事件驱动的，它不会阻塞执行，适合高并发的场景。")]),e._v(" "),_("h2",{attrs:{id:"nodejs-如何开启一个进程-进程之间如何通讯"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-如何开启一个进程-进程之间如何通讯"}},[e._v("#")]),e._v(" nodejs 如何开启一个进程，进程之间如何通讯")]),e._v(" "),_("ul",[_("li",[e._v("可使用 "),_("code",[e._v("child_process.fork")]),e._v(" 和 "),_("code",[e._v("cluster.fork")]),e._v(" 开启子进程")]),e._v(" "),_("li",[e._v("使用 "),_("code",[e._v("send")]),e._v(" "),_("code",[e._v("on")]),e._v(" 传递消息")])]),e._v(" "),_("h2",{attrs:{id:"为何需要多进程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为何需要多进程"}},[e._v("#")]),e._v(" 为何需要多进程")]),e._v(" "),_("p",[e._v("现代服务器都是多核 CPU ，适合同时处理多进程。即，一个进程无法充分利用 CPU 性能，进程数要等于 CPU 核数。")]),e._v(" "),_("p",[e._v("服务器一般内存比较大，但操作系统对于一个进程的内存分配是有上限的（2G），所以多进程才能充分利用服务器内存。")]),e._v(" "),_("h2",{attrs:{id:"nodejs-开启多进程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-开启多进程"}},[e._v("#")]),e._v(" nodejs 开启多进程")]),e._v(" "),_("p",[_("code",[e._v("child_process.fork")]),e._v(" 可开启子进程执行单独的计算")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("fork('xxx.js')")]),e._v(" 开启一个子进程")]),e._v(" "),_("li",[e._v("使用 "),_("code",[e._v("send")]),e._v(" 发送信息，使用 "),_("code",[e._v("on")]),e._v(" 接收信息")])]),e._v(" "),_("p",[_("code",[e._v("cluster.fork")]),e._v(" 可针对当前代码，开启多个进程来执行")]),e._v(" "),_("h2",{attrs:{id:"扩展-使用-pm2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#扩展-使用-pm2"}},[e._v("#")]),e._v(" 扩展：使用 PM2")]),e._v(" "),_("p",[e._v("nodejs 服务开启多进程、进程守护，可使用 "),_("a",{attrs:{href:"https://www.npmjs.com/package/pm2",target:"_blank",rel:"noopener noreferrer"}},[e._v("pm2"),_("OutboundLink")],1),e._v(" ，不需要自己写。")]),e._v(" "),_("ul",[_("li",[e._v("全局安装 pm2 "),_("code",[e._v("yarn global add pm2")])]),e._v(" "),_("li",[e._v("增加 pm2 配置文件")]),e._v(" "),_("li",[e._v("修改 package.json scripts")])])])}),[],!1,null,null,null);s.default=r.exports}}]);
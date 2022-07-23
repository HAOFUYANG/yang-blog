(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{525:function(e,t,r){"use strict";r.r(t);var a=r(59),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vue生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue生命周期"}},[e._v("#")]),e._v(" Vue生命周期")]),e._v(" "),r("h2",{attrs:{id:"每个钩子都做了什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#每个钩子都做了什么"}},[e._v("#")]),e._v(" 每个钩子都做了什么")]),e._v(" "),r("ul",[r("li",[e._v("beforeCreate:创建实例之前执行，元素和数据都是undefined。")]),e._v(" "),r("li",[e._v("created:实例初始化完成后执行，可以访问数据或方法，不能操作DOM。可以做一些初始数据的获取，发送ajax。")]),e._v(" "),r("li",[e._v("beforeMount:挂载前执行，虚拟DOM创建完成，即将开始渲染。")]),e._v(" "),r("li",[e._v("Mounted:页面渲染完成后执行，可以对DOM进行操作。")]),e._v(" "),r("li",[e._v("beforeUpdate：数据发生更新时执行。此时vue实例中的数据是最新的，但是页面数据仍是旧值。")]),e._v(" "),r("li",[e._v("updated：数据发生更新导致的 DOM 重新渲染完成时执行。")]),e._v(" "),r("li",[e._v("beforeDestroy：实例销毁前执行。实例仍然可以使用，一般在这个时候清除定时器或者解除事件绑定等。")]),e._v(" "),r("li",[e._v("destroyed：实例销毁完成。")])]),e._v(" "),r("h2",{attrs:{id:"vue3和vue2比较"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue3和vue2比较"}},[e._v("#")]),e._v(" Vue3和Vue2比较")]),e._v(" "),r("ul",[r("li",[e._v("beforeCreate===>setup()")]),e._v(" "),r("li",[e._v("created =======> setup()")]),e._v(" "),r("li",[e._v("beforeMount ===> onBeforeMount")]),e._v(" "),r("li",[e._v("mounted =======> onMounted")]),e._v(" "),r("li",[e._v("beforeUpdate ===> onBeforeUpdate")]),e._v(" "),r("li",[e._v("updated =======>onUpdated")]),e._v(" "),r("li",[e._v("beforeDestroy ==> onBeforeUnmount")]),e._v(" "),r("li",[e._v("destroyed =====> onUnmounted")])]),e._v(" "),r("h2",{attrs:{id:"父子组件生命周期顺序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#父子组件生命周期顺序"}},[e._v("#")]),e._v(" 父子组件生命周期顺序")]),e._v(" "),r("h3",{attrs:{id:"初始、挂载阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#初始、挂载阶段"}},[e._v("#")]),e._v(" 初始、挂载阶段")]),e._v(" "),r("p",[e._v("父组件beforeCreate => 父组件created => 父组件beforeMount => 子组件beforeCreate => 子组件created => 子组件beforeMount => 子组件mounted => 父组件mounted")]),e._v(" "),r("h3",{attrs:{id:"更新阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更新阶段"}},[e._v("#")]),e._v(" 更新阶段")]),e._v(" "),r("p",[e._v("父组件beforeUpdate => 子组件beforeUpdate => 子组件updated => 父组件updated")]),e._v(" "),r("h3",{attrs:{id:"销毁阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#销毁阶段"}},[e._v("#")]),e._v(" 销毁阶段")]),e._v(" "),r("p",[e._v("父组件beforeDestroy => 子组件beforeDestroy => 子组件destroyed => 父组件destroyed")])])}),[],!1,null,null,null);t.default=v.exports}}]);
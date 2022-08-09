(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{522:function(e,t,r){"use strict";r.r(t);var a=r(59),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vue-生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-生命周期"}},[e._v("#")]),e._v(" Vue 生命周期")]),e._v(" "),r("h2",{attrs:{id:"每个钩子都做了什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#每个钩子都做了什么"}},[e._v("#")]),e._v(" 每个钩子都做了什么")]),e._v(" "),r("ul",[r("li",[e._v("beforeCreate:创建实例之前执行，元素和数据都是 undefined。")]),e._v(" "),r("li",[e._v("created:实例初始化完成后执行，可以访问数据或方法，不能操作 DOM。可以做一些初始数据的获取，发送 ajax。")]),e._v(" "),r("li",[e._v("beforeMount:挂载前执行，虚拟 DOM 创建完成，即将开始渲染。")]),e._v(" "),r("li",[e._v("Mounted:页面渲染完成后执行，可以对 DOM 进行操作。")]),e._v(" "),r("li",[e._v("beforeUpdate：数据发生更新时执行。此时 vue 实例中的数据是最新的，但是页面数据仍是旧值。")]),e._v(" "),r("li",[e._v("updated：数据发生更新导致的 DOM 重新渲染完成时执行。")]),e._v(" "),r("li",[e._v("beforeDestroy：实例销毁前执行。实例仍然可以使用，一般在这个时候清除定时器或者解除事件绑定等。")]),e._v(" "),r("li",[e._v("destroyed：实例销毁完成。")])]),e._v(" "),r("h2",{attrs:{id:"vue3-和-vue2-比较"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue3-和-vue2-比较"}},[e._v("#")]),e._v(" Vue3 和 Vue2 比较")]),e._v(" "),r("ul",[r("li",[e._v("beforeCreate===>setup()")]),e._v(" "),r("li",[e._v("created =======> setup()")]),e._v(" "),r("li",[e._v("beforeMount ===> onBeforeMount")]),e._v(" "),r("li",[e._v("mounted =======> onMounted")]),e._v(" "),r("li",[e._v("beforeUpdate ===> onBeforeUpdate")]),e._v(" "),r("li",[e._v("updated =======>onUpdated")]),e._v(" "),r("li",[e._v("beforeDestroy ==> onBeforeUnmount")]),e._v(" "),r("li",[e._v("destroyed =====> onUnmounted")])]),e._v(" "),r("h2",{attrs:{id:"父子组件生命周期顺序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#父子组件生命周期顺序"}},[e._v("#")]),e._v(" 父子组件生命周期顺序")]),e._v(" "),r("h3",{attrs:{id:"初始、挂载阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#初始、挂载阶段"}},[e._v("#")]),e._v(" 初始、挂载阶段")]),e._v(" "),r("p",[e._v("父组件 beforeCreate => 父组件 created => 父组件 beforeMount => 子组件 beforeCreate => 子组件 created => 子组件 beforeMount => 子组件 mounted => 父组件 mounted\n为什么？")]),e._v(" "),r("ul",[r("li",[e._v("有父才有子，所以一开始是父组件先创建实例")]),e._v(" "),r("li",[e._v("mounted 本身就是挂在到页面上的钩子，所以必须要等所有的子组件完成后再一起挂载到页面中")])]),e._v(" "),r("h3",{attrs:{id:"更新阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更新阶段"}},[e._v("#")]),e._v(" 更新阶段")]),e._v(" "),r("p",[e._v("父组件 beforeUpdate => 子组件 beforeUpdate => 子组件 updated => 父组件 updated")]),e._v(" "),r("h3",{attrs:{id:"销毁阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#销毁阶段"}},[e._v("#")]),e._v(" 销毁阶段")]),e._v(" "),r("p",[e._v("父组件 beforeDestroy => 子组件 beforeDestroy => 子组件 destroyed => 父组件 destroyed")])])}),[],!1,null,null,null);t.default=v.exports}}]);
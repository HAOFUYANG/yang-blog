(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{527:function(e,v,t){"use strict";t.r(v);var _=t(59),a=Object(_.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"虚拟dom和diff算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom和diff算法"}},[e._v("#")]),e._v(" 虚拟dom和diff算法")]),e._v(" "),t("h2",{attrs:{id:"vdom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vdom"}},[e._v("#")]),e._v(" vdom")]),e._v(" "),t("p",[e._v("Virtual DOM不是真正的dom,他是用 JS 对象模拟 DOM 数据。是 React 最先提出来的概念。")]),e._v(" "),t("ul",[t("li",[e._v("执行 render 函数返回的就是一个 vdom 对象，一般叫做 vnode（虚拟节点），对应 DOM Node每次数据更新（如 React setState）render 函数都会生成 newVnode ，然后前后对比 "),t("code",[e._v("diff(vnode, newVnode)")]),e._v("，计算出需要修改的 DOM 节点，再做修改。")])]),e._v(" "),t("h3",{attrs:{id:"为什么使用vdom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用vdom"}},[e._v("#")]),e._v(" 为什么使用vdom")]),e._v(" "),t("p",[e._v("不断的修改真实的DOM会引发回流和重绘，大大降低了页面的渲染能力，而虚拟DOM的产生则是减少了频繁操作DOM而带来的一系列性能问题。")]),e._v(" "),t("h3",{attrs:{id:"框架的价值-vue-react"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架的价值-vue-react"}},[e._v("#")]),e._v(" 框架的价值(Vue,React)")]),e._v(" "),t("ul",[t("li",[e._v("组件化 —— 这不是核心原因。WebComponent 已提出多年，当仍未发展壮大")]),e._v(" "),t("li",[e._v("数据视图分离，数据驱动视图("),t("strong",[e._v("核心")]),e._v(")")])]),e._v(" "),t("h3",{attrs:{id:"vdom真的很快吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vdom真的很快吗"}},[e._v("#")]),e._v(" vdom真的很快吗？")]),e._v(" "),t("ul",[t("li",[e._v("直接进行 DOM 操作永远都是最快的（但要目标明确，不能有无谓的 DOM 操作 —— 这很难）")]),e._v(" "),t("li",[e._v("如果业务复杂，要“数据视图分离，数据驱动视图”，无法直接修改 DOM ，那 vdom 就是一个很好的选择")])]),e._v(" "),t("p",[e._v("所以，"),t("strong",[e._v("vdom 并不比 DOM 操作更快")]),e._v("（反而更慢，它做了 JS 运算），它只是在某个特定的场景下，无法做到精准 DOM 修改时，一个更优的选择。")]),e._v(" "),t("h3",{attrs:{id:"扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[e._v("#")]),e._v(" 扩展")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.sveltejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Svelte"),t("OutboundLink")],1),e._v(" 不使用 vdom ，它将组件修改，编译为精准的 DOM 操作。和 React 设计思路完全不一样。")]),e._v(" "),t("h2",{attrs:{id:"diff算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diff算法"}},[e._v("#")]),e._v(" diff算法")]),e._v(" "),t("h3",{attrs:{id:"步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[e._v("#")]),e._v(" 步骤")]),e._v(" "),t("ul",[t("li",[e._v("用JavaScript 对象结构表示DOM树的结构；然后用这个树构建一个真正的DOM树，插到文档当中")]),e._v(" "),t("li",[e._v("当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较(diff)，记录两棵树差异")]),e._v(" "),t("li",[e._v("把第二棵树所记录的差异应用到第一棵树所构建的真正的DOM树上(patch)，视图就更新了")])]),e._v(" "),t("h3",{attrs:{id:"策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#策略"}},[e._v("#")]),e._v(" 策略")]),e._v(" "),t("p",[e._v("diff整体策略为："),t("code",[e._v("深度")]),e._v("优先，同层比较，不会跨级，从两边向中间")]),e._v(" "),t("p",[e._v("DOM的频繁改变会产生一系列性能问题，而使用虚拟DOM替代真实DOM，最大的优势在于不断的去修改虚拟DOM后，才会一次性的与真实DOM的差异性做对比，然后只会去修改真实的DOM一次。而这种差异性对比，也就是diff算法。")]),e._v(" "),t("p",[e._v("Vue React 都是用于网页开发，基于 DOM 结构，对 diff 算法都进行了优化（或者简化）,最终把时间复杂度降低到 "),t("code",[e._v("O(n)")])]),e._v(" "),t("ul",[t("li",[e._v("只在同一层级比较，不夸层级 （DOM 结构的变化，很少有跨层级移动）")]),e._v(" "),t("li",[t("code",[e._v("tag")]),e._v(" 不同则直接删掉重建，不去对比内部细节（DOM 结构变化，很少有只改外层，不改内层）")]),e._v(" "),t("li",[e._v("同一个节点下的子节点，通过 "),t("code",[e._v("key")]),e._v(" 区分")])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/Vue/tree-diff.png"),alt:"foo"}}),e._v(" "),t("h3",{attrs:{id:"vue2-diff-特点-双端相互比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue2-diff-特点-双端相互比较"}},[e._v("#")]),e._v(" Vue2 diff 特点 - 双端相互比较")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.bilibili.com/video/BV1Ph41117hq?spm_id_from=333.337.search-card.all.click&vd_source=69d50714712d5f1a163b015dc8a48fcf",target:"_blank",rel:"noopener noreferrer"}},[e._v("b站上的一个视频"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("好比在列表中插入值")]),e._v(" "),t("ul",[t("li",[e._v("定义四个指针，分别比较")]),e._v(" "),t("li",[e._v("oldStartNode 和 newStartNode")]),e._v(" "),t("li",[e._v("oldStartNode 和 newEndNode")]),e._v(" "),t("li",[e._v("oldEndNode 和 newStartNode")]),e._v(" "),t("li",[e._v("oldEndNode 和 newEndNode")]),e._v(" "),t("li",[e._v("指针继续向中间移动，知道指针汇合。")])]),e._v(" "),t("p",[t("img",{attrs:{src:e.$withBase("/Vue/vue2-diff.png"),alt:"foo"}})]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/weixin_43638968/article/details/112686317",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"vue3-diff-特点-最长递增子序列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue3-diff-特点-最长递增子序列"}},[e._v("#")]),e._v(" Vue3 diff 特点 - 最长递增子序列")]),e._v(" "),t("p",[e._v("例如数组 "),t("code",[e._v("[3，5，7，1，2，8]")]),e._v(" 的最长递增子序列就是 "),t("code",[e._v("[3，5，7，8 ]")]),e._v(" 。这是一个专门的算法。")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/Vue/vue3-diff.png"),alt:"foo"}}),e._v(" "),t("ul",[t("li",[e._v("1、通过“前-前”比较找到开始的不变节点 "),t("code",[e._v("[A, B]")])]),e._v(" "),t("li",[e._v("2、通过“后-后”比较找到末尾的不变节点 "),t("code",[e._v("[G]")])]),e._v(" "),t("li",[e._v("3、剩余的有变化的节点 "),t("code",[e._v("[F, C, D, E, H]")])]),e._v(" "),t("li",[e._v("4、通过 "),t("code",[e._v("newIndexToOldIndexMap")]),e._v(" 拿到 oldChildren 中对应的 index "),t("code",[e._v("[5, 2, 3, 4, -1]")]),e._v(" （"),t("code",[e._v("-1")]),e._v(" 表示之前没有，要新增）")]),e._v(" "),t("li",[e._v("5、计算"),t("strong",[e._v("最长递增子序列")]),e._v("得到 "),t("code",[e._v("[2, 3, 4]")]),e._v(" ，对应的就是 "),t("code",[e._v("[C, D, E]")]),e._v(" ，即这些节点可以不变")]),e._v(" "),t("li",[e._v("6、剩余的节点，根据 index 进行新增、删除")])]),e._v(" "),t("h3",{attrs:{id:"diff-的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diff-的原理"}},[e._v("#")]),e._v(" diff 的原理")]),e._v(" "),t("p",[e._v("当data变化之后，视图会触发更新，那么这个过程是什么样的呢？\n首先data变化后，会触发setter\n接着，编译模板为render函数\nrender函数生成vNode，这是个新的vNode\n接着会patch(oldVnode, newVnode)，这个对比过程中用到的就是diff算法\n接着异步渲染更新\n由于vNode使用对象表示DOM的形式，大体上是一颗多叉树。")]),e._v(" "),t("h3",{attrs:{id:"diff-算法中的-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diff-算法中的-key"}},[e._v("#")]),e._v(" diff 算法中的 key")]),e._v(" "),t("p",[e._v("key是给每一个vnode的唯一id，也是diff的一种优化策略，可以根据key，更准确， 更快的找到对应的vnode节点")]),e._v(" "),t("ul",[t("li",[e._v("根据key判断元素是否要删除")]),e._v(" "),t("li",[e._v("匹配到key，只移动元素-性能较好")]),e._v(" "),t("li",[e._v("未匹配到key，则删除重建-性能较差")]),e._v(" "),t("li",[e._v("加了key之后，可以便于diff算法的计算，大幅度增加性能")])]),e._v(" "),t("p",[e._v("推荐key使用唯一值(例如唯一的id)")])])}),[],!1,null,null,null);v.default=a.exports}}]);
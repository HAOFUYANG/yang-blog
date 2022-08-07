---
{ "title": "babel" }
---

# babel

- js 的编译器
- 将 es5 以上的代码转行成向下兼容的 js 语法，使代码可运行在低版本浏览器上

## 原理

转译的三个阶段

- 1.**解析阶段**段：Babel 默认使用@babel/parser 将代码转换为 AST。解析一般分为两个阶段：词法分析和语法分析
- 2.**转换阶段**：Babel 使用 @babel/traverse 提供的方法对 AST 进行深度优先遍历，调用插件对关注节点的处理函数，按需对 AST 节点进行增删改操作
- 3.**生成阶段**：Babel 默认使用@babel/generator 将上一阶段处理后的 AST 通过深度优先遍历转换为代码字符串

![](/webpack/babel原理图解.png)

![](/webpack/babel转译步骤.png)

举个例子
`AST的生成`

```js
if (1 > 0) {
    alert('hi');
}
//
{
  "type": "Program",                          // 程序根节点
  "body": [                                   // 一个数组包含所有程序的顶层语句
    {
      "type": "IfStatement",                  // 一个if语句节点
      "test": {                               // if语句的判断条件
        "type": "BinaryExpression",           // 一个双元运算表达式节点
        "operator": ">",                      // 运算表达式的运算符
        "left": {                             // 运算符左侧值
          "type": "Literal",                  // 一个常量表达式
          "value": 1                          // 常量表达式的常量值
        },
        "right": {                            // 运算符右侧值
          "type": "Literal",
          "value": 0
        }
      },
      "consequent": {                         // if语句条件满足时的执行内容
        "type": "BlockStatement",             // 用{}包围的代码块
        "body": [                             // 代码块内的语句数组
          {
            "type": "ExpressionStatement",    // 一个表达式语句节点
            "expression": {
              "type": "CallExpression",       // 一个函数调用表达式节点
              "callee": {                     // 被调用者
                "type": "Identifier",         // 一个标识符表达式节点
                "name": "alert"
              },
              "arguments": [                  // 调用参数
                {
                  "type": "Literal",
                  "value": "hi"
                }
              ]
            }
          }
        ]
      },
      "alternative": null                     // if语句条件未满足时的执行内容
    }
  ]
}
```

### 词法分析

词法分析阶段可以看成是对代码进行“分词”，它接收一段源代码，然后执行一段 tokenize 函数，把代码分割成被称为 Tokens 的东西。Tokens 是一个数组，由一些代码的碎片组成，如下

```js
[
  { type: "Keyword", value: "const" },
  { type: "Identifier", value: "add" },
  { type: "Punctuator", value: "=" },
  { type: "Punctuator", value: "(" },
  { type: "Identifier", value: "a" },
  { type: "Punctuator", value: "," },
  { type: "Identifier", value: "b" },
  { type: "Punctuator", value: ")" },
  { type: "Punctuator", value: "=>" },
  { type: "Identifier", value: "a" },
  { type: "Punctuator", value: "+" },
  { type: "Identifier", value: "b" },
];
```

### 语法分析

词法分析之后，代码就已经变成了一个 Tokens 数组了，现在需要通过语法分析把 Tokens 转化成 AST

## vue 兼容 IE？

使用 babel-polyfill

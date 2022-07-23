---
{
  'title':'MVVM'
}
---
# MVVM

## MVC 原理

- View 传送指令到 Controller
- Controller 完成业务逻辑后，要求 Model 改变状态
- Model 将新的数据发送到 View，用户得到反馈

![](/Vue/MVC.png)

## MVVM 原理

![](/Vue/MVVM.png)

## Vue中的MVVM

> 视图层和数据层的双向绑定，让我们无需再去关心DOM操作的事情，更多的精力放在数据和业务逻辑上去

![](/Vue/vue-mvvm.png)

- View 即 Vue template
- Model 即 Vue data
- VM 即 Vue 其他核心功能，负责 View 和 Model 通讯

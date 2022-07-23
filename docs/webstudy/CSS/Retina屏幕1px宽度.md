--- 
{
    'title':'Retina屏幕1px宽度'
}
---
# Retina屏幕1px宽度

思考？Retina(视网膜) 屏 1px 像素问题，如何实现

## 普通的 `1px`

如果仅仅使用 css 的 `1px` 来设置 border ，那可能会出现比较粗的情况。<br>
因为，有些手机屏幕的 DPR = 2 ，即 `1px` 它会用两个物理像素来显示，就粗了。

```css
#box {
    padding: 10px 0;
    border-bottom: 1px solid #eee;
}
```

注意：不能直接写 `0.5px` ，浏览器兼容性不好，渲染出来可能还是 `1px` 的效果。

## 可以使用 `transform` 缩小

使用 css 伪类 + `transform` 来优化这一问题。即把默认的 `1px` 宽度给压缩 0.5 倍。

```css
#box {
    padding: 10px 0;
    position: relative;
}
#box::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #d9d9d9;
    transform: scaleY(0.5);
    transform-origin: 0 0;
}
```

## 继续思考？如果有 `border-radius` 怎么办

可以使用 `box-shadow` 设置

- X 偏移量 `0`
- Y 偏移量 `0`
- 阴影模糊半径 `0`
- 阴影扩散半径 `0.5px`
- 阴影颜色

```css
#box2 {
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    /* border: 1px solid #d9d9d9; */
    box-shadow: 0 0 0 0.5px #d9d9d9;
}
```

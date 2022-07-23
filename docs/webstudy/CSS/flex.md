---
{
  "title": "flex布局",
}
---
# flex布局

### 一些属性

#### flex-grow、flex-shrink、flex-basis三个属性

这三个属性都是在子元素上设置的

- `flex-basis`用来设置元素的宽度，其实，width也可以设置宽度。如果元素上同时设置了width和flex-basis，那么width 的值就会被flex-basis覆盖掉
- `flex-grow`该属性用来设置当父元素的宽度大于所有子元素的宽度的和时（即父元素会有剩余空间），子元素如何分配父元素的剩余空间。 flex-grow的默认值为0，意思是该元素不索取父元素的剩余空间，如果值大于0，表示索取。值越大，索取的越厉害
- `flex-shrink`该属性用来设置，当父元素的宽度小于所有子元素的宽度的和时（即子元素会超出父元素），子元素如何缩小自己的宽度的。 flex-shrink的默认值为1，当父元素的宽度小于所有子元素的宽度的和时，子元素的宽度会减小。值越大，减小的越厉害。如果值为0，表示不减小

#### flex:1

- flex: 1的值是 flex-grow: 1; flex-shrink: 1; flex-basis: 0%;元素占据剩余宽度的 1 份

### 骰子

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BFC</title>
    <style>
    .main {
        width: 500px;
        height: 500px;
        background-color: #fff;
        border: 1px solid #333;
        /* box-sizing: border-box; */
        display: flex;
        justify-content: space-between;
    }
    .box {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: lime;
    }
    .box2 {
        align-self: center;
    }
    .box3 {
        align-self: flex-end;
    }
    </style>
</head>
<body>
    <div class="main">
        <div class="box box1"></div>
        <div class="box box2"></div>
        <div class="box box3"></div>
    </div>
    <script>
    </script>
</body>
</html>

```

<img class="img" :src="$withBase('/css/flex骰子.png')" alt="foo"></img>
<style>
  .img {
    width:200px;
    display:block;
    margin:0 auto;
  }
</style>

### 自定义布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>flex布局</title>
    <style>
      .main {
        width: 300px;
        height: 300px;
        background-color: lime;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-content: space-around;
      }
      .box {
        width: 80px;
        height: 80px;
        background-color: orange;
      }
    </style>
  </head>
  <body>
    <div class="main">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
    <script></script>
  </body>
</html>

```

<img class="img" :src="$withBase('/css/布局1.png')" alt="foo"></img>

### 中间自适应

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>flex布局</title>
    <style>
      .main {
        width: 100%;
        height: 300px;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
      }
      div:not(.main) {
        height: 300px;
        width: 100px;
      }
      .first {
        width: 200px;
        background-color: red;
      }
      .second {
        /* 属性用于设置或检索弹性盒子的扩展比率 */
        flex-grow: 1; 
        background-color: limegreen;
      }
      .third {
        width: 200px;
        background-color: orange;
      }
    </style>
  </head>
  <body>
    <div class="main">
      <div class="first">1</div>
      <div class="second">2</div>
      <div class="third">3</div>
    </div>
    <script></script>
  </body>
</html>
```

<img  :src="$withBase('/css/中间自适应.png')" alt="foo"></img>

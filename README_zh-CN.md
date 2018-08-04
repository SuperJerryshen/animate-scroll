# Animate-Scroll

> 使用 Animate-Scroll，可以利用动画过渡至指定高度

## 安装

```bash
# 使用 npm
npm install --save @jerryshen520/animate-scroll

# 使用 yarn
yarn add @jerryshen520/animate-scroll
```

## 使用

### 仅在 window 下滚动

```javascript
import { scrollToY } from '@jerryshen520/animate-scroll';

// 滚动
scrollToY(1000);
scrollToY(0);

// 自定义配置的滚动
scrollToY(1000, {
  duration: 1200,
  easing: 'linear',
});
```

### 在内部可滚动的容器内

```javascript
import Scroller from '@jerryshen520/animate-scroll';

// 获取dom元素
const wrap = document.getElementById('wrap');
const scroller = new Scroller(wrap);

// 滚动
scroller.scrollToY(1000);
scroller.scrollToY(0);
```

## API

### Scroller

- 构造函数
- 参数(`domContainer`)
- 使用

```javascript
// 在`window`对象上生成新的`Scroller`实例
new Scroller();

// 在`DOM`元素上生成新的`Scroller`实例
const domContainer = document.createElement('div');
new Scroller(domContainer);
```

### Scroller.prototype.scrollToY

- 函数
- 参数(`YCoord`: `number`, `config`?: `object`)

`config`'可用的配置选项：

```javascript
{
  // 支持贝塞尔模式，参数就类似于这个: [0, 0, 1, 1]
  // 可用的内置字符过渡效果:
  // 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'
  easing: 'ease'; // 默认值
  // 过渡时间
  duration: 600; // 默认值, 毫秒
}
```

- 说明

> 该函数用于在 window 对象上的动态滚动。

### Scroller.prototype.scroll

- 函数
- 参数(`YCoord`: `number`)
- 说明

> 该函数用于 `Scroller` 实例上，无过渡动画的滚动。

### Scroller.prototype.cancel

- 函数
- 参数(无)
- 说明

> 此函数用于取消现有的滚动。

## Todo List

- [x] 自定义过渡效果
- [x] 自定义过渡时间
- [x] 支持容器内的滚动
- [x] 支持取消滚动
- [ ] 支持更多自定义配置
- [ ] 添加使用 `demo` 页面
- [ ] 使用 `Typescript`
- [ ] 添加单元测试

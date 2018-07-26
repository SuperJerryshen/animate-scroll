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
```

### 在内部可滚动的容器内

```javascript
import { Scroller } from '@jerryshen520/animate-scroll';

// 获取dom元素
const wrap = document.getElementById('wrap');
const scroller = new Scroller(wrap);

// 滚动
scroller.scrollToY(1000);
scroller.scrollToY(0);
```

## API

### scrollToY

- 参数(`YCoord`: `number`, `config`: `object`)

## Todo List

- [ ] 自定义过渡效果
- [ ] 自定义过渡时间
- [x] 支持容器内的滚动
- [ ] 支持取消滚动

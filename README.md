# Animate-Scroll

> Scroll to position with animation, through using Animate-Scroll

[中文文档](https://github.com/SuperJerryshen/animate-scroll/blob/master/README_zh-CN.md)

## Install

```bash
# use npm
npm install --save @jerryshen520/animate-scroll

# use yarn
yarn add @jerryshen520/animate-scroll
```

## Usage

### Only scroll on window

```javascript
import { scrollToY } from '@jerryshen520/animate-scroll';

// scroll
scrollToY(1000);
scrollToY(0);
```

### Scroll on container

```javascript
import Scroller from '@jerryshen520/animate-scroll';

// get DOM element
const wrap = document.getElementById('wrap');
const scroller = new Scroller(wrap);

// scroll
scroller.scrollToY(1000);
scroller.scrollToY(0);
```

## API

### Scroller

- Constructor
- Params(`domContainer`)
- Usage

```javascript
// new scroller on window
new Scroller();

// new scroller on DOM element
const domContainer = document.createElement('div');
new Scroller(domContainer);
```

### scrollToY

- Function
- Params(`YCoord`: `number`, `config`?: `object`)
- Notes

> This function is used for scrolling to the position with transition on `window`.

### Scroller.prototype.scroll

- Function
- Params(`YCoord`: `number`)
- Notes

> This function is used for scrolling to the position with **NO** transition on `Scroller` instance.

## Todo List

- [ ] custom effect of transition
- [ ] custom duration of transition
- [x] support for scrolling on wrapper
- [ ] support for canceling scroll

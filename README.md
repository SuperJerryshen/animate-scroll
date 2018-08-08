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

// scroll with configure
scrollToY(1000, {
  duration: 1200,
  easing: 'linear',
});
```

### Scroll on container

```javascript
import { Scroller } from '@jerryshen520/animate-scroll';

// get DOM element
const wrap = document.getElementById('wrap');
const scroller = new Scroller(wrap);

// scroll
scroller.scrollToY(1000);
scroller.scrollToY(0).then(duration => {
  // call after transition is over
});
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

### Scroller.prototype.scrollToY

- Function
- Params(`YCoord`: `number`, `config`?: `object`)

available `config`'s options：

```javascript
{
  // support bezier: param like this: [0, 0, 1, 1]
  // available built-in string option:
  // 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'
  easing: 'ease'; // default
  // transition time
  duration: 600; // default, millisecond
}
```

- Returns

(Promise): callback param is the `duration`

```javascript
import { scrollToY } from '@jerryshen520/animate-scroll';

scrollToY(2000).then(duration => {
  // the transition is over
  console.log(duration);
});
```

- Notes

> This function is used for scrolling to the position with transition on `window`.

### Scroller.prototype.scroll

- Function
- Params(`YCoord`: `number`)
- Notes

> This function is used for scrolling to the position with **NO** transition on `Scroller` instance.

### Scroller.prototype.cancel

- Function
- Params(null)
- Notes

> This function is used for stopping the current scroll.

## Todo List

- [x] custom effect of transition
- [x] custom duration of transition
- [x] support for scrolling on wrapper
- [x] support for canceling scroll
- [x] use `webpack` for packaging project
- [x] use `Typescript`
- [ ] support more custom configure
- [ ] add `demos` page for usage
- [ ] add unit test

# Animate-Scroll

> Scroll to position with animation, through using Animate-Scroll, some [demos here](https://s.codepen.io/SuperJerryshen/debug/NBBrEP/gaAeYZzXobyA).

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
import { slideTo } from '@jerryshen520/animate-scroll';

// scroll
slideTo(1000);
slideTo(0);

// scroll with configure
slideTo(1000, {
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
scroller.slideTo(1000);
scroller.slideTo(0).then(duration => {
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

### Scroller.prototype.slideTo

- Function
- Params(`YCoord`: `number` | `HTMLElement`, `config`?: `object`)

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
import { slideTo } from '@jerryshen520/animate-scroll';

// pass HTMLElement.
slideTo(document.getElementById('demo'));
// pass number and print 'duration' at the end of scrolling.
slideTo(2000).then(duration => {
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

- [ ] support more custom configure

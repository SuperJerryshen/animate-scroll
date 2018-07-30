/**
 * Constructor Scroller
 */
export default class Scroller {
  constructor(wrap) {
    this.timer = null;
    this.wrap = wrap || null;
    this.container = wrap || window;
    this.cancelFunc = () => {
      this.cancel();
    };
  }

  /**
   * scroll without animation
   * @param {*} top
   */
  scroll(top) {
    if (this.wrap) {
      this.wrap.scrollTop = top;
    } else {
      window.scrollTo(0, top);
    }
  }

  /**
   * stop the scroll
   */
  cancel() {
    // clear timer if `this.timer` exists
    this.timer && clearInterval(this.timer);
    // remove the wheel event listener when the scroll is stopped
    this.container.removeEventListener('wheel', this.cancelFunc);
  }

  /**
   * scroll to the position given
   * @param {*} h
   * @param {*} config
   */
  scrollToY(h = 0, config = {}) {
    const y = this.wrap ? this.wrap.scrollTop : window.scrollY;
    const container = this.wrap || window;
    let top = y;
    let distance = y - h;
    let gap = distance / 16;
    if (h === top) return;
    // if this.timer is not null, then clearInterval
    this.cancel();
    // add wheel event, used for stopping the scroll automatically when user uses the wheel
    container.addEventListener('wheel', this.cancelFunc);
    this.timer = setInterval(() => {
      // two situations: distance > 0 & distance < 0
      if (distance > 0) {
        if (top < gap * 6) {
          top -= top / 6;
        } else {
          top -= gap;
        }
        if (top <= h + 1) {
          top = h;
          clearInterval(this.timer);
        }
      } else {
        if (top > -gap * 6) {
          top += (h - top) / 6;
        } else {
          top -= gap;
        }
        if (top >= h - 1) {
          top = h;
          clearInterval(this.timer);
        }
      }
      this.scroll(top);
    }, 16);
  }
}

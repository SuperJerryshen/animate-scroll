export default class Scroller {
  constructor() {
    this.timer = null;
  }
  /**
   * scroll to the position given
   * @param {*} h
   * @param {*} config
   */
  scrollToY(h = 0, config = {}) {
    const y = window.scrollY;
    let top = y;
    let distance = y - h;
    let gap = distance / 16;
    if (h === top) return;
    // if this.timer is not null, then clearInterval
    this.timer && clearInterval(this.timer);
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
      window.scrollTo(0, top);
    }, 16);
  }
}

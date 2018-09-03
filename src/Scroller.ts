/**
 * Constructor Scroller
 */
import Bezier from './Bezier';

interface scrollConfig {
  duration?: number;
  easing?: string;
}

const bezierEffect = {
  ease: [0.25, 0.1, 0.25, 1],
  linear: [0, 0, 1, 1],
  'ease-in': [0.42, 0, 1, 1],
  'ease-out': [0, 0, 0.58, 1],
  'ease-in-out': [0.42, 0, 0.58, 1],
};

export default class Scroller {
  private timer: number;
  wrap: HTMLElement;
  container: HTMLElement | Window;
  cancelFunc?(): void;

  constructor(wrap?: HTMLElement) {
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
  scroll(top: number) {
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
  slideTo(h: number | HTMLElement = 0, config: scrollConfig = {}) {
    let height:number;
    if (h instanceof HTMLElement) {
      height = h.getBoundingClientRect().top + window.scrollY;
    } else if (typeof h === 'number') {
      height = h;
    } else {
      throw new Error(`the target height must be a number or HTMLElement.`);
    }
    // deconstruct the parameter of config
    const { duration = 600, easing = 'ease' } = config;
    if (typeof duration !== 'number') {
      throw new Error(`"duration" must be a number.`);
    }
    const y = this.wrap ? this.wrap.scrollTop : window.scrollY;
    // get the effet params of transition
    const bezierParams =
      typeof easing === 'string' ? bezierEffect[easing] : easing;
    if (!Array.isArray(bezierParams)) {
      throw new Error(`option "easing" is not right, please confirm!`);
    }
    const bezier = new Bezier(...bezierParams);
    let top = y;
    let distance = height - y;
    let interval = 16.67;
    let time = 0;
    if (height === top) return;
    // if this.timer is not null, then clearInterval
    this.cancel();
    // add wheel event, used for stopping the scroll automatically when user uses the wheel
    this.container.addEventListener('wheel', this.cancelFunc);
    return new Promise((resolve, reject) => {
      try {
        this.timer = window.setInterval(() => {
          // two situations: distance > 0 & distance < 0
          let ratio = bezier.getY(time / duration);
          let move = ratio * distance;
          this.scroll(top + move);
          if (ratio >= 1) {
            this.cancel();
            resolve(height);
          } else {
            time += interval;
          }
        }, interval);
      } catch (error) {
        reject(error);
      }
    });
  }
}

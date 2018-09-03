import ScrollerConstructor from './Scroller';
export const scroller = new ScrollerConstructor();
export const slideTo = ScrollerConstructor.prototype.slideTo.bind(scroller);
export const Scroller = ScrollerConstructor;

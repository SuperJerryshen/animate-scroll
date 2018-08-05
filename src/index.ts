import ScrollerConstructor from './Scroller';
export const scroller = new ScrollerConstructor(window);
export const scrollToY = ScrollerConstructor.prototype.scrollToY.bind(scroller);
export const Scroller = ScrollerConstructor;

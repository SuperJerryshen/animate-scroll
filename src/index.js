import Scroller from './Scroller';
export const scroller = new Scroller();
export const scrollToY = Scroller.prototype.scrollToY.bind(scroller);

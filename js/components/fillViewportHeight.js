import componentHandler from '../componentHandler';

export default function FillViewportHeight(element) {
  this.element = element;
  this.init();
}

FillViewportHeight.prototype.init = function () {
  if (!this.element) return;

  setElementHeight(this.element, getViewportHeight());

  window.addEventListener('resize', () => {
    setElementHeight(this.element, getViewportHeight());
  });
};

function getViewportHeight() {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

function setElementHeight(element, height) {
  element.style.height = height + 'px';
}

componentHandler.register({
  constructor: FillViewportHeight,
  classAsString: 'FillViewportHeight',
  cssClass: 'rss-fill-viewport-height'
});

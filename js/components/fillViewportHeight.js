import componentHandler from '../componentHandler';

export default function FillViewportHeight(element) {
  this.element = element;
  this.init();
}

FillViewportHeight.prototype.init = function () {
  if (!this.element) return;

  let minHeight = Number.parseInt(this.element.getAttribute('data-min-height'));
  if (Number.isNaN(minHeight) || minHeight < 0) minHeight = 0;

  setElementHeight(this.element, Math.max(getViewportHeight(), minHeight));

  window.addEventListener('resize', () => {
    setElementHeight(this.element, Math.max(getViewportHeight(), minHeight));
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

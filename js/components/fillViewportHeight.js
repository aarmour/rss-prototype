import componentHandler from '../componentHandler';

export default function FillViewportHeight(element) {
  this.element = element;
  this.init();
}

FillViewportHeight.prototype.init = function () {
  let element = this.element;

  if (!element) return;

  let minHeight = getIntAttributeValue(this.element, 'data-min-height');
  let minWidth = getIntAttributeValue(this.element, 'data-min-width');

  function handleResize() {
    if (getViewportWidth() < minWidth) {
      element.style.height = '';
    } else {
      setElementHeight(element, Math.max(getViewportHeight(), minHeight));
    }
  }

  handleResize();
  window.addEventListener('resize', handleResize);
};

function getIntAttributeValue(element, attribute) {
  let value = Number.parseInt(element.getAttribute(attribute));

  if (Number.isNaN(value) || value < 0) value = 0;

  return value;
}

function getViewportWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

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

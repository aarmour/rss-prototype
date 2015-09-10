import componentHandler from '../componentHandler';

const EXPANDED = 'rss-collapse--expanded';

export default function Collapse(element) {
  this.element = element;
  this.init();
}

Collapse.prototype.init = function () {
  if (!this.element) return;
  this.registerDelegate();
};

Collapse.prototype.registerDelegate = function () {
  document.addEventListener('click', function handleClick(e) {
    var toggle = findToggleElement(e.target);

    if (!toggle) return;

    var targets = document.querySelectorAll(toggle.getAttribute('data-target'));

    for (var i = 0, l = targets.length, target; i < l; i++) {
      target = targets[i];
      target.classList[target.classList.contains(EXPANDED) ? 'remove' : 'add'](EXPANDED);
    }
  });

  // Prevent registering multiple delegates
  Collapse.prototype.registerDelegate = function () {}
}

function findToggleElement(element) {
  while (element !== null) {
    if (element.getAttribute('data-toggle') === 'collapse') return element;
    element = element.parentElement;
  }

  return null;
}

componentHandler.register({
  constructor: Collapse,
  classAsString: 'Collapse',
  cssClass: 'rss-collapse'
});

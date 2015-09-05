import componentHandler from '../componentHandler';

const HEADER_HEIGHT = 50;

// CSS classes
const FADE = 'rss-header--fade';

export default function Header(element) {
  this.element = element;
  this.init();
}

Header.prototype.init = function () {
  if (!this.element || !this.element.classList.contains(FADE)) return;
  let navEl = this.element.querySelector('nav');
  if (!navEl) return;

  window.addEventListener('scroll', () => {
    let alpha = window.scrollY > HEADER_HEIGHT ? '1' : '0';
    navEl.style['background-color'] = `rgba(240, 240, 240, ${alpha})`;
  });
};

componentHandler.register({
  constructor: Header,
  classAsString: 'Header',
  cssClass: 'rss-header'
});

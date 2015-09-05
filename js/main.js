import componentHandler from './componentHandler';
import './components/fillViewportHeight';
import './components/header';

// Export globals
window.componentHandler = componentHandler;

// Boot
window.addEventListener('load', function() {
  'use strict';

  /**
   * Performs a "Cutting the mustard" test. If the browser supports the features
   * tested, adds a rss-js class to the <html> element. It then upgrades all
   * components requiring JavaScript.
   */
  if ('classList' in document.createElement('div') &&
      'querySelector' in document &&
      'addEventListener' in window && Array.prototype.forEach) {
    document.documentElement.classList.add('rss-js');
    componentHandler.upgradeAllRegistered();
  } else {
    componentHandler.upgradeElement =
        componentHandler.register = function() {};
  }
});

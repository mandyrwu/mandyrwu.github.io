"use strict";

(function() {

  window.addEventListener('load', init);

  function init() {
    let projectArray = qsa('.project');
    for (let i = 0; i < projectArray.length; i++) {
      if (i % 2 === 0) {
        projectArray[i].classList.add('greybg');
      } else {
        projectArray[i].classList.add('whitebg');
      }
    }
  }

  /**
   * Helpfer function for accessing an element with their ID
   * @param {String} id - the id for the desired element
   * @return {Element} element selected by the id
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Helpfer function for selecting an element with their selector
   * @param {String} selector - the CSS selector name for the desired element
   * @return {Element} element selected by the selector
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Helpfer function for selecting all elements with their selector
   * @param {String} selector - the CSS selector name for the desired elements
   * @return {Element} elements selected by the selector
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

})();
"use strict";

(function() {

  window.addEventListener('load', init);
  window.addEventListener('load', gallery);

  /** When window loads, this function adds photos to projects and event listeners to buttons. */
  function init() {

    loadProjectPhotos();

    let contact = qs('header').lastElementChild.lastElementChild;
    contact.addEventListener('click', function() {
      location.href = "contact.html";
    });

    let classButtons = qsa('#classes button');
    for (let i = 0; i < classButtons.length; i++) {
      classButtons[i].addEventListener('click', showClass);
    }

    id('close-class-button').addEventListener('click', closeClass);

    let projArray = qsa('h4');
    for (let i = 0; i < projArray.length; i++) {
      projArray[i].addEventListener('mouseenter', project);
      projArray[i].addEventListener('mouseleave', project);
    }
  }

  /**
   * The class description for the class clicked appears on the page.
   * @param {event} event - the event that triggers this function to be called
   */
  function showClass(event) {
    let description = qs('#class-descr');
    description.textContent = "This is the description for " + event.currentTarget.textContent +
    "! Idk what to put in it yet so here is just some filler text.";
    description.classList.remove('hide');
    description.classList.add('classDes');
    id('close-class-button').classList.remove('hide');
  }

  /** The class description disappears when the close button is clicked. */
  function closeClass() {
    qs('#class-descr').classList.add('hide');
    id('close-class-button').classList.add('hide');
  }

  /**
   * Makes the project box interactive and toggles between showing the photo and description
   * @param {event} event - the event that triggers this function to be called
   */
  function project(event) {
    let projBox = event.currentTarget.parentElement;
    let descr = event.currentTarget.nextElementSibling;
    descr.classList.toggle('hide');
    let projImage = projBox.lastElementChild;
    if (event.type === 'mouseenter') {
      projImage.classList.add('hide');
    }
    if (event.type === 'mouseleave') {
      projImage.classList.remove('hide');
    }
  }

  /** Loads a photo for each project onto the page */
  function loadProjectPhotos() {
    let projArray = qsa('#projects section');
    for (let i = 0; i < projArray.length; i++) {
      let proj = projArray[i];
      let projectImg = document.createElement('img');
      proj.appendChild(projectImg);
      projectImg.src = "img/proj" + i + ".png";
      projectImg.alt = "Examples of my work in the project";
      projectImg.classList.add('projPic');
    }
  }

  /** Creates a slideshow of photos with a left click and right click to traverse through */
  function gallery() {
    let photoArray = [];
    for (let i = 0; i < 8; i++) {
      photoArray.push('img/' + i + '.jpg');
    }
    let photoNum = 0;
    let photoShown = qs('#gallery img');
    photoShown.src = photoArray[photoNum];
    disableButton(id('left'));

    id('right').addEventListener('click', function() {
      photoNum++;
      photoShown.src = photoArray[photoNum];
      if (photoNum > 0) {
        enableButton(id('left'));
      }
      if (photoNum === photoArray.length - 1) {
        disableButton(id('right'));
      }
    });

    id('left').addEventListener('click', function() {
      photoNum--;
      photoShown.src = photoArray[photoNum];
      if (photoNum < photoArray.length - 1) {
        enableButton(id('right'));
      }
      if (photoNum === 0) {
        disableButton(id('left'));
      }
    });
  }

  /**
   * Disables the picture slideshow button
   * @param {Element} button - an element that is a clickable button on the page
   */
  function disableButton(button) {
    button.classList.add('grey');
    button.disabled = true;
  }

  /**
   * Enables the picture slideshow button
   * @param {Element} button - an element that is a clickable button on the page
   */
  function enableButton(button) {
    button.classList.remove('grey');
    button.disabled = false;
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
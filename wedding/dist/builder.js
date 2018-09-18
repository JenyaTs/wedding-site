"use strict";

document.addEventListener('DOMContentLoaded', function () {
  //menu 
  var mainNav = document.getElementById('navigation'),
      mainNavElem = mainNav.querySelectorAll('a');

  for (var i = 0; i < mainNavElem.length; i++) {
    if (window.location.href == mainNavElem[i].href) {
      mainNavElem[i].style.borderLeft = '4px solid #fa7a95';
      mainNavElem[i].style.backgroundColor = '#e2e2e2';
    }
  }
});
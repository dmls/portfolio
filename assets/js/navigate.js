"use strict";
function PageTransitions() {
  var pages = $('#pages');
  var positions = {
    front: 0,
    right: -90,
    back: 180,
    left: 90
  };

  var getCurrentTransform = function getCurrentTransform() {
    var currentTransform = pages[0].style.transform.match(/-?\d+/g) || 0;
    currentTransform !== 0 ? currentTransform = parseInt(currentTransform[0]) : currentTransform = 0;
    return currentTransform;
  };

  var moveCube = function moveCube(page) {
    var target = positions[page];
    animateCube(target);
  };

  var changePage = function changePage(direction) {
    var veloIsAnimating = pages.attr('class');
    var end = direction === 1 ? -360 : 360;
    var step = direction === 1 ? 90 : -90;

    if (!veloIsAnimating) {
      var current = getCurrentTransform();

      if (current === end) {
        pages.velocity({
          rotateY: [0]
        }, {
          duration: 0,
          complete: function complete() {
            current = getCurrentTransform();
            var target = current + step;
            animateCube(target);
          }
        });
      } else {
        var target = current + step;
        animateCube(target);
      }
    }
  };

  var animateCube = function animateCube(target) {
    pages.velocity({
      rotateY: [target]
    }, {
      duration: 1000,
      easing: "easeOut"
    });
  };

  return {
    change: changePage,
    move: moveCube
  };
}

function Navigation(pagestrs) {
  var nav = $('nav');
  var buttons = nav.find('#buttons');
  var menu = nav.find('#menu');
  var buttonsNavi = buttons.find('.buttons-navi');
  var buttonPrev = buttonsNavi.find('.button:nth-child(1)');
  var buttonNext = buttonsNavi.find('.button:nth-child(2)');
  var buttonNextContent = buttonNext.find('.button-next');
  var buttonPrevContent = buttonPrev.find('.button-prev');
  var buttonMenu = buttons.find('.buttons-menu');
  var menuItems = menu.find('li');
  var buttonMenuContent = buttonMenu.find('.button-wrapper');
  var topSpan = buttonMenuContent.find('span:nth-child(1)');
  var middleSpan = buttonMenuContent.find('span:nth-child(2)');
  var bottomSpan = buttonMenuContent.find('span:nth-child(3)');
  var spans = [topSpan, middleSpan, bottomSpan];

  var windowOnUnload = function windowOnUnload(fn) {
    var unload = function unload() {
      fn();
      window.removeEventListener('unload', unload);
    };

    window.addEventListener('unload', unload);
  };

  var animateChangePageButton = function animateChangePageButton() {
    var animateContent = function animateContent(event) {
      event.data.object.velocity({
        scale: [1, 0]
      }, {
        duration: 1000,
        easing: 'spring'
      });
    };

    buttonNext.on('mouseenter', {
      object: buttonNextContent
    }, animateContent);
    windowOnUnload(function () {
      buttonNext.off('mouseenter', animateContent);
    });
    buttonPrev.on('mouseenter', {
      object: buttonPrevContent
    }, animateContent);
    windowOnUnload(function () {
      buttonPrev.off('mouseenter', animateContent);
    });
  };

  var handleNextPageClick = function handleNextPageClick() {
    var buttonNext = buttons.find('.buttons-navi .button:nth-child(2)');

    var clickEvent = function clickEvent() {
      pagestrs.change(0);
    };

    buttonNext.on('click', clickEvent);
    windowOnUnload(function () {
      buttonNext.off('click', clickEvent);
    });
  };

  var handlePrevPageClick = function handlePrevPageClick() {
    var buttonPrev = buttons.find('.buttons-navi .button:nth-child(1)');

    var clickEvent = function clickEvent() {
      pagestrs.change(1);
    };

    buttonPrev.on('click', clickEvent);
    windowOnUnload(function () {
      buttonPrev.off('click', clickEvent);
    });
  };

  var animateManuButton = function animateManuButton() {
    topSpan.velocity({
      rotateZ: '135deg',
      top: '12px'
    }, {
      duration: 300
    });
    middleSpan.velocity({
      right: '40px',
      opacity: 0
    }, {
      duration: 300
    });
    bottomSpan.velocity({
      rotateZ: '-135deg',
      top: '12px'
    }, {
      duration: 300
    });
  };

  var reverseManuButtonAnimation = function reverseManuButtonAnimation() {
    spans.forEach(function (span) {
      span.velocity('reverse');
    });
  };

  var menuIn = function menuIn() {
    buttonsNavi.hide();
    menu.show();
    menu.velocity({
      translateY: [0, -180],
      scale: [1, 0],
      opacity: [1, 0]
    }, {
      duration: 2000,
      easing: "spring"
    });
  };

  var menuOut = function menuOut() {
    buttonsNavi.show();
    menu.velocity("reverse", {
      duration: 1000,
      easing: "spring",
      complete: function complete() {
        menu.hide();
      }
    });
  };

  var menuItemsIn = function menuItemsIn() {
    var delay = 200;
    menuItems.each(function (key, item) {
      var it = $(item);
      it.show();
      it.velocity({
        translateX: ["0vw", "-100vw"],
        backgroundColorAlpha: [0, 1]
      }, {
        duration: 2000,
        easing: "spring",
        delay: delay
      });
      delay += 200;
    });
  };

  var naviInSeq = function naviInSeq() {
    var seq = [animateManuButton, menuIn, menuItemsIn];
    seq.forEach(function (anim) {
      anim();
    });
  };

  var naviOutSeq = function naviOutSeq() {
    var seq = [reverseManuButtonAnimation, menuOut];
    seq.forEach(function (anim) {
      anim();
    });
  };

  var handleMenuButtonClick = function handleMenuButtonClick() {
    var handleToggle = function handleToggle() {
      var veloIsAnimating = menu.attr('class');

      if (!veloIsAnimating) {
        var opacity = parseInt(middleSpan.css('opacity'));

        if (opacity === 1) {
          naviInSeq();
        } else {
          naviOutSeq();
        }
      }
    };

    buttonMenu.on('click', handleToggle);
    windowOnUnload(function () {
      buttonMenu.off('click', handleToggle);
    });
  };

  var menuItemClickSeq = [reverseManuButtonAnimation, menuOut, pagestrs.move];

  var handleManuItemClick = function handleManuItemClick() {
    var clickEvent = function clickEvent(id) {
      menuItemClickSeq.forEach(function (anim) {
        anim(id);
      });
    };

    menuItems.each(function (key, item) {
      var it = $(item);
      it.on('click', function () {
        clickEvent(it[0].id);
      });
      windowOnUnload(function () {
        it.off('click');
      });
    });
  };

  return {
    animateChangePageButton: animateChangePageButton,
    nextPage: handleNextPageClick,
    prevPage: handlePrevPageClick,
    menuButtonClick: handleMenuButtonClick,
    menuItemClick: handleManuItemClick
  };
}

function Apx(navigation, pagesTransition) {
  var pagesTrs = new pagesTransition();
  var navi = new navigation(pagesTrs);

  var domOnLoad = function domOnLoad(fn) {
    var unload = function unload() {
      window.removeEventListener('DOMContentLoaded', fn);
      window.removeEventListener('unload', unload);
    };

    window.addEventListener('DOMContentLoaded', fn);
    window.addEventListener('unload', unload);
  };

  var init = function init() {
    var onInit = Object.values(navi);
    onInit.forEach(function (fn) {
      domOnLoad(fn);
    });
  };

  return {
    init: init
  };
}

$(document).ready(function() {
    var app = new Apx(Navigation, PageTransitions);
    app.init();
});
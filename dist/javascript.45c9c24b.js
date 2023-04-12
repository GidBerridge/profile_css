// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"V7tk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuFade = menuFade;
function menuFade() {
  var nav = document.querySelector(".navbar");
  function hover(e) {
    var _this = this;
    if (e.target.classList.contains('navbar__text')) {
      var link = e.target;
      var siblings = link.closest('.navbar').querySelectorAll('.navbar__text');
      siblings.forEach(function (el) {
        if (el !== link) el.style.opacity = _this;
      });
    }
  }
  nav.addEventListener('mouseover', hover.bind(0.7));
  nav.addEventListener('mouseout', hover.bind(1));
}
;
},{}],"McMQ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scroll = void 0;
var scroll = function scroll() {
  document.querySelector('.navbar').addEventListener('click', function (e) {
    e.preventDefault();
    // Matching strategy
    if (e.target.classList.contains('navbar__text')) {
      var id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
};
exports.scroll = scroll;
},{}],"Arr1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.revealSections = revealSections;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function revealSections() {
  var allSections = document.querySelectorAll('.section');
  var revealSection = function revealSection(entries, observer) {
    var _entries = _slicedToArray(entries, 1),
      entry = _entries[0];
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    entry.target.classList.add('fadeUp');
    observer.unobserve(entry.target);
  };
  var sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
  });
  allSections.forEach(function (section) {
    sectionObserver.observe(section);
  });
}
;
},{}],"ZiKc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gallery = gallery;
function gallery() {
  var _this = this;
  document.addEventListener("DOMContentLoaded", function () {
    var sm = 480;
    var md = 768;
    var lg = 992;
    var imgH;
    var sections = document.querySelectorAll('.project-section');
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');
    var section;
    var resizeThis = function resizeThis() {
      imgH = document.querySelector('.middle img').clientWidth;
      if (window.innerWidth >= sm) {
        left.style.height = "".concat(imgH, "px");
        right.style.height = "".concat(imgH, "px");
        for (var i = 0; i < sections.length; i++) {
          sections[i].style.height = "".concat(imgH, "px");
        }
      } else {
        left.style.height = "auto";
        right.style.height = "auto";
        for (var _i = 0; _i < sections.length; _i++) {
          sections[_i].style.height = "auto";
        }
      }
    };
    resizeThis();
    window.addEventListener("resize", function () {
      resizeThis();
    });
    window.addEventListener("scroll", function () {
      for (var i = 0; i < sections.length; i++) {
        section = sections[i];
        var elementPos = section.offsetTop;
        var scrollPos = window.scrollY;
        var sectionH = section.offsetHeight;
        var h = window.innerHeight;
        var sectionVert = h / 2 - sectionH / 4;
        if (elementPos - sectionVert <= scrollPos && elementPos - sectionVert + sectionH > scrollPos) {
          section.classList.add('animate');
        } else {
          section.classList.remove('animate');
        }
      }
    });
    var links = document.querySelectorAll('a[href*="#"]:not([href="#"])');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (e) {
        if (location.pathname.replace(/^\//, '') == _this.pathname.replace(/^\//, '') && location.hostname == _this.hostname) {
          var target = document.querySelector(e.target.hash);
          if (target) {
            e.preventDefault();
            window.scrollTo({
              top: target.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    }
  });
}
},{}],"O9Hl":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bg = bg;
function bg() {
  var videos = document.querySelectorAll('video');
  for (var i = 0; i < videos.length; i++) {
    videos[i].playbackRate = 0.6;
  }
}
},{}],"qvDO":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modal = modal;
function modal() {
  var modalButtons = document.getElementsByClassName("modal-button");
  var modalContainer = document.getElementById("modal-container");
  var closeModalButton = document.getElementById("close-modal-button");
  var removeShow = function removeShow() {
    modalContainer.classList.remove("show");
    setTimeout(function () {
      modalContainer.style.display = "none";
    }, 210);
  };
  var showModal = function showModal(event) {
    event.preventDefault();
    if (modalContainer.style.display == "block") {
      removeShow();
    } else {
      modalContainer.style.display = "block";
      setTimeout(function () {
        modalContainer.classList.add("show");
      }, 20);
    }
  };
  Array.from(modalButtons).forEach(function (modalButton) {
    modalButton.addEventListener("click", showModal, false);
  });
  closeModalButton.addEventListener("click", function () {
    console.log("clicked");
    removeShow();
  });
  window.addEventListener("click", function (event) {
    if (event.target == modalContainer) {
      removeShow();
    }
  });
}
},{}],"phkL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hamburgerMenu = hamburgerMenu;
function hamburgerMenu() {
  var hamburger = document.querySelector(".hamburger");
  var navMenu = document.querySelector(".nav-menu");
  var navLink = document.querySelectorAll(".nav-item");
  var viewportWidth = window.innerWidth;
  var navFlag = document.querySelector('.projectCarousel');
  if (viewportWidth < 576) {
    navFlag.href = '#carousel';
  } else {
    navFlag.href = '#projects';
  }
  window.addEventListener('resize', function () {
    var updatedViewportWidth = window.innerWidth;
    if (updatedViewportWidth < 576) {
      navFlag.href = '#carousel';
    } else {
      navFlag.href = '#projects';
    }
  });
  var mobileMenu = function mobileMenu() {
    console.log('clicked');
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  };
  var closeMenu = function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  };
  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach(function (n) {
    return n.addEventListener("click", closeMenu);
  });
}
;
// export default hamburgerMenu;
},{}],"rEqs":[function(require,module,exports) {
"use strict";

var _menuFade = require("./menuFade.js");
var _smoothScrolling = require("./smoothScrolling.js");
var _revealSections = require("./revealSections.js");
var _gallery = require("./gallery.js");
var _bg = require("./bg.js");
var _modal = require("./modal.js");
var _hamburger = require("./hamburger.js");
Splitting();
(0, _bg.bg)();
(0, _modal.modal)();

// gallery
(0, _gallery.gallery)();

// Smooth scrolling
(0, _smoothScrolling.scroll)();

// Menu fade animation
(0, _menuFade.menuFade)();

// Reveal sections
(0, _revealSections.revealSections)();

// Hamburger
(0, _hamburger.hamburgerMenu)();
},{"./menuFade.js":"V7tk","./smoothScrolling.js":"McMQ","./revealSections.js":"Arr1","./gallery.js":"ZiKc","./bg.js":"O9Hl","./modal.js":"qvDO","./hamburger.js":"phkL"}]},{},["rEqs"], null)
//# sourceMappingURL=/javascript.45c9c24b.js.map
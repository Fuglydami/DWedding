webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v11.7.32
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
})(this, (function () { 'use strict';

  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
  }
  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
    _classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
  function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
  function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
  function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }

  const RESTORE_FOCUS_TIMEOUT = 100;

  /** @type {GlobalState} */
  const globalState = {};
  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };

  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */
  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }
      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  const swalPrefix = 'swal2-';

  /**
   * @typedef
   * { | 'container'
   *   | 'shown'
   *   | 'height-auto'
   *   | 'iosfix'
   *   | 'popup'
   *   | 'modal'
   *   | 'no-backdrop'
   *   | 'no-transition'
   *   | 'toast'
   *   | 'toast-shown'
   *   | 'show'
   *   | 'hide'
   *   | 'close'
   *   | 'title'
   *   | 'html-container'
   *   | 'actions'
   *   | 'confirm'
   *   | 'deny'
   *   | 'cancel'
   *   | 'default-outline'
   *   | 'footer'
   *   | 'icon'
   *   | 'icon-content'
   *   | 'image'
   *   | 'input'
   *   | 'file'
   *   | 'range'
   *   | 'select'
   *   | 'radio'
   *   | 'checkbox'
   *   | 'label'
   *   | 'textarea'
   *   | 'inputerror'
   *   | 'input-label'
   *   | 'validation-message'
   *   | 'progress-steps'
   *   | 'active-progress-step'
   *   | 'progress-step'
   *   | 'progress-step-line'
   *   | 'loader'
   *   | 'loading'
   *   | 'styled'
   *   | 'top'
   *   | 'top-start'
   *   | 'top-end'
   *   | 'top-left'
   *   | 'top-right'
   *   | 'center'
   *   | 'center-start'
   *   | 'center-end'
   *   | 'center-left'
   *   | 'center-right'
   *   | 'bottom'
   *   | 'bottom-start'
   *   | 'bottom-end'
   *   | 'bottom-left'
   *   | 'bottom-right'
   *   | 'grow-row'
   *   | 'grow-column'
   *   | 'grow-fullscreen'
   *   | 'rtl'
   *   | 'timer-progress-bar'
   *   | 'timer-progress-bar-container'
   *   | 'scrollbar-measure'
   *   | 'icon-success'
   *   | 'icon-warning'
   *   | 'icon-info'
   *   | 'icon-question'
   *   | 'icon-error'
   * } SwalClass
   * @typedef {Record<SwalClass, string>} SwalClasses
   */

  /**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */

  /** @type {SwalClass[]} */
  const classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error'];
  const swalClasses = classNames.reduce((acc, className) => {
    acc[className] = swalPrefix + className;
    return acc;
  }, /** @type {SwalClasses} */{});

  /** @type {SwalIcon[]} */
  const icons = ['success', 'warning', 'info', 'question', 'error'];
  const iconTypes = icons.reduce((acc, icon) => {
    acc[icon] = swalPrefix + icon;
    return acc;
  }, /** @type {SwalIcons} */{});

  const consolePrefix = 'SweetAlert2:';

  /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */
  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  /**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */
  const warn = message => {
    console.warn("".concat(consolePrefix, " ").concat(typeof message === 'object' ? message.join(' ') : message));
  };

  /**
   * Standardize console errors
   *
   * @param {string} message
   */
  const error = message => {
    console.error("".concat(consolePrefix, " ").concat(message));
  };

  /**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */
  const previousWarnOnceMessages = [];

  /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */
  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };

  /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string} useInstead
   */
  const warnAboutDeprecation = (deprecatedParam, useInstead) => {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };

  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */
  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';

  /**
   * @param {any} arg
   * @returns {Promise<any>}
   */
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  const isPromise = arg => arg && Promise.resolve(arg) === arg;

  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */
  const getContainer = () => document.body.querySelector(".".concat(swalClasses.container));

  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */
  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */
  const elementByClass = className => {
    return elementBySelector(".".concat(className));
  };

  /**
   * @returns {HTMLElement | null}
   */
  const getPopup = () => elementByClass(swalClasses.popup);

  /**
   * @returns {HTMLElement | null}
   */
  const getIcon = () => elementByClass(swalClasses.icon);

  /**
   * @returns {HTMLElement | null}
   */
  const getIconContent = () => elementByClass(swalClasses['icon-content']);

  /**
   * @returns {HTMLElement | null}
   */
  const getTitle = () => elementByClass(swalClasses.title);

  /**
   * @returns {HTMLElement | null}
   */
  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);

  /**
   * @returns {HTMLElement | null}
   */
  const getImage = () => elementByClass(swalClasses.image);

  /**
   * @returns {HTMLElement | null}
   */
  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);

  /**
   * @returns {HTMLElement | null}
   */
  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getConfirmButton = () => /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getCancelButton = () => /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getDenyButton = () => /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));

  /**
   * @returns {HTMLElement | null}
   */
  const getInputLabel = () => elementByClass(swalClasses['input-label']);

  /**
   * @returns {HTMLElement | null}
   */
  const getLoader = () => elementBySelector(".".concat(swalClasses.loader));

  /**
   * @returns {HTMLElement | null}
   */
  const getActions = () => elementByClass(swalClasses.actions);

  /**
   * @returns {HTMLElement | null}
   */
  const getFooter = () => elementByClass(swalClasses.footer);

  /**
   * @returns {HTMLElement | null}
   */
  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);

  /**
   * @returns {HTMLElement | null}
   */
  const getCloseButton = () => elementByClass(swalClasses.close);

  // https://github.com/jkup/focusable/blob/master/index.js
  const focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  /**
   * @returns {HTMLElement[]}
   */
  const getFocusableElements = () => {
    const popup = getPopup();
    if (!popup) {
      return [];
    }
    /** @type {NodeListOf<HTMLElement>} */
    const focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
    const focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)
    // sort according to tabindex
    .sort((a, b) => {
      const tabindexA = parseInt(a.getAttribute('tabindex') || '0');
      const tabindexB = parseInt(b.getAttribute('tabindex') || '0');
      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }
      return 0;
    });

    /** @type {NodeListOf<HTMLElement>} */
    const otherFocusableElements = popup.querySelectorAll(focusable);
    const otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(el => el.getAttribute('tabindex') !== '-1');
    return [...new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))].filter(el => isVisible$1(el));
  };

  /**
   * @returns {boolean}
   */
  const isModal = () => {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };

  /**
   * @returns {boolean}
   */
  const isToast = () => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    return hasClass(popup, swalClasses.toast);
  };

  /**
   * @returns {boolean}
   */
  const isLoading = () => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    return popup.hasAttribute('data-loading');
  };

  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */
  const setInnerHtml = (elem, html) => {
    elem.textContent = '';
    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, "text/html");
      const head = parsed.querySelector('head');
      head && Array.from(head.childNodes).forEach(child => {
        elem.appendChild(child);
      });
      const body = parsed.querySelector('body');
      body && Array.from(body.childNodes).forEach(child => {
        if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
          elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
        } else {
          elem.appendChild(child);
        }
      });
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */
  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }
    const classList = className.split(/\s+/);
    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }
    return true;
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */
  const removeCustomClasses = (elem, params) => {
    Array.from(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */
  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);
    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(typeof params.customClass[className], "\""));
        return;
      }
      addClass(elem, params.customClass[className]);
    }
  };

  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
   * @returns {HTMLInputElement | null}
   */
  const getInput$1 = (popup, inputClass) => {
    if (!inputClass) {
      return null;
    }
    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses[inputClass]));
      case 'checkbox':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.checkbox, " input"));
      case 'radio':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:first-child"));
      case 'range':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.range, " input"));
      default:
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.input));
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */
  const focusInput = input => {
    input.focus();

    // place cursor at end of text in text input
    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   * @param {boolean} condition
   */
  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }
    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }
    classList.forEach(className => {
      if (Array.isArray(target)) {
        target.forEach(elem => {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };

  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */
  const getDirectChildByClass = (elem, className) => {
    const children = Array.from(elem.children);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child instanceof HTMLElement && hasClass(child, className)) {
        return child;
      }
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */
  const applyNumericalStyle = (elem, property, value) => {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }
    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  const show = function (elem) {
    let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem && (elem.style.display = display);
  };

  /**
   * @param {HTMLElement | null} elem
   */
  const hide = elem => {
    elem && (elem.style.display = 'none');
  };

  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */
  const setStyle = (parent, selector, property, value) => {
    /** @type {HTMLElement} */
    const el = parent.querySelector(selector);
    if (el) {
      el.style[property] = value;
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */
  const toggle = function (elem, condition) {
    let display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
    condition ? show(elem, display) : hide(elem);
  };

  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement | null} elem
   * @returns {boolean}
   */
  const isVisible$1 = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));

  /**
   * @returns {boolean}
   */
  const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());

  /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight);

  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };

  /**
   * @param {number} timer
   * @param {boolean} reset
   */
  const animateTimerProgressBar = function (timer) {
    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    if (isVisible$1(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }
      setTimeout(() => {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  /**
   * Detect Node env
   *
   * @returns {boolean}
   */
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" id=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\" id=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" id=\"").concat(swalClasses.checkbox, "\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\" id=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  /**
   * @returns {boolean}
   */
  const resetOldContainer = () => {
    const oldContainer = getContainer();
    if (!oldContainer) {
      return false;
    }
    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };
  const resetValidationMessage$1 = () => {
    globalState.currentInstance.resetValidationMessage();
  };
  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getDirectChildByClass(popup, swalClasses.input);
    const file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */
    const range = popup.querySelector(".".concat(swalClasses.range, " input"));
    /** @type {HTMLOutputElement} */
    const rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
    const select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */
    const checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
    const textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage$1;
    file.onchange = resetValidationMessage$1;
    select.onchange = resetValidationMessage$1;
    checkbox.onchange = resetValidationMessage$1;
    textarea.oninput = resetValidationMessage$1;
    range.oninput = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
    range.onchange = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
  };

  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */
  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;

  /**
   * @param {SweetAlertOptions} params
   */
  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  /**
   * @param {HTMLElement} targetElement
   */
  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };

  /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */
  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }
    const container = document.createElement('div');
    container.className = swalClasses.container;
    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }
    setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */
  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    }

    // Object
    else if (typeof param === 'object') {
      handleObject(param, target);
    }

    // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };

  /**
   * @param {any} param
   * @param {HTMLElement} target
   */
  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    }

    // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };

  /**
   * @param {HTMLElement} target
   * @param {any} elem
   */
  const handleJqueryElem = (target, elem) => {
    target.textContent = '';
    if (0 in elem) {
      for (let i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  /**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */
  const animationEndEvent = (() => {
    // Prevent run in Node env
    if (isNodeEnv()) {
      return false;
    }
    const testEl = document.createElement('div');

    // Chrome, Safari and Opera
    if (typeof testEl.style.webkitAnimation !== 'undefined') {
      return 'webkitAnimationEnd';
    }

    // Standard syntax
    if (typeof testEl.style.animation !== 'undefined') {
      return 'animationend';
    }
    return false;
  })();

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader();
    if (!actions || !loader) {
      return;
    }

    // Actions (buttons) wrapper
    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    }

    // Custom class
    applyCustomClass(actions, params, 'actions');

    // Render all the buttons
    renderButtons(actions, loader, params);

    // Loader
    setInnerHtml(loader, params.loaderHtml || '');
    applyCustomClass(loader, params, 'loader');
  };

  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */
  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    if (!confirmButton || !denyButton || !cancelButton) {
      return;
    }

    // Render buttons
    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }

  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */
  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
      return;
    }
    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);

    // Buttons background colors
    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }
    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }
    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }

  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */
  function renderButton(button, buttonType, params) {
    const buttonName = /** @type {'Confirm' | 'Deny' | 'Cancel'} */capitalizeFirstLetter(buttonType);
    toggle(button, params["show".concat(buttonName, "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")] || ''); // Set caption text
    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")] || ''); // ARIA label

    // Add buttons custom classes
    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
  }

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    if (!closeButton) {
      return;
    }
    setInnerHtml(closeButton, params.closeButtonHtml || '');

    // Custom class
    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel || '');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderContainer = (instance, params) => {
    const container = getContainer();
    if (!container) {
      return;
    }
    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow);

    // Custom class
    applyCustomClass(container, params, 'container');
  };

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */
  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */
  function handlePositionParam(container, position) {
    if (!position) {
      return;
    }
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */
  function handleGrowParam(container, grow) {
    if (!grow) {
      return;
    }
    addClass(container, swalClasses["grow-".concat(grow)]);
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateProps = {
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  /// <reference path="../../../../sweetalert2.d.ts"/>


  /** @type {InputClass[]} */
  const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderInput = (instance, params) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(inputClass => {
      const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
      if (!inputContainer) {
        return;
      }

      // set attributes
      setAttributes(inputClass, params.inputAttributes);

      // set class
      inputContainer.className = swalClasses[inputClass];
      if (rerender) {
        hide(inputContainer);
      }
    });
    if (params.input) {
      if (rerender) {
        showInput(params);
      }
      // set custom class
      setCustomClass(params);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const showInput = params => {
    if (!params.input) {
      return;
    }
    if (!renderInputType[params.input]) {
      error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
      return;
    }
    const inputContainer = getInputContainer(params.input);
    const input = renderInputType[params.input](inputContainer, params);
    show(inputContainer);

    // input autofocus
    if (params.inputAutoFocus) {
      setTimeout(() => {
        focusInput(input);
      });
    }
  };

  /**
   * @param {HTMLInputElement} input
   */
  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;
      if (!['id', 'type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */
  const setAttributes = (inputClass, inputAttributes) => {
    const input = getInput$1(getPopup(), inputClass);
    if (!input) {
      return;
    }
    removeAttributes(input);
    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const setCustomClass = params => {
    const inputContainer = getInputContainer(params.input);
    if (typeof params.customClass === 'object') {
      addClass(inputContainer, params.customClass.input);
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */
  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */
  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      if (typeof params.customClass === 'object') {
        addClass(label, params.customClass.inputLabel);
      }
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  /**
   * @param {SweetAlertOptions['input']} inputType
   * @returns {HTMLElement}
   */
  const getInputContainer = inputType => {
    return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
  };

  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */
  const checkAndSetInputValue = (input, inputValue) => {
    if (['string', 'number'].includes(typeof inputValue)) {
      input.value = "".concat(inputValue);
    } else if (!isPromise(inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(typeof inputValue, "\""));
    }
  };

  /** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */
  const renderInputType = {};

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };

  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */
  renderInputType.select = (select, params) => {
    select.textContent = '';
    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }
    setInputLabel(select, select, params);
    return select;
  };

  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */
  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };

  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput$1(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkbox;
  };

  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */
  renderInputType.textarea = (textarea, params) => {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    /**
     * @param {HTMLElement} el
     * @returns {number}
     */
    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);

    // https://github.com/sweetalert2/sweetalert2/issues/2291
    setTimeout(() => {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
        const textareaResizeHandler = () => {
          // check if texarea is still in document (i.e. popup wasn't closed in the meantime)
          if (!document.body.contains(textarea)) {
            return;
          }
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);
          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = "".concat(textareaWidth, "px");
          } else {
            applyNumericalStyle(getPopup(), 'width', params.width);
          }
        };
        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    if (!htmlContainer) {
      return;
    }
    applyCustomClass(htmlContainer, params, 'htmlContainer');

    // Content as HTML
    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    }

    // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    }

    // No content
    else {
      hide(htmlContainer);
    }
    renderInput(instance, params);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderFooter = (instance, params) => {
    const footer = getFooter();
    if (!footer) {
      return;
    }
    toggle(footer, params.footer, 'block');
    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    }

    // Custom class
    applyCustomClass(footer, params, 'footer');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon();
    if (!icon) {
      return;
    }

    // if the given icon already rendered, apply the styling without re-rendering the icon
    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }
    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }
    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      hide(icon);
      return;
    }
    show(icon);

    // Custom or default content
    setContent(icon, params);
    applyStyles(icon, params);

    // Animate icon
    addClass(icon, params.showClass && params.showClass.icon);
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const applyStyles = (icon, params) => {
    for (const [iconType, iconClassName] of Object.entries(iconTypes)) {
      if (params.icon !== iconType) {
        removeClass(icon, iconClassName);
      }
    }
    addClass(icon, params.icon && iconTypes[params.icon]);

    // Icon color
    setColor(icon, params);

    // Success icon background color
    adjustSuccessIconBackgroundColor();

    // Custom class
    applyCustomClass(icon, params, 'icon');
  };

  // Adjust success icon background color to match the popup background color
  const adjustSuccessIconBackgroundColor = () => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */
    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };
  const successIconHtml = "\n  <div class=\"swal2-success-circular-line-left\"></div>\n  <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n  <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n  <div class=\"swal2-success-circular-line-right\"></div>\n";
  const errorIconHtml = "\n  <span class=\"swal2-x-mark\">\n    <span class=\"swal2-x-mark-line-left\"></span>\n    <span class=\"swal2-x-mark-line-right\"></span>\n  </span>\n";

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setContent = (icon, params) => {
    if (!params.icon && !params.iconHtml) {
      return;
    }
    let oldContent = icon.innerHTML;
    let newContent = '';
    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml;
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else if (params.icon) {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }
    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }
    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;
    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }
    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  /**
   * @param {string} content
   * @returns {string}
   */
  const iconContent = content => "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderImage = (instance, params) => {
    const image = getImage();
    if (!image) {
      return;
    }
    if (!params.imageUrl) {
      hide(image);
      return;
    }
    show(image, '');

    // Src, alt
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt || '');

    // Width, height
    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight);

    // Class
    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup();
    if (!container || !popup) {
      return;
    }

    // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170
    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      const loader = getLoader();
      loader && popup.insertBefore(loader, getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    }

    // Padding
    applyNumericalStyle(popup, 'padding', params.padding);

    // Color
    if (params.color) {
      popup.style.color = params.color;
    }

    // Background
    if (params.background) {
      popup.style.background = params.background;
    }
    hide(getValidationMessage());

    // Classes
    addClasses$1(popup, params);
  };

  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses$1 = (popup, params) => {
    const showClass = params.showClass || {};
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible$1(popup) ? showClass.popup : '');
    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    }

    // Custom class
    applyCustomClass(popup, params, 'popup');
    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    }

    // Icon class (#1842)
    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();
    if (!progressStepsContainer) {
      return;
    }
    const {
      progressSteps,
      currentProgressStep
    } = params;
    if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
      hide(progressStepsContainer);
      return;
    }
    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    if (currentProgressStep >= progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);
      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }
      if (index !== progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */
  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */
  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);
    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }
    return lineEl;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderTitle = (instance, params) => {
    const title = getTitle();
    if (!title) {
      return;
    }
    toggle(title, params.title || params.titleText, 'block');
    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }
    if (params.titleText) {
      title.innerText = params.titleText;
    }

    // Custom class
    applyCustomClass(title, params, 'title');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);
    const popup = getPopup();
    if (typeof params.didRender === 'function' && popup) {
      params.didRender(popup);
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */
  const isVisible = () => {
    return isVisible$1(getPopup());
  };

  /*
   * Global function to click 'Confirm' button
   */
  const clickConfirm = () => {
    var _dom$getConfirmButton;
    return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
  };

  /*
   * Global function to click 'Deny' button
   */
  const clickDeny = () => {
    var _dom$getDenyButton;
    return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
  };

  /*
   * Global function to click 'Cancel' button
   */
  const clickCancel = () => {
    var _dom$getCancelButton;
    return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
  };

  /** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */

  /** @type {Record<DismissReason, DismissReason>} */
  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  /**
   * @param {GlobalState} globalState
   */
  const removeKeydownHandler = globalState => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */
  const addKeydownHandler = (globalState, innerParams, dismissWith) => {
    removeKeydownHandler(globalState);
    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(innerParams, e, dismissWith);
      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };

  /**
   * @param {number} index
   * @param {number} increment
   */
  const setFocus = (index, increment) => {
    var _dom$getPopup;
    const focusableElements = getFocusableElements();
    // search for visible elements and select the next possible match
    if (focusableElements.length) {
      index = index + increment;

      // rollover to first item
      if (index === focusableElements.length) {
        index = 0;

        // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }
      focusableElements[index].focus();
      return;
    }
    // no visible focusable elements, focus the popup
    (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {KeyboardEvent} event
   * @param {Function} dismissWith
   */
  const keydownHandler = (innerParams, event, dismissWith) => {
    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (innerParams.stopKeydownPropagation) {
      event.stopPropagation();
    }

    // ENTER
    if (event.key === 'Enter') {
      handleEnter(event, innerParams);
    }

    // TAB
    else if (event.key === 'Tab') {
      handleTab(event);
    }

    // ARROWS - switch focus between buttons
    else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(event.key)) {
      handleArrows(event.key);
    }

    // ESC
    else if (event.key === 'Escape') {
      handleEsc(event, innerParams, dismissWith);
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */
  const handleEnter = (event, innerParams) => {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }
    const input = getInput$1(getPopup(), innerParams.input);
    if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }

      clickConfirm();
      event.preventDefault();
    }
  };

  /**
   * @param {KeyboardEvent} event
   */
  const handleTab = event => {
    const targetElement = event.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;
    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    // Cycle to the next button
    if (!event.shiftKey) {
      setFocus(btnIndex, 1);
    }

    // Cycle to the prev button
    else {
      setFocus(btnIndex, -1);
    }
    event.stopPropagation();
    event.preventDefault();
  };

  /**
   * @param {string} key
   */
  const handleArrows = key => {
    const actions = getActions();
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    if (!actions || !confirmButton || !denyButton || !cancelButton) {
      return;
    }
    /** @type HTMLElement[] */
    const buttons = [confirmButton, denyButton, cancelButton];
    if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
      return;
    }
    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    let buttonToFocus = document.activeElement;
    if (!buttonToFocus) {
      return;
    }
    for (let i = 0; i < actions.children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];
      if (!buttonToFocus) {
        return;
      }
      if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
        break;
      }
    }
    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  const handleEsc = (event, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      event.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el === getContainer() || el.contains(getContainer())) {
        return;
      }
      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden') || '');
      }
      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden') || '');
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  // @ts-ignore
  const isSafariOrIOS = typeof window !== 'undefined' && !!window.GestureEvent; // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394

  /**
   * Fix iOS scrolling
   * http://stackoverflow.com/q/39626302
   */
  const iOSfix = () => {
    if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
    }
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */
  const lockBodyScroll = () => {
    const container = getContainer();
    if (!container) {
      return;
    }
    /** @type {boolean} */
    let preventTouchMove;
    /**
     * @param {TouchEvent} event
     */
    container.ontouchstart = event => {
      preventTouchMove = shouldPreventTouchMove(event);
    };
    /**
     * @param {TouchEvent} event
     */
    container.ontouchmove = event => {
      if (preventTouchMove) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
  };

  /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();
    const htmlContainer = getHtmlContainer();
    if (!container || !htmlContainer) {
      return false;
    }
    if (isStylus(event) || isZoom(event)) {
      return false;
    }
    if (target === container) {
      return true;
    }
    if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== 'INPUT' &&
    // #1603
    target.tagName !== 'TEXTAREA' &&
    // #2266
    !(isScrollable(htmlContainer) &&
    // #1944
    htmlContainer.contains(target))) {
      return true;
    }
    return false;
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */
  const isStylus = event => {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const isZoom = event => {
    return event.touches && event.touches.length > 1;
  };
  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */
  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  /**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */
  let previousBodyPadding = null;

  /**
   * @param {string} initialBodyOverflow
   */
  const replaceScrollbarWithPadding = initialBodyOverflow => {
    // for queues, do not do this more than once
    if (previousBodyPadding !== null) {
      return;
    }
    // if the body has overflow
    if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === 'scroll' // https://github.com/sweetalert2/sweetalert2/issues/2663
    ) {
      // add padding so the content doesn't shift after removal of scrollbar
      previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(previousBodyPadding + measureScrollbar(), "px");
    }
  };
  const undoReplaceScrollbarWithPadding = () => {
    if (previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(previousBodyPadding, "px");
      previousBodyPadding = null;
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      removeKeydownHandler(globalState);
    }

    // workaround for https://github.com/sweetalert2/sweetalert2/issues/2088
    // for some reason removing the container in Safari will scroll the document to bottom
    if (isSafariOrIOS) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }
    if (isModal()) {
      undoReplaceScrollbarWithPadding();
      undoIOSfix();
      unsetAriaHidden();
    }
    removeBodyClasses();
  }

  /**
   * Remove SweetAlert2 classes from body
   */
  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  /**
   * Instance method to close sweetAlert
   *
   * @param {any} resolveValue
   */
  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);
    if (this.isAwaitingPromise) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  const triggerClosePopup = instance => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  /**
   * @param {any} error
   */
  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);
    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }

  /**
   * @param {SweetAlert} instance
   */
  const handleAwaitingPromise = instance => {
    if (instance.isAwaitingPromise) {
      delete instance.isAwaitingPromise;
      // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  /**
   * @param {any} resolveValue
   * @returns {SweetAlertResult}
   */
  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }
    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */
  const handlePopupAnimation = (instance, popup, innerParams) => {
    const container = getContainer();
    // If animation is supported, animate
    const animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }
    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    if (!animationEndEvent) {
      return;
    }
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  /**
   * @param {SweetAlert} instance
   * @param {Function} didClose
   */
  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }
      // instance might have been destroyed already
      if (instance._destroy) {
        instance._destroy();
      }
    });
  };

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  const showLoading = buttonToReplace => {
    let popup = getPopup();
    if (!popup) {
      new Swal(); // eslint-disable-line no-new
    }

    popup = getPopup();
    if (!popup) {
      return;
    }
    const loader = getLoader();
    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }
    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };

  /**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();
    if (!actions || !loader) {
      return;
    }
    if (!buttonToReplace && isVisible$1(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }
    show(actions);
    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
      actions.insertBefore(loader, buttonToReplace);
    }
    addClass([popup, actions], swalClasses.loading);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].some(i => i === params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {SweetAlertInputValue}
   */
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();
    if (!input) {
      return null;
    }
    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);
      case 'radio':
        return getRadioValue(input);
      case 'file':
        return getFileValue(input);
      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */
  const getCheckboxValue = input => input.checked ? 1 : 0;

  /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */
  const getRadioValue = input => input.checked ? input.value : null;

  /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */
  const getFileValue = input => input.files && input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptions = (instance, params) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    /**
     * @param {Record<string, any>} inputOptions
     */
    const processInputOptions = inputOptions => {
      if (params.input === 'select') {
        populateSelectOptions(popup, formatInputOptions(inputOptions), params);
      } else if (params.input === 'radio') {
        populateRadioOptions(popup, formatInputOptions(inputOptions), params);
      }
    };
    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof params.inputOptions));
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    if (!input) {
      return;
    }
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? "".concat(parseFloat(inputValue) || 0) : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateSelectOptions(popup, inputOptions, params) {
    const select = getDirectChildByClass(popup, swalClasses.select);
    if (!select) {
      return;
    }
    /**
     * @param {HTMLElement} parent
     * @param {string} optionLabel
     * @param {string} optionValue
     */
    const renderOption = (parent, optionLabel, optionValue) => {
      const option = document.createElement('option');
      option.value = optionValue;
      setInnerHtml(option, optionLabel);
      option.selected = isSelected(optionValue, params.inputValue);
      parent.appendChild(option);
    };
    inputOptions.forEach(inputOption => {
      const optionValue = inputOption[0];
      const optionLabel = inputOption[1];
      // <optgroup> spec:
      // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
      // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
      // check whether this is a <optgroup>
      if (Array.isArray(optionLabel)) {
        // if it is an array, then it is an <optgroup>
        const optgroup = document.createElement('optgroup');
        optgroup.label = optionValue;
        optgroup.disabled = false; // not configurable for now
        select.appendChild(optgroup);
        optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
      } else {
        // case of <option>
        renderOption(select, optionLabel, optionValue);
      }
    });
    select.focus();
  }

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateRadioOptions(popup, inputOptions, params) {
    const radio = getDirectChildByClass(popup, swalClasses.radio);
    if (!radio) {
      return;
    }
    inputOptions.forEach(inputOption => {
      const radioValue = inputOption[0];
      const radioLabel = inputOption[1];
      const radioInput = document.createElement('input');
      const radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;
      if (isSelected(radioValue, params.inputValue)) {
        radioInput.checked = true;
      }
      const label = document.createElement('span');
      setInnerHtml(label, radioLabel);
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    const radios = radio.querySelectorAll('input');
    if (radios.length) {
      radios[0].focus();
    }
  }

  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @typedef {string[]} InputOptionFlattened
   * @returns {InputOptionFlattened[]}
   */
  const formatInputOptions = inputOptions => {
    /** @type {InputOptionFlattened[]} */
    const result = [];
    if (inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;
        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];
        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    }
    return result;
  };

  /**
   * @param {string} optionValue
   * @param {SweetAlertInputValue} inputValue
   * @returns {boolean}
   */
  const isSelected = (optionValue, inputValue) => {
    return !!inputValue && inputValue.toString() === optionValue.toString();
  };

  /**
   * @param {SweetAlert} instance
   */
  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };

  /**
   * @param {SweetAlert} instance
   */
  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {Function} dismissWith
   */
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  /**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */
  const handleConfirmOrDenyWithInput = (instance, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams.input) {
      error("The \"input\" parameter is needed to be set when using returnInputValueOn".concat(capitalizeFirstLetter(type)));
      return;
    }
    const input = instance.getInput();
    const inputValue = getInputValue(instance, innerParams);
    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (input && !input.checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertInputValue} inputValue
   * @param {'confirm' | 'deny'} type
   */
  const handleInputValidator = (instance, inputValue, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();
      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */
  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }
    if (innerParams.preDeny) {
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.close({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      instance.close({
        isDenied: true,
        value
      });
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */
  const succeedWith = (instance, value) => {
    instance.close({
      isConfirmed: true,
      value
    });
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */
  const rejectWith = (instance, error) => {
    instance.rejectPromise(error);
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {any} value
   */
  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }
    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      succeedWith(instance, value);
    }
  };

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */
  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      return;
    }
    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }
    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }
  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   */
  function getInput() {
    const innerParams = privateProps.innerParams.get(this);
    const domCache = privateProps.domCache.get(this);
    if (!domCache) {
      return null;
    }
    return getInput$1(domCache.popup, innerParams.input);
  }

  /**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */
  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  /**
   * @param {HTMLInputElement | null} input
   * @param {boolean} disabled
   */
  function setInputDisabled(input, disabled) {
    const popup = getPopup();
    if (!popup || !input) {
      return;
    }
    if (input.type === 'radio') {
      /** @type {NodeListOf<HTMLInputElement>} */
      const radios = popup.querySelectorAll("[name=\"".concat(swalClasses.radio, "\"]"));
      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  /**
   * Enable all the buttons
   * @this {SweetAlert}
   */
  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }

  /**
   * Disable all the buttons
   * @this {SweetAlert}
   */
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }

  /**
   * Enable the input field
   * @this {SweetAlert}
   */
  function enableInput() {
    setInputDisabled(this.getInput(), false);
  }

  /**
   * Disable the input field
   * @this {SweetAlert}
   */
  function disableInput() {
    setInputDisabled(this.getInput(), true);
  }

  /**
   * Show block with validation message
   *
   * @param {string} error
   * @this {SweetAlert}
   */
  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];
    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }
    show(domCache.validationMessage);
    const input = this.getInput();
    if (input) {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  }

  /**
   * Hide block with validation message
   *
   * @this {SweetAlert}
   */
  function resetValidationMessage() {
    const domCache = privateProps.domCache.get(this);
    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }
    const input = this.getInput();
    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoFocus: true,
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];

  /** @type {Record<string, string>} */
  const deprecatedParams = {};
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];

  /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };

  /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };

  /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */
  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  /**
   * @param {string} param
   */
  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsDeprecated = param => {
    const isDeprecated = isDeprecatedParameter(param);
    if (isDeprecated) {
      warnAboutDeprecation(param, isDeprecated);
    }
  };

  /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */
  const showWarningsForParams = params => {
    if (params.backdrop === false && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }
    for (const param in params) {
      checkIfParamIsValid(param);
      if (params.toast) {
        checkIfToastParamIsValid(param);
      }
      checkIfParamIsDeprecated(param);
    }
  };

  /**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */
  function update(params) {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);
    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
      return;
    }
    const validUpdatableParams = filterValidParams(params);
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const filterValidParams = params => {
    const validUpdatableParams = {};
    Object.keys(params).forEach(param => {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: ".concat(param));
      }
    });
    return validUpdatableParams;
  };

  /**
   * Dispose the current SweetAlert2 instance
   */
  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
      return; // This instance has already been destroyed
    }

    // Check if there is another Swal closing
    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }
    disposeSwal(this);
  }

  /**
   * @param {SweetAlert} instance
   */
  const disposeSwal = instance => {
    disposeWeakMaps(instance);
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params;
    // Unset globalState props so GC will dispose globalState (#1569)
    delete globalState.keydownHandler;
    delete globalState.keydownTarget;
    // Unset currentInstance
    delete globalState.currentInstance;
  };

  /**
   * @param {SweetAlert} instance
   */
  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    if (instance.isAwaitingPromise) {
      unsetWeakMaps(privateProps, instance);
      instance.isAwaitingPromise = true;
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
      delete instance.isAwaitingPromise;
      // Unset instance methods
      delete instance.disableButtons;
      delete instance.enableButtons;
      delete instance.getInput;
      delete instance.disableInput;
      delete instance.enableInput;
      delete instance.hideLoading;
      delete instance.disableLoading;
      delete instance.showValidationMessage;
      delete instance.resetValidationMessage;
      delete instance.close;
      delete instance.closePopup;
      delete instance.closeModal;
      delete instance.closeToast;
      delete instance.rejectPromise;
      delete instance.update;
      delete instance._destroy;
    }
  };

  /**
   * @param {object} obj
   * @param {SweetAlert} instance
   */
  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };

  var instanceMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _destroy: _destroy,
    close: close,
    closeModal: close,
    closePopup: close,
    closeToast: close,
    disableButtons: disableButtons,
    disableInput: disableInput,
    disableLoading: hideLoading,
    enableButtons: enableButtons,
    enableInput: enableInput,
    getInput: getInput,
    handleAwaitingPromise: handleAwaitingPromise,
    hideLoading: hideLoading,
    rejectPromise: rejectPromise,
    resetValidationMessage: resetValidationMessage,
    showValidationMessage: showValidationMessage,
    update: update
  });

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  const handlePopupClick = (innerParams, domCache, dismissWith) => {
    if (innerParams.toast) {
      handleToastClick(innerParams, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache);

      // Ignore click events that had mousedown on the container but mouseup on the popup
      handleContainerMousedown(domCache);
      handleModalClick(innerParams, domCache, dismissWith);
    }
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  const handleToastClick = (innerParams, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }
      dismissWith(DismissReason.close);
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  const isAnyButtonShown = innerParams => {
    return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
  };
  let ignoreOutsideClick = false;

  /**
   * @param {DomCache} domCache
   */
  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = () => {};
        // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup
        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {DomCache} domCache
   */
  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = () => {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = () => {};
        // We also need to check if the mouseup target is a child of the popup
        if (e.target === domCache.popup || e.target instanceof HTMLElement && domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  const handleModalClick = (innerParams, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }
      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;
  const isElement = elem => elem instanceof Element || isJqueryElement(elem);
  const argsToParams = args => {
    const params = {};
    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];
        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(typeof arg));
        }
      });
    }
    return params;
  };

  /**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */
  function fire() {
    const Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return new Swal(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlert}
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }
    }
    // @ts-ignore
    return MixinSwal;
  }

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */
  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };

  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };

  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} ms
   * @returns {number | undefined}
   */
  const increaseTimer = ms => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(ms);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };

  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */
  const isTimerRunning = () => {
    return !!(globalState.timeout && globalState.timeout.isRunning());
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};

  /**
   * @param {string} attr
   */
  function bindClickHandler() {
    let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;
    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }
  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);
        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };

  var staticMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    argsToParams: argsToParams,
    bindClickHandler: bindClickHandler,
    clickCancel: clickCancel,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    enableLoading: showLoading,
    fire: fire,
    getActions: getActions,
    getCancelButton: getCancelButton,
    getCloseButton: getCloseButton,
    getConfirmButton: getConfirmButton,
    getContainer: getContainer,
    getDenyButton: getDenyButton,
    getFocusableElements: getFocusableElements,
    getFooter: getFooter,
    getHtmlContainer: getHtmlContainer,
    getIcon: getIcon,
    getIconContent: getIconContent,
    getImage: getImage,
    getInputLabel: getInputLabel,
    getLoader: getLoader,
    getPopup: getPopup,
    getProgressSteps: getProgressSteps,
    getTimerLeft: getTimerLeft,
    getTimerProgressBar: getTimerProgressBar,
    getTitle: getTitle,
    getValidationMessage: getValidationMessage,
    increaseTimer: increaseTimer,
    isDeprecatedParameter: isDeprecatedParameter,
    isLoading: isLoading,
    isTimerRunning: isTimerRunning,
    isUpdatableParameter: isUpdatableParameter,
    isValidParameter: isValidParameter,
    isVisible: isVisible,
    mixin: mixin,
    resumeTimer: resumeTimer,
    showLoading: showLoading,
    stopTimer: stopTimer,
    toggleTimer: toggleTimer
  });

  class Timer {
    /**
     * @param {Function} callback
     * @param {number} delay
     */
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    /**
     * @returns {number}
     */
    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }
      return this.remaining;
    }

    /**
     * @returns {number}
     */
    stop() {
      if (this.started && this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date().getTime() - this.started.getTime();
      }
      return this.remaining;
    }

    /**
     * @param {number} n
     * @returns {number}
     */
    increase(n) {
      const running = this.running;
      if (running) {
        this.stop();
      }
      this.remaining += n;
      if (running) {
        this.start();
      }
      return this.remaining;
    }

    /**
     * @returns {number}
     */
    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }
      return this.remaining;
    }

    /**
     * @returns {boolean}
     */
    isRunning() {
      return this.running;
    }
  }

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const getTemplateParams = params => {
    /** @type {HTMLTemplateElement} */
    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;
    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */
    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalParams = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */
    const swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    swalParams.forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = param.getAttribute('name');
      const value = param.getAttribute('value');
      if (typeof defaultParams[paramName] === 'boolean') {
        result[paramName] = value !== 'false';
      } else if (typeof defaultParams[paramName] === 'object') {
        result[paramName] = JSON.parse(value);
      } else {
        result[paramName] = value;
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalFunctionParams = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */
    const swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
    swalFunctions.forEach(param => {
      const paramName = param.getAttribute('name');
      const value = param.getAttribute('value');
      result[paramName] = new Function("return ".concat(value))();
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalButtons = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */
    const swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    swalButtons.forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;
      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }
      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalImage = templateContent => {
    const result = {};
    /** @type {HTMLElement} */
    const image = templateContent.querySelector('swal-image');
    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }
      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }
      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }
      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalIcon = templateContent => {
    const result = {};
    /** @type {HTMLElement} */
    const icon = templateContent.querySelector('swal-icon');
    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);
      if (icon.hasAttribute('type')) {
        /** @type {SweetAlertIcon} */
        // @ts-ignore
        result.icon = icon.getAttribute('type');
      }
      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }
      result.iconHtml = icon.innerHTML;
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalInput = templateContent => {
    const result = {};
    /** @type {HTMLElement} */
    const input = templateContent.querySelector('swal-input');
    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      /** @type {SweetAlertInput} */
      // @ts-ignore
      result.input = input.getAttribute('type') || 'text';
      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }
      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }
      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    /** @type {HTMLElement[]} */
    const inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));
    if (inputOptions.length) {
      result.inputOptions = {};
      inputOptions.forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {SweetAlertOptions}
   */
  const getSwalStringParams = (templateContent, paramNames) => {
    const result = {};
    for (const i in paramNames) {
      const paramName = paramNames[i];
      /** @type {HTMLElement} */
      const tag = templateContent.querySelector(paramName);
      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   */
  const showWarningsForElements = templateContent => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    Array.from(templateContent.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();
      if (!allowedElements.includes(tagName)) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };

  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */
  const showWarningsForAttributes = (el, allowedAttributes) => {
    Array.from(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  const SHOW_CLASS_TIMEOUT = 10;

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */
  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();
    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }
    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params);

    // scrolling is 'hidden' until animation is done, after that 'auto'
    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);
    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }
    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }
    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }
    removeClass(container, swalClasses['no-transition']);
  };

  /**
   * @param {AnimationEvent} event
   */
  const swalOpenAnimationFinished = event => {
    const popup = getPopup();
    if (event.target !== popup || !animationEndEvent) {
      return;
    }
    const container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */
  const setScrollingVisibility = (container, popup) => {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */
  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();
    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      replaceScrollbarWithPadding(initialBodyOverflow);
    }

    // sweetalert2/issues/1247
    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses = (container, popup, params) => {
    addClass(container, params.showClass.backdrop);
    // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup);
      // and remove the opacity workaround
      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);
    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (params.inputValidator) {
      return;
    }
    if (params.input === 'email') {
      params.inputValidator = defaultInputValidators['email'];
    }
    if (params.input === 'url') {
      params.inputValidator = defaultInputValidators['url'];
    }
  }

  /**
   * @param {SweetAlertOptions} params
   */
  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }

  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */
  function setParameters(params) {
    setDefaultInputValidators(params);

    // showLoaderOnConfirm && preConfirm
    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }
    validateCustomTargetElement(params);

    // Replace newlines with <br> in title
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }
    init(params);
  }

  /** @type {SweetAlert} */
  let currentInstance;
  var _promise = /*#__PURE__*/new WeakMap();
  class SweetAlert {
    /**
     * @param {...any} args
     * @this {SweetAlert}
     */
    constructor() {
      /**
       * @type {Promise<SweetAlertResult>}
       */
      _classPrivateFieldInitSpec(this, _promise, {
        writable: true,
        value: void 0
      });
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }
      currentInstance = this;

      // @ts-ignore
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const outerParams = Object.freeze(this.constructor.argsToParams(args));

      /** @type {Readonly<SweetAlertOptions>} */
      this.params = outerParams;

      /** @type {boolean} */
      this.isAwaitingPromise = false;
      _classPrivateFieldSet(this, _promise, this._main(currentInstance.params));
    }
    _main(userParams) {
      let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      showWarningsForParams(Object.assign({}, mixinParams, userParams));
      if (globalState.currentInstance) {
        globalState.currentInstance._destroy();
        if (isModal()) {
          unsetAriaHidden();
        }
      }
      globalState.currentInstance = currentInstance;
      const innerParams = prepareParams(userParams, mixinParams);
      setParameters(innerParams);
      Object.freeze(innerParams);

      // clear the previous timer
      if (globalState.timeout) {
        globalState.timeout.stop();
        delete globalState.timeout;
      }

      // clear the restore focus timeout
      clearTimeout(globalState.restoreFocusTimeout);
      const domCache = populateDomCache(currentInstance);
      render(currentInstance, innerParams);
      privateProps.innerParams.set(currentInstance, innerParams);
      return swalPromise(currentInstance, domCache, innerParams);
    }

    // `catch` cannot be the name of a module export, so we define our thenable methods here instead
    then(onFulfilled) {
      return _classPrivateFieldGet(this, _promise).then(onFulfilled);
    }
    finally(onFinally) {
      return _classPrivateFieldGet(this, _promise).finally(onFinally);
    }
  }

  /**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */
  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals
      /**
       * @param {DismissReason} dismiss
       */
      const dismissWith = dismiss => {
        instance.close({
          isDismissed: true,
          dismiss
        });
      };
      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);
      domCache.confirmButton.onclick = () => {
        handleConfirmButtonClick(instance);
      };
      domCache.denyButton.onclick = () => {
        handleDenyButtonClick(instance);
      };
      domCache.cancelButton.onclick = () => {
        handleCancelButtonClick(instance, dismissWith);
      };
      domCache.closeButton.onclick = () => {
        dismissWith(DismissReason.close);
      };
      handlePopupClick(innerParams, domCache, dismissWith);
      addKeydownHandler(globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams);

      // Scroll container to top on open (#1247, #1946)
      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */
  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    return params;
  };

  /**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */
  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  const setupTimer = (globalState, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);
    if (innerParams.timer) {
      globalState.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(() => {
          if (globalState.timeout && globalState.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */
  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }
    if (!callIfFunction(innerParams.allowEnterKey)) {
      blurActiveElement();
      return;
    }
    if (!focusButton(domCache, innerParams)) {
      setFocus(-1, 1);
    }
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }
    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }
    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }
    return false;
  };
  const blurActiveElement = () => {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  // Dear russian users visiting russian sites. Let's have fun.
  if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
    const now = new Date();
    const initiationDate = localStorage.getItem('swal-initiation');
    if (!initiationDate) {
      localStorage.setItem('swal-initiation', "".concat(now));
    } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {
      setTimeout(() => {
        document.body.style.pointerEvents = 'none';
        const ukrainianAnthem = document.createElement('audio');
        ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
        ukrainianAnthem.loop = true;
        document.body.appendChild(ukrainianAnthem);
        setTimeout(() => {
          ukrainianAnthem.play().catch(() => {
            // ignore
          });
        }, 2500);
      }, 500);
    }
  }

  // Assign instance methods from src/instanceMethods/*.js to prototype
  SweetAlert.prototype.disableButtons = disableButtons;
  SweetAlert.prototype.enableButtons = enableButtons;
  SweetAlert.prototype.getInput = getInput;
  SweetAlert.prototype.disableInput = disableInput;
  SweetAlert.prototype.enableInput = enableInput;
  SweetAlert.prototype.hideLoading = hideLoading;
  SweetAlert.prototype.disableLoading = hideLoading;
  SweetAlert.prototype.showValidationMessage = showValidationMessage;
  SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
  SweetAlert.prototype.close = close;
  SweetAlert.prototype.closePopup = close;
  SweetAlert.prototype.closeModal = close;
  SweetAlert.prototype.closeToast = close;
  SweetAlert.prototype.rejectPromise = rejectPromise;
  SweetAlert.prototype.update = update;
  SweetAlert.prototype._destroy = _destroy;

  // Assign static methods from src/staticMethods/*.js to constructor
  Object.assign(SweetAlert, staticMethods);

  // Proxy to instance methods to constructor, for now, for backwards compatibility
  Object.keys(instanceMethods).forEach(key => {
    /**
     * @param {...any} args
     * @returns {any | undefined}
     */
    SweetAlert[key] = function () {
      if (currentInstance && currentInstance[key]) {
        return currentInstance[key](...arguments);
      }
      return null;
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.7.32';

  const Swal = SweetAlert;
  // @ts-ignore
  Swal.default = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_add_to_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-add-to-calendar */ "./node_modules/react-add-to-calendar/dist/react-add-to-calendar.min.js");
/* harmony import */ var react_add_to_calendar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_add_to_calendar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qrcode.react */ "./node_modules/qrcode.react/lib/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _src_components_Head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/Head */ "./src/components/Head.jsx");
/* harmony import */ var _src_utils_resolvePath__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/utils/resolvePath */ "./src/utils/resolvePath.js");
/* harmony import */ var _src_config_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/config/app */ "./src/config/app.js");
/* harmony import */ var _src_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/i18n */ "./src/i18n/index.js");
/* harmony import */ var _guest_list_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guest_list.json */ "./pages/guest_list.json");
var _guest_list_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./guest_list.json */ "./pages/guest_list.json", 1);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_14__);




var _this = undefined,
  _jsxFileName = "C:\\Users\\USER\\Documents\\adewale-wedding-invite\\pages\\index.jsx",
  _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }










var translateConfig = function translateConfig(appConfig, locale) {
  if (!locale || locale === _src_i18n__WEBPACK_IMPORTED_MODULE_12__["defaultLocale"]) {
    return appConfig;
  }
  // Replace config with lang
  var configLang = appConfig.lang[locale];
  if (configLang === undefined) {
    throw new Error('invalid locale: ', locale);
  }
  return _objectSpread(_objectSpread({}, appConfig), configLang);
};
var ShowInvite = function ShowInvite(_ref) {
  _s();
  var currentUrl = _ref.currentUrl,
    guestListLastUpdatedAt = _ref.guestListLastUpdatedAt,
    guest = _ref.guest;
  var t = Object(_src_i18n__WEBPACK_IMPORTED_MODULE_12__["useTranslation"])(guest.locale);

  // Initiate config variables
  var _translateConfig = translateConfig(_src_config_app__WEBPACK_IMPORTED_MODULE_11__["default"], guest.locale),
    logo = _translateConfig.logo,
    ogTags = _translateConfig.ogTags,
    coupleInfo = _translateConfig.coupleInfo,
    venue = _translateConfig.venue,
    weddingDay = _translateConfig.weddingDay,
    weddingDate = _translateConfig.weddingDate,
    weddingTime = _translateConfig.weddingTime,
    calendarInfo = _translateConfig.calendarInfo;
  var brideName = coupleInfo.brideName,
    groomName = coupleInfo.groomName,
    hashtag = coupleInfo.hashtag,
    coupleNameFormat = coupleInfo.coupleNameFormat;
  var coupleNameStr = coupleNameFormat === 'GROOM_FIRST' ? "".concat(groomName, " & ").concat(brideName) : "".concat(brideName, " & ").concat(groomName);
  var coupleName = coupleNameFormat === 'GROOM_FIRST' ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, groomName, " ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "&"), " ", brideName) : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, brideName, " ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "&"), " ", groomName);

  // Venue info
  var venueBrief = "".concat(venue.name, ", ").concat(venue.city, ", ").concat(venue.country);
  var weddingDateBrief = "".concat(weddingDay, ", ").concat(weddingDate);

  // Event info
  var eventTitle = "".concat(coupleNameStr, "'s Wedding");
  var eventDescription = "".concat(weddingDateBrief, " at ").concat(venue.name, ", ").concat(venue.city);
  if (guest.name) {
    eventDescription = "Dear ".concat(guest.name, ", you are cordially invited to our wedding on ").concat(weddingDate, " at ").concat(venue.name, ". Looking forward to seeing you!");
  }

  // Calendar payload
  var calendarEvent = {
    title: eventTitle,
    description: eventDescription,
    location: "".concat(venue.city, ", ").concat(venue.country),
    startTime: calendarInfo.timeStartISO,
    endTime: calendarInfo.timeEndISO
  };
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
    name = _useState[0],
    setName = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
    attending = _useState2[0],
    setAttending = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
    email = _useState3[0],
    setEmail = _useState3[1];
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
    error = _useState4[0],
    setError = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
    showModal = _useState5[0],
    setShowModal = _useState5[1];
  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
    response = _useState7[0],
    setResponse = _useState7[1];
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  var scriptUrl = 'https://script.google.com/macros/s/AKfycbxT2ULa9alnZIvTQifLty40uuOnafTTCm2rXQFeiDOb7ERi716dteMZCH5mqU_pxRDtfA/exec';
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var _console, _response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            if (!(!name || !email || !attending)) {
              _context.next = 4;
              break;
            }
            sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire('', 'All field are required', 'error');
            return _context.abrupt("return");
          case 4:
            setIsLoading(true);
            _context.prev = 5;
            _context.next = 8;
            return fetch(proxyUrl + scriptUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: name,
                email: email,
                attending: attending
              })
            });
          case 8:
            _response = _context.sent;
            _context.next = 11;
            return _response.text();
          case 11:
            data = _context.sent;
            /* eslint-disable */(_console = console).log.apply(_console, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(oo_oo("2253271957_0", data)));
            sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire('Success!', 'We appreciate your response!', 'success');
            // Response from Google Script
            setIsLoading(false);
            setShowModal(true);
            _context.next = 23;
            break;
          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](5);
            setIsLoading(false);
            sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire('Error!', 'Something went wrong, please try again!', 'error');
            console.error('Error:', _context.t0);
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 18]]);
    }));
    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return __jsx("div", {
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1703421768",
    __self: _this
  }, "a.react-add-to-calendar__button span{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVVNFUlxcRG9jdW1lbnRzXFxhZGV3YWxlLXdlZGRpbmctaW52aXRlXFxwYWdlc1xcaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIUyxBQUc0QixlQUNXLDREQUM1QiIsImZpbGUiOiJDOlxcVXNlcnNcXFVTRVJcXERvY3VtZW50c1xcYWRld2FsZS13ZWRkaW5nLWludml0ZVxccGFnZXNcXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGRUb0NhbGVuZGFyIGZyb20gJ3JlYWN0LWFkZC10by1jYWxlbmRhcic7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCBIZWFkIGZyb20gJ0BzcmMvY29tcG9uZW50cy9IZWFkJztcbmltcG9ydCByZXNvbHZlUGF0aCBmcm9tICdAc3JjL3V0aWxzL3Jlc29sdmVQYXRoJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnQHNyYy9jb25maWcvYXBwJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnQHNyYy9pMThuJztcbmltcG9ydCBndWVzdExpc3QgZnJvbSAnLi9ndWVzdF9saXN0Lmpzb24nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5cbmNvbnN0IHRyYW5zbGF0ZUNvbmZpZyA9IChhcHBDb25maWcsIGxvY2FsZSkgPT4ge1xuICBpZiAoIWxvY2FsZSB8fCBsb2NhbGUgPT09IGRlZmF1bHRMb2NhbGUpIHtcbiAgICByZXR1cm4gYXBwQ29uZmlnO1xuICB9XG4gIC8vIFJlcGxhY2UgY29uZmlnIHdpdGggbGFuZ1xuICBjb25zdCBjb25maWdMYW5nID0gYXBwQ29uZmlnLmxhbmdbbG9jYWxlXTtcbiAgaWYgKGNvbmZpZ0xhbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBsb2NhbGU6ICcsIGxvY2FsZSk7XG4gIH1cbiAgcmV0dXJuIHsgLi4uYXBwQ29uZmlnLCAuLi5jb25maWdMYW5nIH07XG59O1xuXG5jb25zdCBTaG93SW52aXRlID0gKHsgY3VycmVudFVybCwgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCwgZ3Vlc3QgfSkgPT4ge1xuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb24oZ3Vlc3QubG9jYWxlKTtcblxuICAvLyBJbml0aWF0ZSBjb25maWcgdmFyaWFibGVzXG4gIGNvbnN0IHtcbiAgICBsb2dvLFxuICAgIG9nVGFncyxcbiAgICBjb3VwbGVJbmZvLFxuICAgIHZlbnVlLFxuICAgIHdlZGRpbmdEYXksXG4gICAgd2VkZGluZ0RhdGUsXG4gICAgd2VkZGluZ1RpbWUsXG4gICAgY2FsZW5kYXJJbmZvLFxuICB9ID0gdHJhbnNsYXRlQ29uZmlnKGFwcENvbmZpZywgZ3Vlc3QubG9jYWxlKTtcbiAgY29uc3QgeyBicmlkZU5hbWUsIGdyb29tTmFtZSwgaGFzaHRhZywgY291cGxlTmFtZUZvcm1hdCB9ID0gY291cGxlSW5mbztcblxuICBjb25zdCBjb3VwbGVOYW1lU3RyID1cbiAgICBjb3VwbGVOYW1lRm9ybWF0ID09PSAnR1JPT01fRklSU1QnXG4gICAgICA/IGAke2dyb29tTmFtZX0gJiAke2JyaWRlTmFtZX1gXG4gICAgICA6IGAke2JyaWRlTmFtZX0gJiAke2dyb29tTmFtZX1gO1xuICBjb25zdCBjb3VwbGVOYW1lID1cbiAgICBjb3VwbGVOYW1lRm9ybWF0ID09PSAnR1JPT01fRklSU1QnID8gKFxuICAgICAgPD5cbiAgICAgICAge2dyb29tTmFtZX0gPHNwYW4+JmFtcDs8L3NwYW4+IHticmlkZU5hbWV9XG4gICAgICA8Lz5cbiAgICApIDogKFxuICAgICAgPD5cbiAgICAgICAge2JyaWRlTmFtZX0gPHNwYW4+JmFtcDs8L3NwYW4+IHtncm9vbU5hbWV9XG4gICAgICA8Lz5cbiAgICApO1xuXG4gIC8vIFZlbnVlIGluZm9cbiAgY29uc3QgdmVudWVCcmllZiA9IGAke3ZlbnVlLm5hbWV9LCAke3ZlbnVlLmNpdHl9LCAke3ZlbnVlLmNvdW50cnl9YDtcbiAgY29uc3Qgd2VkZGluZ0RhdGVCcmllZiA9IGAke3dlZGRpbmdEYXl9LCAke3dlZGRpbmdEYXRlfWA7XG5cbiAgLy8gRXZlbnQgaW5mb1xuICBjb25zdCBldmVudFRpdGxlID0gYCR7Y291cGxlTmFtZVN0cn0ncyBXZWRkaW5nYDtcbiAgbGV0IGV2ZW50RGVzY3JpcHRpb24gPSBgJHt3ZWRkaW5nRGF0ZUJyaWVmfSBhdCAke3ZlbnVlLm5hbWV9LCAke3ZlbnVlLmNpdHl9YDtcbiAgaWYgKGd1ZXN0Lm5hbWUpIHtcbiAgICBldmVudERlc2NyaXB0aW9uID0gYERlYXIgJHtndWVzdC5uYW1lfSwgeW91IGFyZSBjb3JkaWFsbHkgaW52aXRlZCB0byBvdXIgd2VkZGluZyBvbiAke3dlZGRpbmdEYXRlfSBhdCAke3ZlbnVlLm5hbWV9LiBMb29raW5nIGZvcndhcmQgdG8gc2VlaW5nIHlvdSFgO1xuICB9XG5cbiAgLy8gQ2FsZW5kYXIgcGF5bG9hZFxuICBjb25zdCBjYWxlbmRhckV2ZW50ID0ge1xuICAgIHRpdGxlOiBldmVudFRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBldmVudERlc2NyaXB0aW9uLFxuICAgIGxvY2F0aW9uOiBgJHt2ZW51ZS5jaXR5fSwgJHt2ZW51ZS5jb3VudHJ5fWAsXG4gICAgc3RhcnRUaW1lOiBjYWxlbmRhckluZm8udGltZVN0YXJ0SVNPLFxuICAgIGVuZFRpbWU6IGNhbGVuZGFySW5mby50aW1lRW5kSVNPLFxuICB9O1xuXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2F0dGVuZGluZywgc2V0QXR0ZW5kaW5nXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBwcm94eVVybCA9ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8nO1xuICBjb25zdCBzY3JpcHRVcmwgPVxuICAgICdodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL0FLZnljYnhUMlVMYTlhbG5aSXZUUWlmTHR5NDB1dU9uYWZUVENtMnJYUUZlaURPYjdFUmk3MTZkdGVNWkNINW1xVV9weFJEdGZBL2V4ZWMnO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhYXR0ZW5kaW5nKSB7XG4gICAgICBTd2FsLmZpcmUoJycsICdBbGwgZmllbGQgYXJlIHJlcXVpcmVkJywgJ2Vycm9yJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwcm94eVVybCArIHNjcmlwdFVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZSwgZW1haWwsIGF0dGVuZGluZyB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMjI1MzI3MTk1N18wYCxkYXRhKSk7XG4gICAgICBTd2FsLmZpcmUoJ1N1Y2Nlc3MhJywgJ1dlIGFwcHJlY2lhdGUgeW91ciByZXNwb25zZSEnLCAnc3VjY2VzcycpO1xuICAgICAgLy8gUmVzcG9uc2UgZnJvbSBHb29nbGUgU2NyaXB0XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgc2V0U2hvd01vZGFsKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgU3dhbC5maXJlKCdFcnJvciEnLCAnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4hJywgJ2Vycm9yJyk7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGEucmVhY3QtYWRkLXRvLWNhbGVuZGFyX19idXR0b24gc3BhbiB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPEhlYWRcbiAgICAgICAgey4uLm9nVGFnc31cbiAgICAgICAgdGl0bGU9e2V2ZW50VGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtldmVudERlc2NyaXB0aW9ufVxuICAgICAgICBndWVzdE5hbWU9e2d1ZXN0Lm5hbWV9XG4gICAgICAgIHVybD17Y3VycmVudFVybH1cbiAgICAgICAgZGF0ZT17d2VkZGluZ0RhdGVCcmllZn1cbiAgICAgICAgbW9kaWZpZWRUaW1lPXtndWVzdExpc3RMYXN0VXBkYXRlZEF0fVxuICAgICAgICB2ZW51ZT17dmVudWVCcmllZn1cbiAgICAgICAgbG9nbz17cmVzb2x2ZVBhdGgob2dUYWdzLmxvZ28pfVxuICAgICAgICBhdXRob3I9e3Jlc29sdmVQYXRoKCcvJyl9XG4gICAgICAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdoZWFkZXJfYXJlYSc+XG4gICAgICAgIDxkaXYgaWQ9J2hvbWUnIGNsYXNzTmFtZT0naGVhZGVyX3NsaWRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWNrLWxpc3QgZHJhZ2dhYmxlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay10cmFjaycgc3R5bGU9e3sgb3BhY2l0eTogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlX3NsaWRlciBiZ19jb3ZlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy0xMCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfY29udGVudCB0ZXh0LWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogNjAsIG1hcmdpbjogMjUsIG1hcmdpblRvcDogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ28uaGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl9zdWJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMC4ycydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcwLjJzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnc2l0ZUludHJvJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPSdmYWRlSW5VcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT0nMC43cydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcwLjdzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291cGxlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScxcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxcycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc2h0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScxcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6ICcxcycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLm5hbWV9LCB7dmVudWUuY2l0eX0sIHt2ZW51ZS5jb3VudHJ5fS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGlkPSdjb21pbmdfc29vbicgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9hcmVhIHB0LTIwIHBiLTcwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbWluZ19zb29uX3NoYXBlXzEnIHN0eWxlPXt7IHpJbmRleDogMSB9fT5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMS5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTQnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWN0aW9uX3RpdGxlIHB0LTUwIHdvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuMnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuMnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RpdGxlJz57dCgnZXZlbnREYXRlJyl9OjwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3dlZGRpbmdEYXRlQnJpZWZ9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnMC4ycmVtJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEFkZFRvQ2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ9e2NhbGVuZGFyRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkxhYmVsPXt0KCdidG5BZGRUb015Q2FsZW5kYXInKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2Fzc2V0cy9pbWFnZXMvc2VjdGlvbl9zaGFwZS5wbmcnIGFsdD0nU2hhcGUnIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTgnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3b3cgZmFkZUluJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPScxLjNzJ1xuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjZzJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6ICcwLjZzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fY291bnQgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgcHQtMjAnPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzYwLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTM4LFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVfY291bnQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTMwJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb3VudF9jb250ZW50J1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogMSwgcGFkZGluZ1RvcDogMjAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZlbnVlLm1hcFVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogNSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9J2Fzc2V0cy9pbWFnZXMvYmV2ZW50LnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdiZXZlbnQgY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3ZlbnVlLm1hcFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnNzV2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZlbnVlLm1hcFVybH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fc2hhcGVfMic+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTIucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gaWQ9J2NvbnRhY3QnIGNsYXNzTmFtZT0nY29udGFjdF9hcmVhJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjb250YWN0X3dyYXBwZXIgd293IGZhZGVJblVwQmlnJ1xuICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC40cydcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDMwLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEuM3MnLFxuICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNHMnLFxuICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluVXAnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTknPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uX3RpdGxlIHRleHQtY2VudGVyIHBiLTMwJz5cbiAgICAgICAgICAgICAgICAgIHtndWVzdC5uYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0KCdpbnZpdGF0aW9uR3JlZXRpbmcnKX1cbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuNXJlbScgfX0+e2d1ZXN0Lm5hbWV9LDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUnPnt0KCdpbnZpdGF0aW9uSW50cm8nKX08L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2RpbWdyZXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiB0KCdpbnZpdGF0aW9uQ29udGVudFRleHRBbGlnbicpLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdpbnZpdGF0aW9uQ29udGVudCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25PdXRybycpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICF0KCdpbnZpdGF0aW9uT3V0cm8nKS5zdGFydHNXaXRoKCdbbWlzc2luZycpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdpbnZpdGF0aW9uT3V0cm8nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7YXBwQ29uZmlnLnNob3dRckNvZGUgJiYgZ3Vlc3QubmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCwgbWFyZ2luQm90dG9tOiAzNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8UVJDb2RlIHZhbHVlPXtndWVzdC5ndWVzdElkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dCc+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17dmVudWUubWFwVXJsfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICcwLjJyZW0gc29saWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGI+e3ZlbnVlLm5hbWV9PC9iPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICB7dmVudWUuYWRkcmVzc0xpbmUxfVxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgey8qIHt2ZW51ZS5hZGRyZXNzTGluZTJ9XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAge3ZlbnVlLmNvdW50cnl9LlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0JyBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19PlxuICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICB7d2VkZGluZ0RhdGV9IMK3IHt3ZWRkaW5nVGltZX1cbiAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgey8qIGF0dGVuZGluZyBmb3JtICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBtdC01Jz5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZm9ybV90aXRsZSBtYi0yJz5cbiAgICAgICAgICAgICAgICAgICAgICBJbmZvcm0gVXMgb2YgeW91ciBhdmFpbGFiaWxpdHlcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBtYi0zJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJyBjbGFzc05hbWU9J2Zvcm0tbGFiZWwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJyBjbGFzc05hbWU9J2Zvcm0tbGFiZWwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2F0dGVuZGluZycgY2xhc3NOYW1lPSdmb3JtLWxhYmVsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgV2lsbCB5b3UgYmUgYXR0ZW5kaW5nP1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nYXR0ZW5kaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YXR0ZW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEF0dGVuZGluZyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAnU3VibWl0dGluZy4uLicgOiAnU3VibWl0J31cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7LyogcmVzcG9uc2UgbW9kYWwgKi99XG5cbiAgICAgICAgICAgICAgICAgIHt0KCdpbnZpdGF0aW9uQ2xvc2luZycpICYmXG4gICAgICAgICAgICAgICAgICAgICF0KCdpbnZpdGF0aW9uQ2xvc2luZycpLnN0YXJ0c1dpdGgoJ1ttaXNzaW5nJykgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHQoJ2ludml0YXRpb25DbG9zaW5nJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID48L3A+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogRm9vdGVyIHNlY3Rpb24gKi99XG4gICAgICA8Zm9vdGVyIGlkPSdmb290ZXInIGNsYXNzTmFtZT0nZm9vdGVyX2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX3NoYXBlXzEnPlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfd2lkZ2V0IHB0LTUwIHBiLTEwIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfbG9nbyc+XG4gICAgICAgICAgICAgIHsvKiB7bG9nby5mb290ZXJMb2dvICYmXG4gICAgICAgICAgICAgICAgKGxvZ28uZm9vdGVyTG9nb1R5cGUgPT09ICdtcDQnID8gKFxuICAgICAgICAgICAgICAgICAgPHZpZGVvIGhlaWdodD0nMTQwJyBhdXRvUGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17bG9nby5mb290ZXJMb2dvfSB0eXBlPSd2aWRlby9tcDQnIC8+XG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICkgOiAoICovfVxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA5MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgc3JjPXtsb2dvLmhlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2xvZ28uZm9vdGVyTG9nb30gLz4gKi99XG4gICAgICAgICAgICAgIHsvKiApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfdGl0bGUgJz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUnPntjb3VwbGVOYW1lfTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoNVxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnZ3JleScsIHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzQwcHgnIH19XG4gICAgICAgID5cbiAgICAgICAgICAjRFdlZGRpbmdcbiAgICAgICAgPC9oNT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2hvd0ludml0ZS5nZXRJbml0aWFsUHJvcHMgPSAoY3R4KSA9PiB7XG4gIGNvbnN0IGxvY2FsZVBhcmFtcyA9IGN0eC5xdWVyeS5sYW5nIHx8IGRlZmF1bHRMb2NhbGU7XG4gIGNvbnN0IGVtcHR5R3Vlc3RQYXJhbXMgPSB7XG4gICAgZ3Vlc3Q6IHtcbiAgICAgIGd1ZXN0SWQ6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBncmVldGluZzogJycsXG4gICAgICBsb2NhbGU6IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnRVcmwgPSByZXNvbHZlUGF0aChjdHgucmVxLnVybCk7XG4gIGNvbnN0IGd1ZXN0SWQgPSBjdHgucXVlcnkudTtcbiAgaWYgKCFndWVzdElkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBndWVzdERhdGEgPSBndWVzdExpc3QuZGF0YTtcbiAgY29uc3QgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCA9IGd1ZXN0TGlzdC5tZXRhLmxhc3RVcGRhdGVkQXQ7XG4gIGNvbnN0IHsgbmFtZSwgZ3JlZXRpbmcsIGxvY2FsZSB9ID1cbiAgICBndWVzdERhdGEuZmlsdGVyKChndWVzdCkgPT4gZ3Vlc3QuZ3Vlc3RJZCA9PT0gZ3Vlc3RJZClbMF0gfHwge307XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50VXJsLFxuICAgICAgLi4uZW1wdHlHdWVzdFBhcmFtcyxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50VXJsLFxuICAgIGd1ZXN0TGlzdExhc3RVcGRhdGVkQXQsXG4gICAgZ3Vlc3Q6IHtcbiAgICAgIG5hbWUsXG4gICAgICBncmVldGluZyxcbiAgICAgIGd1ZXN0SWQsXG4gICAgICBsb2NhbGU6IGxvY2FsZSB8fCBsb2NhbGVQYXJhbXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dJbnZpdGU7XG4vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7dmFyIF8weDI5ZDU5Nj1fMHg0MWM5OyhmdW5jdGlvbihfMHgyNTI2ODMsXzB4MzcyYmNhKXt2YXIgXzB4MjNhYmZmPV8weDQxYzksXzB4MmYxYjQxPV8weDI1MjY4MygpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4NGVmZGEyPXBhcnNlSW50KF8weDIzYWJmZigweDFmNSkpLzB4MSstcGFyc2VJbnQoXzB4MjNhYmZmKDB4MTc4KSkvMHgyKigtcGFyc2VJbnQoXzB4MjNhYmZmKDB4MWZjKSkvMHgzKSstcGFyc2VJbnQoXzB4MjNhYmZmKDB4MTYyKSkvMHg0Ky1wYXJzZUludChfMHgyM2FiZmYoMHgyMzIpKS8weDUqKC1wYXJzZUludChfMHgyM2FiZmYoMHgxNjcpKS8weDYpKy1wYXJzZUludChfMHgyM2FiZmYoMHgxYzgpKS8weDcrLXBhcnNlSW50KF8weDIzYWJmZigweDIwZCkpLzB4OCtwYXJzZUludChfMHgyM2FiZmYoMHgxODIpKS8weDkqKHBhcnNlSW50KF8weDIzYWJmZigweDFjMSkpLzB4YSk7aWYoXzB4NGVmZGEyPT09XzB4MzcyYmNhKWJyZWFrO2Vsc2UgXzB4MmYxYjQxWydwdXNoJ10oXzB4MmYxYjQxWydzaGlmdCddKCkpO31jYXRjaChfMHg0NWRlYzIpe18weDJmMWI0MVsncHVzaCddKF8weDJmMWI0MVsnc2hpZnQnXSgpKTt9fX0oXzB4NTU1NiwweDE5NGU5KSk7dmFyIGo9T2JqZWN0W18weDI5ZDU5NigweDIxNSldLEg9T2JqZWN0WydkZWZpbmVQcm9wZXJ0eSddLEc9T2JqZWN0W18weDI5ZDU5NigweDIwNSldLGVlPU9iamVjdFsnZ2V0T3duUHJvcGVydHlOYW1lcyddLHRlPU9iamVjdFtfMHgyOWQ1OTYoMHgxYjEpXSxuZT1PYmplY3RbXzB4MjlkNTk2KDB4MTgwKV1bJ2hhc093blByb3BlcnR5J10scmU9KF8weDI4ZTNkMixfMHg0OTk2MTAsXzB4ZjQ4OTIwLF8weGYxZGE4MSk9Pnt2YXIgXzB4MWViNDBjPV8weDI5ZDU5NjtpZihfMHg0OTk2MTAmJnR5cGVvZiBfMHg0OTk2MTA9PV8weDFlYjQwYygweDE5NCl8fHR5cGVvZiBfMHg0OTk2MTA9PV8weDFlYjQwYygweDIxZCkpe2ZvcihsZXQgXzB4MWU0NmM2IG9mIGVlKF8weDQ5OTYxMCkpIW5lW18weDFlYjQwYygweDE4YyldKF8weDI4ZTNkMixfMHgxZTQ2YzYpJiZfMHgxZTQ2YzYhPT1fMHhmNDg5MjAmJkgoXzB4MjhlM2QyLF8weDFlNDZjNix7J2dldCc6KCk9Pl8weDQ5OTYxMFtfMHgxZTQ2YzZdLCdlbnVtZXJhYmxlJzohKF8weGYxZGE4MT1HKF8weDQ5OTYxMCxfMHgxZTQ2YzYpKXx8XzB4ZjFkYTgxWydlbnVtZXJhYmxlJ119KTt9cmV0dXJuIF8weDI4ZTNkMjt9LHg9KF8weDI2NGI5MyxfMHgzYmM3OWMsXzB4NTU3NGI2KT0+KF8weDU1NzRiNj1fMHgyNjRiOTMhPW51bGw/aih0ZShfMHgyNjRiOTMpKTp7fSxyZShfMHgzYmM3OWN8fCFfMHgyNjRiOTN8fCFfMHgyNjRiOTNbJ19fZXMnKydNb2R1bGUnXT9IKF8weDU1NzRiNixfMHgyOWQ1OTYoMHgxZGIpLHsndmFsdWUnOl8weDI2NGI5MywnZW51bWVyYWJsZSc6ITB4MH0pOl8weDU1NzRiNixfMHgyNjRiOTMpKSxYPWNsYXNze2NvbnN0cnVjdG9yKF8weDVkYTZkNSxfMHgxNzBlNjcsXzB4M2NjNzJlLF8weDQ0ZmNiMyxfMHg1OGQ2OGIpe3ZhciBfMHg1NDc1Mjg9XzB4MjlkNTk2O3RoaXNbJ2dsb2JhbCddPV8weDVkYTZkNSx0aGlzW18weDU0NzUyOCgweDE3MyldPV8weDE3MGU2Nyx0aGlzW18weDU0NzUyOCgweDFlOSldPV8weDNjYzcyZSx0aGlzW18weDU0NzUyOCgweDIyNSldPV8weDQ0ZmNiMyx0aGlzW18weDU0NzUyOCgweDE2NCldPV8weDU4ZDY4Yix0aGlzW18weDU0NzUyOCgweDFiZCldPSEweDAsdGhpc1tfMHg1NDc1MjgoMHgxZGMpXT0hMHgwLHRoaXNbXzB4NTQ3NTI4KDB4MjBlKV09ITB4MSx0aGlzW18weDU0NzUyOCgweDE4MyldPSEweDEsdGhpc1tfMHg1NDc1MjgoMHgxN2EpXT1fMHg1ZGE2ZDVbJ3Byb2Nlc3MnXT8uW18weDU0NzUyOCgweDFlYildPy5bJ05FWFRfUlVOVElNRSddPT09XzB4NTQ3NTI4KDB4MjIzKSx0aGlzWydfaW5Ccm93c2VyJ109IXRoaXNbJ2dsb2JhbCddW18weDU0NzUyOCgweDFlNyldPy5bJ3ZlcnNpb25zJ10/LltfMHg1NDc1MjgoMHgxZWUpXSYmIXRoaXNbJ19pbk5leHRFZGdlJ10sdGhpc1tfMHg1NDc1MjgoMHgyMGYpXT1udWxsLHRoaXNbXzB4NTQ3NTI4KDB4MTg0KV09MHgwLHRoaXNbXzB4NTQ3NTI4KDB4MjMxKV09MHgxNCx0aGlzWydfd2ViU29ja2V0RXJyb3JEb2NzTGluayddPV8weDU0NzUyOCgweDIwMyksdGhpc1snX3NlbmRFcnJvck1lc3NhZ2UnXT0odGhpc1tfMHg1NDc1MjgoMHgxZTQpXT9fMHg1NDc1MjgoMHgyNDApOl8weDU0NzUyOCgweDFhZikpK3RoaXNbXzB4NTQ3NTI4KDB4MjJhKV07fWFzeW5jW18weDI5ZDU5NigweDE1YildKCl7dmFyIF8weDU0N2YzMj1fMHgyOWQ1OTY7aWYodGhpc1tfMHg1NDdmMzIoMHgyMGYpXSlyZXR1cm4gdGhpc1tfMHg1NDdmMzIoMHgyMGYpXTtsZXQgXzB4MjA2YzcxO2lmKHRoaXNbXzB4NTQ3ZjMyKDB4MWU0KV18fHRoaXNbXzB4NTQ3ZjMyKDB4MTdhKV0pXzB4MjA2YzcxPXRoaXNbXzB4NTQ3ZjMyKDB4MWE1KV1bXzB4NTQ3ZjMyKDB4MTZkKV07ZWxzZXtpZih0aGlzW18weDU0N2YzMigweDFhNSldW18weDU0N2YzMigweDFlNyldPy5bJ19XZWJTb2NrZXQnXSlfMHgyMDZjNzE9dGhpc1tfMHg1NDdmMzIoMHgxYTUpXVsncHJvY2VzcyddPy5bXzB4NTQ3ZjMyKDB4MjFiKV07ZWxzZSB0cnl7bGV0IF8weDRkYTM2YT1hd2FpdCBpbXBvcnQoXzB4NTQ3ZjMyKDB4MWMwKSk7XzB4MjA2YzcxPShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydChfMHg1NDdmMzIoMHgxZjIpKSlbXzB4NTQ3ZjMyKDB4MjM1KV0oXzB4NGRhMzZhW18weDU0N2YzMigweDFiOCldKHRoaXNbXzB4NTQ3ZjMyKDB4MjI1KV0sXzB4NTQ3ZjMyKDB4MTU3KSkpW18weDU0N2YzMigweDFiZSldKCkpKVtfMHg1NDdmMzIoMHgxZGIpXTt9Y2F0Y2h7dHJ5e18weDIwNmM3MT1yZXF1aXJlKHJlcXVpcmUoXzB4NTQ3ZjMyKDB4MWMwKSlbXzB4NTQ3ZjMyKDB4MWI4KV0odGhpc1tfMHg1NDdmMzIoMHgyMjUpXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcihfMHg1NDdmMzIoMHgxYWUpKTt9fX1yZXR1cm4gdGhpc1tfMHg1NDdmMzIoMHgyMGYpXT1fMHgyMDZjNzEsXzB4MjA2YzcxO31bJ19jb25uZWN0VG9Ib3N0Tm93J10oKXt2YXIgXzB4NWM2NzkyPV8weDI5ZDU5Njt0aGlzW18weDVjNjc5MigweDE4MyldfHx0aGlzW18weDVjNjc5MigweDIwZSldfHx0aGlzW18weDVjNjc5MigweDE4NCldPj10aGlzW18weDVjNjc5MigweDIzMSldfHwodGhpc1tfMHg1YzY3OTIoMHgxZGMpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MCx0aGlzW18weDVjNjc5MigweDE4NCldKyssdGhpc1tfMHg1YzY3OTIoMHgxNmEpXT1uZXcgUHJvbWlzZSgoXzB4M2ZiYjQ3LF8weDVkOTkzNik9Pnt2YXIgXzB4MmQwZDVhPV8weDVjNjc5Mjt0aGlzW18weDJkMGQ1YSgweDE1YildKClbXzB4MmQwZDVhKDB4MTllKV0oXzB4NTcyM2U1PT57dmFyIF8weDc3Njk5PV8weDJkMGQ1YTtsZXQgXzB4NWIzMGUwPW5ldyBfMHg1NzIzZTUoJ3dzOi8vJysoIXRoaXNbXzB4Nzc2OTkoMHgxZTQpXSYmdGhpc1tfMHg3NzY5OSgweDE2NCldPydnYXRld2F5LmRvY2tlci5pbnRlcm5hbCc6dGhpc1tfMHg3NzY5OSgweDE3MyldKSsnOicrdGhpc1tfMHg3NzY5OSgweDFlOSldKTtfMHg1YjMwZTBbXzB4Nzc2OTkoMHgxOWEpXT0oKT0+e3ZhciBfMHgxM2QwYzY9XzB4Nzc2OTk7dGhpc1tfMHgxM2QwYzYoMHgxYmQpXT0hMHgxLHRoaXNbXzB4MTNkMGM2KDB4MWM1KV0oXzB4NWIzMGUwKSx0aGlzW18weDEzZDBjNigweDE3MCldKCksXzB4NWQ5OTM2KG5ldyBFcnJvcignbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicpKTt9LF8weDViMzBlMFtfMHg3NzY5OSgweDIyZSldPSgpPT57dmFyIF8weDFkYzAyOD1fMHg3NzY5OTt0aGlzW18weDFkYzAyOCgweDFlNCldfHxfMHg1YjMwZTBbXzB4MWRjMDI4KDB4MjI2KV0mJl8weDViMzBlMFtfMHgxZGMwMjgoMHgyMjYpXVtfMHgxZGMwMjgoMHgxZjYpXSYmXzB4NWIzMGUwWydfc29ja2V0J11bXzB4MWRjMDI4KDB4MWY2KV0oKSxfMHgzZmJiNDcoXzB4NWIzMGUwKTt9LF8weDViMzBlMFtfMHg3NzY5OSgweDFiNildPSgpPT57dmFyIF8weDQzMjNiYj1fMHg3NzY5OTt0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDAsdGhpc1snX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHg1YjMwZTApLHRoaXNbXzB4NDMyM2JiKDB4MTcwKV0oKTt9LF8weDViMzBlMFtfMHg3NzY5OSgweDE1NildPV8weDM4Njg5NT0+e3ZhciBfMHg0NDc3Mzc9XzB4Nzc2OTk7dHJ5e18weDM4Njg5NSYmXzB4Mzg2ODk1W18weDQ0NzczNygweDIzMyldJiZ0aGlzW18weDQ0NzczNygweDFlNCldJiZKU09OW18weDQ0NzczNygweDE2MyldKF8weDM4Njg5NVtfMHg0NDc3MzcoMHgyMzMpXSlbXzB4NDQ3NzM3KDB4MWNkKV09PT1fMHg0NDc3MzcoMHgyMmIpJiZ0aGlzW18weDQ0NzczNygweDFhNSldWydsb2NhdGlvbiddW18weDQ0NzczNygweDIyYildKCk7fWNhdGNoe319O30pW18weDJkMGQ1YSgweDE5ZSldKF8weDQ3YmQ4OT0+KHRoaXNbXzB4MmQwZDVhKDB4MjBlKV09ITB4MCx0aGlzW18weDJkMGQ1YSgweDE4MyldPSEweDEsdGhpc1tfMHgyZDBkNWEoMHgxZGMpXT0hMHgxLHRoaXNbXzB4MmQwZDVhKDB4MWJkKV09ITB4MCx0aGlzW18weDJkMGQ1YSgweDE4NCldPTB4MCxfMHg0N2JkODkpKVtfMHgyZDBkNWEoMHgxN2UpXShfMHgyMTk4OWM9Pih0aGlzW18weDJkMGQ1YSgweDIwZSldPSEweDEsdGhpc1tfMHgyZDBkNWEoMHgxODMpXT0hMHgxLGNvbnNvbGVbXzB4MmQwZDVhKDB4MjJkKV0oJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJyt0aGlzWydfd2ViU29ja2V0RXJyb3JEb2NzTGluayddKSxfMHg1ZDk5MzYobmV3IEVycm9yKF8weDJkMGQ1YSgweDFkNSkrKF8weDIxOTg5YyYmXzB4MjE5ODljW18weDJkMGQ1YSgweDIwMCldKSkpKSk7fSkpO31bJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4MTI2NmU5KXt2YXIgXzB4NGM2Mjk1PV8weDI5ZDU5Njt0aGlzW18weDRjNjI5NSgweDIwZSldPSEweDEsdGhpc1tfMHg0YzYyOTUoMHgxODMpXT0hMHgxO3RyeXtfMHgxMjY2ZTlbXzB4NGM2Mjk1KDB4MWI2KV09bnVsbCxfMHgxMjY2ZTlbXzB4NGM2Mjk1KDB4MTlhKV09bnVsbCxfMHgxMjY2ZTlbJ29ub3BlbiddPW51bGw7fWNhdGNoe310cnl7XzB4MTI2NmU5W18weDRjNjI5NSgweDE3NyldPDB4MiYmXzB4MTI2NmU5W18weDRjNjI5NSgweDFhNildKCk7fWNhdGNoe319W18weDI5ZDU5NigweDE3MCldKCl7dmFyIF8weGI1NmE2ZT1fMHgyOWQ1OTY7Y2xlYXJUaW1lb3V0KHRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J10pLCEodGhpc1tfMHhiNTZhNmUoMHgxODQpXT49dGhpc1snX21heENvbm5lY3RBdHRlbXB0Q291bnQnXSkmJih0aGlzW18weGI1NmE2ZSgweDFlMildPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4NDBlOGJjPV8weGI1NmE2ZTt0aGlzW18weDQwZThiYygweDIwZSldfHx0aGlzW18weDQwZThiYygweDE4MyldfHwodGhpc1tfMHg0MGU4YmMoMHgxODcpXSgpLHRoaXNbJ193cyddPy5bXzB4NDBlOGJjKDB4MTdlKV0oKCk9PnRoaXNbXzB4NDBlOGJjKDB4MTcwKV0oKSkpO30sMHgxZjQpLHRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J11bJ3VucmVmJ10mJnRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J11bXzB4YjU2YTZlKDB4MWY2KV0oKSk7fWFzeW5jW18weDI5ZDU5NigweDIxMildKF8weDMzYjAxNCl7dmFyIF8weDE0MDU5YT1fMHgyOWQ1OTY7dHJ5e2lmKCF0aGlzW18weDE0MDU5YSgweDFiZCldKXJldHVybjt0aGlzW18weDE0MDU5YSgweDFkYyldJiZ0aGlzWydfY29ubmVjdFRvSG9zdE5vdyddKCksKGF3YWl0IHRoaXNbXzB4MTQwNTlhKDB4MTZhKV0pW18weDE0MDU5YSgweDIxMildKEpTT05bJ3N0cmluZ2lmeSddKF8weDMzYjAxNCkpO31jYXRjaChfMHg1MTVjZjEpe2NvbnNvbGVbXzB4MTQwNTlhKDB4MjJkKV0odGhpc1tfMHgxNDA1OWEoMHgxOTApXSsnOlxcXFx4MjAnKyhfMHg1MTVjZjEmJl8weDUxNWNmMVtfMHgxNDA1OWEoMHgyMDApXSkpLHRoaXNbXzB4MTQwNTlhKDB4MWJkKV09ITB4MSx0aGlzW18weDE0MDU5YSgweDE3MCldKCk7fX19O2Z1bmN0aW9uIF8weDU1NTYoKXt2YXIgXzB4NTViZDBmPVsnc3BsaXQnLCdfY29ubmVjdFRvSG9zdE5vdycsJ3RpbWVTdGFtcCcsJzEuMC4wJywnZXhwSWQnLCd1bnNoaWZ0JywnY2FsbCcsJ2dldE93blByb3BlcnR5U3ltYm9scycsJ2lzQXJyYXknLCcxNjk3Mzc0NjcyNDk3JywnX3NlbmRFcnJvck1lc3NhZ2UnLCdIVE1MQWxsQ29sbGVjdGlvbicsJ19wX2xlbmd0aCcsJ2hpdHMnLCdvYmplY3QnLCduYW1lJywnX3NldE5vZGVQZXJtaXNzaW9ucycsJ2NvbnNvbGUnLCdfaXNQcmltaXRpdmVUeXBlJywnY2FwcGVkRWxlbWVudHMnLCdvbmVycm9yJywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJ3JlcGxhY2UnLCdhdXRvRXhwYW5kTGltaXQnLCd0aGVuJywndW5rbm93bicsJ3N5bWJvbCcsJ3BvcCcsJ19kYXRlVG9TdHJpbmcnLCdwdXNoJywnbm93JywnZ2xvYmFsJywnY2xvc2UnLCdnZXR0ZXInLCdfdHlwZScsJ2RhdGUnLCdfcF8nLCdocnRpbWUnLCdjYXBwZWRQcm9wcycsJ2ZvckVhY2gnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwZmluZFxcXFx4MjBhbmRcXFxceDIwbG9hZFxcXFx4MjBXZWJTb2NrZXQnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ2NvbnN0cnVjdG9yJywnZ2V0UHJvdG90eXBlT2YnLCd0aW1lRW5kJywnX3NvcnRQcm9wcycsJ19hZGRQcm9wZXJ0eScsJ25lZ2F0aXZlWmVybycsJ29uY2xvc2UnLCdfY2FwSWZTdHJpbmcnLCdqb2luJywncmVzb2x2ZUdldHRlcnMnLCdsZW5ndGgnLCd2ZXJzaW9ucycsJzEyNy4wLjAuMScsJ19hbGxvd2VkVG9TZW5kJywndG9TdHJpbmcnLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ3BhdGgnLCcxMGJkTmp4UycsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCdjb3ZlcmFnZScsJ3Jvb3RfZXhwX2lkJywnX2Rpc3Bvc2VXZWJzb2NrZXQnLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnaW5jbHVkZXMnLCcxMTY0MjI2TkdtbGxaJywnXFxcXHgyMGJyb3dzZXInLCd0b3RhbFN0ckxlbmd0aCcsJ19oYXNTZXRPbkl0c1BhdGgnLCdhc3RybycsJ21ldGhvZCcsJycsJ3Bvc2l0aXZlSW5maW5pdHknLCdtYXRjaCcsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ2xvY2F0aW9uJywnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJywnYXV0b0V4cGFuZCcsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcsJ3NvcnRQcm9wcycsJ3RpbWUnLCdzZXQnLCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywnX2FkZEZ1bmN0aW9uc05vZGUnLCdkZWZhdWx0JywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdwcm9wcycsJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnLCduZXh0LmpzJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywndmFsdWUnLCdfcmVjb25uZWN0VGltZW91dCcsJ3BlcmZfaG9va3MnLCdfaW5Ccm93c2VyJywnX2lzTmVnYXRpdmVaZXJvJywnc3Vic3RyJywncHJvY2VzcycsJ19xdW90ZWRSZWdFeHAnLCdwb3J0JywnX3Byb3BlcnR5TmFtZScsJ2VudicsJ2FsbFN0ckxlbmd0aCcsJ1tvYmplY3RcXFxceDIwQXJyYXldJywnbm9kZScsJ19TeW1ib2wnLCd0b0xvd2VyQ2FzZScsJ2xvZycsJ3VybCcsJ25vRnVuY3Rpb25zJywnc3RyTGVuZ3RoJywnMTM0NzQ1dFhwd1lwJywndW5yZWYnLCdzdHJpbmcnLCdzZXR0ZXInLCd0eXBlJywnY3VycmVudCcsJ2dldCcsJzEzNUxHcFJBbycsJ19IVE1MQWxsQ29sbGVjdGlvbicsJ3NvcnQnLCdfc2V0Tm9kZUxhYmVsJywnbWVzc2FnZScsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnaHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsJ19zZXROb2RlSWQnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCd1bmRlZmluZWQnLCdfY2xlYW5Ob2RlJywnc2xpY2UnLCdORUdBVElWRV9JTkZJTklUWScsJ3Jvb3RfZXhwJywnX3NldE5vZGVRdWVyeVBhdGgnLCdCb29sZWFuJywnMzM4ODk2ZnRtSXRMJywnX2Nvbm5lY3RlZCcsJ19XZWJTb2NrZXRDbGFzcycsJ0J1ZmZlcicsJ2NvbmNhdCcsJ3NlbmQnLCdOdW1iZXInLCc6bG9nUG9pbnRJZDonLCdjcmVhdGUnLCdzdGFja1RyYWNlTGltaXQnLFxcXCJjOlxcXFxcXFxcVXNlcnNcXFxcXFxcXFVTRVJcXFxcXFxcXC52c2NvZGVcXFxcXFxcXGV4dGVuc2lvbnNcXFxcXFxcXHdhbGxhYnlqcy5jb25zb2xlLW5pbmphLTEuMC4yMzJcXFxcXFxcXG5vZGVfbW9kdWxlc1xcXCIsJ2VsZW1lbnRzJywnbnV4dCcsJ3dlYnBhY2snLCdfV2ViU29ja2V0JywnYXV0b0V4cGFuZE1heERlcHRoJywnZnVuY3Rpb24nLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywnW29iamVjdFxcXFx4MjBTZXRdJywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJ3BlcmZvcm1hbmNlJywnXFxcXHgyMHNlcnZlcicsJ2VkZ2UnLCd2YWx1ZU9mJywnbm9kZU1vZHVsZXMnLCdfc29ja2V0JywnU2V0JywnZXJyb3InLCdfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ3JlbG9hZCcsJ19yZWdFeHBUb1N0cmluZycsJ3dhcm4nLCdvbm9wZW4nLCdORVhUX1JVTlRJTUUnLCdhcnJheScsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnMjU2ME9sRnJxZScsJ2RhdGEnLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCdwYXRoVG9GaWxlVVJMJywnX2lzQXJyYXknLCcnLCdsZXZlbCcsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50JywncmVkdWNlTGltaXRzJywnX3Byb3BlcnR5JywnY2FwcGVkJywnaW5kZXgnLCdib29sZWFuJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ19pc1VuZGVmaW5lZCcsJ1BPU0lUSVZFX0lORklOSVRZJywndGVzdCcsJ29ubWVzc2FnZScsJ3dzL2luZGV4LmpzJywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCdfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdnZXRXZWJTb2NrZXRDbGFzcycsJ25hbicsJ3RyYWNlJywnRXJyb3InLCdzdGFjaycsJ2NvdW50JywncGFyZW50JywnODAzNjAwdXJKTldJJywncGFyc2UnLCdkb2NrZXJpemVkQXBwJywnTWFwJywnbnVsbCcsJzQ4VXRSV1Z2JywnX251bWJlclJlZ0V4cCcsJzYwOTkyJywnX3dzJywnX2hhc01hcE9uSXRzUGF0aCcsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ1dlYlNvY2tldCcsJ19pc01hcCcsJ2hvc3RuYW1lJywnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknLCdiaWdpbnQnLCdfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0JywnaG9zdCcsJ251bWJlcicsJ19vYmplY3RUb1N0cmluZycsJ19hZGRMb2FkTm9kZScsJ3JlYWR5U3RhdGUnLCcxNTc4cmdjbVh2JywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCdfaW5OZXh0RWRnZScsJ2RlcHRoJywnX3VuZGVmaW5lZCcsJ1N0cmluZycsJ2NhdGNoJywnZGlzYWJsZWRMb2cnLCdwcm90b3R5cGUnLCdzZXJpYWxpemUnLCczMDUwMDE5SkNrYm9jJywnX2Nvbm5lY3RpbmcnLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ19jb25zb2xlX25pbmphJ107XzB4NTU1Nj1mdW5jdGlvbigpe3JldHVybiBfMHg1NWJkMGY7fTtyZXR1cm4gXzB4NTU1NigpO31mdW5jdGlvbiBiKF8weDNmNmNmYixfMHg0YzBjMWIsXzB4ZTE0NGNmLF8weDM3NzhiNSxfMHgyMzIxMDcsXzB4NmVjYzY1KXt2YXIgXzB4MmExNDU5PV8weDI5ZDU5NjtsZXQgXzB4MTdmOTBmPV8weGUxNDRjZltfMHgyYTE0NTkoMHgxODYpXSgnLCcpWydtYXAnXShfMHhlNTE2ZTU9Pnt2YXIgXzB4MjdmOGU4PV8weDJhMTQ1OTt0cnl7XzB4M2Y2Y2ZiW18weDI3ZjhlOCgweDIxZSldfHwoKF8weDIzMjEwNz09PV8weDI3ZjhlOCgweDFkZil8fF8weDIzMjEwNz09PSdyZW1peCd8fF8weDIzMjEwNz09PV8weDI3ZjhlOCgweDFjYykpJiYoXzB4MjMyMTA3Kz0hXzB4M2Y2Y2ZiWydwcm9jZXNzJ10/LltfMHgyN2Y4ZTgoMHgxYmIpXT8uW18weDI3ZjhlOCgweDFlZSldJiZfMHgzZjZjZmJbXzB4MjdmOGU4KDB4MWU3KV0/LltfMHgyN2Y4ZTgoMHgxZWIpXT8uW18weDI3ZjhlOCgweDIyZildIT09J2VkZ2UnP18weDI3ZjhlOCgweDFjOSk6XzB4MjdmOGU4KDB4MjIyKSksXzB4M2Y2Y2ZiW18weDI3ZjhlOCgweDIxZSldPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHgyMzIxMDd9KTtsZXQgXzB4MzQzOWY1PW5ldyBYKF8weDNmNmNmYixfMHg0YzBjMWIsXzB4ZTUxNmU1LF8weDM3NzhiNSxfMHg2ZWNjNjUpO3JldHVybiBfMHgzNDM5ZjVbJ3NlbmQnXVsnYmluZCddKF8weDM0MzlmNSk7fWNhdGNoKF8weDQxZGE5Zil7cmV0dXJuIGNvbnNvbGVbXzB4MjdmOGU4KDB4MjJkKV0oXzB4MjdmOGU4KDB4MjNmKSxfMHg0MWRhOWYmJl8weDQxZGE5ZltfMHgyN2Y4ZTgoMHgyMDApXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4NWUzYjhiPT5fMHgxN2Y5MGZbJ2ZvckVhY2gnXShfMHg0MzE0OGI9Pl8weDQzMTQ4YihfMHg1ZTNiOGIpKTt9ZnVuY3Rpb24gXzB4NDFjOShfMHgxNmU4YjcsXzB4NDgyOTMwKXt2YXIgXzB4NTU1NjdhPV8weDU1NTYoKTtyZXR1cm4gXzB4NDFjOT1mdW5jdGlvbihfMHg0MWM5M2QsXzB4MjljMjNkKXtfMHg0MWM5M2Q9XzB4NDFjOTNkLTB4MTUzO3ZhciBfMHgzMTNjMGQ9XzB4NTU1NjdhW18weDQxYzkzZF07cmV0dXJuIF8weDMxM2MwZDt9LF8weDQxYzkoXzB4MTZlOGI3LF8weDQ4MjkzMCk7fWZ1bmN0aW9uIFcoXzB4MTQzMjBiKXt2YXIgXzB4M2UzMGExPV8weDI5ZDU5NjtsZXQgXzB4MWY0NGQ3PWZ1bmN0aW9uKF8weDJiZWMyMCxfMHgxMjcwOWQpe3JldHVybiBfMHgxMjcwOWQtXzB4MmJlYzIwO30sXzB4NGFkNTk5O2lmKF8weDE0MzIwYltfMHgzZTMwYTEoMHgyMjEpXSlfMHg0YWQ1OTk9ZnVuY3Rpb24oKXt2YXIgXzB4ZTgxYTRkPV8weDNlMzBhMTtyZXR1cm4gXzB4MTQzMjBiW18weGU4MWE0ZCgweDIyMSldW18weGU4MWE0ZCgweDFhNCldKCk7fTtlbHNle2lmKF8weDE0MzIwYltfMHgzZTMwYTEoMHgxZTcpXSYmXzB4MTQzMjBiW18weDNlMzBhMSgweDFlNyldWydocnRpbWUnXSYmXzB4MTQzMjBiW18weDNlMzBhMSgweDFlNyldPy5bXzB4M2UzMGExKDB4MWViKV0/LltfMHgzZTMwYTEoMHgyMmYpXSE9PV8weDNlMzBhMSgweDIyMykpXzB4NGFkNTk5PWZ1bmN0aW9uKCl7dmFyIF8weDE1YTJlYj1fMHgzZTMwYTE7cmV0dXJuIF8weDE0MzIwYltfMHgxNWEyZWIoMHgxZTcpXVtfMHgxNWEyZWIoMHgxYWIpXSgpO30sXzB4MWY0NGQ3PWZ1bmN0aW9uKF8weDE1NmY5NSxfMHgzYmMwOTMpe3JldHVybiAweDNlOCooXzB4M2JjMDkzWzB4MF0tXzB4MTU2Zjk1WzB4MF0pKyhfMHgzYmMwOTNbMHgxXS1fMHgxNTZmOTVbMHgxXSkvMHhmNDI0MDt9O2Vsc2UgdHJ5e2xldCB7cGVyZm9ybWFuY2U6XzB4MTEyNzhmfT1yZXF1aXJlKF8weDNlMzBhMSgweDFlMykpO18weDRhZDU5OT1mdW5jdGlvbigpe3ZhciBfMHg1MmI1ZDY9XzB4M2UzMGExO3JldHVybiBfMHgxMTI3OGZbXzB4NTJiNWQ2KDB4MWE0KV0oKTt9O31jYXRjaHtfMHg0YWQ1OTk9ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGUoKTt9O319cmV0dXJueydlbGFwc2VkJzpfMHgxZjQ0ZDcsJ3RpbWVTdGFtcCc6XzB4NGFkNTk5LCdub3cnOigpPT5EYXRlWydub3cnXSgpfTt9ZnVuY3Rpb24gSihfMHg1NTQ3ZmUsXzB4NTcyMmU2LF8weDNhZjc5MSl7dmFyIF8weDIzZmJmND1fMHgyOWQ1OTY7aWYoXzB4NTU0N2ZlWydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXSE9PXZvaWQgMHgwKXJldHVybiBfMHg1NTQ3ZmVbXzB4MjNmYmY0KDB4MTZjKV07bGV0IF8weDQwMzJjND1fMHg1NTQ3ZmVbJ3Byb2Nlc3MnXT8uW18weDIzZmJmNCgweDFiYildPy5bXzB4MjNmYmY0KDB4MWVlKV18fF8weDU1NDdmZVtfMHgyM2ZiZjQoMHgxZTcpXT8uWydlbnYnXT8uW18weDIzZmJmNCgweDIyZildPT09XzB4MjNmYmY0KDB4MjIzKTtyZXR1cm4gXzB4NDAzMmM0JiZfMHgzYWY3OTE9PT1fMHgyM2ZiZjQoMHgyMTkpP18weDU1NDdmZVtfMHgyM2ZiZjQoMHgxNmMpXT0hMHgxOl8weDU1NDdmZVtfMHgyM2ZiZjQoMHgxNmMpXT1fMHg0MDMyYzR8fCFfMHg1NzIyZTZ8fF8weDU1NDdmZVtfMHgyM2ZiZjQoMHgxZDIpXT8uWydob3N0bmFtZSddJiZfMHg1NzIyZTZbXzB4MjNmYmY0KDB4MWM3KV0oXzB4NTU0N2ZlWydsb2NhdGlvbiddW18weDIzZmJmNCgweDE2ZildKSxfMHg1NTQ3ZmVbXzB4MjNmYmY0KDB4MTZjKV07fWZ1bmN0aW9uIFkoXzB4NDg1ZDNhLF8weDQxNDU3ZCxfMHhkNDk0YTMsXzB4MjRjYzlmKXt2YXIgXzB4NDhmZjRmPV8weDI5ZDU5NjtfMHg0ODVkM2E9XzB4NDg1ZDNhLF8weDQxNDU3ZD1fMHg0MTQ1N2QsXzB4ZDQ5NGEzPV8weGQ0OTRhMyxfMHgyNGNjOWY9XzB4MjRjYzlmO2xldCBfMHgxNTYyYjk9VyhfMHg0ODVkM2EpLF8weDI0ZjRjND1fMHgxNTYyYjlbJ2VsYXBzZWQnXSxfMHgyYzZmZDg9XzB4MTU2MmI5Wyd0aW1lU3RhbXAnXTtjbGFzcyBfMHgxYzRkMjh7Y29uc3RydWN0b3IoKXt2YXIgXzB4NGQwZmI4PV8weDQxYzk7dGhpc1snX2tleVN0clJlZ0V4cCddPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHg0ZDBmYjgoMHgxNjgpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4NGQwZmI4KDB4MWU4KV09LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1tfMHg0ZDBmYjgoMHgxN2MpXT1fMHg0ODVkM2FbXzB4NGQwZmI4KDB4MjA2KV0sdGhpc1tfMHg0ZDBmYjgoMHgxZmQpXT1fMHg0ODVkM2FbXzB4NGQwZmI4KDB4MTkxKV0sdGhpc1tfMHg0ZDBmYjgoMHgxNTkpXT1PYmplY3RbJ2dldE93blByb3BlcnR5RGVzY3JpcHRvciddLHRoaXNbXzB4NGQwZmI4KDB4MWJmKV09T2JqZWN0W18weDRkMGZiOCgweDFkOSldLHRoaXNbXzB4NGQwZmI4KDB4MWVmKV09XzB4NDg1ZDNhWydTeW1ib2wnXSx0aGlzW18weDRkMGZiOCgweDIyYyldPVJlZ0V4cFtfMHg0ZDBmYjgoMHgxODApXVtfMHg0ZDBmYjgoMHgxYmUpXSx0aGlzWydfZGF0ZVRvU3RyaW5nJ109RGF0ZVtfMHg0ZDBmYjgoMHgxODApXVsndG9TdHJpbmcnXTt9WydzZXJpYWxpemUnXShfMHgxM2I2MmEsXzB4NGQ1NjgzLF8weDNkZmM4YixfMHgxNjg2NTUpe3ZhciBfMHgxYmY5NWU9XzB4NDFjOSxfMHgyM2Q0ZDM9dGhpcyxfMHg1ZDE2MGU9XzB4M2RmYzhiW18weDFiZjk1ZSgweDFkNCldO2Z1bmN0aW9uIF8weDIzMzJiMyhfMHgxNjgxYzgsXzB4NTcxMmU3LF8weDNlZmMyNyl7dmFyIF8weDFmNGQyNz1fMHgxYmY5NWU7XzB4NTcxMmU3W18weDFmNGQyNygweDFmOSldPV8weDFmNGQyNygweDE5ZiksXzB4NTcxMmU3W18weDFmNGQyNygweDIyOCldPV8weDE2ODFjOFtfMHgxZjRkMjcoMHgyMDApXSxfMHgzMDk4ZTY9XzB4M2VmYzI3W18weDFmNGQyNygweDFlZSldW18weDFmNGQyNygweDFmYSldLF8weDNlZmMyN1tfMHgxZjRkMjcoMHgxZWUpXVtfMHgxZjRkMjcoMHgxZmEpXT1fMHg1NzEyZTcsXzB4MjNkNGQzW18weDFmNGQyNygweDIwMildKF8weDU3MTJlNyxfMHgzZWZjMjcpO310cnl7XzB4M2RmYzhiW18weDFiZjk1ZSgweDIzOCldKyssXzB4M2RmYzhiW18weDFiZjk1ZSgweDFkNCldJiZfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MjIwKV1bJ3B1c2gnXShfMHg0ZDU2ODMpO3ZhciBfMHgyNGVkZGQsXzB4NTMwOGEzLF8weDQ0YWFjOCxfMHg4NWRkNDksXzB4MTY2MDcxPVtdLF8weDQxNDUyMT1bXSxfMHgxZTlmODMsXzB4MzE1MmUzPXRoaXNbXzB4MWJmOTVlKDB4MWE4KV0oXzB4NGQ1NjgzKSxfMHg0YzdkMmI9XzB4MzE1MmUzPT09XzB4MWJmOTVlKDB4MjMwKSxfMHgzMGNiNmY9ITB4MSxfMHgyODYyMjA9XzB4MzE1MmUzPT09XzB4MWJmOTVlKDB4MjFkKSxfMHg0YzY4NmU9dGhpc1tfMHgxYmY5NWUoMHgxOTgpXShfMHgzMTUyZTMpLF8weDQ1NTU3MD10aGlzW18weDFiZjk1ZSgweDE1YSldKF8weDMxNTJlMyksXzB4NGVkMTliPV8weDRjNjg2ZXx8XzB4NDU1NTcwLF8weDMyMGMzND17fSxfMHgyZjE2ZWM9MHgwLF8weDUwOWJkOT0hMHgxLF8weDMwOThlNixfMHgxYjU0ODk9L14oKFsxLTldezF9WzAtOV0qKXwwKSQvO2lmKF8weDNkZmM4YlsnZGVwdGgnXSl7aWYoXzB4NGM3ZDJiKXtpZihfMHg1MzA4YTM9XzB4NGQ1NjgzW18weDFiZjk1ZSgweDFiYSldLF8weDUzMDhhMz5fMHgzZGZjOGJbXzB4MWJmOTVlKDB4MjE4KV0pe2ZvcihfMHg0NGFhYzg9MHgwLF8weDg1ZGQ0OT1fMHgzZGZjOGJbXzB4MWJmOTVlKDB4MjE4KV0sXzB4MjRlZGRkPV8weDQ0YWFjODtfMHgyNGVkZGQ8XzB4ODVkZDQ5O18weDI0ZWRkZCsrKV8weDQxNDUyMVtfMHgxYmY5NWUoMHgxYTMpXShfMHgyM2Q0ZDNbXzB4MWJmOTVlKDB4MWI0KV0oXzB4MTY2MDcxLF8weDRkNTY4MyxfMHgzMTUyZTMsXzB4MjRlZGRkLF8weDNkZmM4YikpO18weDEzYjYyYVtfMHgxYmY5NWUoMHgxOTkpXT0hMHgwO31lbHNle2ZvcihfMHg0NGFhYzg9MHgwLF8weDg1ZGQ0OT1fMHg1MzA4YTMsXzB4MjRlZGRkPV8weDQ0YWFjODtfMHgyNGVkZGQ8XzB4ODVkZDQ5O18weDI0ZWRkZCsrKV8weDQxNDUyMVtfMHgxYmY5NWUoMHgxYTMpXShfMHgyM2Q0ZDNbXzB4MWJmOTVlKDB4MWI0KV0oXzB4MTY2MDcxLF8weDRkNTY4MyxfMHgzMTUyZTMsXzB4MjRlZGRkLF8weDNkZmM4YikpO31fMHgzZGZjOGJbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rPV8weDQxNDUyMVtfMHgxYmY5NWUoMHgxYmEpXTt9aWYoIShfMHgzMTUyZTM9PT0nbnVsbCd8fF8weDMxNTJlMz09PSd1bmRlZmluZWQnKSYmIV8weDRjNjg2ZSYmXzB4MzE1MmUzIT09XzB4MWJmOTVlKDB4MTdkKSYmXzB4MzE1MmUzIT09XzB4MWJmOTVlKDB4MjEwKSYmXzB4MzE1MmUzIT09XzB4MWJmOTVlKDB4MTcxKSl7dmFyIF8weDM0Zjk3Yz1fMHgxNjg2NTVbXzB4MWJmOTVlKDB4MWRkKV18fF8weDNkZmM4YltfMHgxYmY5NWUoMHgxZGQpXTtpZih0aGlzWydfaXNTZXQnXShfMHg0ZDU2ODMpPyhfMHgyNGVkZGQ9MHgwLF8weDRkNTY4M1tfMHgxYmY5NWUoMHgxYWQpXShmdW5jdGlvbihfMHgxMzMwN2Epe3ZhciBfMHg4MTU5M2E9XzB4MWJmOTVlO2lmKF8weDJmMTZlYysrLF8weDNkZmM4YltfMHg4MTU5M2EoMHgyMzkpXSsrLF8weDJmMTZlYz5fMHgzNGY5N2Mpe18weDUwOWJkOT0hMHgwO3JldHVybjt9aWYoIV8weDNkZmM4YlsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddJiZfMHgzZGZjOGJbXzB4ODE1OTNhKDB4MWQ0KV0mJl8weDNkZmM4YltfMHg4MTU5M2EoMHgyMzkpXT5fMHgzZGZjOGJbXzB4ODE1OTNhKDB4MTlkKV0pe18weDUwOWJkOT0hMHgwO3JldHVybjt9XzB4NDE0NTIxW18weDgxNTkzYSgweDFhMyldKF8weDIzZDRkM1tfMHg4MTU5M2EoMHgxYjQpXShfMHgxNjYwNzEsXzB4NGQ1NjgzLF8weDgxNTkzYSgweDIyNyksXzB4MjRlZGRkKyssXzB4M2RmYzhiLGZ1bmN0aW9uKF8weDVkNjVhMCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDVkNjVhMDt9O30oXzB4MTMzMDdhKSkpO30pKTp0aGlzW18weDFiZjk1ZSgweDE2ZSldKF8weDRkNTY4MykmJl8weDRkNTY4M1tfMHgxYmY5NWUoMHgxYWQpXShmdW5jdGlvbihfMHgyOWI5MTksXzB4MzUzNDgzKXt2YXIgXzB4MTU2YjFkPV8weDFiZjk1ZTtpZihfMHgyZjE2ZWMrKyxfMHgzZGZjOGJbXzB4MTU2YjFkKDB4MjM5KV0rKyxfMHgyZjE2ZWM+XzB4MzRmOTdjKXtfMHg1MDliZDk9ITB4MDtyZXR1cm47fWlmKCFfMHgzZGZjOGJbXzB4MTU2YjFkKDB4MWRlKV0mJl8weDNkZmM4YltfMHgxNTZiMWQoMHgxZDQpXSYmXzB4M2RmYzhiWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDNkZmM4YltfMHgxNTZiMWQoMHgxOWQpXSl7XzB4NTA5YmQ5PSEweDA7cmV0dXJuO312YXIgXzB4NTkzYzliPV8weDM1MzQ4M1sndG9TdHJpbmcnXSgpO18weDU5M2M5YltfMHgxNTZiMWQoMHgxYmEpXT4weDY0JiYoXzB4NTkzYzliPV8weDU5M2M5YltfMHgxNTZiMWQoMHgyMDgpXSgweDAsMHg2NCkrJy4uLicpLF8weDQxNDUyMVtfMHgxNTZiMWQoMHgxYTMpXShfMHgyM2Q0ZDNbJ19hZGRQcm9wZXJ0eSddKF8weDE2NjA3MSxfMHg0ZDU2ODMsJ01hcCcsXzB4NTkzYzliLF8weDNkZmM4YixmdW5jdGlvbihfMHgzMjRmNTYpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgzMjRmNTY7fTt9KF8weDI5YjkxOSkpKTt9KSwhXzB4MzBjYjZmKXt0cnl7Zm9yKF8weDFlOWY4MyBpbiBfMHg0ZDU2ODMpaWYoIShfMHg0YzdkMmImJl8weDFiNTQ4OVtfMHgxYmY5NWUoMHgxNTUpXShfMHgxZTlmODMpKSYmIXRoaXNbXzB4MWJmOTVlKDB4MTc5KV0oXzB4NGQ1NjgzLF8weDFlOWY4MyxfMHgzZGZjOGIpKXtpZihfMHgyZjE2ZWMrKyxfMHgzZGZjOGJbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHgyZjE2ZWM+XzB4MzRmOTdjKXtfMHg1MDliZDk9ITB4MDticmVhazt9aWYoIV8weDNkZmM4YlsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddJiZfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MWQ0KV0mJl8weDNkZmM4YlsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgzZGZjOGJbXzB4MWJmOTVlKDB4MTlkKV0pe18weDUwOWJkOT0hMHgwO2JyZWFrO31fMHg0MTQ1MjFbXzB4MWJmOTVlKDB4MWEzKV0oXzB4MjNkNGQzW18weDFiZjk1ZSgweDFkMSldKF8weDE2NjA3MSxfMHgzMjBjMzQsXzB4NGQ1NjgzLF8weDMxNTJlMyxfMHgxZTlmODMsXzB4M2RmYzhiKSk7fX1jYXRjaHt9aWYoXzB4MzIwYzM0W18weDFiZjk1ZSgweDE5MildPSEweDAsXzB4Mjg2MjIwJiYoXzB4MzIwYzM0WydfcF9uYW1lJ109ITB4MCksIV8weDUwOWJkOSl7dmFyIF8weDEwOTU1Yj1bXVtfMHgxYmY5NWUoMHgyMTEpXSh0aGlzWydfZ2V0T3duUHJvcGVydHlOYW1lcyddKF8weDRkNTY4MykpW18weDFiZjk1ZSgweDIxMSldKHRoaXNbXzB4MWJmOTVlKDB4MWM2KV0oXzB4NGQ1NjgzKSk7Zm9yKF8weDI0ZWRkZD0weDAsXzB4NTMwOGEzPV8weDEwOTU1YltfMHgxYmY5NWUoMHgxYmEpXTtfMHgyNGVkZGQ8XzB4NTMwOGEzO18weDI0ZWRkZCsrKWlmKF8weDFlOWY4Mz1fMHgxMDk1NWJbXzB4MjRlZGRkXSwhKF8weDRjN2QyYiYmXzB4MWI1NDg5W18weDFiZjk1ZSgweDE1NSldKF8weDFlOWY4M1tfMHgxYmY5NWUoMHgxYmUpXSgpKSkmJiF0aGlzW18weDFiZjk1ZSgweDE3OSldKF8weDRkNTY4MyxfMHgxZTlmODMsXzB4M2RmYzhiKSYmIV8weDMyMGMzNFtfMHgxYmY5NWUoMHgxYWEpK18weDFlOWY4M1sndG9TdHJpbmcnXSgpXSl7aWYoXzB4MmYxNmVjKyssXzB4M2RmYzhiW18weDFiZjk1ZSgweDIzOSldKyssXzB4MmYxNmVjPl8weDM0Zjk3Yyl7XzB4NTA5YmQ5PSEweDA7YnJlYWs7fWlmKCFfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MWRlKV0mJl8weDNkZmM4YltfMHgxYmY5NWUoMHgxZDQpXSYmXzB4M2RmYzhiW18weDFiZjk1ZSgweDIzOSldPl8weDNkZmM4YltfMHgxYmY5NWUoMHgxOWQpXSl7XzB4NTA5YmQ5PSEweDA7YnJlYWs7fV8weDQxNDUyMVsncHVzaCddKF8weDIzZDRkM1tfMHgxYmY5NWUoMHgxZDEpXShfMHgxNjYwNzEsXzB4MzIwYzM0LF8weDRkNTY4MyxfMHgzMTUyZTMsXzB4MWU5ZjgzLF8weDNkZmM4YikpO319fX19aWYoXzB4MTNiNjJhW18weDFiZjk1ZSgweDFmOSldPV8weDMxNTJlMyxfMHg0ZWQxOWI/KF8weDEzYjYyYVtfMHgxYmY5NWUoMHgxZTEpXT1fMHg0ZDU2ODNbJ3ZhbHVlT2YnXSgpLHRoaXNbXzB4MWJmOTVlKDB4MWI3KV0oXzB4MzE1MmUzLF8weDEzYjYyYSxfMHgzZGZjOGIsXzB4MTY4NjU1KSk6XzB4MzE1MmUzPT09XzB4MWJmOTVlKDB4MWE5KT9fMHgxM2I2MmFbXzB4MWJmOTVlKDB4MWUxKV09dGhpc1tfMHgxYmY5NWUoMHgxYTIpXVtfMHgxYmY5NWUoMHgxOGMpXShfMHg0ZDU2ODMpOl8weDMxNTJlMz09PSdiaWdpbnQnP18weDEzYjYyYVtfMHgxYmY5NWUoMHgxZTEpXT1fMHg0ZDU2ODNbJ3RvU3RyaW5nJ10oKTpfMHgzMTUyZTM9PT0nUmVnRXhwJz9fMHgxM2I2MmFbJ3ZhbHVlJ109dGhpc1tfMHgxYmY5NWUoMHgyMmMpXVtfMHgxYmY5NWUoMHgxOGMpXShfMHg0ZDU2ODMpOl8weDMxNTJlMz09PV8weDFiZjk1ZSgweDFhMCkmJnRoaXNbXzB4MWJmOTVlKDB4MWVmKV0/XzB4MTNiNjJhWyd2YWx1ZSddPXRoaXNbXzB4MWJmOTVlKDB4MWVmKV1bXzB4MWJmOTVlKDB4MTgwKV1bXzB4MWJmOTVlKDB4MWJlKV1bXzB4MWJmOTVlKDB4MThjKV0oXzB4NGQ1NjgzKTohXzB4M2RmYzhiWydkZXB0aCddJiYhKF8weDMxNTJlMz09PV8weDFiZjk1ZSgweDE2Nil8fF8weDMxNTJlMz09PV8weDFiZjk1ZSgweDIwNikpJiYoZGVsZXRlIF8weDEzYjYyYVsndmFsdWUnXSxfMHgxM2I2MmFbXzB4MWJmOTVlKDB4MjNjKV09ITB4MCksXzB4NTA5YmQ5JiYoXzB4MTNiNjJhW18weDFiZjk1ZSgweDFhYyldPSEweDApLF8weDMwOThlNj1fMHgzZGZjOGJbXzB4MWJmOTVlKDB4MWVlKV1bXzB4MWJmOTVlKDB4MWZhKV0sXzB4M2RmYzhiW18weDFiZjk1ZSgweDFlZSldW18weDFiZjk1ZSgweDFmYSldPV8weDEzYjYyYSx0aGlzW18weDFiZjk1ZSgweDIwMildKF8weDEzYjYyYSxfMHgzZGZjOGIpLF8weDQxNDUyMVsnbGVuZ3RoJ10pe2ZvcihfMHgyNGVkZGQ9MHgwLF8weDUzMDhhMz1fMHg0MTQ1MjFbXzB4MWJmOTVlKDB4MWJhKV07XzB4MjRlZGRkPF8weDUzMDhhMztfMHgyNGVkZGQrKylfMHg0MTQ1MjFbXzB4MjRlZGRkXShfMHgyNGVkZGQpO31fMHgxNjYwNzFbXzB4MWJmOTVlKDB4MWJhKV0mJihfMHgxM2I2MmFbXzB4MWJmOTVlKDB4MWRkKV09XzB4MTY2MDcxKTt9Y2F0Y2goXzB4MjdiNGUyKXtfMHgyMzMyYjMoXzB4MjdiNGUyLF8weDEzYjYyYSxfMHgzZGZjOGIpO31yZXR1cm4gdGhpc1snX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDRkNTY4MyxfMHgxM2I2MmEpLHRoaXNbXzB4MWJmOTVlKDB4MWQzKV0oXzB4MTNiNjJhLF8weDNkZmM4YiksXzB4M2RmYzhiWydub2RlJ11bJ2N1cnJlbnQnXT1fMHgzMDk4ZTYsXzB4M2RmYzhiW18weDFiZjk1ZSgweDIzOCldLS0sXzB4M2RmYzhiW18weDFiZjk1ZSgweDFkNCldPV8weDVkMTYwZSxfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MWQ0KV0mJl8weDNkZmM4YltfMHgxYmY5NWUoMHgyMjApXVtfMHgxYmY5NWUoMHgxYTEpXSgpLF8weDEzYjYyYTt9W18weDQ4ZmY0ZigweDFjNildKF8weDEwZWVhMCl7dmFyIF8weDRlYWI5ZD1fMHg0OGZmNGY7cmV0dXJuIE9iamVjdFtfMHg0ZWFiOWQoMHgxOGQpXT9PYmplY3RbJ2dldE93blByb3BlcnR5U3ltYm9scyddKF8weDEwZWVhMCk6W107fVsnX2lzU2V0J10oXzB4MjYwYTE1KXt2YXIgXzB4NGY2OTFhPV8weDQ4ZmY0ZjtyZXR1cm4hIShfMHgyNjBhMTUmJl8weDQ4NWQzYVtfMHg0ZjY5MWEoMHgyMjcpXSYmdGhpc1tfMHg0ZjY5MWEoMHgxNzUpXShfMHgyNjBhMTUpPT09XzB4NGY2OTFhKDB4MjFmKSYmXzB4MjYwYTE1W18weDRmNjkxYSgweDFhZCldKTt9WydfYmxhY2tsaXN0ZWRQcm9wZXJ0eSddKF8weDQ2NWQwOCxfMHgyZDk3Y2MsXzB4NTNiOTcwKXt2YXIgXzB4MWQzZmRiPV8weDQ4ZmY0ZjtyZXR1cm4gXzB4NTNiOTcwW18weDFkM2ZkYigweDFmMyldP3R5cGVvZiBfMHg0NjVkMDhbXzB4MmQ5N2NjXT09XzB4MWQzZmRiKDB4MjFkKTohMHgxO31bXzB4NDhmZjRmKDB4MWE4KV0oXzB4NTM2MjQ3KXt2YXIgXzB4MmRiMTdjPV8weDQ4ZmY0ZixfMHg1YjZkMjk9Jyc7cmV0dXJuIF8weDViNmQyOT10eXBlb2YgXzB4NTM2MjQ3LF8weDViNmQyOT09PV8weDJkYjE3YygweDE5NCk/dGhpc1tfMHgyZGIxN2MoMHgxNzUpXShfMHg1MzYyNDcpPT09XzB4MmRiMTdjKDB4MWVkKT9fMHg1YjZkMjk9XzB4MmRiMTdjKDB4MjMwKTp0aGlzW18weDJkYjE3YygweDE3NSldKF8weDUzNjI0Nyk9PT1fMHgyZGIxN2MoMHgxYzIpP18weDViNmQyOT1fMHgyZGIxN2MoMHgxYTkpOnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDUzNjI0Nyk9PT1fMHgyZGIxN2MoMHgyMzQpP18weDViNmQyOT0nYmlnaW50JzpfMHg1MzYyNDc9PT1udWxsP18weDViNmQyOT1fMHgyZGIxN2MoMHgxNjYpOl8weDUzNjI0N1tfMHgyZGIxN2MoMHgxYjApXSYmKF8weDViNmQyOT1fMHg1MzYyNDdbJ2NvbnN0cnVjdG9yJ11bXzB4MmRiMTdjKDB4MTk1KV18fF8weDViNmQyOSk6XzB4NWI2ZDI5PT09J3VuZGVmaW5lZCcmJnRoaXNbXzB4MmRiMTdjKDB4MWZkKV0mJl8weDUzNjI0NyBpbnN0YW5jZW9mIHRoaXNbJ19IVE1MQWxsQ29sbGVjdGlvbiddJiYoXzB4NWI2ZDI5PV8weDJkYjE3YygweDE5MSkpLF8weDViNmQyOTt9W18weDQ4ZmY0ZigweDE3NSldKF8weDRkNGFjNil7dmFyIF8weDIyZmY4Mj1fMHg0OGZmNGY7cmV0dXJuIE9iamVjdFtfMHgyMmZmODIoMHgxODApXVtfMHgyMmZmODIoMHgxYmUpXVtfMHgyMmZmODIoMHgxOGMpXShfMHg0ZDRhYzYpO31bXzB4NDhmZjRmKDB4MTk4KV0oXzB4MmJlMDZkKXt2YXIgXzB4MWUyNzcwPV8weDQ4ZmY0ZjtyZXR1cm4gXzB4MmJlMDZkPT09XzB4MWUyNzcwKDB4MjNlKXx8XzB4MmJlMDZkPT09XzB4MWUyNzcwKDB4MWY3KXx8XzB4MmJlMDZkPT09XzB4MWUyNzcwKDB4MTc0KTt9WydfaXNQcmltaXRpdmVXcmFwcGVyVHlwZSddKF8weDFmNGMxNCl7dmFyIF8weDM2NGU3Yj1fMHg0OGZmNGY7cmV0dXJuIF8weDFmNGMxND09PV8weDM2NGU3YigweDIwYyl8fF8weDFmNGMxND09PSdTdHJpbmcnfHxfMHgxZjRjMTQ9PT1fMHgzNjRlN2IoMHgyMTMpO31bXzB4NDhmZjRmKDB4MWI0KV0oXzB4YWRiMmI3LF8weDNhN2E1ZixfMHgyYTZjZTYsXzB4M2RkMjdlLF8weDFjMDYyMCxfMHgxYjhkODApe3ZhciBfMHg0MGQ1ZGI9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4NTc3NDExKXt2YXIgXzB4NTgzZGYzPV8weDQxYzksXzB4MWI1YWRlPV8weDFjMDYyMFtfMHg1ODNkZjMoMHgxZWUpXVtfMHg1ODNkZjMoMHgxZmEpXSxfMHgzOTIzZDM9XzB4MWMwNjIwW18weDU4M2RmMygweDFlZSldW18weDU4M2RmMygweDIzZCldLF8weDc4YTg4MT1fMHgxYzA2MjBbXzB4NTgzZGYzKDB4MWVlKV1bXzB4NTgzZGYzKDB4MTYxKV07XzB4MWMwNjIwW18weDU4M2RmMygweDFlZSldW18weDU4M2RmMygweDE2MSldPV8weDFiNWFkZSxfMHgxYzA2MjBbJ25vZGUnXVtfMHg1ODNkZjMoMHgyM2QpXT10eXBlb2YgXzB4M2RkMjdlPT1fMHg1ODNkZjMoMHgxNzQpP18weDNkZDI3ZTpfMHg1Nzc0MTEsXzB4YWRiMmI3W18weDU4M2RmMygweDFhMyldKF8weDQwZDVkYlsnX3Byb3BlcnR5J10oXzB4M2E3YTVmLF8weDJhNmNlNixfMHgzZGQyN2UsXzB4MWMwNjIwLF8weDFiOGQ4MCkpLF8weDFjMDYyMFtfMHg1ODNkZjMoMHgxZWUpXVtfMHg1ODNkZjMoMHgxNjEpXT1fMHg3OGE4ODEsXzB4MWMwNjIwW18weDU4M2RmMygweDFlZSldW18weDU4M2RmMygweDIzZCldPV8weDM5MjNkMzt9O31bJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weDJlYTQxNyxfMHg0YzRlZTcsXzB4MWI2OTA4LF8weDUyMTFhYyxfMHg1NTNiYTYsXzB4NWFhMWFkLF8weDE1YzcyOSl7dmFyIF8weDE3YjdmOT1fMHg0OGZmNGYsXzB4MWQ4YjNlPXRoaXM7cmV0dXJuIF8weDRjNGVlN1tfMHgxN2I3ZjkoMHgxYWEpK18weDU1M2JhNltfMHgxN2I3ZjkoMHgxYmUpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDJlMzg5NSl7dmFyIF8weDE0YWIzNT1fMHgxN2I3ZjksXzB4NThjNGQ3PV8weDVhYTFhZFsnbm9kZSddW18weDE0YWIzNSgweDFmYSldLF8weDIyZjE4YT1fMHg1YWExYWRbXzB4MTRhYjM1KDB4MWVlKV1bXzB4MTRhYjM1KDB4MjNkKV0sXzB4MmY4MjhmPV8weDVhYTFhZFsnbm9kZSddW18weDE0YWIzNSgweDE2MSldO18weDVhYTFhZFtfMHgxNGFiMzUoMHgxZWUpXVtfMHgxNGFiMzUoMHgxNjEpXT1fMHg1OGM0ZDcsXzB4NWFhMWFkW18weDE0YWIzNSgweDFlZSldW18weDE0YWIzNSgweDIzZCldPV8weDJlMzg5NSxfMHgyZWE0MTdbXzB4MTRhYjM1KDB4MWEzKV0oXzB4MWQ4YjNlWydfcHJvcGVydHknXShfMHgxYjY5MDgsXzB4NTIxMWFjLF8weDU1M2JhNixfMHg1YWExYWQsXzB4MTVjNzI5KSksXzB4NWFhMWFkWydub2RlJ11bJ3BhcmVudCddPV8weDJmODI4ZixfMHg1YWExYWRbXzB4MTRhYjM1KDB4MWVlKV1bXzB4MTRhYjM1KDB4MjNkKV09XzB4MjJmMThhO307fVtfMHg0OGZmNGYoMHgyM2IpXShfMHgzNmRlN2EsXzB4MjQ0MjBlLF8weDJhZjhlNSxfMHg0OGZjMGYsXzB4NGJiY2Q1KXt2YXIgXzB4NTY5ZjYyPV8weDQ4ZmY0ZixfMHg0YWU3ZmQ9dGhpcztfMHg0YmJjZDV8fChfMHg0YmJjZDU9ZnVuY3Rpb24oXzB4MTUxM2NlLF8weDVjZDBlZCl7cmV0dXJuIF8weDE1MTNjZVtfMHg1Y2QwZWRdO30pO3ZhciBfMHgzYTY2ZmU9XzB4MmFmOGU1W18weDU2OWY2MigweDFiZSldKCksXzB4MjJjNWQyPV8weDQ4ZmMwZltfMHg1NjlmNjIoMHgxZTApXXx8e30sXzB4NTExMGY1PV8weDQ4ZmMwZlsnZGVwdGgnXSxfMHgyYmY4YTg9XzB4NDhmYzBmWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ107dHJ5e3ZhciBfMHg1YjMzYzc9dGhpc1snX2lzTWFwJ10oXzB4MzZkZTdhKSxfMHgzOTA0MWU9XzB4M2E2NmZlO18weDViMzNjNyYmXzB4MzkwNDFlWzB4MF09PT0nXFxcXHgyNycmJihfMHgzOTA0MWU9XzB4MzkwNDFlW18weDU2OWY2MigweDFlNildKDB4MSxfMHgzOTA0MWVbXzB4NTY5ZjYyKDB4MWJhKV0tMHgyKSk7dmFyIF8weDQ1YWZhMT1fMHg0OGZjMGZbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddPV8weDIyYzVkMltfMHg1NjlmNjIoMHgxYWEpK18weDM5MDQxZV07XzB4NDVhZmExJiYoXzB4NDhmYzBmW18weDU2OWY2MigweDE3YildPV8weDQ4ZmMwZlsnZGVwdGgnXSsweDEpLF8weDQ4ZmMwZltfMHg1NjlmNjIoMHgxZGUpXT0hIV8weDQ1YWZhMTt2YXIgXzB4NWM3YzU1PXR5cGVvZiBfMHgyYWY4ZTU9PV8weDU2OWY2MigweDFhMCksXzB4MzQ5ZjkwPXsnbmFtZSc6XzB4NWM3YzU1fHxfMHg1YjMzYzc/XzB4M2E2NmZlOnRoaXNbXzB4NTY5ZjYyKDB4MWVhKV0oXzB4M2E2NmZlKX07aWYoXzB4NWM3YzU1JiYoXzB4MzQ5ZjkwW18weDU2OWY2MigweDFhMCldPSEweDApLCEoXzB4MjQ0MjBlPT09XzB4NTY5ZjYyKDB4MjMwKXx8XzB4MjQ0MjBlPT09XzB4NTY5ZjYyKDB4MTVlKSkpe3ZhciBfMHg0MjVmNmQ9dGhpc1tfMHg1NjlmNjIoMHgxNTkpXShfMHgzNmRlN2EsXzB4MmFmOGU1KTtpZihfMHg0MjVmNmQmJihfMHg0MjVmNmRbXzB4NTY5ZjYyKDB4MWQ4KV0mJihfMHgzNDlmOTBbXzB4NTY5ZjYyKDB4MWY4KV09ITB4MCksXzB4NDI1ZjZkW18weDU2OWY2MigweDFmYildJiYhXzB4NDVhZmExJiYhXzB4NDhmYzBmW18weDU2OWY2MigweDFiOSldKSlyZXR1cm4gXzB4MzQ5ZjkwW18weDU2OWY2MigweDFhNyldPSEweDAsdGhpc1tfMHg1NjlmNjIoMHgxNzIpXShfMHgzNDlmOTAsXzB4NDhmYzBmKSxfMHgzNDlmOTA7fXZhciBfMHg1M2FlMDc7dHJ5e18weDUzYWUwNz1fMHg0YmJjZDUoXzB4MzZkZTdhLF8weDJhZjhlNSk7fWNhdGNoKF8weDE4MjM5Yyl7cmV0dXJuIF8weDM0OWY5MD17J25hbWUnOl8weDNhNjZmZSwndHlwZSc6J3Vua25vd24nLCdlcnJvcic6XzB4MTgyMzljWydtZXNzYWdlJ119LHRoaXNbXzB4NTY5ZjYyKDB4MTcyKV0oXzB4MzQ5ZjkwLF8weDQ4ZmMwZiksXzB4MzQ5ZjkwO312YXIgXzB4NDJkNmRmPXRoaXNbXzB4NTY5ZjYyKDB4MWE4KV0oXzB4NTNhZTA3KSxfMHgzNzBhNjE9dGhpc1tfMHg1NjlmNjIoMHgxOTgpXShfMHg0MmQ2ZGYpO2lmKF8weDM0OWY5MFsndHlwZSddPV8weDQyZDZkZixfMHgzNzBhNjEpdGhpc1tfMHg1NjlmNjIoMHgxNzIpXShfMHgzNDlmOTAsXzB4NDhmYzBmLF8weDUzYWUwNyxmdW5jdGlvbigpe3ZhciBfMHg1MjVlODc9XzB4NTY5ZjYyO18weDM0OWY5MFtfMHg1MjVlODcoMHgxZTEpXT1fMHg1M2FlMDdbXzB4NTI1ZTg3KDB4MjI0KV0oKSwhXzB4NDVhZmExJiZfMHg0YWU3ZmRbXzB4NTI1ZTg3KDB4MWI3KV0oXzB4NDJkNmRmLF8weDM0OWY5MCxfMHg0OGZjMGYse30pO30pO2Vsc2V7dmFyIF8weDM0ZGQwNT1fMHg0OGZjMGZbJ2F1dG9FeHBhbmQnXSYmXzB4NDhmYzBmW18weDU2OWY2MigweDIzOCldPF8weDQ4ZmMwZlsnYXV0b0V4cGFuZE1heERlcHRoJ10mJl8weDQ4ZmMwZltfMHg1NjlmNjIoMHgyMjApXVsnaW5kZXhPZiddKF8weDUzYWUwNyk8MHgwJiZfMHg0MmQ2ZGYhPT1fMHg1NjlmNjIoMHgyMWQpJiZfMHg0OGZjMGZbXzB4NTY5ZjYyKDB4MjM5KV08XzB4NDhmYzBmW18weDU2OWY2MigweDE5ZCldO18weDM0ZGQwNXx8XzB4NDhmYzBmW18weDU2OWY2MigweDIzOCldPF8weDUxMTBmNXx8XzB4NDVhZmExPyh0aGlzW18weDU2OWY2MigweDE4MSldKF8weDM0OWY5MCxfMHg1M2FlMDcsXzB4NDhmYzBmLF8weDQ1YWZhMXx8e30pLHRoaXNbXzB4NTY5ZjYyKDB4MTliKV0oXzB4NTNhZTA3LF8weDM0OWY5MCkpOnRoaXNbXzB4NTY5ZjYyKDB4MTcyKV0oXzB4MzQ5ZjkwLF8weDQ4ZmMwZixfMHg1M2FlMDcsZnVuY3Rpb24oKXt2YXIgXzB4NWU0M2VmPV8weDU2OWY2MjtfMHg0MmQ2ZGY9PT1fMHg1ZTQzZWYoMHgxNjYpfHxfMHg0MmQ2ZGY9PT1fMHg1ZTQzZWYoMHgyMDYpfHwoZGVsZXRlIF8weDM0OWY5MFsndmFsdWUnXSxfMHgzNDlmOTBbJ2NhcHBlZCddPSEweDApO30pO31yZXR1cm4gXzB4MzQ5ZjkwO31maW5hbGx5e18weDQ4ZmMwZltfMHg1NjlmNjIoMHgxZTApXT1fMHgyMmM1ZDIsXzB4NDhmYzBmW18weDU2OWY2MigweDE3YildPV8weDUxMTBmNSxfMHg0OGZjMGZbXzB4NTY5ZjYyKDB4MWRlKV09XzB4MmJmOGE4O319W18weDQ4ZmY0ZigweDFiNyldKF8weDFiNjJmMSxfMHgxOGViNzEsXzB4Mzc5NDhmLF8weDFhYjVlZSl7dmFyIF8weDFkOGMwNj1fMHg0OGZmNGYsXzB4NDg3NzZkPV8weDFhYjVlZVsnc3RyTGVuZ3RoJ118fF8weDM3OTQ4ZltfMHgxZDhjMDYoMHgxZjQpXTtpZigoXzB4MWI2MmYxPT09XzB4MWQ4YzA2KDB4MWY3KXx8XzB4MWI2MmYxPT09XzB4MWQ4YzA2KDB4MTdkKSkmJl8weDE4ZWI3MVtfMHgxZDhjMDYoMHgxZTEpXSl7bGV0IF8weDVkOGY2YT1fMHgxOGViNzFbJ3ZhbHVlJ11bXzB4MWQ4YzA2KDB4MWJhKV07XzB4Mzc5NDhmW18weDFkOGMwNigweDFlYyldKz1fMHg1ZDhmNmEsXzB4Mzc5NDhmW18weDFkOGMwNigweDFlYyldPl8weDM3OTQ4ZltfMHgxZDhjMDYoMHgxY2EpXT8oXzB4MThlYjcxW18weDFkOGMwNigweDIzYyldPScnLGRlbGV0ZSBfMHgxOGViNzFbJ3ZhbHVlJ10pOl8weDVkOGY2YT5fMHg0ODc3NmQmJihfMHgxOGViNzFbXzB4MWQ4YzA2KDB4MjNjKV09XzB4MThlYjcxWyd2YWx1ZSddWydzdWJzdHInXSgweDAsXzB4NDg3NzZkKSxkZWxldGUgXzB4MThlYjcxW18weDFkOGMwNigweDFlMSldKTt9fVtfMHg0OGZmNGYoMHgxNmUpXShfMHg1ZTRhYzMpe3ZhciBfMHg5OGIxMDk9XzB4NDhmZjRmO3JldHVybiEhKF8weDVlNGFjMyYmXzB4NDg1ZDNhW18weDk4YjEwOSgweDE2NSldJiZ0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg1ZTRhYzMpPT09J1tvYmplY3RcXFxceDIwTWFwXScmJl8weDVlNGFjM1tfMHg5OGIxMDkoMHgxYWQpXSk7fVsnX3Byb3BlcnR5TmFtZSddKF8weDVlMGI4Mil7dmFyIF8weDI3ZmNmNT1fMHg0OGZmNGY7aWYoXzB4NWUwYjgyW18weDI3ZmNmNSgweDFkMCldKC9eXFxcXGQrJC8pKXJldHVybiBfMHg1ZTBiODI7dmFyIF8weDEyZjViNDt0cnl7XzB4MTJmNWI0PUpTT05bJ3N0cmluZ2lmeSddKCcnK18weDVlMGI4Mik7fWNhdGNoe18weDEyZjViND0nXFxcXHgyMicrdGhpc1tfMHgyN2ZjZjUoMHgxNzUpXShfMHg1ZTBiODIpKydcXFxceDIyJzt9cmV0dXJuIF8weDEyZjViNFtfMHgyN2ZjZjUoMHgxZDApXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weDEyZjViND1fMHgxMmY1YjRbXzB4MjdmY2Y1KDB4MWU2KV0oMHgxLF8weDEyZjViNFtfMHgyN2ZjZjUoMHgxYmEpXS0weDIpOl8weDEyZjViND1fMHgxMmY1YjRbXzB4MjdmY2Y1KDB4MTljKV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVtfMHgyN2ZjZjUoMHgxOWMpXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVtfMHgyN2ZjZjUoMHgxOWMpXSgvKF5cXFwifFxcXCIkKS9nLCdcXFxceDI3JyksXzB4MTJmNWI0O31bXzB4NDhmZjRmKDB4MTcyKV0oXzB4MjRkNjE3LF8weDQyMTM4OCxfMHgxMGRhYzMsXzB4MzYxMDQwKXt2YXIgXzB4NDE4YTdjPV8weDQ4ZmY0Zjt0aGlzW18weDQxOGE3YygweDIwMildKF8weDI0ZDYxNyxfMHg0MjEzODgpLF8weDM2MTA0MCYmXzB4MzYxMDQwKCksdGhpc1tfMHg0MThhN2MoMHgxOWIpXShfMHgxMGRhYzMsXzB4MjRkNjE3KSx0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHgyNGQ2MTcsXzB4NDIxMzg4KTt9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4MmUyMDBmLF8weDRjY2I1Yyl7dmFyIF8weDU2ZjhlOT1fMHg0OGZmNGY7dGhpc1tfMHg1NmY4ZTkoMHgyMDQpXShfMHgyZTIwMGYsXzB4NGNjYjVjKSx0aGlzW18weDU2ZjhlOSgweDIwYildKF8weDJlMjAwZixfMHg0Y2NiNWMpLHRoaXNbXzB4NTZmOGU5KDB4MjAxKV0oXzB4MmUyMDBmLF8weDRjY2I1YyksdGhpc1tfMHg1NmY4ZTkoMHgxOTYpXShfMHgyZTIwMGYsXzB4NGNjYjVjKTt9Wydfc2V0Tm9kZUlkJ10oXzB4NTA5MDUyLF8weDE0NjJhMil7fVsnX3NldE5vZGVRdWVyeVBhdGgnXShfMHgzZTUwNmIsXzB4MTE4NjJiKXt9W18weDQ4ZmY0ZigweDFmZildKF8weDU5N2MyOCxfMHgxOWZhYTQpe31bXzB4NDhmZjRmKDB4MTUzKV0oXzB4NGQxZWUxKXt2YXIgXzB4NDU1ZGFjPV8weDQ4ZmY0ZjtyZXR1cm4gXzB4NGQxZWUxPT09dGhpc1tfMHg0NTVkYWMoMHgxN2MpXTt9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHgyZTVmNGUsXzB4NWYwYmM2KXt2YXIgXzB4Mzg1YmIwPV8weDQ4ZmY0Zjt0aGlzW18weDM4NWJiMCgweDFmZildKF8weDJlNWY0ZSxfMHg1ZjBiYzYpLHRoaXNbXzB4Mzg1YmIwKDB4MTU4KV0oXzB4MmU1ZjRlKSxfMHg1ZjBiYzZbXzB4Mzg1YmIwKDB4MWQ2KV0mJnRoaXNbXzB4Mzg1YmIwKDB4MWIzKV0oXzB4MmU1ZjRlKSx0aGlzW18weDM4NWJiMCgweDFkYSldKF8weDJlNWY0ZSxfMHg1ZjBiYzYpLHRoaXNbXzB4Mzg1YmIwKDB4MTc2KV0oXzB4MmU1ZjRlLF8weDVmMGJjNiksdGhpc1tfMHgzODViYjAoMHgyMDcpXShfMHgyZTVmNGUpO31bXzB4NDhmZjRmKDB4MTliKV0oXzB4MmY3NmQ3LF8weDIzMjliNil7dmFyIF8weDQ2NzVhYz1fMHg0OGZmNGY7bGV0IF8weDVmNGYyZDt0cnl7XzB4NDg1ZDNhWydjb25zb2xlJ10mJihfMHg1ZjRmMmQ9XzB4NDg1ZDNhWydjb25zb2xlJ11bXzB4NDY3NWFjKDB4MjI4KV0sXzB4NDg1ZDNhW18weDQ2NzVhYygweDE5NyldW18weDQ2NzVhYygweDIyOCldPWZ1bmN0aW9uKCl7fSksXzB4MmY3NmQ3JiZ0eXBlb2YgXzB4MmY3NmQ3W18weDQ2NzVhYygweDFiYSldPT0nbnVtYmVyJyYmKF8weDIzMjliNltfMHg0Njc1YWMoMHgxYmEpXT1fMHgyZjc2ZDdbXzB4NDY3NWFjKDB4MWJhKV0pO31jYXRjaHt9ZmluYWxseXtfMHg1ZjRmMmQmJihfMHg0ODVkM2FbXzB4NDY3NWFjKDB4MTk3KV1bXzB4NDY3NWFjKDB4MjI4KV09XzB4NWY0ZjJkKTt9aWYoXzB4MjMyOWI2W18weDQ2NzVhYygweDFmOSldPT09XzB4NDY3NWFjKDB4MTc0KXx8XzB4MjMyOWI2W18weDQ2NzVhYygweDFmOSldPT09XzB4NDY3NWFjKDB4MjEzKSl7aWYoaXNOYU4oXzB4MjMyOWI2W18weDQ2NzVhYygweDFlMSldKSlfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MTVjKV09ITB4MCxkZWxldGUgXzB4MjMyOWI2W18weDQ2NzVhYygweDFlMSldO2Vsc2Ugc3dpdGNoKF8weDIzMjliNltfMHg0Njc1YWMoMHgxZTEpXSl7Y2FzZSBOdW1iZXJbXzB4NDY3NWFjKDB4MTU0KV06XzB4MjMyOWI2W18weDQ2NzVhYygweDFjZildPSEweDAsZGVsZXRlIF8weDIzMjliNltfMHg0Njc1YWMoMHgxZTEpXTticmVhaztjYXNlIE51bWJlcltfMHg0Njc1YWMoMHgyMDkpXTpfMHgyMzI5YjZbJ25lZ2F0aXZlSW5maW5pdHknXT0hMHgwLGRlbGV0ZSBfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWUxKV07YnJlYWs7Y2FzZSAweDA6dGhpc1tfMHg0Njc1YWMoMHgxZTUpXShfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWUxKV0pJiYoXzB4MjMyOWI2W18weDQ2NzVhYygweDFiNSldPSEweDApO2JyZWFrO319ZWxzZSBfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWY5KV09PT1fMHg0Njc1YWMoMHgyMWQpJiZ0eXBlb2YgXzB4MmY3NmQ3W18weDQ2NzVhYygweDE5NSldPT1fMHg0Njc1YWMoMHgxZjcpJiZfMHgyZjc2ZDdbXzB4NDY3NWFjKDB4MTk1KV0mJl8weDIzMjliNltfMHg0Njc1YWMoMHgxOTUpXSYmXzB4MmY3NmQ3W18weDQ2NzVhYygweDE5NSldIT09XzB4MjMyOWI2W18weDQ2NzVhYygweDE5NSldJiYoXzB4MjMyOWI2WydmdW5jTmFtZSddPV8weDJmNzZkN1tfMHg0Njc1YWMoMHgxOTUpXSk7fVsnX2lzTmVnYXRpdmVaZXJvJ10oXzB4MzQ4MjIzKXt2YXIgXzB4NGEyMzg2PV8weDQ4ZmY0ZjtyZXR1cm4gMHgxL18weDM0ODIyMz09PU51bWJlcltfMHg0YTIzODYoMHgyMDkpXTt9Wydfc29ydFByb3BzJ10oXzB4MTA3ZWFhKXt2YXIgXzB4NGIzN2NjPV8weDQ4ZmY0ZjshXzB4MTA3ZWFhW18weDRiMzdjYygweDFkZCldfHwhXzB4MTA3ZWFhW18weDRiMzdjYygweDFkZCldW18weDRiMzdjYygweDFiYSldfHxfMHgxMDdlYWFbXzB4NGIzN2NjKDB4MWY5KV09PT1fMHg0YjM3Y2MoMHgyMzApfHxfMHgxMDdlYWFbXzB4NGIzN2NjKDB4MWY5KV09PT1fMHg0YjM3Y2MoMHgxNjUpfHxfMHgxMDdlYWFbXzB4NGIzN2NjKDB4MWY5KV09PT1fMHg0YjM3Y2MoMHgyMjcpfHxfMHgxMDdlYWFbJ3Byb3BzJ11bXzB4NGIzN2NjKDB4MWZlKV0oZnVuY3Rpb24oXzB4MWQ4NjYzLF8weDQ1ZWQyMyl7dmFyIF8weDUxYTRmNj1fMHg0YjM3Y2MsXzB4MzhmMjU5PV8weDFkODY2M1tfMHg1MWE0ZjYoMHgxOTUpXVtfMHg1MWE0ZjYoMHgxZjApXSgpLF8weDUzYWI0Zj1fMHg0NWVkMjNbXzB4NTFhNGY2KDB4MTk1KV1bJ3RvTG93ZXJDYXNlJ10oKTtyZXR1cm4gXzB4MzhmMjU5PF8weDUzYWI0Zj8tMHgxOl8weDM4ZjI1OT5fMHg1M2FiNGY/MHgxOjB4MDt9KTt9WydfYWRkRnVuY3Rpb25zTm9kZSddKF8weDE1ZTFlZCxfMHg1YzAzMjgpe3ZhciBfMHg1YjAwZTk9XzB4NDhmZjRmO2lmKCEoXzB4NWMwMzI4W18weDViMDBlOSgweDFmMyldfHwhXzB4MTVlMWVkW18weDViMDBlOSgweDFkZCldfHwhXzB4MTVlMWVkW18weDViMDBlOSgweDFkZCldW18weDViMDBlOSgweDFiYSldKSl7Zm9yKHZhciBfMHg0MDA2YTU9W10sXzB4MTkwNTE3PVtdLF8weDVkYWExMz0weDAsXzB4NWM3MjhiPV8weDE1ZTFlZFtfMHg1YjAwZTkoMHgxZGQpXVsnbGVuZ3RoJ107XzB4NWRhYTEzPF8weDVjNzI4YjtfMHg1ZGFhMTMrKyl7dmFyIF8weDE3NmFhMD1fMHgxNWUxZWRbXzB4NWIwMGU5KDB4MWRkKV1bXzB4NWRhYTEzXTtfMHgxNzZhYTBbXzB4NWIwMGU5KDB4MWY5KV09PT1fMHg1YjAwZTkoMHgyMWQpP18weDQwMDZhNVtfMHg1YjAwZTkoMHgxYTMpXShfMHgxNzZhYTApOl8weDE5MDUxN1tfMHg1YjAwZTkoMHgxYTMpXShfMHgxNzZhYTApO31pZighKCFfMHgxOTA1MTdbXzB4NWIwMGU5KDB4MWJhKV18fF8weDQwMDZhNVtfMHg1YjAwZTkoMHgxYmEpXTw9MHgxKSl7XzB4MTVlMWVkW18weDViMDBlOSgweDFkZCldPV8weDE5MDUxNzt2YXIgXzB4NGEwOWRhPXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weDQwMDZhNX07dGhpc1tfMHg1YjAwZTkoMHgyMDQpXShfMHg0YTA5ZGEsXzB4NWMwMzI4KSx0aGlzW18weDViMDBlOSgweDFmZildKF8weDRhMDlkYSxfMHg1YzAzMjgpLHRoaXNbXzB4NWIwMGU5KDB4MTU4KV0oXzB4NGEwOWRhKSx0aGlzW18weDViMDBlOSgweDE5NildKF8weDRhMDlkYSxfMHg1YzAzMjgpLF8weDRhMDlkYVsnaWQnXSs9J1xcXFx4MjBmJyxfMHgxNWUxZWRbXzB4NWIwMGU5KDB4MWRkKV1bXzB4NWIwMGU5KDB4MThiKV0oXzB4NGEwOWRhKTt9fX1bXzB4NDhmZjRmKDB4MTc2KV0oXzB4MjdkMzEyLF8weDE0NTM3MSl7fVtfMHg0OGZmNGYoMHgxNTgpXShfMHg0ODQ3NmMpe31bXzB4NDhmZjRmKDB4MjM2KV0oXzB4MTVhZTZlKXt2YXIgXzB4NTU5MjBkPV8weDQ4ZmY0ZjtyZXR1cm4gQXJyYXlbXzB4NTU5MjBkKDB4MThlKV0oXzB4MTVhZTZlKXx8dHlwZW9mIF8weDE1YWU2ZT09XzB4NTU5MjBkKDB4MTk0KSYmdGhpc1tfMHg1NTkyMGQoMHgxNzUpXShfMHgxNWFlNmUpPT09J1tvYmplY3RcXFxceDIwQXJyYXldJzt9W18weDQ4ZmY0ZigweDE5NildKF8weDllOGRkOCxfMHgyMWJmMzEpe31bXzB4NDhmZjRmKDB4MjA3KV0oXzB4NGQ4NmRjKXt2YXIgXzB4MWQzNTIzPV8weDQ4ZmY0ZjtkZWxldGUgXzB4NGQ4NmRjW18weDFkMzUyMygweDIyOSldLGRlbGV0ZSBfMHg0ZDg2ZGNbXzB4MWQzNTIzKDB4MWNiKV0sZGVsZXRlIF8weDRkODZkY1tfMHgxZDM1MjMoMHgxNmIpXTt9W18weDQ4ZmY0ZigweDIwMSldKF8weDUwMTFlZCxfMHgzN2I1NDMpe319bGV0IF8weDE1Y2NmZT1uZXcgXzB4MWM0ZDI4KCksXzB4NTA4ZGNjPXsncHJvcHMnOjB4NjQsJ2VsZW1lbnRzJzoweDY0LCdzdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ3RvdGFsU3RyTGVuZ3RoJzoweDQwMCoweDMyLCdhdXRvRXhwYW5kTGltaXQnOjB4MTM4OCwnYXV0b0V4cGFuZE1heERlcHRoJzoweGF9LF8weDEyYWQwZT17J3Byb3BzJzoweDUsJ2VsZW1lbnRzJzoweDUsJ3N0ckxlbmd0aCc6MHgxMDAsJ3RvdGFsU3RyTGVuZ3RoJzoweDEwMCoweDMsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxZSwnYXV0b0V4cGFuZE1heERlcHRoJzoweDJ9O2Z1bmN0aW9uIF8weDc2MDYwNyhfMHgyMTg1N2QsXzB4MWFhZTgzLF8weDI2YTU0MCxfMHgzNzc1ODUsXzB4NTY0M2I4LF8weDMxMTZlNSl7dmFyIF8weDcwZjYyMD1fMHg0OGZmNGY7bGV0IF8weDFiNjYxNyxfMHg0MDJiODg7dHJ5e18weDQwMmI4OD1fMHgyYzZmZDgoKSxfMHgxYjY2MTc9XzB4ZDQ5NGEzW18weDFhYWU4M10sIV8weDFiNjYxN3x8XzB4NDAyYjg4LV8weDFiNjYxN1sndHMnXT4weDFmNCYmXzB4MWI2NjE3W18weDcwZjYyMCgweDE2MCldJiZfMHgxYjY2MTdbXzB4NzBmNjIwKDB4MWQ3KV0vXzB4MWI2NjE3Wydjb3VudCddPDB4NjQ/KF8weGQ0OTRhM1tfMHgxYWFlODNdPV8weDFiNjYxNz17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDQwMmI4OH0sXzB4ZDQ5NGEzW18weDcwZjYyMCgweDE5MyldPXt9KTpfMHg0MDJiODgtXzB4ZDQ5NGEzW18weDcwZjYyMCgweDE5MyldWyd0cyddPjB4MzImJl8weGQ0OTRhM1snaGl0cyddW18weDcwZjYyMCgweDE2MCldJiZfMHhkNDk0YTNbXzB4NzBmNjIwKDB4MTkzKV1bJ3RpbWUnXS9fMHhkNDk0YTNbJ2hpdHMnXVtfMHg3MGY2MjAoMHgxNjApXTwweDY0JiYoXzB4ZDQ5NGEzW18weDcwZjYyMCgweDE5MyldPXt9KTtsZXQgXzB4MmFkY2Y0PVtdLF8weDNiMGFhMz1fMHgxYjY2MTdbXzB4NzBmNjIwKDB4MjNhKV18fF8weGQ0OTRhM1tfMHg3MGY2MjAoMHgxOTMpXVtfMHg3MGY2MjAoMHgyM2EpXT9fMHgxMmFkMGU6XzB4NTA4ZGNjLF8weDQ5NzQ5OD1fMHgxYjMwYzc9Pnt2YXIgXzB4MmI3YmI1PV8weDcwZjYyMDtsZXQgXzB4MzYwY2RjPXt9O3JldHVybiBfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MWRkKV09XzB4MWIzMGM3W18weDJiN2JiNSgweDFkZCldLF8weDM2MGNkY1tfMHgyYjdiYjUoMHgyMTgpXT1fMHgxYjMwYzdbXzB4MmI3YmI1KDB4MjE4KV0sXzB4MzYwY2RjW18weDJiN2JiNSgweDFmNCldPV8weDFiMzBjN1tfMHgyYjdiYjUoMHgxZjQpXSxfMHgzNjBjZGNbJ3RvdGFsU3RyTGVuZ3RoJ109XzB4MWIzMGM3Wyd0b3RhbFN0ckxlbmd0aCddLF8weDM2MGNkY1tfMHgyYjdiYjUoMHgxOWQpXT1fMHgxYjMwYzdbXzB4MmI3YmI1KDB4MTlkKV0sXzB4MzYwY2RjW18weDJiN2JiNSgweDIxYyldPV8weDFiMzBjN1snYXV0b0V4cGFuZE1heERlcHRoJ10sXzB4MzYwY2RjW18weDJiN2JiNSgweDFkNildPSEweDEsXzB4MzYwY2RjW18weDJiN2JiNSgweDFmMyldPSFfMHg0MTQ1N2QsXzB4MzYwY2RjW18weDJiN2JiNSgweDE3YildPTB4MSxfMHgzNjBjZGNbJ2xldmVsJ109MHgwLF8weDM2MGNkY1tfMHgyYjdiYjUoMHgxOGEpXT1fMHgyYjdiYjUoMHgxYzQpLF8weDM2MGNkY1sncm9vdEV4cHJlc3Npb24nXT1fMHgyYjdiYjUoMHgyMGEpLF8weDM2MGNkY1tfMHgyYjdiYjUoMHgxZDQpXT0hMHgwLF8weDM2MGNkY1snYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cyddPVtdLF8weDM2MGNkY1tfMHgyYjdiYjUoMHgyMzkpXT0weDAsXzB4MzYwY2RjW18weDJiN2JiNSgweDFiOSldPSEweDAsXzB4MzYwY2RjW18weDJiN2JiNSgweDFlYyldPTB4MCxfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MWVlKV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4MzYwY2RjO307Zm9yKHZhciBfMHgxMGI1MjE9MHgwO18weDEwYjUyMTxfMHg1NjQzYjhbXzB4NzBmNjIwKDB4MWJhKV07XzB4MTBiNTIxKyspXzB4MmFkY2Y0W18weDcwZjYyMCgweDFhMyldKF8weDE1Y2NmZVtfMHg3MGY2MjAoMHgxODEpXSh7J3RpbWVOb2RlJzpfMHgyMTg1N2Q9PT1fMHg3MGY2MjAoMHgxZDcpfHx2b2lkIDB4MH0sXzB4NTY0M2I4W18weDEwYjUyMV0sXzB4NDk3NDk4KF8weDNiMGFhMykse30pKTtpZihfMHgyMTg1N2Q9PT1fMHg3MGY2MjAoMHgxNWQpKXtsZXQgXzB4MzViZmQ5PUVycm9yW18weDcwZjYyMCgweDIxNildO3RyeXtFcnJvcltfMHg3MGY2MjAoMHgyMTYpXT0weDEvMHgwLF8weDJhZGNmNFtfMHg3MGY2MjAoMHgxYTMpXShfMHgxNWNjZmVbXzB4NzBmNjIwKDB4MTgxKV0oeydzdGFja05vZGUnOiEweDB9LG5ldyBFcnJvcigpW18weDcwZjYyMCgweDE1ZildLF8weDQ5NzQ5OChfMHgzYjBhYTMpLHsnc3RyTGVuZ3RoJzoweDEvMHgwfSkpO31maW5hbGx5e0Vycm9yW18weDcwZjYyMCgweDIxNildPV8weDM1YmZkOTt9fXJldHVybnsnbWV0aG9kJzpfMHg3MGY2MjAoMHgxZjEpLCd2ZXJzaW9uJzpfMHgyNGNjOWYsJ2FyZ3MnOlt7J3RzJzpfMHgyNmE1NDAsJ3Nlc3Npb24nOl8weDM3NzU4NSwnYXJncyc6XzB4MmFkY2Y0LCdpZCc6XzB4MWFhZTgzLCdjb250ZXh0JzpfMHgzMTE2ZTV9XX07fWNhdGNoKF8weDRjZTQxMil7cmV0dXJueydtZXRob2QnOl8weDcwZjYyMCgweDFmMSksJ3ZlcnNpb24nOl8weDI0Y2M5ZiwnYXJncyc6W3sndHMnOl8weDI2YTU0MCwnc2Vzc2lvbic6XzB4Mzc3NTg1LCdhcmdzJzpbeyd0eXBlJzondW5rbm93bicsJ2Vycm9yJzpfMHg0Y2U0MTImJl8weDRjZTQxMltfMHg3MGY2MjAoMHgyMDApXX1dLCdpZCc6XzB4MWFhZTgzLCdjb250ZXh0JzpfMHgzMTE2ZTV9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDFiNjYxNyYmXzB4NDAyYjg4KXtsZXQgXzB4MjZmNjIxPV8weDJjNmZkOCgpO18weDFiNjYxN1tfMHg3MGY2MjAoMHgxNjApXSsrLF8weDFiNjYxN1tfMHg3MGY2MjAoMHgxZDcpXSs9XzB4MjRmNGM0KF8weDQwMmI4OCxfMHgyNmY2MjEpLF8weDFiNjYxN1sndHMnXT1fMHgyNmY2MjEsXzB4ZDQ5NGEzWydoaXRzJ11bXzB4NzBmNjIwKDB4MTYwKV0rKyxfMHhkNDk0YTNbJ2hpdHMnXVtfMHg3MGY2MjAoMHgxZDcpXSs9XzB4MjRmNGM0KF8weDQwMmI4OCxfMHgyNmY2MjEpLF8weGQ0OTRhM1tfMHg3MGY2MjAoMHgxOTMpXVsndHMnXT1fMHgyNmY2MjEsKF8weDFiNjYxN1snY291bnQnXT4weDMyfHxfMHgxYjY2MTdbJ3RpbWUnXT4weDY0KSYmKF8weDFiNjYxN1sncmVkdWNlTGltaXRzJ109ITB4MCksKF8weGQ0OTRhM1tfMHg3MGY2MjAoMHgxOTMpXVsnY291bnQnXT4weDNlOHx8XzB4ZDQ5NGEzW18weDcwZjYyMCgweDE5MyldW18weDcwZjYyMCgweDFkNyldPjB4MTJjKSYmKF8weGQ0OTRhM1tfMHg3MGY2MjAoMHgxOTMpXVtfMHg3MGY2MjAoMHgyM2EpXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHg3NjA2MDc7fSgoXzB4MzFkMWY5LF8weDNlYWFiNSxfMHg0NDQ3MTIsXzB4MjcyYmM5LF8weDcwOTIwYSxfMHgzYzU0MTUsXzB4MjgzZTE3LF8weDJkNTRhYSxfMHgyZDg0ZjUsXzB4MWRiYWJiKT0+e3ZhciBfMHgyYzQzODk9XzB4MjlkNTk2O2lmKF8weDMxZDFmOVsnX2NvbnNvbGVfbmluamEnXSlyZXR1cm4gXzB4MzFkMWY5W18weDJjNDM4OSgweDE4NSldO2lmKCFKKF8weDMxZDFmOSxfMHgyZDU0YWEsXzB4NzA5MjBhKSlyZXR1cm4gXzB4MzFkMWY5WydfY29uc29sZV9uaW5qYSddPXsnY29uc29sZUxvZyc6KCk9Pnt9LCdjb25zb2xlVHJhY2UnOigpPT57fSwnY29uc29sZVRpbWUnOigpPT57fSwnY29uc29sZVRpbWVFbmQnOigpPT57fSwnYXV0b0xvZyc6KCk9Pnt9LCdhdXRvTG9nTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2VNYW55JzooKT0+e30sJ2NvdmVyYWdlJzooKT0+e30sJ2F1dG9UcmFjZSc6KCk9Pnt9LCdhdXRvVGltZSc6KCk9Pnt9LCdhdXRvVGltZUVuZCc6KCk9Pnt9fSxfMHgzMWQxZjlbXzB4MmM0Mzg5KDB4MTg1KV07bGV0IF8weDUxYzYyMj1XKF8weDMxZDFmOSksXzB4MTY3NzU0PV8weDUxYzYyMlsnZWxhcHNlZCddLF8weDJjZjM1Nz1fMHg1MWM2MjJbXzB4MmM0Mzg5KDB4MTg4KV0sXzB4Y2IzYThkPV8weDUxYzYyMltfMHgyYzQzODkoMHgxYTQpXSxfMHgxNTM5YjI9eydoaXRzJzp7fSwndHMnOnt9fSxfMHgzOWYyZjk9WShfMHgzMWQxZjksXzB4MmQ4NGY1LF8weDE1MzliMixfMHgzYzU0MTUpLF8weDEyMDEyND1fMHg1NWFlYWY9PntfMHgxNTM5YjJbJ3RzJ11bXzB4NTVhZWFmXT1fMHgyY2YzNTcoKTt9LF8weDE2ZTIzYz0oXzB4MzY3ZjdkLF8weDI2OWUyMCk9Pnt2YXIgXzB4MjMzMmJmPV8weDJjNDM4OTtsZXQgXzB4MTY4YmRmPV8weDE1MzliMlsndHMnXVtfMHgyNjllMjBdO2lmKGRlbGV0ZSBfMHgxNTM5YjJbJ3RzJ11bXzB4MjY5ZTIwXSxfMHgxNjhiZGYpe2xldCBfMHgxYzkwOWM9XzB4MTY3NzU0KF8weDE2OGJkZixfMHgyY2YzNTcoKSk7XzB4NTk2MDlmKF8weDM5ZjJmOShfMHgyMzMyYmYoMHgxZDcpLF8weDM2N2Y3ZCxfMHhjYjNhOGQoKSxfMHgxZGU4MjQsW18weDFjOTA5Y10sXzB4MjY5ZTIwKSk7fX0sXzB4NDAyMTUxPV8weDM1YWRmOD0+XzB4MmM1Mzg4PT57dHJ5e18weDEyMDEyNChfMHgyYzUzODgpLF8weDM1YWRmOChfMHgyYzUzODgpO31maW5hbGx5e18weDMxZDFmOVsnY29uc29sZSddWyd0aW1lJ109XzB4MzVhZGY4O319LF8weGRmMzczNT1fMHgzNTczYjM9Pl8weDMxNGFmMj0+e3ZhciBfMHgyMzcxMjI9XzB4MmM0Mzg5O3RyeXtsZXQgW18weDMxYTcwNixfMHgzY2JkOGJdPV8weDMxNGFmMlsnc3BsaXQnXShfMHgyMzcxMjIoMHgyMTQpKTtfMHgxNmUyM2MoXzB4M2NiZDhiLF8weDMxYTcwNiksXzB4MzU3M2IzKF8weDMxYTcwNik7fWZpbmFsbHl7XzB4MzFkMWY5W18weDIzNzEyMigweDE5NyldW18weDIzNzEyMigweDFiMildPV8weDM1NzNiMzt9fTtfMHgzMWQxZjlbJ19jb25zb2xlX25pbmphJ109eydjb25zb2xlTG9nJzooXzB4NDIzN2I4LF8weDI1Zjc0Nyk9Pnt2YXIgXzB4MmMwOGE5PV8weDJjNDM4OTtfMHgzMWQxZjlbXzB4MmMwOGE5KDB4MTk3KV1bXzB4MmMwOGE5KDB4MWYxKV1bXzB4MmMwOGE5KDB4MTk1KV0hPT1fMHgyYzA4YTkoMHgxN2YpJiZfMHg1OTYwOWYoXzB4MzlmMmY5KF8weDJjMDhhOSgweDFmMSksXzB4NDIzN2I4LF8weGNiM2E4ZCgpLF8weDFkZTgyNCxfMHgyNWY3NDcpKTt9LCdjb25zb2xlVHJhY2UnOihfMHgyNzRmY2IsXzB4NDk3MzIzKT0+e3ZhciBfMHg5OGNjNmU9XzB4MmM0Mzg5O18weDMxZDFmOVtfMHg5OGNjNmUoMHgxOTcpXVsnbG9nJ11bXzB4OThjYzZlKDB4MTk1KV0hPT0nZGlzYWJsZWRUcmFjZScmJl8weDU5NjA5ZihfMHgzOWYyZjkoXzB4OThjYzZlKDB4MTVkKSxfMHgyNzRmY2IsXzB4Y2IzYThkKCksXzB4MWRlODI0LF8weDQ5NzMyMykpO30sJ2NvbnNvbGVUaW1lJzooKT0+e3ZhciBfMHhjZDgxOWY9XzB4MmM0Mzg5O18weDMxZDFmOVtfMHhjZDgxOWYoMHgxOTcpXVtfMHhjZDgxOWYoMHgxZDcpXT1fMHg0MDIxNTEoXzB4MzFkMWY5W18weGNkODE5ZigweDE5NyldW18weGNkODE5ZigweDFkNyldKTt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt2YXIgXzB4M2FhNWQ3PV8weDJjNDM4OTtfMHgzMWQxZjlbXzB4M2FhNWQ3KDB4MTk3KV1bJ3RpbWVFbmQnXT1fMHhkZjM3MzUoXzB4MzFkMWY5W18weDNhYTVkNygweDE5NyldW18weDNhYTVkNygweDFiMildKTt9LCdhdXRvTG9nJzooXzB4MzJjZjU0LF8weDM3NTU5NCk9Pnt2YXIgXzB4MjAwYmM3PV8weDJjNDM4OTtfMHg1OTYwOWYoXzB4MzlmMmY5KF8weDIwMGJjNygweDFmMSksXzB4Mzc1NTk0LF8weGNiM2E4ZCgpLF8weDFkZTgyNCxbXzB4MzJjZjU0XSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4NDExNTMyLF8weDNhYjA4Zik9PntfMHg1OTYwOWYoXzB4MzlmMmY5KCdsb2cnLF8weDQxMTUzMixfMHhjYjNhOGQoKSxfMHgxZGU4MjQsXzB4M2FiMDhmKSk7fSwnYXV0b1RyYWNlJzooXzB4NTY2MGI0LF8weDJmYjcyZCk9Pnt2YXIgXzB4NDgwZjViPV8weDJjNDM4OTtfMHg1OTYwOWYoXzB4MzlmMmY5KF8weDQ4MGY1YigweDE1ZCksXzB4MmZiNzJkLF8weGNiM2E4ZCgpLF8weDFkZTgyNCxbXzB4NTY2MGI0XSkpO30sJ2F1dG9UcmFjZU1hbnknOihfMHhkYWUyM2QsXzB4MTg2YWM5KT0+e3ZhciBfMHg1NThkNDI9XzB4MmM0Mzg5O18weDU5NjA5ZihfMHgzOWYyZjkoXzB4NTU4ZDQyKDB4MTVkKSxfMHhkYWUyM2QsXzB4Y2IzYThkKCksXzB4MWRlODI0LF8weDE4NmFjOSkpO30sJ2F1dG9UaW1lJzooXzB4M2U3ZThlLF8weDEyZTk5YSxfMHg1YTM1NmIpPT57XzB4MTIwMTI0KF8weDVhMzU2Yik7fSwnYXV0b1RpbWVFbmQnOihfMHhkNWUyNzAsXzB4YmJjNDY1LF8weGFiZGFkMyk9PntfMHgxNmUyM2MoXzB4YmJjNDY1LF8weGFiZGFkMyk7fSwnY292ZXJhZ2UnOl8weDM1ZTQ1Yz0+e3ZhciBfMHgzNjNlZDE9XzB4MmM0Mzg5O18weDU5NjA5Zih7J21ldGhvZCc6XzB4MzYzZWQxKDB4MWMzKSwndmVyc2lvbic6XzB4M2M1NDE1LCdhcmdzJzpbeydpZCc6XzB4MzVlNDVjfV19KTt9fTtsZXQgXzB4NTk2MDlmPWIoXzB4MzFkMWY5LF8weDNlYWFiNSxfMHg0NDQ3MTIsXzB4MjcyYmM5LF8weDcwOTIwYSxfMHgxZGJhYmIpLF8weDFkZTgyND1fMHgzMWQxZjlbXzB4MmM0Mzg5KDB4MjFlKV07cmV0dXJuIF8weDMxZDFmOVtfMHgyYzQzODkoMHgxODUpXTt9KShnbG9iYWxUaGlzLF8weDI5ZDU5NigweDFiYyksXzB4MjlkNTk2KDB4MTY5KSxfMHgyOWQ1OTYoMHgyMTcpLF8weDI5ZDU5NigweDIxYSksXzB4MjlkNTk2KDB4MTg5KSxfMHgyOWQ1OTYoMHgxOGYpLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiRGFtaWxhcmVcXFwiLFxcXCIxNjkuMjU0LjgwLjgwXFxcIixcXFwiMTkyLjE2OC4wLjEwMVxcXCIsXFxcIjE3Mi4yMy4xOTIuMVxcXCJdLF8weDI5ZDU5NigweDIzNyksXzB4MjlkNTk2KDB4MWNlKSk7XCIpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cygpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lKCk7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgdW5pY29ybi9uby1hYnVzaXZlLWVzbGludC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIl19 */\n/*@ sourceURL=C:\\\\Users\\\\USER\\\\Documents\\\\adewale-wedding-invite\\\\pages\\\\index.jsx */"), __jsx(_src_components_Head__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ogTags, {
    title: eventTitle,
    description: eventDescription,
    guestName: guest.name,
    url: currentUrl,
    date: weddingDateBrief,
    modifiedTime: guestListLastUpdatedAt,
    venue: venueBrief,
    logo: Object(_src_utils_resolvePath__WEBPACK_IMPORTED_MODULE_10__["default"])(ogTags.logo),
    author: Object(_src_utils_resolvePath__WEBPACK_IMPORTED_MODULE_10__["default"])('/'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  })), __jsx("section", {
    className: "jsx-1703421768" + " " + 'header_area',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "home",
    className: "jsx-1703421768" + " " + 'header_slider',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'slick-list draggable',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      opacity: 1
    },
    className: "jsx-1703421768" + " " + 'slick-track',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      height: '100vh'
    },
    className: "jsx-1703421768" + " " + 'single_slider bg_cover d-flex align-items-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-10',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      paddingTop: 0
    },
    className: "jsx-1703421768" + " " + 'slider_content text-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      maxHeight: 60,
      margin: 25,
      marginTop: 0
    },
    src: logo.headerLogo,
    alt: "logo",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 25
    }
  }), __jsx("h5", {
    "data-animation": "fadeInUp",
    "data-delay": "0.2s",
    style: {
      animationDelay: '0.2s'
    },
    className: "jsx-1703421768" + " " + 'slider_sub_title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 25
    }
  }, t('siteIntro')), __jsx("h2", {
    "data-animation": "fadeInUp",
    "data-delay": "0.7s",
    style: {
      animationDelay: '0.7s'
    },
    className: "jsx-1703421768" + " " + 'slider_title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 25
    }
  }, coupleName), __jsx("h5", {
    "data-animation": "fadeInUp",
    "data-delay": "1s",
    style: {
      animationDelay: '1s'
    },
    className: "jsx-1703421768" + " " + 'location',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 25
    }
  }, hashtag), __jsx("span", {
    "data-animation": "fadeInUp",
    "data-delay": "1s",
    style: {
      animationDelay: '1s'
    },
    className: "jsx-1703421768" + " " + 'location',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 25
    }
  }, venue.name, ", ", venue.city, ", ", venue.country, ".")))))))))), __jsx("section", {
    id: "coming_soon",
    className: "jsx-1703421768" + " " + 'coming_soon_area pt-20 pb-70',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      zIndex: 1
    },
    className: "jsx-1703421768" + " " + 'coming_soon_shape_1',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row align-items-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-4',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }, __jsx("div", {
    "data-wow-duration": "1.3s",
    "data-wow-delay": "0.2s",
    style: {
      visibility: 'visible',
      animationDuration: '1.3s',
      animationDelay: '0.2s',
      animationName: 'fadeIn'
    },
    className: "jsx-1703421768" + " " + 'section_title pt-50 wow fadeIn',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-1703421768" + " " + 'title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }
  }, t('eventDate'), ":"), __jsx("p", {
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 17
    }
  }, weddingDateBrief), __jsx("div", {
    style: {
      paddingTop: '0.2rem',
      paddingBottom: '0.2rem'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }, __jsx(react_add_to_calendar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    event: calendarEvent,
    buttonLabel: t('btnAddToMyCalendar'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 19
    }
  })), __jsx("img", {
    src: "assets/images/section_shape.png",
    alt: "Shape",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-8',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }, __jsx("div", {
    "data-wow-duration": "1.3s",
    "data-wow-delay": "0.6s",
    style: {
      visibility: 'visible',
      animationDuration: '1.3s',
      animationDelay: '0.6s',
      animationName: 'fadeIn'
    },
    className: "jsx-1703421768" + " " + 'wow fadeIn',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_count d-flex justify-content-end pt-20',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      marginRight: 20,
      width: 360,
      height: 138,
      backgroundColor: 'transparent'
    },
    className: "jsx-1703421768" + " " + 'single_count d-flex align-items-center justify-content-center mt-30',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 19
    }
  }, __jsx("div", {
    style: {
      zIndex: 1,
      paddingTop: 20
    },
    className: "jsx-1703421768" + " " + 'count_content',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: venue.mapUrl,
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      borderRadius: 5
    },
    src: "assets/images/bevent.png",
    alt: "bevent center",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 25
    }
  })), __jsx("a", {
    href: venue.mapUrl,
    style: {
      maxWidth: '75vw',
      overflowX: 'hidden',
      textOverflow: 'ellipsis',
      marginTop: 10
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 23
    }
  }, venue.mapUrl)))))))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'coming_soon_shape_2',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-2.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 11
    }
  }))), __jsx("section", {
    id: "contact",
    className: "jsx-1703421768" + " " + 'contact_area',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 9
    }
  }, __jsx("div", {
    "data-wow-duration": "1.3s",
    "data-wow-delay": "0.4s",
    style: {
      paddingBottom: 30,
      boxShadow: 'none',
      visibility: 'visible',
      animationDuration: '1.3s',
      animationDelay: '0.4s',
      animationName: 'fadeInUp'
    },
    className: "jsx-1703421768" + " " + 'contact_wrapper wow fadeInUpBig',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row justify-content-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-lg-9',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'section_title text-center pb-30',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 17
    }
  }, guest.name && __jsx("div", {
    style: {
      textAlign: 'center',
      maxWidth: 400,
      margin: 'auto',
      paddingBottom: 20
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 21
    }
  }, t('invitationGreeting'), __jsx("p", {
    style: {
      fontSize: '1.5rem'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 23
    }
  }, guest.name, ",")), __jsx("h3", {
    className: "jsx-1703421768" + " " + 'title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 19
    }
  }, t('invitationIntro')), __jsx("div", {
    style: {
      textAlign: 'left',
      paddingTop: 20,
      paddingBottom: 20,
      maxWidth: 400,
      margin: 'auto'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 19
    }
  }, __jsx("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 'inherit',
      color: 'dimgrey',
      textAlign: t('invitationContentTextAlign')
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 23
    }
  }, t('invitationContent'), t('invitationOutro') && !t('invitationOutro').startsWith('[missing') && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("br", {
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 31
    }
  }), __jsx("br", {
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 31
    }
  }), t('invitationOutro'))))), _src_config_app__WEBPACK_IMPORTED_MODULE_11__["default"].showQrCode && guest.name && __jsx("div", {
    style: {
      marginTop: 20,
      marginBottom: 35
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 21
    }
  }, __jsx(qrcode_react__WEBPACK_IMPORTED_MODULE_7___default.a, {
    value: guest.guestId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "jsx-1703421768" + " " + 'text',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: venue.mapUrl,
    style: {
      borderBottom: '0.2rem solid',
      marginBottom: 10
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 21
    }
  }, __jsx("b", {
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 23
    }
  }, venue.name)), __jsx("br", {
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 21
    }
  }), venue.addressLine1, __jsx("br", {
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 21
    }
  }), venue.country, "."), __jsx("p", {
    style: {
      marginTop: 10
    },
    className: "jsx-1703421768" + " " + 'text',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 19
    }
  }, __jsx("b", {
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 21
    }
  }, weddingDate, " \xB7 ", weddingTime)), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container mt-5',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 19
    }
  }, __jsx("h2", {
    className: "jsx-1703421768" + " " + 'form_title mb-2',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 21
    }
  }, "Inform Us of your availability"), __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'row mb-3',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-md-6',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "name",
    className: "jsx-1703421768" + " " + 'form-label',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 27
    }
  }, "Name:"), __jsx("input", {
    type: "text",
    id: "name",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    className: "jsx-1703421768" + " " + 'form-control',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 27
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'col-md-6',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "email",
    className: "jsx-1703421768" + " " + 'form-label',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 27
    }
  }, "Email:"), __jsx("input", {
    type: "email",
    id: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    className: "jsx-1703421768" + " " + 'form-control',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 27
    }
  }))), __jsx("div", {
    className: "jsx-1703421768" + " " + 'mb-3',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "attending",
    className: "jsx-1703421768" + " " + 'form-label',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 25
    }
  }, "Will you be attending?"), __jsx("textarea", {
    type: "number",
    id: "attending",
    value: attending,
    onChange: function onChange(e) {
      return setAttending(e.target.value);
    },
    className: "jsx-1703421768" + " " + 'form-control',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 25
    }
  })), __jsx("button", {
    type: "submit",
    className: "jsx-1703421768" + " " + 'btn btn-primary',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 23
    }
  }, isLoading ? 'Submitting...' : 'Submit'))), t('invitationClosing') && !t('invitationClosing').startsWith('[missing') && __jsx("p", {
    style: {
      fontStyle: 'italic',
      maxWidth: 420,
      margin: 'auto',
      marginTop: 60
    },
    dangerouslySetInnerHTML: {
      __html: t('invitationClosing')
    },
    className: "jsx-1703421768" + " " + 'text',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 23
    }
  }))))))), __jsx("footer", {
    id: "footer",
    className: "jsx-1703421768" + " " + 'footer_area',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_shape_1',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/shape-1.png",
    alt: "shape",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_widget pt-50 pb-10 text-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_logo',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 13
    }
  }, __jsx("img", {
    style: {
      maxHeight: 90,
      margin: 25,
      marginTop: 0
    },
    src: logo.headerLogo,
    alt: "logo",
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1703421768" + " " + 'footer_title ',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-1703421768" + " " + 'title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 15
    }
  }, coupleName)))), __jsx("h5", {
    style: {
      color: 'grey',
      textAlign: 'center',
      marginBottom: '40px'
    },
    className: "jsx-1703421768",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 9
    }
  }, "#DWedding")));
};
_s(ShowInvite, "+bg+pFHuQXr/VzQm81eNmqsxsKU=", false, function () {
  return [_src_i18n__WEBPACK_IMPORTED_MODULE_12__["useTranslation"]];
});
_c = ShowInvite;
ShowInvite.getInitialProps = function (ctx) {
  var localeParams = ctx.query.lang || _src_i18n__WEBPACK_IMPORTED_MODULE_12__["defaultLocale"];
  var emptyGuestParams = {
    guest: {
      guestId: '',
      name: '',
      greeting: '',
      locale: localeParams
    }
  };
  var currentUrl = Object(_src_utils_resolvePath__WEBPACK_IMPORTED_MODULE_10__["default"])(ctx.req.url);
  var guestId = ctx.query.u;
  if (!guestId) {
    return _objectSpread({
      currentUrl: currentUrl
    }, emptyGuestParams);
  }
  var guestData = _guest_list_json__WEBPACK_IMPORTED_MODULE_13__.data;
  var guestListLastUpdatedAt = _guest_list_json__WEBPACK_IMPORTED_MODULE_13__.meta.lastUpdatedAt;
  var _ref3 = guestData.filter(function (guest) {
      return guest.guestId === guestId;
    })[0] || {},
    name = _ref3.name,
    greeting = _ref3.greeting,
    locale = _ref3.locale;
  if (!name) {
    return _objectSpread({
      currentUrl: currentUrl
    }, emptyGuestParams);
  }
  return {
    currentUrl: currentUrl,
    guestListLastUpdatedAt: guestListLastUpdatedAt,
    guest: {
      name: name,
      greeting: greeting,
      guestId: guestId,
      locale: locale || localeParams
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (ShowInvite);
/* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x29d596=_0x41c9;(function(_0x252683,_0x372bca){var _0x23abff=_0x41c9,_0x2f1b41=_0x252683();while(!![]){try{var _0x4efda2=parseInt(_0x23abff(0x1f5))/0x1+-parseInt(_0x23abff(0x178))/0x2*(-parseInt(_0x23abff(0x1fc))/0x3)+-parseInt(_0x23abff(0x162))/0x4+-parseInt(_0x23abff(0x232))/0x5*(-parseInt(_0x23abff(0x167))/0x6)+-parseInt(_0x23abff(0x1c8))/0x7+-parseInt(_0x23abff(0x20d))/0x8+parseInt(_0x23abff(0x182))/0x9*(parseInt(_0x23abff(0x1c1))/0xa);if(_0x4efda2===_0x372bca)break;else _0x2f1b41['push'](_0x2f1b41['shift']());}catch(_0x45dec2){_0x2f1b41['push'](_0x2f1b41['shift']());}}}(_0x5556,0x194e9));var j=Object[_0x29d596(0x215)],H=Object['defineProperty'],G=Object[_0x29d596(0x205)],ee=Object['getOwnPropertyNames'],te=Object[_0x29d596(0x1b1)],ne=Object[_0x29d596(0x180)]['hasOwnProperty'],re=(_0x28e3d2,_0x499610,_0xf48920,_0xf1da81)=>{var _0x1eb40c=_0x29d596;if(_0x499610&&typeof _0x499610==_0x1eb40c(0x194)||typeof _0x499610==_0x1eb40c(0x21d)){for(let _0x1e46c6 of ee(_0x499610))!ne[_0x1eb40c(0x18c)](_0x28e3d2,_0x1e46c6)&&_0x1e46c6!==_0xf48920&&H(_0x28e3d2,_0x1e46c6,{'get':()=>_0x499610[_0x1e46c6],'enumerable':!(_0xf1da81=G(_0x499610,_0x1e46c6))||_0xf1da81['enumerable']});}return _0x28e3d2;},x=(_0x264b93,_0x3bc79c,_0x5574b6)=>(_0x5574b6=_0x264b93!=null?j(te(_0x264b93)):{},re(_0x3bc79c||!_0x264b93||!_0x264b93['__es'+'Module']?H(_0x5574b6,_0x29d596(0x1db),{'value':_0x264b93,'enumerable':!0x0}):_0x5574b6,_0x264b93)),X=class{constructor(_0x5da6d5,_0x170e67,_0x3cc72e,_0x44fcb3,_0x58d68b){var _0x547528=_0x29d596;this['global']=_0x5da6d5,this[_0x547528(0x173)]=_0x170e67,this[_0x547528(0x1e9)]=_0x3cc72e,this[_0x547528(0x225)]=_0x44fcb3,this[_0x547528(0x164)]=_0x58d68b,this[_0x547528(0x1bd)]=!0x0,this[_0x547528(0x1dc)]=!0x0,this[_0x547528(0x20e)]=!0x1,this[_0x547528(0x183)]=!0x1,this[_0x547528(0x17a)]=_0x5da6d5['process']?.[_0x547528(0x1eb)]?.['NEXT_RUNTIME']===_0x547528(0x223),this['_inBrowser']=!this['global'][_0x547528(0x1e7)]?.['versions']?.[_0x547528(0x1ee)]&&!this['_inNextEdge'],this[_0x547528(0x20f)]=null,this[_0x547528(0x184)]=0x0,this[_0x547528(0x231)]=0x14,this['_webSocketErrorDocsLink']=_0x547528(0x203),this['_sendErrorMessage']=(this[_0x547528(0x1e4)]?_0x547528(0x240):_0x547528(0x1af))+this[_0x547528(0x22a)];}async[_0x29d596(0x15b)](){var _0x547f32=_0x29d596;if(this[_0x547f32(0x20f)])return this[_0x547f32(0x20f)];let _0x206c71;if(this[_0x547f32(0x1e4)]||this[_0x547f32(0x17a)])_0x206c71=this[_0x547f32(0x1a5)][_0x547f32(0x16d)];else{if(this[_0x547f32(0x1a5)][_0x547f32(0x1e7)]?.['_WebSocket'])_0x206c71=this[_0x547f32(0x1a5)]['process']?.[_0x547f32(0x21b)];else try{let _0x4da36a=await import(_0x547f32(0x1c0));_0x206c71=(await import((await import(_0x547f32(0x1f2)))[_0x547f32(0x235)](_0x4da36a[_0x547f32(0x1b8)](this[_0x547f32(0x225)],_0x547f32(0x157)))[_0x547f32(0x1be)]()))[_0x547f32(0x1db)];}catch{try{_0x206c71=require(require(_0x547f32(0x1c0))[_0x547f32(0x1b8)](this[_0x547f32(0x225)],'ws'));}catch{throw new Error(_0x547f32(0x1ae));}}}return this[_0x547f32(0x20f)]=_0x206c71,_0x206c71;}['_connectToHostNow'](){var _0x5c6792=_0x29d596;this[_0x5c6792(0x183)]||this[_0x5c6792(0x20e)]||this[_0x5c6792(0x184)]>=this[_0x5c6792(0x231)]||(this[_0x5c6792(0x1dc)]=!0x1,this['_connecting']=!0x0,this[_0x5c6792(0x184)]++,this[_0x5c6792(0x16a)]=new Promise((_0x3fbb47,_0x5d9936)=>{var _0x2d0d5a=_0x5c6792;this[_0x2d0d5a(0x15b)]()[_0x2d0d5a(0x19e)](_0x5723e5=>{var _0x77699=_0x2d0d5a;let _0x5b30e0=new _0x5723e5('ws://'+(!this[_0x77699(0x1e4)]&&this[_0x77699(0x164)]?'gateway.docker.internal':this[_0x77699(0x173)])+':'+this[_0x77699(0x1e9)]);_0x5b30e0[_0x77699(0x19a)]=()=>{var _0x13d0c6=_0x77699;this[_0x13d0c6(0x1bd)]=!0x1,this[_0x13d0c6(0x1c5)](_0x5b30e0),this[_0x13d0c6(0x170)](),_0x5d9936(new Error('logger\\x20websocket\\x20error'));},_0x5b30e0[_0x77699(0x22e)]=()=>{var _0x1dc028=_0x77699;this[_0x1dc028(0x1e4)]||_0x5b30e0[_0x1dc028(0x226)]&&_0x5b30e0[_0x1dc028(0x226)][_0x1dc028(0x1f6)]&&_0x5b30e0['_socket'][_0x1dc028(0x1f6)](),_0x3fbb47(_0x5b30e0);},_0x5b30e0[_0x77699(0x1b6)]=()=>{var _0x4323bb=_0x77699;this['_allowedToConnectOnSend']=!0x0,this['_disposeWebsocket'](_0x5b30e0),this[_0x4323bb(0x170)]();},_0x5b30e0[_0x77699(0x156)]=_0x386895=>{var _0x447737=_0x77699;try{_0x386895&&_0x386895[_0x447737(0x233)]&&this[_0x447737(0x1e4)]&&JSON[_0x447737(0x163)](_0x386895[_0x447737(0x233)])[_0x447737(0x1cd)]===_0x447737(0x22b)&&this[_0x447737(0x1a5)]['location'][_0x447737(0x22b)]();}catch{}};})[_0x2d0d5a(0x19e)](_0x47bd89=>(this[_0x2d0d5a(0x20e)]=!0x0,this[_0x2d0d5a(0x183)]=!0x1,this[_0x2d0d5a(0x1dc)]=!0x1,this[_0x2d0d5a(0x1bd)]=!0x0,this[_0x2d0d5a(0x184)]=0x0,_0x47bd89))[_0x2d0d5a(0x17e)](_0x21989c=>(this[_0x2d0d5a(0x20e)]=!0x1,this[_0x2d0d5a(0x183)]=!0x1,console[_0x2d0d5a(0x22d)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x5d9936(new Error(_0x2d0d5a(0x1d5)+(_0x21989c&&_0x21989c[_0x2d0d5a(0x200)])))));}));}['_disposeWebsocket'](_0x1266e9){var _0x4c6295=_0x29d596;this[_0x4c6295(0x20e)]=!0x1,this[_0x4c6295(0x183)]=!0x1;try{_0x1266e9[_0x4c6295(0x1b6)]=null,_0x1266e9[_0x4c6295(0x19a)]=null,_0x1266e9['onopen']=null;}catch{}try{_0x1266e9[_0x4c6295(0x177)]<0x2&&_0x1266e9[_0x4c6295(0x1a6)]();}catch{}}[_0x29d596(0x170)](){var _0xb56a6e=_0x29d596;clearTimeout(this['_reconnectTimeout']),!(this[_0xb56a6e(0x184)]>=this['_maxConnectAttemptCount'])&&(this[_0xb56a6e(0x1e2)]=setTimeout(()=>{var _0x40e8bc=_0xb56a6e;this[_0x40e8bc(0x20e)]||this[_0x40e8bc(0x183)]||(this[_0x40e8bc(0x187)](),this['_ws']?.[_0x40e8bc(0x17e)](()=>this[_0x40e8bc(0x170)]()));},0x1f4),this['_reconnectTimeout']['unref']&&this['_reconnectTimeout'][_0xb56a6e(0x1f6)]());}async[_0x29d596(0x212)](_0x33b014){var _0x14059a=_0x29d596;try{if(!this[_0x14059a(0x1bd)])return;this[_0x14059a(0x1dc)]&&this['_connectToHostNow'](),(await this[_0x14059a(0x16a)])[_0x14059a(0x212)](JSON['stringify'](_0x33b014));}catch(_0x515cf1){console[_0x14059a(0x22d)](this[_0x14059a(0x190)]+':\\x20'+(_0x515cf1&&_0x515cf1[_0x14059a(0x200)])),this[_0x14059a(0x1bd)]=!0x1,this[_0x14059a(0x170)]();}}};function _0x5556(){var _0x55bd0f=['split','_connectToHostNow','timeStamp','1.0.0','expId','unshift','call','getOwnPropertySymbols','isArray','1697374672497','_sendErrorMessage','HTMLAllCollection','_p_length','hits','object','name','_setNodePermissions','console','_isPrimitiveType','cappedElements','onerror','_additionalMetadata','replace','autoExpandLimit','then','unknown','symbol','pop','_dateToString','push','now','global','close','getter','_type','date','_p_','hrtime','cappedProps','forEach','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','constructor','getPrototypeOf','timeEnd','_sortProps','_addProperty','negativeZero','onclose','_capIfString','join','resolveGetters','length','versions','127.0.0.1','_allowedToSend','toString','_getOwnPropertyNames','path','10bdNjxS','[object\\x20Date]','coverage','root_exp_id','_disposeWebsocket','_getOwnPropertySymbols','includes','1164226NGmllZ','\\x20browser','totalStrLength','_hasSetOnItsPath','astro','method','','positiveInfinity','match','_addObjectProperty','location','_treeNodePropertiesAfterFullValue','autoExpand','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','sortProps','time','set','getOwnPropertyNames','_addFunctionsNode','default','_allowedToConnectOnSend','props','isExpressionToEvaluate','next.js','expressionsToEvaluate','value','_reconnectTimeout','perf_hooks','_inBrowser','_isNegativeZero','substr','process','_quotedRegExp','port','_propertyName','env','allStrLength','[object\\x20Array]','node','_Symbol','toLowerCase','log','url','noFunctions','strLength','134745tXpwYp','unref','string','setter','type','current','get','135LGpRAo','_HTMLAllCollection','sort','_setNodeLabel','message','_setNodeExpressionPath','_treeNodePropertiesBeforeFullValue','https://tinyurl.com/37x8b79t','_setNodeId','getOwnPropertyDescriptor','undefined','_cleanNode','slice','NEGATIVE_INFINITY','root_exp','_setNodeQueryPath','Boolean','338896ftmItL','_connected','_WebSocketClass','Buffer','concat','send','Number',':logPointId:','create','stackTraceLimit',\"c:\\\\Users\\\\USER\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.232\\\\node_modules\",'elements','nuxt','webpack','_WebSocket','autoExpandMaxDepth','function','_console_ninja_session','[object\\x20Set]','autoExpandPreviousObjects','performance','\\x20server','edge','valueOf','nodeModules','_socket','Set','error','_hasSymbolPropertyOnItsPath','_webSocketErrorDocsLink','reload','_regExpToString','warn','onopen','NEXT_RUNTIME','array','_maxConnectAttemptCount','2560OlFrqe','data','[object\\x20BigInt]','pathToFileURL','_isArray','','level','autoExpandPropertyCount','reduceLimits','_property','capped','index','boolean','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_isUndefined','POSITIVE_INFINITY','test','onmessage','ws/index.js','_setNodeExpandableState','_getOwnPropertyDescriptor','_isPrimitiveWrapperType','getWebSocketClass','nan','trace','Error','stack','count','parent','803600urJNWI','parse','dockerizedApp','Map','null','48UtRWVv','_numberRegExp','60992','_ws','_hasMapOnItsPath','_consoleNinjaAllowedToStart','WebSocket','_isMap','hostname','_attemptToReconnectShortly','bigint','_processTreeNodeResult','host','number','_objectToString','_addLoadNode','readyState','1578rgcmXv','_blacklistedProperty','_inNextEdge','depth','_undefined','String','catch','disabledLog','prototype','serialize','3050019JCkboc','_connecting','_connectAttemptCount','_console_ninja'];_0x5556=function(){return _0x55bd0f;};return _0x5556();}function b(_0x3f6cfb,_0x4c0c1b,_0xe144cf,_0x3778b5,_0x232107,_0x6ecc65){var _0x2a1459=_0x29d596;let _0x17f90f=_0xe144cf[_0x2a1459(0x186)](',')['map'](_0xe516e5=>{var _0x27f8e8=_0x2a1459;try{_0x3f6cfb[_0x27f8e8(0x21e)]||((_0x232107===_0x27f8e8(0x1df)||_0x232107==='remix'||_0x232107===_0x27f8e8(0x1cc))&&(_0x232107+=!_0x3f6cfb['process']?.[_0x27f8e8(0x1bb)]?.[_0x27f8e8(0x1ee)]&&_0x3f6cfb[_0x27f8e8(0x1e7)]?.[_0x27f8e8(0x1eb)]?.[_0x27f8e8(0x22f)]!=='edge'?_0x27f8e8(0x1c9):_0x27f8e8(0x222)),_0x3f6cfb[_0x27f8e8(0x21e)]={'id':+new Date(),'tool':_0x232107});let _0x3439f5=new X(_0x3f6cfb,_0x4c0c1b,_0xe516e5,_0x3778b5,_0x6ecc65);return _0x3439f5['send']['bind'](_0x3439f5);}catch(_0x41da9f){return console[_0x27f8e8(0x22d)](_0x27f8e8(0x23f),_0x41da9f&&_0x41da9f[_0x27f8e8(0x200)]),()=>{};}});return _0x5e3b8b=>_0x17f90f['forEach'](_0x43148b=>_0x43148b(_0x5e3b8b));}function _0x41c9(_0x16e8b7,_0x482930){var _0x55567a=_0x5556();return _0x41c9=function(_0x41c93d,_0x29c23d){_0x41c93d=_0x41c93d-0x153;var _0x313c0d=_0x55567a[_0x41c93d];return _0x313c0d;},_0x41c9(_0x16e8b7,_0x482930);}function W(_0x14320b){var _0x3e30a1=_0x29d596;let _0x1f44d7=function(_0x2bec20,_0x12709d){return _0x12709d-_0x2bec20;},_0x4ad599;if(_0x14320b[_0x3e30a1(0x221)])_0x4ad599=function(){var _0xe81a4d=_0x3e30a1;return _0x14320b[_0xe81a4d(0x221)][_0xe81a4d(0x1a4)]();};else{if(_0x14320b[_0x3e30a1(0x1e7)]&&_0x14320b[_0x3e30a1(0x1e7)]['hrtime']&&_0x14320b[_0x3e30a1(0x1e7)]?.[_0x3e30a1(0x1eb)]?.[_0x3e30a1(0x22f)]!==_0x3e30a1(0x223))_0x4ad599=function(){var _0x15a2eb=_0x3e30a1;return _0x14320b[_0x15a2eb(0x1e7)][_0x15a2eb(0x1ab)]();},_0x1f44d7=function(_0x156f95,_0x3bc093){return 0x3e8*(_0x3bc093[0x0]-_0x156f95[0x0])+(_0x3bc093[0x1]-_0x156f95[0x1])/0xf4240;};else try{let {performance:_0x11278f}=require(_0x3e30a1(0x1e3));_0x4ad599=function(){var _0x52b5d6=_0x3e30a1;return _0x11278f[_0x52b5d6(0x1a4)]();};}catch{_0x4ad599=function(){return+new Date();};}}return{'elapsed':_0x1f44d7,'timeStamp':_0x4ad599,'now':()=>Date['now']()};}function J(_0x5547fe,_0x5722e6,_0x3af791){var _0x23fbf4=_0x29d596;if(_0x5547fe['_consoleNinjaAllowedToStart']!==void 0x0)return _0x5547fe[_0x23fbf4(0x16c)];let _0x4032c4=_0x5547fe['process']?.[_0x23fbf4(0x1bb)]?.[_0x23fbf4(0x1ee)]||_0x5547fe[_0x23fbf4(0x1e7)]?.['env']?.[_0x23fbf4(0x22f)]===_0x23fbf4(0x223);return _0x4032c4&&_0x3af791===_0x23fbf4(0x219)?_0x5547fe[_0x23fbf4(0x16c)]=!0x1:_0x5547fe[_0x23fbf4(0x16c)]=_0x4032c4||!_0x5722e6||_0x5547fe[_0x23fbf4(0x1d2)]?.['hostname']&&_0x5722e6[_0x23fbf4(0x1c7)](_0x5547fe['location'][_0x23fbf4(0x16f)]),_0x5547fe[_0x23fbf4(0x16c)];}function Y(_0x485d3a,_0x41457d,_0xd494a3,_0x24cc9f){var _0x48ff4f=_0x29d596;_0x485d3a=_0x485d3a,_0x41457d=_0x41457d,_0xd494a3=_0xd494a3,_0x24cc9f=_0x24cc9f;let _0x1562b9=W(_0x485d3a),_0x24f4c4=_0x1562b9['elapsed'],_0x2c6fd8=_0x1562b9['timeStamp'];class _0x1c4d28{constructor(){var _0x4d0fb8=_0x41c9;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4d0fb8(0x168)]=/^(0|[1-9][0-9]*)$/,this[_0x4d0fb8(0x1e8)]=/'([^\\\\']|\\\\')*'/,this[_0x4d0fb8(0x17c)]=_0x485d3a[_0x4d0fb8(0x206)],this[_0x4d0fb8(0x1fd)]=_0x485d3a[_0x4d0fb8(0x191)],this[_0x4d0fb8(0x159)]=Object['getOwnPropertyDescriptor'],this[_0x4d0fb8(0x1bf)]=Object[_0x4d0fb8(0x1d9)],this[_0x4d0fb8(0x1ef)]=_0x485d3a['Symbol'],this[_0x4d0fb8(0x22c)]=RegExp[_0x4d0fb8(0x180)][_0x4d0fb8(0x1be)],this['_dateToString']=Date[_0x4d0fb8(0x180)]['toString'];}['serialize'](_0x13b62a,_0x4d5683,_0x3dfc8b,_0x168655){var _0x1bf95e=_0x41c9,_0x23d4d3=this,_0x5d160e=_0x3dfc8b[_0x1bf95e(0x1d4)];function _0x2332b3(_0x1681c8,_0x5712e7,_0x3efc27){var _0x1f4d27=_0x1bf95e;_0x5712e7[_0x1f4d27(0x1f9)]=_0x1f4d27(0x19f),_0x5712e7[_0x1f4d27(0x228)]=_0x1681c8[_0x1f4d27(0x200)],_0x3098e6=_0x3efc27[_0x1f4d27(0x1ee)][_0x1f4d27(0x1fa)],_0x3efc27[_0x1f4d27(0x1ee)][_0x1f4d27(0x1fa)]=_0x5712e7,_0x23d4d3[_0x1f4d27(0x202)](_0x5712e7,_0x3efc27);}try{_0x3dfc8b[_0x1bf95e(0x238)]++,_0x3dfc8b[_0x1bf95e(0x1d4)]&&_0x3dfc8b[_0x1bf95e(0x220)]['push'](_0x4d5683);var _0x24eddd,_0x5308a3,_0x44aac8,_0x85dd49,_0x166071=[],_0x414521=[],_0x1e9f83,_0x3152e3=this[_0x1bf95e(0x1a8)](_0x4d5683),_0x4c7d2b=_0x3152e3===_0x1bf95e(0x230),_0x30cb6f=!0x1,_0x286220=_0x3152e3===_0x1bf95e(0x21d),_0x4c686e=this[_0x1bf95e(0x198)](_0x3152e3),_0x455570=this[_0x1bf95e(0x15a)](_0x3152e3),_0x4ed19b=_0x4c686e||_0x455570,_0x320c34={},_0x2f16ec=0x0,_0x509bd9=!0x1,_0x3098e6,_0x1b5489=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x3dfc8b['depth']){if(_0x4c7d2b){if(_0x5308a3=_0x4d5683[_0x1bf95e(0x1ba)],_0x5308a3>_0x3dfc8b[_0x1bf95e(0x218)]){for(_0x44aac8=0x0,_0x85dd49=_0x3dfc8b[_0x1bf95e(0x218)],_0x24eddd=_0x44aac8;_0x24eddd<_0x85dd49;_0x24eddd++)_0x414521[_0x1bf95e(0x1a3)](_0x23d4d3[_0x1bf95e(0x1b4)](_0x166071,_0x4d5683,_0x3152e3,_0x24eddd,_0x3dfc8b));_0x13b62a[_0x1bf95e(0x199)]=!0x0;}else{for(_0x44aac8=0x0,_0x85dd49=_0x5308a3,_0x24eddd=_0x44aac8;_0x24eddd<_0x85dd49;_0x24eddd++)_0x414521[_0x1bf95e(0x1a3)](_0x23d4d3[_0x1bf95e(0x1b4)](_0x166071,_0x4d5683,_0x3152e3,_0x24eddd,_0x3dfc8b));}_0x3dfc8b['autoExpandPropertyCount']+=_0x414521[_0x1bf95e(0x1ba)];}if(!(_0x3152e3==='null'||_0x3152e3==='undefined')&&!_0x4c686e&&_0x3152e3!==_0x1bf95e(0x17d)&&_0x3152e3!==_0x1bf95e(0x210)&&_0x3152e3!==_0x1bf95e(0x171)){var _0x34f97c=_0x168655[_0x1bf95e(0x1dd)]||_0x3dfc8b[_0x1bf95e(0x1dd)];if(this['_isSet'](_0x4d5683)?(_0x24eddd=0x0,_0x4d5683[_0x1bf95e(0x1ad)](function(_0x13307a){var _0x81593a=_0x1bf95e;if(_0x2f16ec++,_0x3dfc8b[_0x81593a(0x239)]++,_0x2f16ec>_0x34f97c){_0x509bd9=!0x0;return;}if(!_0x3dfc8b['isExpressionToEvaluate']&&_0x3dfc8b[_0x81593a(0x1d4)]&&_0x3dfc8b[_0x81593a(0x239)]>_0x3dfc8b[_0x81593a(0x19d)]){_0x509bd9=!0x0;return;}_0x414521[_0x81593a(0x1a3)](_0x23d4d3[_0x81593a(0x1b4)](_0x166071,_0x4d5683,_0x81593a(0x227),_0x24eddd++,_0x3dfc8b,function(_0x5d65a0){return function(){return _0x5d65a0;};}(_0x13307a)));})):this[_0x1bf95e(0x16e)](_0x4d5683)&&_0x4d5683[_0x1bf95e(0x1ad)](function(_0x29b919,_0x353483){var _0x156b1d=_0x1bf95e;if(_0x2f16ec++,_0x3dfc8b[_0x156b1d(0x239)]++,_0x2f16ec>_0x34f97c){_0x509bd9=!0x0;return;}if(!_0x3dfc8b[_0x156b1d(0x1de)]&&_0x3dfc8b[_0x156b1d(0x1d4)]&&_0x3dfc8b['autoExpandPropertyCount']>_0x3dfc8b[_0x156b1d(0x19d)]){_0x509bd9=!0x0;return;}var _0x593c9b=_0x353483['toString']();_0x593c9b[_0x156b1d(0x1ba)]>0x64&&(_0x593c9b=_0x593c9b[_0x156b1d(0x208)](0x0,0x64)+'...'),_0x414521[_0x156b1d(0x1a3)](_0x23d4d3['_addProperty'](_0x166071,_0x4d5683,'Map',_0x593c9b,_0x3dfc8b,function(_0x324f56){return function(){return _0x324f56;};}(_0x29b919)));}),!_0x30cb6f){try{for(_0x1e9f83 in _0x4d5683)if(!(_0x4c7d2b&&_0x1b5489[_0x1bf95e(0x155)](_0x1e9f83))&&!this[_0x1bf95e(0x179)](_0x4d5683,_0x1e9f83,_0x3dfc8b)){if(_0x2f16ec++,_0x3dfc8b['autoExpandPropertyCount']++,_0x2f16ec>_0x34f97c){_0x509bd9=!0x0;break;}if(!_0x3dfc8b['isExpressionToEvaluate']&&_0x3dfc8b[_0x1bf95e(0x1d4)]&&_0x3dfc8b['autoExpandPropertyCount']>_0x3dfc8b[_0x1bf95e(0x19d)]){_0x509bd9=!0x0;break;}_0x414521[_0x1bf95e(0x1a3)](_0x23d4d3[_0x1bf95e(0x1d1)](_0x166071,_0x320c34,_0x4d5683,_0x3152e3,_0x1e9f83,_0x3dfc8b));}}catch{}if(_0x320c34[_0x1bf95e(0x192)]=!0x0,_0x286220&&(_0x320c34['_p_name']=!0x0),!_0x509bd9){var _0x10955b=[][_0x1bf95e(0x211)](this['_getOwnPropertyNames'](_0x4d5683))[_0x1bf95e(0x211)](this[_0x1bf95e(0x1c6)](_0x4d5683));for(_0x24eddd=0x0,_0x5308a3=_0x10955b[_0x1bf95e(0x1ba)];_0x24eddd<_0x5308a3;_0x24eddd++)if(_0x1e9f83=_0x10955b[_0x24eddd],!(_0x4c7d2b&&_0x1b5489[_0x1bf95e(0x155)](_0x1e9f83[_0x1bf95e(0x1be)]()))&&!this[_0x1bf95e(0x179)](_0x4d5683,_0x1e9f83,_0x3dfc8b)&&!_0x320c34[_0x1bf95e(0x1aa)+_0x1e9f83['toString']()]){if(_0x2f16ec++,_0x3dfc8b[_0x1bf95e(0x239)]++,_0x2f16ec>_0x34f97c){_0x509bd9=!0x0;break;}if(!_0x3dfc8b[_0x1bf95e(0x1de)]&&_0x3dfc8b[_0x1bf95e(0x1d4)]&&_0x3dfc8b[_0x1bf95e(0x239)]>_0x3dfc8b[_0x1bf95e(0x19d)]){_0x509bd9=!0x0;break;}_0x414521['push'](_0x23d4d3[_0x1bf95e(0x1d1)](_0x166071,_0x320c34,_0x4d5683,_0x3152e3,_0x1e9f83,_0x3dfc8b));}}}}}if(_0x13b62a[_0x1bf95e(0x1f9)]=_0x3152e3,_0x4ed19b?(_0x13b62a[_0x1bf95e(0x1e1)]=_0x4d5683['valueOf'](),this[_0x1bf95e(0x1b7)](_0x3152e3,_0x13b62a,_0x3dfc8b,_0x168655)):_0x3152e3===_0x1bf95e(0x1a9)?_0x13b62a[_0x1bf95e(0x1e1)]=this[_0x1bf95e(0x1a2)][_0x1bf95e(0x18c)](_0x4d5683):_0x3152e3==='bigint'?_0x13b62a[_0x1bf95e(0x1e1)]=_0x4d5683['toString']():_0x3152e3==='RegExp'?_0x13b62a['value']=this[_0x1bf95e(0x22c)][_0x1bf95e(0x18c)](_0x4d5683):_0x3152e3===_0x1bf95e(0x1a0)&&this[_0x1bf95e(0x1ef)]?_0x13b62a['value']=this[_0x1bf95e(0x1ef)][_0x1bf95e(0x180)][_0x1bf95e(0x1be)][_0x1bf95e(0x18c)](_0x4d5683):!_0x3dfc8b['depth']&&!(_0x3152e3===_0x1bf95e(0x166)||_0x3152e3===_0x1bf95e(0x206))&&(delete _0x13b62a['value'],_0x13b62a[_0x1bf95e(0x23c)]=!0x0),_0x509bd9&&(_0x13b62a[_0x1bf95e(0x1ac)]=!0x0),_0x3098e6=_0x3dfc8b[_0x1bf95e(0x1ee)][_0x1bf95e(0x1fa)],_0x3dfc8b[_0x1bf95e(0x1ee)][_0x1bf95e(0x1fa)]=_0x13b62a,this[_0x1bf95e(0x202)](_0x13b62a,_0x3dfc8b),_0x414521['length']){for(_0x24eddd=0x0,_0x5308a3=_0x414521[_0x1bf95e(0x1ba)];_0x24eddd<_0x5308a3;_0x24eddd++)_0x414521[_0x24eddd](_0x24eddd);}_0x166071[_0x1bf95e(0x1ba)]&&(_0x13b62a[_0x1bf95e(0x1dd)]=_0x166071);}catch(_0x27b4e2){_0x2332b3(_0x27b4e2,_0x13b62a,_0x3dfc8b);}return this['_additionalMetadata'](_0x4d5683,_0x13b62a),this[_0x1bf95e(0x1d3)](_0x13b62a,_0x3dfc8b),_0x3dfc8b['node']['current']=_0x3098e6,_0x3dfc8b[_0x1bf95e(0x238)]--,_0x3dfc8b[_0x1bf95e(0x1d4)]=_0x5d160e,_0x3dfc8b[_0x1bf95e(0x1d4)]&&_0x3dfc8b[_0x1bf95e(0x220)][_0x1bf95e(0x1a1)](),_0x13b62a;}[_0x48ff4f(0x1c6)](_0x10eea0){var _0x4eab9d=_0x48ff4f;return Object[_0x4eab9d(0x18d)]?Object['getOwnPropertySymbols'](_0x10eea0):[];}['_isSet'](_0x260a15){var _0x4f691a=_0x48ff4f;return!!(_0x260a15&&_0x485d3a[_0x4f691a(0x227)]&&this[_0x4f691a(0x175)](_0x260a15)===_0x4f691a(0x21f)&&_0x260a15[_0x4f691a(0x1ad)]);}['_blacklistedProperty'](_0x465d08,_0x2d97cc,_0x53b970){var _0x1d3fdb=_0x48ff4f;return _0x53b970[_0x1d3fdb(0x1f3)]?typeof _0x465d08[_0x2d97cc]==_0x1d3fdb(0x21d):!0x1;}[_0x48ff4f(0x1a8)](_0x536247){var _0x2db17c=_0x48ff4f,_0x5b6d29='';return _0x5b6d29=typeof _0x536247,_0x5b6d29===_0x2db17c(0x194)?this[_0x2db17c(0x175)](_0x536247)===_0x2db17c(0x1ed)?_0x5b6d29=_0x2db17c(0x230):this[_0x2db17c(0x175)](_0x536247)===_0x2db17c(0x1c2)?_0x5b6d29=_0x2db17c(0x1a9):this['_objectToString'](_0x536247)===_0x2db17c(0x234)?_0x5b6d29='bigint':_0x536247===null?_0x5b6d29=_0x2db17c(0x166):_0x536247[_0x2db17c(0x1b0)]&&(_0x5b6d29=_0x536247['constructor'][_0x2db17c(0x195)]||_0x5b6d29):_0x5b6d29==='undefined'&&this[_0x2db17c(0x1fd)]&&_0x536247 instanceof this['_HTMLAllCollection']&&(_0x5b6d29=_0x2db17c(0x191)),_0x5b6d29;}[_0x48ff4f(0x175)](_0x4d4ac6){var _0x22ff82=_0x48ff4f;return Object[_0x22ff82(0x180)][_0x22ff82(0x1be)][_0x22ff82(0x18c)](_0x4d4ac6);}[_0x48ff4f(0x198)](_0x2be06d){var _0x1e2770=_0x48ff4f;return _0x2be06d===_0x1e2770(0x23e)||_0x2be06d===_0x1e2770(0x1f7)||_0x2be06d===_0x1e2770(0x174);}['_isPrimitiveWrapperType'](_0x1f4c14){var _0x364e7b=_0x48ff4f;return _0x1f4c14===_0x364e7b(0x20c)||_0x1f4c14==='String'||_0x1f4c14===_0x364e7b(0x213);}[_0x48ff4f(0x1b4)](_0xadb2b7,_0x3a7a5f,_0x2a6ce6,_0x3dd27e,_0x1c0620,_0x1b8d80){var _0x40d5db=this;return function(_0x577411){var _0x583df3=_0x41c9,_0x1b5ade=_0x1c0620[_0x583df3(0x1ee)][_0x583df3(0x1fa)],_0x3923d3=_0x1c0620[_0x583df3(0x1ee)][_0x583df3(0x23d)],_0x78a881=_0x1c0620[_0x583df3(0x1ee)][_0x583df3(0x161)];_0x1c0620[_0x583df3(0x1ee)][_0x583df3(0x161)]=_0x1b5ade,_0x1c0620['node'][_0x583df3(0x23d)]=typeof _0x3dd27e==_0x583df3(0x174)?_0x3dd27e:_0x577411,_0xadb2b7[_0x583df3(0x1a3)](_0x40d5db['_property'](_0x3a7a5f,_0x2a6ce6,_0x3dd27e,_0x1c0620,_0x1b8d80)),_0x1c0620[_0x583df3(0x1ee)][_0x583df3(0x161)]=_0x78a881,_0x1c0620[_0x583df3(0x1ee)][_0x583df3(0x23d)]=_0x3923d3;};}['_addObjectProperty'](_0x2ea417,_0x4c4ee7,_0x1b6908,_0x5211ac,_0x553ba6,_0x5aa1ad,_0x15c729){var _0x17b7f9=_0x48ff4f,_0x1d8b3e=this;return _0x4c4ee7[_0x17b7f9(0x1aa)+_0x553ba6[_0x17b7f9(0x1be)]()]=!0x0,function(_0x2e3895){var _0x14ab35=_0x17b7f9,_0x58c4d7=_0x5aa1ad['node'][_0x14ab35(0x1fa)],_0x22f18a=_0x5aa1ad[_0x14ab35(0x1ee)][_0x14ab35(0x23d)],_0x2f828f=_0x5aa1ad['node'][_0x14ab35(0x161)];_0x5aa1ad[_0x14ab35(0x1ee)][_0x14ab35(0x161)]=_0x58c4d7,_0x5aa1ad[_0x14ab35(0x1ee)][_0x14ab35(0x23d)]=_0x2e3895,_0x2ea417[_0x14ab35(0x1a3)](_0x1d8b3e['_property'](_0x1b6908,_0x5211ac,_0x553ba6,_0x5aa1ad,_0x15c729)),_0x5aa1ad['node']['parent']=_0x2f828f,_0x5aa1ad[_0x14ab35(0x1ee)][_0x14ab35(0x23d)]=_0x22f18a;};}[_0x48ff4f(0x23b)](_0x36de7a,_0x24420e,_0x2af8e5,_0x48fc0f,_0x4bbcd5){var _0x569f62=_0x48ff4f,_0x4ae7fd=this;_0x4bbcd5||(_0x4bbcd5=function(_0x1513ce,_0x5cd0ed){return _0x1513ce[_0x5cd0ed];});var _0x3a66fe=_0x2af8e5[_0x569f62(0x1be)](),_0x22c5d2=_0x48fc0f[_0x569f62(0x1e0)]||{},_0x5110f5=_0x48fc0f['depth'],_0x2bf8a8=_0x48fc0f['isExpressionToEvaluate'];try{var _0x5b33c7=this['_isMap'](_0x36de7a),_0x39041e=_0x3a66fe;_0x5b33c7&&_0x39041e[0x0]==='\\x27'&&(_0x39041e=_0x39041e[_0x569f62(0x1e6)](0x1,_0x39041e[_0x569f62(0x1ba)]-0x2));var _0x45afa1=_0x48fc0f['expressionsToEvaluate']=_0x22c5d2[_0x569f62(0x1aa)+_0x39041e];_0x45afa1&&(_0x48fc0f[_0x569f62(0x17b)]=_0x48fc0f['depth']+0x1),_0x48fc0f[_0x569f62(0x1de)]=!!_0x45afa1;var _0x5c7c55=typeof _0x2af8e5==_0x569f62(0x1a0),_0x349f90={'name':_0x5c7c55||_0x5b33c7?_0x3a66fe:this[_0x569f62(0x1ea)](_0x3a66fe)};if(_0x5c7c55&&(_0x349f90[_0x569f62(0x1a0)]=!0x0),!(_0x24420e===_0x569f62(0x230)||_0x24420e===_0x569f62(0x15e))){var _0x425f6d=this[_0x569f62(0x159)](_0x36de7a,_0x2af8e5);if(_0x425f6d&&(_0x425f6d[_0x569f62(0x1d8)]&&(_0x349f90[_0x569f62(0x1f8)]=!0x0),_0x425f6d[_0x569f62(0x1fb)]&&!_0x45afa1&&!_0x48fc0f[_0x569f62(0x1b9)]))return _0x349f90[_0x569f62(0x1a7)]=!0x0,this[_0x569f62(0x172)](_0x349f90,_0x48fc0f),_0x349f90;}var _0x53ae07;try{_0x53ae07=_0x4bbcd5(_0x36de7a,_0x2af8e5);}catch(_0x18239c){return _0x349f90={'name':_0x3a66fe,'type':'unknown','error':_0x18239c['message']},this[_0x569f62(0x172)](_0x349f90,_0x48fc0f),_0x349f90;}var _0x42d6df=this[_0x569f62(0x1a8)](_0x53ae07),_0x370a61=this[_0x569f62(0x198)](_0x42d6df);if(_0x349f90['type']=_0x42d6df,_0x370a61)this[_0x569f62(0x172)](_0x349f90,_0x48fc0f,_0x53ae07,function(){var _0x525e87=_0x569f62;_0x349f90[_0x525e87(0x1e1)]=_0x53ae07[_0x525e87(0x224)](),!_0x45afa1&&_0x4ae7fd[_0x525e87(0x1b7)](_0x42d6df,_0x349f90,_0x48fc0f,{});});else{var _0x34dd05=_0x48fc0f['autoExpand']&&_0x48fc0f[_0x569f62(0x238)]<_0x48fc0f['autoExpandMaxDepth']&&_0x48fc0f[_0x569f62(0x220)]['indexOf'](_0x53ae07)<0x0&&_0x42d6df!==_0x569f62(0x21d)&&_0x48fc0f[_0x569f62(0x239)]<_0x48fc0f[_0x569f62(0x19d)];_0x34dd05||_0x48fc0f[_0x569f62(0x238)]<_0x5110f5||_0x45afa1?(this[_0x569f62(0x181)](_0x349f90,_0x53ae07,_0x48fc0f,_0x45afa1||{}),this[_0x569f62(0x19b)](_0x53ae07,_0x349f90)):this[_0x569f62(0x172)](_0x349f90,_0x48fc0f,_0x53ae07,function(){var _0x5e43ef=_0x569f62;_0x42d6df===_0x5e43ef(0x166)||_0x42d6df===_0x5e43ef(0x206)||(delete _0x349f90['value'],_0x349f90['capped']=!0x0);});}return _0x349f90;}finally{_0x48fc0f[_0x569f62(0x1e0)]=_0x22c5d2,_0x48fc0f[_0x569f62(0x17b)]=_0x5110f5,_0x48fc0f[_0x569f62(0x1de)]=_0x2bf8a8;}}[_0x48ff4f(0x1b7)](_0x1b62f1,_0x18eb71,_0x37948f,_0x1ab5ee){var _0x1d8c06=_0x48ff4f,_0x48776d=_0x1ab5ee['strLength']||_0x37948f[_0x1d8c06(0x1f4)];if((_0x1b62f1===_0x1d8c06(0x1f7)||_0x1b62f1===_0x1d8c06(0x17d))&&_0x18eb71[_0x1d8c06(0x1e1)]){let _0x5d8f6a=_0x18eb71['value'][_0x1d8c06(0x1ba)];_0x37948f[_0x1d8c06(0x1ec)]+=_0x5d8f6a,_0x37948f[_0x1d8c06(0x1ec)]>_0x37948f[_0x1d8c06(0x1ca)]?(_0x18eb71[_0x1d8c06(0x23c)]='',delete _0x18eb71['value']):_0x5d8f6a>_0x48776d&&(_0x18eb71[_0x1d8c06(0x23c)]=_0x18eb71['value']['substr'](0x0,_0x48776d),delete _0x18eb71[_0x1d8c06(0x1e1)]);}}[_0x48ff4f(0x16e)](_0x5e4ac3){var _0x98b109=_0x48ff4f;return!!(_0x5e4ac3&&_0x485d3a[_0x98b109(0x165)]&&this['_objectToString'](_0x5e4ac3)==='[object\\x20Map]'&&_0x5e4ac3[_0x98b109(0x1ad)]);}['_propertyName'](_0x5e0b82){var _0x27fcf5=_0x48ff4f;if(_0x5e0b82[_0x27fcf5(0x1d0)](/^\\d+$/))return _0x5e0b82;var _0x12f5b4;try{_0x12f5b4=JSON['stringify'](''+_0x5e0b82);}catch{_0x12f5b4='\\x22'+this[_0x27fcf5(0x175)](_0x5e0b82)+'\\x22';}return _0x12f5b4[_0x27fcf5(0x1d0)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x12f5b4=_0x12f5b4[_0x27fcf5(0x1e6)](0x1,_0x12f5b4[_0x27fcf5(0x1ba)]-0x2):_0x12f5b4=_0x12f5b4[_0x27fcf5(0x19c)](/'/g,'\\x5c\\x27')[_0x27fcf5(0x19c)](/\\\\\"/g,'\\x22')[_0x27fcf5(0x19c)](/(^\"|\"$)/g,'\\x27'),_0x12f5b4;}[_0x48ff4f(0x172)](_0x24d617,_0x421388,_0x10dac3,_0x361040){var _0x418a7c=_0x48ff4f;this[_0x418a7c(0x202)](_0x24d617,_0x421388),_0x361040&&_0x361040(),this[_0x418a7c(0x19b)](_0x10dac3,_0x24d617),this['_treeNodePropertiesAfterFullValue'](_0x24d617,_0x421388);}['_treeNodePropertiesBeforeFullValue'](_0x2e200f,_0x4ccb5c){var _0x56f8e9=_0x48ff4f;this[_0x56f8e9(0x204)](_0x2e200f,_0x4ccb5c),this[_0x56f8e9(0x20b)](_0x2e200f,_0x4ccb5c),this[_0x56f8e9(0x201)](_0x2e200f,_0x4ccb5c),this[_0x56f8e9(0x196)](_0x2e200f,_0x4ccb5c);}['_setNodeId'](_0x509052,_0x1462a2){}['_setNodeQueryPath'](_0x3e506b,_0x11862b){}[_0x48ff4f(0x1ff)](_0x597c28,_0x19faa4){}[_0x48ff4f(0x153)](_0x4d1ee1){var _0x455dac=_0x48ff4f;return _0x4d1ee1===this[_0x455dac(0x17c)];}['_treeNodePropertiesAfterFullValue'](_0x2e5f4e,_0x5f0bc6){var _0x385bb0=_0x48ff4f;this[_0x385bb0(0x1ff)](_0x2e5f4e,_0x5f0bc6),this[_0x385bb0(0x158)](_0x2e5f4e),_0x5f0bc6[_0x385bb0(0x1d6)]&&this[_0x385bb0(0x1b3)](_0x2e5f4e),this[_0x385bb0(0x1da)](_0x2e5f4e,_0x5f0bc6),this[_0x385bb0(0x176)](_0x2e5f4e,_0x5f0bc6),this[_0x385bb0(0x207)](_0x2e5f4e);}[_0x48ff4f(0x19b)](_0x2f76d7,_0x2329b6){var _0x4675ac=_0x48ff4f;let _0x5f4f2d;try{_0x485d3a['console']&&(_0x5f4f2d=_0x485d3a['console'][_0x4675ac(0x228)],_0x485d3a[_0x4675ac(0x197)][_0x4675ac(0x228)]=function(){}),_0x2f76d7&&typeof _0x2f76d7[_0x4675ac(0x1ba)]=='number'&&(_0x2329b6[_0x4675ac(0x1ba)]=_0x2f76d7[_0x4675ac(0x1ba)]);}catch{}finally{_0x5f4f2d&&(_0x485d3a[_0x4675ac(0x197)][_0x4675ac(0x228)]=_0x5f4f2d);}if(_0x2329b6[_0x4675ac(0x1f9)]===_0x4675ac(0x174)||_0x2329b6[_0x4675ac(0x1f9)]===_0x4675ac(0x213)){if(isNaN(_0x2329b6[_0x4675ac(0x1e1)]))_0x2329b6[_0x4675ac(0x15c)]=!0x0,delete _0x2329b6[_0x4675ac(0x1e1)];else switch(_0x2329b6[_0x4675ac(0x1e1)]){case Number[_0x4675ac(0x154)]:_0x2329b6[_0x4675ac(0x1cf)]=!0x0,delete _0x2329b6[_0x4675ac(0x1e1)];break;case Number[_0x4675ac(0x209)]:_0x2329b6['negativeInfinity']=!0x0,delete _0x2329b6[_0x4675ac(0x1e1)];break;case 0x0:this[_0x4675ac(0x1e5)](_0x2329b6[_0x4675ac(0x1e1)])&&(_0x2329b6[_0x4675ac(0x1b5)]=!0x0);break;}}else _0x2329b6[_0x4675ac(0x1f9)]===_0x4675ac(0x21d)&&typeof _0x2f76d7[_0x4675ac(0x195)]==_0x4675ac(0x1f7)&&_0x2f76d7[_0x4675ac(0x195)]&&_0x2329b6[_0x4675ac(0x195)]&&_0x2f76d7[_0x4675ac(0x195)]!==_0x2329b6[_0x4675ac(0x195)]&&(_0x2329b6['funcName']=_0x2f76d7[_0x4675ac(0x195)]);}['_isNegativeZero'](_0x348223){var _0x4a2386=_0x48ff4f;return 0x1/_0x348223===Number[_0x4a2386(0x209)];}['_sortProps'](_0x107eaa){var _0x4b37cc=_0x48ff4f;!_0x107eaa[_0x4b37cc(0x1dd)]||!_0x107eaa[_0x4b37cc(0x1dd)][_0x4b37cc(0x1ba)]||_0x107eaa[_0x4b37cc(0x1f9)]===_0x4b37cc(0x230)||_0x107eaa[_0x4b37cc(0x1f9)]===_0x4b37cc(0x165)||_0x107eaa[_0x4b37cc(0x1f9)]===_0x4b37cc(0x227)||_0x107eaa['props'][_0x4b37cc(0x1fe)](function(_0x1d8663,_0x45ed23){var _0x51a4f6=_0x4b37cc,_0x38f259=_0x1d8663[_0x51a4f6(0x195)][_0x51a4f6(0x1f0)](),_0x53ab4f=_0x45ed23[_0x51a4f6(0x195)]['toLowerCase']();return _0x38f259<_0x53ab4f?-0x1:_0x38f259>_0x53ab4f?0x1:0x0;});}['_addFunctionsNode'](_0x15e1ed,_0x5c0328){var _0x5b00e9=_0x48ff4f;if(!(_0x5c0328[_0x5b00e9(0x1f3)]||!_0x15e1ed[_0x5b00e9(0x1dd)]||!_0x15e1ed[_0x5b00e9(0x1dd)][_0x5b00e9(0x1ba)])){for(var _0x4006a5=[],_0x190517=[],_0x5daa13=0x0,_0x5c728b=_0x15e1ed[_0x5b00e9(0x1dd)]['length'];_0x5daa13<_0x5c728b;_0x5daa13++){var _0x176aa0=_0x15e1ed[_0x5b00e9(0x1dd)][_0x5daa13];_0x176aa0[_0x5b00e9(0x1f9)]===_0x5b00e9(0x21d)?_0x4006a5[_0x5b00e9(0x1a3)](_0x176aa0):_0x190517[_0x5b00e9(0x1a3)](_0x176aa0);}if(!(!_0x190517[_0x5b00e9(0x1ba)]||_0x4006a5[_0x5b00e9(0x1ba)]<=0x1)){_0x15e1ed[_0x5b00e9(0x1dd)]=_0x190517;var _0x4a09da={'functionsNode':!0x0,'props':_0x4006a5};this[_0x5b00e9(0x204)](_0x4a09da,_0x5c0328),this[_0x5b00e9(0x1ff)](_0x4a09da,_0x5c0328),this[_0x5b00e9(0x158)](_0x4a09da),this[_0x5b00e9(0x196)](_0x4a09da,_0x5c0328),_0x4a09da['id']+='\\x20f',_0x15e1ed[_0x5b00e9(0x1dd)][_0x5b00e9(0x18b)](_0x4a09da);}}}[_0x48ff4f(0x176)](_0x27d312,_0x145371){}[_0x48ff4f(0x158)](_0x48476c){}[_0x48ff4f(0x236)](_0x15ae6e){var _0x55920d=_0x48ff4f;return Array[_0x55920d(0x18e)](_0x15ae6e)||typeof _0x15ae6e==_0x55920d(0x194)&&this[_0x55920d(0x175)](_0x15ae6e)==='[object\\x20Array]';}[_0x48ff4f(0x196)](_0x9e8dd8,_0x21bf31){}[_0x48ff4f(0x207)](_0x4d86dc){var _0x1d3523=_0x48ff4f;delete _0x4d86dc[_0x1d3523(0x229)],delete _0x4d86dc[_0x1d3523(0x1cb)],delete _0x4d86dc[_0x1d3523(0x16b)];}[_0x48ff4f(0x201)](_0x5011ed,_0x37b543){}}let _0x15ccfe=new _0x1c4d28(),_0x508dcc={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x12ad0e={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x760607(_0x21857d,_0x1aae83,_0x26a540,_0x377585,_0x5643b8,_0x3116e5){var _0x70f620=_0x48ff4f;let _0x1b6617,_0x402b88;try{_0x402b88=_0x2c6fd8(),_0x1b6617=_0xd494a3[_0x1aae83],!_0x1b6617||_0x402b88-_0x1b6617['ts']>0x1f4&&_0x1b6617[_0x70f620(0x160)]&&_0x1b6617[_0x70f620(0x1d7)]/_0x1b6617['count']<0x64?(_0xd494a3[_0x1aae83]=_0x1b6617={'count':0x0,'time':0x0,'ts':_0x402b88},_0xd494a3[_0x70f620(0x193)]={}):_0x402b88-_0xd494a3[_0x70f620(0x193)]['ts']>0x32&&_0xd494a3['hits'][_0x70f620(0x160)]&&_0xd494a3[_0x70f620(0x193)]['time']/_0xd494a3['hits'][_0x70f620(0x160)]<0x64&&(_0xd494a3[_0x70f620(0x193)]={});let _0x2adcf4=[],_0x3b0aa3=_0x1b6617[_0x70f620(0x23a)]||_0xd494a3[_0x70f620(0x193)][_0x70f620(0x23a)]?_0x12ad0e:_0x508dcc,_0x497498=_0x1b30c7=>{var _0x2b7bb5=_0x70f620;let _0x360cdc={};return _0x360cdc[_0x2b7bb5(0x1dd)]=_0x1b30c7[_0x2b7bb5(0x1dd)],_0x360cdc[_0x2b7bb5(0x218)]=_0x1b30c7[_0x2b7bb5(0x218)],_0x360cdc[_0x2b7bb5(0x1f4)]=_0x1b30c7[_0x2b7bb5(0x1f4)],_0x360cdc['totalStrLength']=_0x1b30c7['totalStrLength'],_0x360cdc[_0x2b7bb5(0x19d)]=_0x1b30c7[_0x2b7bb5(0x19d)],_0x360cdc[_0x2b7bb5(0x21c)]=_0x1b30c7['autoExpandMaxDepth'],_0x360cdc[_0x2b7bb5(0x1d6)]=!0x1,_0x360cdc[_0x2b7bb5(0x1f3)]=!_0x41457d,_0x360cdc[_0x2b7bb5(0x17b)]=0x1,_0x360cdc['level']=0x0,_0x360cdc[_0x2b7bb5(0x18a)]=_0x2b7bb5(0x1c4),_0x360cdc['rootExpression']=_0x2b7bb5(0x20a),_0x360cdc[_0x2b7bb5(0x1d4)]=!0x0,_0x360cdc['autoExpandPreviousObjects']=[],_0x360cdc[_0x2b7bb5(0x239)]=0x0,_0x360cdc[_0x2b7bb5(0x1b9)]=!0x0,_0x360cdc[_0x2b7bb5(0x1ec)]=0x0,_0x360cdc[_0x2b7bb5(0x1ee)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x360cdc;};for(var _0x10b521=0x0;_0x10b521<_0x5643b8[_0x70f620(0x1ba)];_0x10b521++)_0x2adcf4[_0x70f620(0x1a3)](_0x15ccfe[_0x70f620(0x181)]({'timeNode':_0x21857d===_0x70f620(0x1d7)||void 0x0},_0x5643b8[_0x10b521],_0x497498(_0x3b0aa3),{}));if(_0x21857d===_0x70f620(0x15d)){let _0x35bfd9=Error[_0x70f620(0x216)];try{Error[_0x70f620(0x216)]=0x1/0x0,_0x2adcf4[_0x70f620(0x1a3)](_0x15ccfe[_0x70f620(0x181)]({'stackNode':!0x0},new Error()[_0x70f620(0x15f)],_0x497498(_0x3b0aa3),{'strLength':0x1/0x0}));}finally{Error[_0x70f620(0x216)]=_0x35bfd9;}}return{'method':_0x70f620(0x1f1),'version':_0x24cc9f,'args':[{'ts':_0x26a540,'session':_0x377585,'args':_0x2adcf4,'id':_0x1aae83,'context':_0x3116e5}]};}catch(_0x4ce412){return{'method':_0x70f620(0x1f1),'version':_0x24cc9f,'args':[{'ts':_0x26a540,'session':_0x377585,'args':[{'type':'unknown','error':_0x4ce412&&_0x4ce412[_0x70f620(0x200)]}],'id':_0x1aae83,'context':_0x3116e5}]};}finally{try{if(_0x1b6617&&_0x402b88){let _0x26f621=_0x2c6fd8();_0x1b6617[_0x70f620(0x160)]++,_0x1b6617[_0x70f620(0x1d7)]+=_0x24f4c4(_0x402b88,_0x26f621),_0x1b6617['ts']=_0x26f621,_0xd494a3['hits'][_0x70f620(0x160)]++,_0xd494a3['hits'][_0x70f620(0x1d7)]+=_0x24f4c4(_0x402b88,_0x26f621),_0xd494a3[_0x70f620(0x193)]['ts']=_0x26f621,(_0x1b6617['count']>0x32||_0x1b6617['time']>0x64)&&(_0x1b6617['reduceLimits']=!0x0),(_0xd494a3[_0x70f620(0x193)]['count']>0x3e8||_0xd494a3[_0x70f620(0x193)][_0x70f620(0x1d7)]>0x12c)&&(_0xd494a3[_0x70f620(0x193)][_0x70f620(0x23a)]=!0x0);}}catch{}}}return _0x760607;}((_0x31d1f9,_0x3eaab5,_0x444712,_0x272bc9,_0x70920a,_0x3c5415,_0x283e17,_0x2d54aa,_0x2d84f5,_0x1dbabb)=>{var _0x2c4389=_0x29d596;if(_0x31d1f9['_console_ninja'])return _0x31d1f9[_0x2c4389(0x185)];if(!J(_0x31d1f9,_0x2d54aa,_0x70920a))return _0x31d1f9['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x31d1f9[_0x2c4389(0x185)];let _0x51c622=W(_0x31d1f9),_0x167754=_0x51c622['elapsed'],_0x2cf357=_0x51c622[_0x2c4389(0x188)],_0xcb3a8d=_0x51c622[_0x2c4389(0x1a4)],_0x1539b2={'hits':{},'ts':{}},_0x39f2f9=Y(_0x31d1f9,_0x2d84f5,_0x1539b2,_0x3c5415),_0x120124=_0x55aeaf=>{_0x1539b2['ts'][_0x55aeaf]=_0x2cf357();},_0x16e23c=(_0x367f7d,_0x269e20)=>{var _0x2332bf=_0x2c4389;let _0x168bdf=_0x1539b2['ts'][_0x269e20];if(delete _0x1539b2['ts'][_0x269e20],_0x168bdf){let _0x1c909c=_0x167754(_0x168bdf,_0x2cf357());_0x59609f(_0x39f2f9(_0x2332bf(0x1d7),_0x367f7d,_0xcb3a8d(),_0x1de824,[_0x1c909c],_0x269e20));}},_0x402151=_0x35adf8=>_0x2c5388=>{try{_0x120124(_0x2c5388),_0x35adf8(_0x2c5388);}finally{_0x31d1f9['console']['time']=_0x35adf8;}},_0xdf3735=_0x3573b3=>_0x314af2=>{var _0x237122=_0x2c4389;try{let [_0x31a706,_0x3cbd8b]=_0x314af2['split'](_0x237122(0x214));_0x16e23c(_0x3cbd8b,_0x31a706),_0x3573b3(_0x31a706);}finally{_0x31d1f9[_0x237122(0x197)][_0x237122(0x1b2)]=_0x3573b3;}};_0x31d1f9['_console_ninja']={'consoleLog':(_0x4237b8,_0x25f747)=>{var _0x2c08a9=_0x2c4389;_0x31d1f9[_0x2c08a9(0x197)][_0x2c08a9(0x1f1)][_0x2c08a9(0x195)]!==_0x2c08a9(0x17f)&&_0x59609f(_0x39f2f9(_0x2c08a9(0x1f1),_0x4237b8,_0xcb3a8d(),_0x1de824,_0x25f747));},'consoleTrace':(_0x274fcb,_0x497323)=>{var _0x98cc6e=_0x2c4389;_0x31d1f9[_0x98cc6e(0x197)]['log'][_0x98cc6e(0x195)]!=='disabledTrace'&&_0x59609f(_0x39f2f9(_0x98cc6e(0x15d),_0x274fcb,_0xcb3a8d(),_0x1de824,_0x497323));},'consoleTime':()=>{var _0xcd819f=_0x2c4389;_0x31d1f9[_0xcd819f(0x197)][_0xcd819f(0x1d7)]=_0x402151(_0x31d1f9[_0xcd819f(0x197)][_0xcd819f(0x1d7)]);},'consoleTimeEnd':()=>{var _0x3aa5d7=_0x2c4389;_0x31d1f9[_0x3aa5d7(0x197)]['timeEnd']=_0xdf3735(_0x31d1f9[_0x3aa5d7(0x197)][_0x3aa5d7(0x1b2)]);},'autoLog':(_0x32cf54,_0x375594)=>{var _0x200bc7=_0x2c4389;_0x59609f(_0x39f2f9(_0x200bc7(0x1f1),_0x375594,_0xcb3a8d(),_0x1de824,[_0x32cf54]));},'autoLogMany':(_0x411532,_0x3ab08f)=>{_0x59609f(_0x39f2f9('log',_0x411532,_0xcb3a8d(),_0x1de824,_0x3ab08f));},'autoTrace':(_0x5660b4,_0x2fb72d)=>{var _0x480f5b=_0x2c4389;_0x59609f(_0x39f2f9(_0x480f5b(0x15d),_0x2fb72d,_0xcb3a8d(),_0x1de824,[_0x5660b4]));},'autoTraceMany':(_0xdae23d,_0x186ac9)=>{var _0x558d42=_0x2c4389;_0x59609f(_0x39f2f9(_0x558d42(0x15d),_0xdae23d,_0xcb3a8d(),_0x1de824,_0x186ac9));},'autoTime':(_0x3e7e8e,_0x12e99a,_0x5a356b)=>{_0x120124(_0x5a356b);},'autoTimeEnd':(_0xd5e270,_0xbbc465,_0xabdad3)=>{_0x16e23c(_0xbbc465,_0xabdad3);},'coverage':_0x35e45c=>{var _0x363ed1=_0x2c4389;_0x59609f({'method':_0x363ed1(0x1c3),'version':_0x3c5415,'args':[{'id':_0x35e45c}]});}};let _0x59609f=b(_0x31d1f9,_0x3eaab5,_0x444712,_0x272bc9,_0x70920a,_0x1dbabb),_0x1de824=_0x31d1f9[_0x2c4389(0x21e)];return _0x31d1f9[_0x2c4389(0x185)];})(globalThis,_0x29d596(0x1bc),_0x29d596(0x169),_0x29d596(0x217),_0x29d596(0x21a),_0x29d596(0x189),_0x29d596(0x18f),[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Damilare\",\"169.254.80.80\",\"192.168.0.101\",\"172.23.192.1\"],_0x29d596(0x237),_0x29d596(0x1ce));");
  } catch (e) {}
}
;
function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
;
function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
;
function oo_ts() {
  try {
    oo_cm().consoleTime();
  } catch (e) {}
}
;
function oo_te() {
  try {
    oo_cm().consoleTimeEnd();
  } catch (e) {}
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/
var _c;
$RefreshReg$(_c, "ShowInvite");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuYWxsLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidHJhbnNsYXRlQ29uZmlnIiwiYXBwQ29uZmlnIiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNvbmZpZ0xhbmciLCJsYW5nIiwidW5kZWZpbmVkIiwiU2hvd0ludml0ZSIsIl9yZWYiLCJfcyIsImN1cnJlbnRVcmwiLCJndWVzdExpc3RMYXN0VXBkYXRlZEF0IiwiZ3Vlc3QiLCJ1c2VUcmFuc2xhdGlvbiIsIl90cmFuc2xhdGVDb25maWciLCJsb2dvIiwib2dUYWdzIiwiY291cGxlSW5mbyIsInZlbnVlIiwid2VkZGluZ0RheSIsIndlZGRpbmdEYXRlIiwid2VkZGluZ1RpbWUiLCJjYWxlbmRhckluZm8iLCJicmlkZU5hbWUiLCJncm9vbU5hbWUiLCJoYXNodGFnIiwiY291cGxlTmFtZUZvcm1hdCIsImNvdXBsZU5hbWVTdHIiLCJjb25jYXQiLCJjb3VwbGVOYW1lIiwiX19qc3giLCJSZWFjdCIsIkZyYWdtZW50IiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInZlbnVlQnJpZWYiLCJjaXR5IiwiY291bnRyeSIsIndlZGRpbmdEYXRlQnJpZWYiLCJldmVudFRpdGxlIiwiZXZlbnREZXNjcmlwdGlvbiIsImNhbGVuZGFyRXZlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibG9jYXRpb24iLCJzdGFydFRpbWUiLCJ0aW1lU3RhcnRJU08iLCJlbmRUaW1lIiwidGltZUVuZElTTyIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwic2V0TmFtZSIsIl91c2VTdGF0ZTIiLCJhdHRlbmRpbmciLCJzZXRBdHRlbmRpbmciLCJfdXNlU3RhdGUzIiwiZW1haWwiLCJzZXRFbWFpbCIsIl91c2VTdGF0ZTQiLCJlcnJvciIsInNldEVycm9yIiwiX3VzZVN0YXRlNSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIl91c2VTdGF0ZTYiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJfdXNlU3RhdGU3IiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsInByb3h5VXJsIiwic2NyaXB0VXJsIiwiaGFuZGxlU3VibWl0IiwiX3JlZjIiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9jYWxsZWUiLCJfY29uc29sZSIsIl9yZXNwb25zZSIsImRhdGEiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldmVudERlZmF1bHQiLCJTd2FsIiwiZmlyZSIsImZldGNoIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJvb19vbyIsInQwIiwiX3giLCJjbGFzc05hbWUiLCJfSlNYU3R5bGUiLCJpZCIsIkhlYWQiLCJfZXh0ZW5kcyIsImd1ZXN0TmFtZSIsInVybCIsImRhdGUiLCJtb2RpZmllZFRpbWUiLCJyZXNvbHZlUGF0aCIsImF1dGhvciIsInN0eWxlIiwib3BhY2l0eSIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJtYXhIZWlnaHQiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJzcmMiLCJoZWFkZXJMb2dvIiwiYWx0IiwiYW5pbWF0aW9uRGVsYXkiLCJ6SW5kZXgiLCJ2aXNpYmlsaXR5IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25OYW1lIiwicGFkZGluZ0JvdHRvbSIsIkFkZFRvQ2FsZW5kYXIiLCJldmVudCIsImJ1dHRvbkxhYmVsIiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImhyZWYiLCJtYXBVcmwiLCJib3JkZXJSYWRpdXMiLCJtYXhXaWR0aCIsIm92ZXJmbG93WCIsInRleHRPdmVyZmxvdyIsImJveFNoYWRvdyIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImNvbG9yIiwic3RhcnRzV2l0aCIsInNob3dRckNvZGUiLCJtYXJnaW5Cb3R0b20iLCJRUkNvZGUiLCJndWVzdElkIiwiYm9yZGVyQm90dG9tIiwiYWRkcmVzc0xpbmUxIiwib25TdWJtaXQiLCJodG1sRm9yIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJmb250U3R5bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIl9jIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwibG9jYWxlUGFyYW1zIiwicXVlcnkiLCJlbXB0eUd1ZXN0UGFyYW1zIiwiZ3JlZXRpbmciLCJyZXEiLCJndWVzdERhdGEiLCJndWVzdExpc3QiLCJtZXRhIiwibGFzdFVwZGF0ZWRBdCIsIl9yZWYzIiwib29fY20iLCJldmFsIiwiX2xlbiIsIkFycmF5IiwiX2tleSIsImNvbnNvbGVMb2ciLCJvb190ciIsIl9sZW4yIiwiX2tleTIiLCJjb25zb2xlVHJhY2UiLCJvb190cyIsImNvbnNvbGVUaW1lIiwib29fdGUiLCJjb25zb2xlVGltZUVuZCIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBNEQ7QUFDOUQsRUFBRSxTQUMw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QTtBQUFDO0FBQUMsU0FBU3dQLEtBQUtBLENBQUN2UixDQUFDLEVBQU07RUFBQSxTQUFBd1IsS0FBQSxHQUFBdkwsU0FBQSxDQUFBOUIsTUFBQSxFQUFGcEMsQ0FBQyxPQUFBcVAsS0FBQSxDQUFBSSxLQUFBLE9BQUFBLEtBQUEsV0FBQUMsS0FBQSxNQUFBQSxLQUFBLEdBQUFELEtBQUEsRUFBQUMsS0FBQTtJQUFEMVAsQ0FBQyxDQUFBMFAsS0FBQSxRQUFBeEwsU0FBQSxDQUFBd0wsS0FBQTtFQUFBO0VBQUUsSUFBRztJQUFDUixLQUFLLENBQUMsQ0FBQyxDQUFDUyxZQUFZLENBQUMxUixDQUFDLEVBQUUrQixDQUFDLENBQUM7RUFBQyxDQUFDLFFBQU16QyxDQUFDLEVBQUMsQ0FBQztFQUFFLE9BQU95QyxDQUFDO0FBQUE7QUFBQztBQUFDLFNBQVM0UCxLQUFLQSxDQUFBLEVBQUU7RUFBQyxJQUFHO0lBQUNWLEtBQUssQ0FBQyxDQUFDLENBQUNXLFdBQVcsQ0FBQyxDQUFDO0VBQUMsQ0FBQyxRQUFNdFMsQ0FBQyxFQUFDLENBQUM7QUFBQztBQUFDO0FBQUMsU0FBU3VTLEtBQUtBLENBQUEsRUFBRTtFQUFDLElBQUc7SUFBQ1osS0FBSyxDQUFDLENBQUMsQ0FBQ2EsY0FBYyxDQUFDLENBQUM7RUFBQyxDQUFDLFFBQU14UyxDQUFDLEVBQUMsQ0FBQztBQUFDO0FBQUMsQ0FBQztBQUFBLElBQUE4USxFQUFBO0FBQUEyQixZQUFBLENBQUEzQixFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZmMzU0ZDA1YzFhZDhjMTg0NjRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiogc3dlZXRhbGVydDIgdjExLjcuMzJcbiogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLlN3ZWV0YWxlcnQyID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwiZ2V0XCIpO1xuICAgIHJldHVybiBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpO1xuICB9XG4gIGZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwic2V0XCIpO1xuICAgIF9jbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBmdW5jdGlvbiBfY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBhY3Rpb24pIHtcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBcIiArIGFjdGlvbiArIFwiIHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xuICB9XG4gIGZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcikge1xuICAgIGlmIChkZXNjcmlwdG9yLmdldCkge1xuICAgICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTtcbiAgfVxuICBmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JTZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IsIHZhbHVlKSB7XG4gICAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgICBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFwiKTtcbiAgICAgIH1cbiAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX2NoZWNrUHJpdmF0ZVJlZGVjbGFyYXRpb24ob2JqLCBwcml2YXRlQ29sbGVjdGlvbikge1xuICAgIGlmIChwcml2YXRlQ29sbGVjdGlvbi5oYXMob2JqKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBpbml0aWFsaXplIHRoZSBzYW1lIHByaXZhdGUgZWxlbWVudHMgdHdpY2Ugb24gYW4gb2JqZWN0XCIpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyhvYmosIHByaXZhdGVNYXAsIHZhbHVlKSB7XG4gICAgX2NoZWNrUHJpdmF0ZVJlZGVjbGFyYXRpb24ob2JqLCBwcml2YXRlTWFwKTtcbiAgICBwcml2YXRlTWFwLnNldChvYmosIHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IFJFU1RPUkVfRk9DVVNfVElNRU9VVCA9IDEwMDtcblxuICAvKiogQHR5cGUge0dsb2JhbFN0YXRlfSAqL1xuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHt9O1xuICBjb25zdCBmb2N1c1ByZXZpb3VzQWN0aXZlRWxlbWVudCA9ICgpID0+IHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc3RvcmUgcHJldmlvdXMgYWN0aXZlIChmb2N1c2VkKSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmV0dXJuRm9jdXNcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBjb25zdCByZXN0b3JlQWN0aXZlRWxlbWVudCA9IHJldHVybkZvY3VzID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoIXJldHVybkZvY3VzKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICBjb25zdCB4ID0gd2luZG93LnNjcm9sbFg7XG4gICAgICBjb25zdCB5ID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBnbG9iYWxTdGF0ZS5yZXN0b3JlRm9jdXNUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZvY3VzUHJldmlvdXNBY3RpdmVFbGVtZW50KCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIFJFU1RPUkVfRk9DVVNfVElNRU9VVCk7IC8vIGlzc3Vlcy85MDBcblxuICAgICAgd2luZG93LnNjcm9sbFRvKHgsIHkpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN3YWxQcmVmaXggPSAnc3dhbDItJztcblxuICAvKipcbiAgICogQHR5cGVkZWZcbiAgICogeyB8ICdjb250YWluZXInXG4gICAqICAgfCAnc2hvd24nXG4gICAqICAgfCAnaGVpZ2h0LWF1dG8nXG4gICAqICAgfCAnaW9zZml4J1xuICAgKiAgIHwgJ3BvcHVwJ1xuICAgKiAgIHwgJ21vZGFsJ1xuICAgKiAgIHwgJ25vLWJhY2tkcm9wJ1xuICAgKiAgIHwgJ25vLXRyYW5zaXRpb24nXG4gICAqICAgfCAndG9hc3QnXG4gICAqICAgfCAndG9hc3Qtc2hvd24nXG4gICAqICAgfCAnc2hvdydcbiAgICogICB8ICdoaWRlJ1xuICAgKiAgIHwgJ2Nsb3NlJ1xuICAgKiAgIHwgJ3RpdGxlJ1xuICAgKiAgIHwgJ2h0bWwtY29udGFpbmVyJ1xuICAgKiAgIHwgJ2FjdGlvbnMnXG4gICAqICAgfCAnY29uZmlybSdcbiAgICogICB8ICdkZW55J1xuICAgKiAgIHwgJ2NhbmNlbCdcbiAgICogICB8ICdkZWZhdWx0LW91dGxpbmUnXG4gICAqICAgfCAnZm9vdGVyJ1xuICAgKiAgIHwgJ2ljb24nXG4gICAqICAgfCAnaWNvbi1jb250ZW50J1xuICAgKiAgIHwgJ2ltYWdlJ1xuICAgKiAgIHwgJ2lucHV0J1xuICAgKiAgIHwgJ2ZpbGUnXG4gICAqICAgfCAncmFuZ2UnXG4gICAqICAgfCAnc2VsZWN0J1xuICAgKiAgIHwgJ3JhZGlvJ1xuICAgKiAgIHwgJ2NoZWNrYm94J1xuICAgKiAgIHwgJ2xhYmVsJ1xuICAgKiAgIHwgJ3RleHRhcmVhJ1xuICAgKiAgIHwgJ2lucHV0ZXJyb3InXG4gICAqICAgfCAnaW5wdXQtbGFiZWwnXG4gICAqICAgfCAndmFsaWRhdGlvbi1tZXNzYWdlJ1xuICAgKiAgIHwgJ3Byb2dyZXNzLXN0ZXBzJ1xuICAgKiAgIHwgJ2FjdGl2ZS1wcm9ncmVzcy1zdGVwJ1xuICAgKiAgIHwgJ3Byb2dyZXNzLXN0ZXAnXG4gICAqICAgfCAncHJvZ3Jlc3Mtc3RlcC1saW5lJ1xuICAgKiAgIHwgJ2xvYWRlcidcbiAgICogICB8ICdsb2FkaW5nJ1xuICAgKiAgIHwgJ3N0eWxlZCdcbiAgICogICB8ICd0b3AnXG4gICAqICAgfCAndG9wLXN0YXJ0J1xuICAgKiAgIHwgJ3RvcC1lbmQnXG4gICAqICAgfCAndG9wLWxlZnQnXG4gICAqICAgfCAndG9wLXJpZ2h0J1xuICAgKiAgIHwgJ2NlbnRlcidcbiAgICogICB8ICdjZW50ZXItc3RhcnQnXG4gICAqICAgfCAnY2VudGVyLWVuZCdcbiAgICogICB8ICdjZW50ZXItbGVmdCdcbiAgICogICB8ICdjZW50ZXItcmlnaHQnXG4gICAqICAgfCAnYm90dG9tJ1xuICAgKiAgIHwgJ2JvdHRvbS1zdGFydCdcbiAgICogICB8ICdib3R0b20tZW5kJ1xuICAgKiAgIHwgJ2JvdHRvbS1sZWZ0J1xuICAgKiAgIHwgJ2JvdHRvbS1yaWdodCdcbiAgICogICB8ICdncm93LXJvdydcbiAgICogICB8ICdncm93LWNvbHVtbidcbiAgICogICB8ICdncm93LWZ1bGxzY3JlZW4nXG4gICAqICAgfCAncnRsJ1xuICAgKiAgIHwgJ3RpbWVyLXByb2dyZXNzLWJhcidcbiAgICogICB8ICd0aW1lci1wcm9ncmVzcy1iYXItY29udGFpbmVyJ1xuICAgKiAgIHwgJ3Njcm9sbGJhci1tZWFzdXJlJ1xuICAgKiAgIHwgJ2ljb24tc3VjY2VzcydcbiAgICogICB8ICdpY29uLXdhcm5pbmcnXG4gICAqICAgfCAnaWNvbi1pbmZvJ1xuICAgKiAgIHwgJ2ljb24tcXVlc3Rpb24nXG4gICAqICAgfCAnaWNvbi1lcnJvcidcbiAgICogfSBTd2FsQ2xhc3NcbiAgICogQHR5cGVkZWYge1JlY29yZDxTd2FsQ2xhc3MsIHN0cmluZz59IFN3YWxDbGFzc2VzXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7J3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2luZm8nIHwgJ3F1ZXN0aW9uJyB8ICdlcnJvcid9IFN3YWxJY29uXG4gICAqIEB0eXBlZGVmIHtSZWNvcmQ8U3dhbEljb24sIHN0cmluZz59IFN3YWxJY29uc1xuICAgKi9cblxuICAvKiogQHR5cGUge1N3YWxDbGFzc1tdfSAqL1xuICBjb25zdCBjbGFzc05hbWVzID0gWydjb250YWluZXInLCAnc2hvd24nLCAnaGVpZ2h0LWF1dG8nLCAnaW9zZml4JywgJ3BvcHVwJywgJ21vZGFsJywgJ25vLWJhY2tkcm9wJywgJ25vLXRyYW5zaXRpb24nLCAndG9hc3QnLCAndG9hc3Qtc2hvd24nLCAnc2hvdycsICdoaWRlJywgJ2Nsb3NlJywgJ3RpdGxlJywgJ2h0bWwtY29udGFpbmVyJywgJ2FjdGlvbnMnLCAnY29uZmlybScsICdkZW55JywgJ2NhbmNlbCcsICdkZWZhdWx0LW91dGxpbmUnLCAnZm9vdGVyJywgJ2ljb24nLCAnaWNvbi1jb250ZW50JywgJ2ltYWdlJywgJ2lucHV0JywgJ2ZpbGUnLCAncmFuZ2UnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ2xhYmVsJywgJ3RleHRhcmVhJywgJ2lucHV0ZXJyb3InLCAnaW5wdXQtbGFiZWwnLCAndmFsaWRhdGlvbi1tZXNzYWdlJywgJ3Byb2dyZXNzLXN0ZXBzJywgJ2FjdGl2ZS1wcm9ncmVzcy1zdGVwJywgJ3Byb2dyZXNzLXN0ZXAnLCAncHJvZ3Jlc3Mtc3RlcC1saW5lJywgJ2xvYWRlcicsICdsb2FkaW5nJywgJ3N0eWxlZCcsICd0b3AnLCAndG9wLXN0YXJ0JywgJ3RvcC1lbmQnLCAndG9wLWxlZnQnLCAndG9wLXJpZ2h0JywgJ2NlbnRlcicsICdjZW50ZXItc3RhcnQnLCAnY2VudGVyLWVuZCcsICdjZW50ZXItbGVmdCcsICdjZW50ZXItcmlnaHQnLCAnYm90dG9tJywgJ2JvdHRvbS1zdGFydCcsICdib3R0b20tZW5kJywgJ2JvdHRvbS1sZWZ0JywgJ2JvdHRvbS1yaWdodCcsICdncm93LXJvdycsICdncm93LWNvbHVtbicsICdncm93LWZ1bGxzY3JlZW4nLCAncnRsJywgJ3RpbWVyLXByb2dyZXNzLWJhcicsICd0aW1lci1wcm9ncmVzcy1iYXItY29udGFpbmVyJywgJ3Njcm9sbGJhci1tZWFzdXJlJywgJ2ljb24tc3VjY2VzcycsICdpY29uLXdhcm5pbmcnLCAnaWNvbi1pbmZvJywgJ2ljb24tcXVlc3Rpb24nLCAnaWNvbi1lcnJvciddO1xuICBjb25zdCBzd2FsQ2xhc3NlcyA9IGNsYXNzTmFtZXMucmVkdWNlKChhY2MsIGNsYXNzTmFtZSkgPT4ge1xuICAgIGFjY1tjbGFzc05hbWVdID0gc3dhbFByZWZpeCArIGNsYXNzTmFtZTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCAvKiogQHR5cGUge1N3YWxDbGFzc2VzfSAqL3t9KTtcblxuICAvKiogQHR5cGUge1N3YWxJY29uW119ICovXG4gIGNvbnN0IGljb25zID0gWydzdWNjZXNzJywgJ3dhcm5pbmcnLCAnaW5mbycsICdxdWVzdGlvbicsICdlcnJvciddO1xuICBjb25zdCBpY29uVHlwZXMgPSBpY29ucy5yZWR1Y2UoKGFjYywgaWNvbikgPT4ge1xuICAgIGFjY1tpY29uXSA9IHN3YWxQcmVmaXggKyBpY29uO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIC8qKiBAdHlwZSB7U3dhbEljb25zfSAqL3t9KTtcblxuICBjb25zdCBjb25zb2xlUHJlZml4ID0gJ1N3ZWV0QWxlcnQyOic7XG5cbiAgLyoqXG4gICAqIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBjb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSBzdHIgPT4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuXG4gIC8qKlxuICAgKiBTdGFuZGFyZGl6ZSBjb25zb2xlIHdhcm5pbmdzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgc3RyaW5nW119IG1lc3NhZ2VcbiAgICovXG4gIGNvbnN0IHdhcm4gPSBtZXNzYWdlID0+IHtcbiAgICBjb25zb2xlLndhcm4oXCJcIi5jb25jYXQoY29uc29sZVByZWZpeCwgXCIgXCIpLmNvbmNhdCh0eXBlb2YgbWVzc2FnZSA9PT0gJ29iamVjdCcgPyBtZXNzYWdlLmpvaW4oJyAnKSA6IG1lc3NhZ2UpKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RhbmRhcmRpemUgY29uc29sZSBlcnJvcnNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICovXG4gIGNvbnN0IGVycm9yID0gbWVzc2FnZSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcIlwiLmNvbmNhdChjb25zb2xlUHJlZml4LCBcIiBcIikuY29uY2F0KG1lc3NhZ2UpKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBnbG9iYWwgc3RhdGUgZm9yIGB3YXJuT25jZWBcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29uc3QgcHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzID0gW107XG5cbiAgLyoqXG4gICAqIFNob3cgYSBjb25zb2xlIHdhcm5pbmcsIGJ1dCBvbmx5IGlmIGl0IGhhc24ndCBhbHJlYWR5IGJlZW4gc2hvd25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICovXG4gIGNvbnN0IHdhcm5PbmNlID0gbWVzc2FnZSA9PiB7XG4gICAgaWYgKCFwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMuaW5jbHVkZXMobWVzc2FnZSkpIHtcbiAgICAgIHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgd2FybihtZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3cgYSBvbmUtdGltZSBjb25zb2xlIHdhcm5pbmcgYWJvdXQgZGVwcmVjYXRlZCBwYXJhbXMvbWV0aG9kc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVwcmVjYXRlZFBhcmFtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VJbnN0ZWFkXG4gICAqL1xuICBjb25zdCB3YXJuQWJvdXREZXByZWNhdGlvbiA9IChkZXByZWNhdGVkUGFyYW0sIHVzZUluc3RlYWQpID0+IHtcbiAgICB3YXJuT25jZShcIlxcXCJcIi5jb25jYXQoZGVwcmVjYXRlZFBhcmFtLCBcIlxcXCIgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuIFBsZWFzZSB1c2UgXFxcIlwiKS5jb25jYXQodXNlSW5zdGVhZCwgXCJcXFwiIGluc3RlYWQuXCIpKTtcbiAgfTtcblxuICAvKipcbiAgICogSWYgYGFyZ2AgaXMgYSBmdW5jdGlvbiwgY2FsbCBpdCAod2l0aCBubyBhcmd1bWVudHMgb3IgY29udGV4dCkgYW5kIHJldHVybiB0aGUgcmVzdWx0LlxuICAgKiBPdGhlcndpc2UsIGp1c3QgcGFzcyB0aGUgdmFsdWUgdGhyb3VnaFxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9uIHwgYW55fSBhcmdcbiAgICogQHJldHVybnMge2FueX1cbiAgICovXG4gIGNvbnN0IGNhbGxJZkZ1bmN0aW9uID0gYXJnID0+IHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicgPyBhcmcoKSA6IGFyZztcblxuICAvKipcbiAgICogQHBhcmFtIHthbnl9IGFyZ1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGhhc1RvUHJvbWlzZUZuID0gYXJnID0+IGFyZyAmJiB0eXBlb2YgYXJnLnRvUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJztcblxuICAvKipcbiAgICogQHBhcmFtIHthbnl9IGFyZ1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgY29uc3QgYXNQcm9taXNlID0gYXJnID0+IGhhc1RvUHJvbWlzZUZuKGFyZykgPyBhcmcudG9Qcm9taXNlKCkgOiBQcm9taXNlLnJlc29sdmUoYXJnKTtcblxuICAvKipcbiAgICogQHBhcmFtIHthbnl9IGFyZ1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzUHJvbWlzZSA9IGFyZyA9PiBhcmcgJiYgUHJvbWlzZS5yZXNvbHZlKGFyZykgPT09IGFyZztcblxuICAvKipcbiAgICogR2V0cyB0aGUgcG9wdXAgY29udGFpbmVyIHdoaWNoIGNvbnRhaW5zIHRoZSBiYWNrZHJvcCBhbmQgdGhlIHBvcHVwIGl0c2VsZi5cbiAgICpcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldENvbnRhaW5lciA9ICgpID0+IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuY29udGFpbmVyKSk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclN0cmluZ1xuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZWxlbWVudEJ5U2VsZWN0b3IgPSBzZWxlY3RvclN0cmluZyA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lciA/IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yU3RyaW5nKSA6IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGVsZW1lbnRCeUNsYXNzID0gY2xhc3NOYW1lID0+IHtcbiAgICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KGNsYXNzTmFtZSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0UG9wdXAgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5wb3B1cCk7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBjb25zdCBnZXRJY29uID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuaWNvbik7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBjb25zdCBnZXRJY29uQ29udGVudCA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWydpY29uLWNvbnRlbnQnXSk7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLnRpdGxlKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldEh0bWxDb250YWluZXIgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1snaHRtbC1jb250YWluZXInXSk7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBjb25zdCBnZXRJbWFnZSA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmltYWdlKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldFByb2dyZXNzU3RlcHMgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcHMnXSk7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBjb25zdCBnZXRWYWxpZGF0aW9uTWVzc2FnZSA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSk7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MQnV0dG9uRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBjb25zdCBnZXRDb25maXJtQnV0dG9uID0gKCkgPT4gLyoqIEB0eXBlIHtIVE1MQnV0dG9uRWxlbWVudH0gKi9lbGVtZW50QnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuYWN0aW9ucywgXCIgLlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29uZmlybSkpO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0Q2FuY2VsQnV0dG9uID0gKCkgPT4gLyoqIEB0eXBlIHtIVE1MQnV0dG9uRWxlbWVudH0gKi9lbGVtZW50QnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuYWN0aW9ucywgXCIgLlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2FuY2VsKSk7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MQnV0dG9uRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBjb25zdCBnZXREZW55QnV0dG9uID0gKCkgPT4gLyoqIEB0eXBlIHtIVE1MQnV0dG9uRWxlbWVudH0gKi9lbGVtZW50QnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuYWN0aW9ucywgXCIgLlwiKS5jb25jYXQoc3dhbENsYXNzZXMuZGVueSkpO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0SW5wdXRMYWJlbCA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWydpbnB1dC1sYWJlbCddKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldExvYWRlciA9ICgpID0+IGVsZW1lbnRCeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5sb2FkZXIpKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldEFjdGlvbnMgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5hY3Rpb25zKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldEZvb3RlciA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmZvb3Rlcik7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBjb25zdCBnZXRUaW1lclByb2dyZXNzQmFyID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ3RpbWVyLXByb2dyZXNzLWJhciddKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldENsb3NlQnV0dG9uID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY2xvc2UpO1xuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qa3VwL2ZvY3VzYWJsZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuICBjb25zdCBmb2N1c2FibGUgPSBcIlxcbiAgYVtocmVmXSxcXG4gIGFyZWFbaHJlZl0sXFxuICBpbnB1dDpub3QoW2Rpc2FibGVkXSksXFxuICBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLFxcbiAgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLFxcbiAgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSxcXG4gIGlmcmFtZSxcXG4gIG9iamVjdCxcXG4gIGVtYmVkLFxcbiAgW3RhYmluZGV4PVxcXCIwXFxcIl0sXFxuICBbY29udGVudGVkaXRhYmxlXSxcXG4gIGF1ZGlvW2NvbnRyb2xzXSxcXG4gIHZpZGVvW2NvbnRyb2xzXSxcXG4gIHN1bW1hcnlcXG5cIjtcbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudFtdfVxuICAgKi9cbiAgY29uc3QgZ2V0Rm9jdXNhYmxlRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLyoqIEB0eXBlIHtOb2RlTGlzdE9mPEhUTUxFbGVtZW50Pn0gKi9cbiAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKTpub3QoW3RhYmluZGV4PVwiMFwiXSknKTtcbiAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleFNvcnRlZCA9IEFycmF5LmZyb20oZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXgpXG4gICAgLy8gc29ydCBhY2NvcmRpbmcgdG8gdGFiaW5kZXhcbiAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgdGFiaW5kZXhBID0gcGFyc2VJbnQoYS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgfHwgJzAnKTtcbiAgICAgIGNvbnN0IHRhYmluZGV4QiA9IHBhcnNlSW50KGIuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpIHx8ICcwJyk7XG4gICAgICBpZiAodGFiaW5kZXhBID4gdGFiaW5kZXhCKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIGlmICh0YWJpbmRleEEgPCB0YWJpbmRleEIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICAvKiogQHR5cGUge05vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+fSAqL1xuICAgIGNvbnN0IG90aGVyRm9jdXNhYmxlRWxlbWVudHMgPSBwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKGZvY3VzYWJsZSk7XG4gICAgY29uc3Qgb3RoZXJGb2N1c2FibGVFbGVtZW50c0ZpbHRlcmVkID0gQXJyYXkuZnJvbShvdGhlckZvY3VzYWJsZUVsZW1lbnRzKS5maWx0ZXIoZWwgPT4gZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpICE9PSAnLTEnKTtcbiAgICByZXR1cm4gWy4uLm5ldyBTZXQoZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXhTb3J0ZWQuY29uY2F0KG90aGVyRm9jdXNhYmxlRWxlbWVudHNGaWx0ZXJlZCkpXS5maWx0ZXIoZWwgPT4gaXNWaXNpYmxlJDEoZWwpKTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc01vZGFsID0gKCkgPT4ge1xuICAgIHJldHVybiBoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5zaG93bikgJiYgIWhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKSAmJiAhaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzVG9hc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0NsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy50b2FzdCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNMb2FkaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBpZiAoIXBvcHVwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBwb3B1cC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZWN1cmVseSBzZXQgaW5uZXJIVE1MIG9mIGFuIGVsZW1lbnRcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8xOTI2XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAgICovXG4gIGNvbnN0IHNldElubmVySHRtbCA9IChlbGVtLCBodG1sKSA9PiB7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGlmIChodG1sKSB7XG4gICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuICAgICAgY29uc3QgaGVhZCA9IHBhcnNlZC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgICBoZWFkICYmIEFycmF5LmZyb20oaGVhZC5jaGlsZE5vZGVzKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGJvZHkgPSBwYXJzZWQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgYm9keSAmJiBBcnJheS5mcm9tKGJvZHkuY2hpbGROb2RlcykuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQgfHwgY2hpbGQgaW5zdGFuY2VvZiBIVE1MQXVkaW9FbGVtZW50KSB7XG4gICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChjaGlsZC5jbG9uZU5vZGUodHJ1ZSkpOyAvLyBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzI1MDdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBoYXNDbGFzcyA9IChlbGVtLCBjbGFzc05hbWUpID0+IHtcbiAgICBpZiAoIWNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBjbGFzc0xpc3QgPSBjbGFzc05hbWUuc3BsaXQoL1xccysvKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc0xpc3RbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCByZW1vdmVDdXN0b21DbGFzc2VzID0gKGVsZW0sIHBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oZWxlbS5jbGFzc0xpc3QpLmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhzd2FsQ2xhc3NlcykuaW5jbHVkZXMoY2xhc3NOYW1lKSAmJiAhT2JqZWN0LnZhbHVlcyhpY29uVHlwZXMpLmluY2x1ZGVzKGNsYXNzTmFtZSkgJiYgIU9iamVjdC52YWx1ZXMocGFyYW1zLnNob3dDbGFzcyB8fCB7fSkuaW5jbHVkZXMoY2xhc3NOYW1lKSkge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgY29uc3QgYXBwbHlDdXN0b21DbGFzcyA9IChlbGVtLCBwYXJhbXMsIGNsYXNzTmFtZSkgPT4ge1xuICAgIHJlbW92ZUN1c3RvbUNsYXNzZXMoZWxlbSwgcGFyYW1zKTtcbiAgICBpZiAocGFyYW1zLmN1c3RvbUNsYXNzICYmIHBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdKSB7XG4gICAgICBpZiAodHlwZW9mIHBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdICE9PSAnc3RyaW5nJyAmJiAhcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV0uZm9yRWFjaCkge1xuICAgICAgICB3YXJuKFwiSW52YWxpZCB0eXBlIG9mIGN1c3RvbUNsYXNzLlwiLmNvbmNhdChjbGFzc05hbWUsIFwiISBFeHBlY3RlZCBzdHJpbmcgb3IgaXRlcmFibGUgb2JqZWN0LCBnb3QgXFxcIlwiKS5jb25jYXQodHlwZW9mIHBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdLCBcIlxcXCJcIikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhZGRDbGFzcyhlbGVtLCBwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKiBAcGFyYW0ge2ltcG9ydCgnLi9yZW5kZXJlcnMvcmVuZGVySW5wdXQnKS5JbnB1dENsYXNzIHwgU3dlZXRBbGVydElucHV0fSBpbnB1dENsYXNzXG4gICAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldElucHV0JDEgPSAocG9wdXAsIGlucHV0Q2xhc3MpID0+IHtcbiAgICBpZiAoIWlucHV0Q2xhc3MpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzd2l0Y2ggKGlucHV0Q2xhc3MpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgcmV0dXJuIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnBvcHVwLCBcIiA+IC5cIikuY29uY2F0KHN3YWxDbGFzc2VzW2lucHV0Q2xhc3NdKSk7XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIHJldHVybiBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5wb3B1cCwgXCIgPiAuXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCIgaW5wdXRcIikpO1xuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICByZXR1cm4gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucG9wdXAsIFwiID4gLlwiKS5jb25jYXQoc3dhbENsYXNzZXMucmFkaW8sIFwiIGlucHV0OmNoZWNrZWRcIikpIHx8IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnBvcHVwLCBcIiA+IC5cIikuY29uY2F0KHN3YWxDbGFzc2VzLnJhZGlvLCBcIiBpbnB1dDpmaXJzdC1jaGlsZFwiKSk7XG4gICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgIHJldHVybiBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5wb3B1cCwgXCIgPiAuXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCIgaW5wdXRcIikpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnBvcHVwLCBcIiA+IC5cIikuY29uY2F0KHN3YWxDbGFzc2VzLmlucHV0KSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnR9IGlucHV0XG4gICAqL1xuICBjb25zdCBmb2N1c0lucHV0ID0gaW5wdXQgPT4ge1xuICAgIGlucHV0LmZvY3VzKCk7XG5cbiAgICAvLyBwbGFjZSBjdXJzb3IgYXQgZW5kIG9mIHRleHQgaW4gdGV4dCBpbnB1dFxuICAgIGlmIChpbnB1dC50eXBlICE9PSAnZmlsZScpIHtcbiAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIzNDU5MTVcbiAgICAgIGNvbnN0IHZhbCA9IGlucHV0LnZhbHVlO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGlucHV0LnZhbHVlID0gdmFsO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W10gfCBudWxsfSB0YXJnZXRcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBzdHJpbmdbXSB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgdW5kZWZpbmVkfSBjbGFzc0xpc3RcbiAgICogQHBhcmFtIHtib29sZWFufSBjb25kaXRpb25cbiAgICovXG4gIGNvbnN0IHRvZ2dsZUNsYXNzID0gKHRhcmdldCwgY2xhc3NMaXN0LCBjb25kaXRpb24pID0+IHtcbiAgICBpZiAoIXRhcmdldCB8fCAhY2xhc3NMaXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgY2xhc3NMaXN0ID0gY2xhc3NMaXN0LnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICAgIH1cbiAgICBjbGFzc0xpc3QuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICB0YXJnZXQuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICBjb25kaXRpb24gPyBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSA6IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmRpdGlvbiA/IHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgSFRNTEVsZW1lbnRbXSB8IG51bGx9IHRhcmdldFxuICAgKiBAcGFyYW0ge3N0cmluZyB8IHN0cmluZ1tdIHwgcmVhZG9ubHkgc3RyaW5nW10gfCB1bmRlZmluZWR9IGNsYXNzTGlzdFxuICAgKi9cbiAgY29uc3QgYWRkQ2xhc3MgPSAodGFyZ2V0LCBjbGFzc0xpc3QpID0+IHtcbiAgICB0b2dnbGVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgdHJ1ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudFtdIHwgbnVsbH0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgc3RyaW5nW10gfCByZWFkb25seSBzdHJpbmdbXSB8IHVuZGVmaW5lZH0gY2xhc3NMaXN0XG4gICAqL1xuICBjb25zdCByZW1vdmVDbGFzcyA9ICh0YXJnZXQsIGNsYXNzTGlzdCkgPT4ge1xuICAgIHRvZ2dsZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0LCBmYWxzZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBkaXJlY3QgY2hpbGQgb2YgYW4gZWxlbWVudCBieSBjbGFzcyBuYW1lXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCB1bmRlZmluZWR9XG4gICAqL1xuICBjb25zdCBnZXREaXJlY3RDaGlsZEJ5Q2xhc3MgPSAoZWxlbSwgY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKGVsZW0uY2hpbGRyZW4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBoYXNDbGFzcyhjaGlsZCwgY2xhc3NOYW1lKSkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eVxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqL1xuICBjb25zdCBhcHBseU51bWVyaWNhbFN0eWxlID0gKGVsZW0sIHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gXCJcIi5jb25jYXQocGFyc2VJbnQodmFsdWUpKSkge1xuICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSB8fCBwYXJzZUludCh2YWx1ZSkgPT09IDApIHtcbiAgICAgIGVsZW0uc3R5bGVbcHJvcGVydHldID0gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IFwiXCIuY29uY2F0KHZhbHVlLCBcInB4XCIpIDogdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IG51bGx9IGVsZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlcbiAgICovXG4gIGNvbnN0IHNob3cgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgIGxldCBkaXNwbGF5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnZmxleCc7XG4gICAgZWxlbSAmJiAoZWxlbS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBudWxsfSBlbGVtXG4gICAqL1xuICBjb25zdCBoaWRlID0gZWxlbSA9PiB7XG4gICAgZWxlbSAmJiAoZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBjb25zdCBzZXRTdHlsZSA9IChwYXJlbnQsIHNlbGVjdG9yLCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuICAgIGNvbnN0IGVsID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuc3R5bGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gICAqIEBwYXJhbSB7YW55fSBjb25kaXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlcbiAgICovXG4gIGNvbnN0IHRvZ2dsZSA9IGZ1bmN0aW9uIChlbGVtLCBjb25kaXRpb24pIHtcbiAgICBsZXQgZGlzcGxheSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJ2ZsZXgnO1xuICAgIGNvbmRpdGlvbiA/IHNob3coZWxlbSwgZGlzcGxheSkgOiBoaWRlKGVsZW0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBib3Jyb3dlZCBmcm9tIGpxdWVyeSAkKGVsZW0pLmlzKCc6dmlzaWJsZScpIGltcGxlbWVudGF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBudWxsfSBlbGVtXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNWaXNpYmxlJDEgPSBlbGVtID0+ICEhKGVsZW0gJiYgKGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkpO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGFsbEJ1dHRvbnNBcmVIaWRkZW4gPSAoKSA9PiAhaXNWaXNpYmxlJDEoZ2V0Q29uZmlybUJ1dHRvbigpKSAmJiAhaXNWaXNpYmxlJDEoZ2V0RGVueUJ1dHRvbigpKSAmJiAhaXNWaXNpYmxlJDEoZ2V0Q2FuY2VsQnV0dG9uKCkpO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNTY3JvbGxhYmxlID0gZWxlbSA9PiAhIShlbGVtLnNjcm9sbEhlaWdodCA+IGVsZW0uY2xpZW50SGVpZ2h0KTtcblxuICAvKipcbiAgICogYm9ycm93ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDYzNTIxMTlcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGhhc0Nzc0FuaW1hdGlvbiA9IGVsZW0gPT4ge1xuICAgIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSk7XG4gICAgY29uc3QgYW5pbUR1cmF0aW9uID0gcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdhbmltYXRpb24tZHVyYXRpb24nKSB8fCAnMCcpO1xuICAgIGNvbnN0IHRyYW5zRHVyYXRpb24gPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zaXRpb24tZHVyYXRpb24nKSB8fCAnMCcpO1xuICAgIHJldHVybiBhbmltRHVyYXRpb24gPiAwIHx8IHRyYW5zRHVyYXRpb24gPiAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXJcbiAgICogQHBhcmFtIHtib29sZWFufSByZXNldFxuICAgKi9cbiAgY29uc3QgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIgPSBmdW5jdGlvbiAodGltZXIpIHtcbiAgICBsZXQgcmVzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgIGNvbnN0IHRpbWVyUHJvZ3Jlc3NCYXIgPSBnZXRUaW1lclByb2dyZXNzQmFyKCk7XG4gICAgaWYgKCF0aW1lclByb2dyZXNzQmFyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc1Zpc2libGUkMSh0aW1lclByb2dyZXNzQmFyKSkge1xuICAgICAgaWYgKHJlc2V0KSB7XG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLnRyYW5zaXRpb24gPSBcIndpZHRoIFwiLmNvbmNhdCh0aW1lciAvIDEwMDAsIFwicyBsaW5lYXJcIik7XG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMCUnO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc3RvcFRpbWVyUHJvZ3Jlc3NCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGltZXJQcm9ncmVzc0JhciA9IGdldFRpbWVyUHJvZ3Jlc3NCYXIoKTtcbiAgICBpZiAoIXRpbWVyUHJvZ3Jlc3NCYXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGltZXJQcm9ncmVzc0JhcldpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGltZXJQcm9ncmVzc0Jhcikud2lkdGgpO1xuICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24nKTtcbiAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGNvbnN0IHRpbWVyUHJvZ3Jlc3NCYXJGdWxsV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aW1lclByb2dyZXNzQmFyKS53aWR0aCk7XG4gICAgY29uc3QgdGltZXJQcm9ncmVzc0JhclBlcmNlbnQgPSB0aW1lclByb2dyZXNzQmFyV2lkdGggLyB0aW1lclByb2dyZXNzQmFyRnVsbFdpZHRoICogMTAwO1xuICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBcIlwiLmNvbmNhdCh0aW1lclByb2dyZXNzQmFyUGVyY2VudCwgXCIlXCIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXRlY3QgTm9kZSBlbnZcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc05vZGVFbnYgPSAoKSA9PiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnO1xuXG4gIGNvbnN0IHN3ZWV0SFRNTCA9IFwiXFxuIDxkaXYgYXJpYS1sYWJlbGxlZGJ5PVxcXCJcIi5jb25jYXQoc3dhbENsYXNzZXMudGl0bGUsIFwiXFxcIiBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWydodG1sLWNvbnRhaW5lciddLCBcIlxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucG9wdXAsIFwiXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPlxcbiAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jbG9zZSwgXCJcXFwiPjwvYnV0dG9uPlxcbiAgIDx1bCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcHMnXSwgXCJcXFwiPjwvdWw+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIlxcXCI+PC9kaXY+XFxuICAgPGltZyBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pbWFnZSwgXCJcXFwiIC8+XFxuICAgPGgyIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnRpdGxlLCBcIlxcXCIgaWQ9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudGl0bGUsIFwiXFxcIj48L2gyPlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ2h0bWwtY29udGFpbmVyJ10sIFwiXFxcIiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1snaHRtbC1jb250YWluZXInXSwgXCJcXFwiPjwvZGl2PlxcbiAgIDxpbnB1dCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pbnB1dCwgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmlucHV0LCBcIlxcXCIgLz5cXG4gICA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuZmlsZSwgXCJcXFwiIC8+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCJcXFwiPlxcbiAgICAgPGlucHV0IHR5cGU9XFxcInJhbmdlXFxcIiAvPlxcbiAgICAgPG91dHB1dD48L291dHB1dD5cXG4gICA8L2Rpdj5cXG4gICA8c2VsZWN0IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnNlbGVjdCwgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnNlbGVjdCwgXCJcXFwiPjwvc2VsZWN0PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucmFkaW8sIFwiXFxcIj48L2Rpdj5cXG4gICA8bGFiZWwgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiXFxcIj5cXG4gICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgaWQ9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiXFxcIiAvPlxcbiAgICAgPHNwYW4gY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMubGFiZWwsIFwiXFxcIj48L3NwYW4+XFxuICAgPC9sYWJlbD5cXG4gICA8dGV4dGFyZWEgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudGV4dGFyZWEsIFwiXFxcIiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50ZXh0YXJlYSwgXCJcXFwiPjwvdGV4dGFyZWE+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10sIFwiXFxcIiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10sIFwiXFxcIj48L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmFjdGlvbnMsIFwiXFxcIj5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMubG9hZGVyLCBcIlxcXCI+PC9kaXY+XFxuICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29uZmlybSwgXCJcXFwiPjwvYnV0dG9uPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmRlbnksIFwiXFxcIj48L2J1dHRvbj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jYW5jZWwsIFwiXFxcIj48L2J1dHRvbj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmZvb3RlciwgXCJcXFwiPjwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ3RpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXInXSwgXCJcXFwiPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sndGltZXItcHJvZ3Jlc3MtYmFyJ10sIFwiXFxcIj48L2Rpdj5cXG4gICA8L2Rpdj5cXG4gPC9kaXY+XFxuXCIpLnJlcGxhY2UoLyhefFxcbilcXHMqL2csICcnKTtcblxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCByZXNldE9sZENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBvbGRDb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICBpZiAoIW9sZENvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvbGRDb250YWluZXIucmVtb3ZlKCk7XG4gICAgcmVtb3ZlQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIFtzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10sIHN3YWxDbGFzc2VzWydoYXMtY29sdW1uJ11dKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxID0gKCkgPT4ge1xuICAgIGdsb2JhbFN0YXRlLmN1cnJlbnRJbnN0YW5jZS5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG4gIH07XG4gIGNvbnN0IGFkZElucHV0Q2hhbmdlTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBjb25zdCBpbnB1dCA9IGdldERpcmVjdENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICAgIGNvbnN0IGZpbGUgPSBnZXREaXJlY3RDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmZpbGUpO1xuICAgIC8qKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudH0gKi9cbiAgICBjb25zdCByYW5nZSA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBpbnB1dFwiKSk7XG4gICAgLyoqIEB0eXBlIHtIVE1MT3V0cHV0RWxlbWVudH0gKi9cbiAgICBjb25zdCByYW5nZU91dHB1dCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBvdXRwdXRcIikpO1xuICAgIGNvbnN0IHNlbGVjdCA9IGdldERpcmVjdENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuc2VsZWN0KTtcbiAgICAvKiogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnR9ICovXG4gICAgY29uc3QgY2hlY2tib3ggPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCIgaW5wdXRcIikpO1xuICAgIGNvbnN0IHRleHRhcmVhID0gZ2V0RGlyZWN0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy50ZXh0YXJlYSk7XG4gICAgaW5wdXQub25pbnB1dCA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMTtcbiAgICBmaWxlLm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxO1xuICAgIHNlbGVjdC5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMTtcbiAgICBjaGVja2JveC5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMTtcbiAgICB0ZXh0YXJlYS5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxO1xuICAgIHJhbmdlLm9uaW5wdXQgPSAoKSA9PiB7XG4gICAgICByZXNldFZhbGlkYXRpb25NZXNzYWdlJDEoKTtcbiAgICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gICAgfTtcbiAgICByYW5nZS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMSgpO1xuICAgICAgcmFuZ2VPdXRwdXQudmFsdWUgPSByYW5nZS52YWx1ZTtcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEhUTUxFbGVtZW50fSB0YXJnZXRcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgY29uc3QgZ2V0VGFyZ2V0ID0gdGFyZ2V0ID0+IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHNldHVwQWNjZXNzaWJpbGl0eSA9IHBhcmFtcyA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgncm9sZScsIHBhcmFtcy50b2FzdCA/ICdhbGVydCcgOiAnZGlhbG9nJyk7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCBwYXJhbXMudG9hc3QgPyAncG9saXRlJyA6ICdhc3NlcnRpdmUnKTtcbiAgICBpZiAoIXBhcmFtcy50b2FzdCkge1xuICAgICAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgJ3RydWUnKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcbiAgICovXG4gIGNvbnN0IHNldHVwUlRMID0gdGFyZ2V0RWxlbWVudCA9PiB7XG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldEVsZW1lbnQpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgIGFkZENsYXNzKGdldENvbnRhaW5lcigpLCBzd2FsQ2xhc3Nlcy5ydGwpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWRkIG1vZGFsICsgYmFja2Ryb3AgKyBuby13YXIgbWVzc2FnZSBmb3IgUnVzc2lhbnMgdG8gRE9NXG4gICAqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgaW5pdCA9IHBhcmFtcyA9PiB7XG4gICAgLy8gQ2xlYW4gdXAgdGhlIG9sZCBwb3B1cCBjb250YWluZXIgaWYgaXQgZXhpc3RzXG4gICAgY29uc3Qgb2xkQ29udGFpbmVyRXhpc3RlZCA9IHJlc2V0T2xkQ29udGFpbmVyKCk7XG4gICAgaWYgKGlzTm9kZUVudigpKSB7XG4gICAgICBlcnJvcignU3dlZXRBbGVydDIgcmVxdWlyZXMgZG9jdW1lbnQgdG8gaW5pdGlhbGl6ZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuY29udGFpbmVyO1xuICAgIGlmIChvbGRDb250YWluZXJFeGlzdGVkKSB7XG4gICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzWyduby10cmFuc2l0aW9uJ10pO1xuICAgIH1cbiAgICBzZXRJbm5lckh0bWwoY29udGFpbmVyLCBzd2VldEhUTUwpO1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBnZXRUYXJnZXQocGFyYW1zLnRhcmdldCk7XG4gICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHNldHVwQWNjZXNzaWJpbGl0eShwYXJhbXMpO1xuICAgIHNldHVwUlRMKHRhcmdldEVsZW1lbnQpO1xuICAgIGFkZElucHV0Q2hhbmdlTGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBvYmplY3QgfCBzdHJpbmd9IHBhcmFtXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxuICAgKi9cbiAgY29uc3QgcGFyc2VIdG1sVG9Db250YWluZXIgPSAocGFyYW0sIHRhcmdldCkgPT4ge1xuICAgIC8vIERPTSBlbGVtZW50XG4gICAgaWYgKHBhcmFtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChwYXJhbSk7XG4gICAgfVxuXG4gICAgLy8gT2JqZWN0XG4gICAgZWxzZSBpZiAodHlwZW9mIHBhcmFtID09PSAnb2JqZWN0Jykge1xuICAgICAgaGFuZGxlT2JqZWN0KHBhcmFtLCB0YXJnZXQpO1xuICAgIH1cblxuICAgIC8vIFBsYWluIHN0cmluZ1xuICAgIGVsc2UgaWYgKHBhcmFtKSB7XG4gICAgICBzZXRJbm5lckh0bWwodGFyZ2V0LCBwYXJhbSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2FueX0gcGFyYW1cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAqL1xuICBjb25zdCBoYW5kbGVPYmplY3QgPSAocGFyYW0sIHRhcmdldCkgPT4ge1xuICAgIC8vIEpRdWVyeSBlbGVtZW50KHMpXG4gICAgaWYgKHBhcmFtLmpxdWVyeSkge1xuICAgICAgaGFuZGxlSnF1ZXJ5RWxlbSh0YXJnZXQsIHBhcmFtKTtcbiAgICB9XG5cbiAgICAvLyBGb3Igb3RoZXIgb2JqZWN0cyB1c2UgdGhlaXIgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgZWxzZSB7XG4gICAgICBzZXRJbm5lckh0bWwodGFyZ2V0LCBwYXJhbS50b1N0cmluZygpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxuICAgKiBAcGFyYW0ge2FueX0gZWxlbVxuICAgKi9cbiAgY29uc3QgaGFuZGxlSnF1ZXJ5RWxlbSA9ICh0YXJnZXQsIGVsZW0pID0+IHtcbiAgICB0YXJnZXQudGV4dENvbnRlbnQgPSAnJztcbiAgICBpZiAoMCBpbiBlbGVtKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgKGkgaW4gZWxlbSk7IGkrKykge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbVtpXS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMgeyd3ZWJraXRBbmltYXRpb25FbmQnIHwgJ2FuaW1hdGlvbmVuZCcgfCBmYWxzZX1cbiAgICovXG4gIGNvbnN0IGFuaW1hdGlvbkVuZEV2ZW50ID0gKCgpID0+IHtcbiAgICAvLyBQcmV2ZW50IHJ1biBpbiBOb2RlIGVudlxuICAgIGlmIChpc05vZGVFbnYoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYVxuICAgIGlmICh0eXBlb2YgdGVzdEVsLnN0eWxlLndlYmtpdEFuaW1hdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiAnd2Via2l0QW5pbWF0aW9uRW5kJztcbiAgICB9XG5cbiAgICAvLyBTdGFuZGFyZCBzeW50YXhcbiAgICBpZiAodHlwZW9mIHRlc3RFbC5zdHlsZS5hbmltYXRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gJ2FuaW1hdGlvbmVuZCc7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHJlbmRlckFjdGlvbnMgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gICAgY29uc3QgbG9hZGVyID0gZ2V0TG9hZGVyKCk7XG4gICAgaWYgKCFhY3Rpb25zIHx8ICFsb2FkZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBY3Rpb25zIChidXR0b25zKSB3cmFwcGVyXG4gICAgaWYgKCFwYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24gJiYgIXBhcmFtcy5zaG93RGVueUJ1dHRvbiAmJiAhcGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICAgIGhpZGUoYWN0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3coYWN0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gQ3VzdG9tIGNsYXNzXG4gICAgYXBwbHlDdXN0b21DbGFzcyhhY3Rpb25zLCBwYXJhbXMsICdhY3Rpb25zJyk7XG5cbiAgICAvLyBSZW5kZXIgYWxsIHRoZSBidXR0b25zXG4gICAgcmVuZGVyQnV0dG9ucyhhY3Rpb25zLCBsb2FkZXIsIHBhcmFtcyk7XG5cbiAgICAvLyBMb2FkZXJcbiAgICBzZXRJbm5lckh0bWwobG9hZGVyLCBwYXJhbXMubG9hZGVySHRtbCB8fCAnJyk7XG4gICAgYXBwbHlDdXN0b21DbGFzcyhsb2FkZXIsIHBhcmFtcywgJ2xvYWRlcicpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBhY3Rpb25zXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGxvYWRlclxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGZ1bmN0aW9uIHJlbmRlckJ1dHRvbnMoYWN0aW9ucywgbG9hZGVyLCBwYXJhbXMpIHtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIGNvbnN0IGRlbnlCdXR0b24gPSBnZXREZW55QnV0dG9uKCk7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG4gICAgaWYgKCFjb25maXJtQnV0dG9uIHx8ICFkZW55QnV0dG9uIHx8ICFjYW5jZWxCdXR0b24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBSZW5kZXIgYnV0dG9uc1xuICAgIHJlbmRlckJ1dHRvbihjb25maXJtQnV0dG9uLCAnY29uZmlybScsIHBhcmFtcyk7XG4gICAgcmVuZGVyQnV0dG9uKGRlbnlCdXR0b24sICdkZW55JywgcGFyYW1zKTtcbiAgICByZW5kZXJCdXR0b24oY2FuY2VsQnV0dG9uLCAnY2FuY2VsJywgcGFyYW1zKTtcbiAgICBoYW5kbGVCdXR0b25zU3R5bGluZyhjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b24sIHBhcmFtcyk7XG4gICAgaWYgKHBhcmFtcy5yZXZlcnNlQnV0dG9ucykge1xuICAgICAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgICAgICBhY3Rpb25zLmluc2VydEJlZm9yZShjYW5jZWxCdXR0b24sIGNvbmZpcm1CdXR0b24pO1xuICAgICAgICBhY3Rpb25zLmluc2VydEJlZm9yZShkZW55QnV0dG9uLCBjb25maXJtQnV0dG9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGNhbmNlbEJ1dHRvbiwgbG9hZGVyKTtcbiAgICAgICAgYWN0aW9ucy5pbnNlcnRCZWZvcmUoZGVueUJ1dHRvbiwgbG9hZGVyKTtcbiAgICAgICAgYWN0aW9ucy5pbnNlcnRCZWZvcmUoY29uZmlybUJ1dHRvbiwgbG9hZGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29uZmlybUJ1dHRvblxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkZW55QnV0dG9uXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNhbmNlbEJ1dHRvblxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbnNTdHlsaW5nKGNvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbiwgcGFyYW1zKSB7XG4gICAgaWYgKCFwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICAgIHJlbW92ZUNsYXNzKFtjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhZGRDbGFzcyhbY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uXSwgc3dhbENsYXNzZXMuc3R5bGVkKTtcblxuICAgIC8vIEJ1dHRvbnMgYmFja2dyb3VuZCBjb2xvcnNcbiAgICBpZiAocGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcikge1xuICAgICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yO1xuICAgICAgYWRkQ2xhc3MoY29uZmlybUJ1dHRvbiwgc3dhbENsYXNzZXNbJ2RlZmF1bHQtb3V0bGluZSddKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5kZW55QnV0dG9uQ29sb3IpIHtcbiAgICAgIGRlbnlCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmRlbnlCdXR0b25Db2xvcjtcbiAgICAgIGFkZENsYXNzKGRlbnlCdXR0b24sIHN3YWxDbGFzc2VzWydkZWZhdWx0LW91dGxpbmUnXSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuY2FuY2VsQnV0dG9uQ29sb3IpIHtcbiAgICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY2FuY2VsQnV0dG9uQ29sb3I7XG4gICAgICBhZGRDbGFzcyhjYW5jZWxCdXR0b24sIHN3YWxDbGFzc2VzWydkZWZhdWx0LW91dGxpbmUnXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ1dHRvblxuICAgKiBAcGFyYW0geydjb25maXJtJyB8ICdkZW55JyB8ICdjYW5jZWwnfSBidXR0b25UeXBlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyQnV0dG9uKGJ1dHRvbiwgYnV0dG9uVHlwZSwgcGFyYW1zKSB7XG4gICAgY29uc3QgYnV0dG9uTmFtZSA9IC8qKiBAdHlwZSB7J0NvbmZpcm0nIHwgJ0RlbnknIHwgJ0NhbmNlbCd9ICovY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGJ1dHRvblR5cGUpO1xuICAgIHRvZ2dsZShidXR0b24sIHBhcmFtc1tcInNob3dcIi5jb25jYXQoYnV0dG9uTmFtZSwgXCJCdXR0b25cIildLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgc2V0SW5uZXJIdG1sKGJ1dHRvbiwgcGFyYW1zW1wiXCIuY29uY2F0KGJ1dHRvblR5cGUsIFwiQnV0dG9uVGV4dFwiKV0gfHwgJycpOyAvLyBTZXQgY2FwdGlvbiB0ZXh0XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtc1tcIlwiLmNvbmNhdChidXR0b25UeXBlLCBcIkJ1dHRvbkFyaWFMYWJlbFwiKV0gfHwgJycpOyAvLyBBUklBIGxhYmVsXG5cbiAgICAvLyBBZGQgYnV0dG9ucyBjdXN0b20gY2xhc3Nlc1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlc1tidXR0b25UeXBlXTtcbiAgICBhcHBseUN1c3RvbUNsYXNzKGJ1dHRvbiwgcGFyYW1zLCBcIlwiLmNvbmNhdChidXR0b25UeXBlLCBcIkJ1dHRvblwiKSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHJlbmRlckNsb3NlQnV0dG9uID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGdldENsb3NlQnV0dG9uKCk7XG4gICAgaWYgKCFjbG9zZUJ1dHRvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRJbm5lckh0bWwoY2xvc2VCdXR0b24sIHBhcmFtcy5jbG9zZUJ1dHRvbkh0bWwgfHwgJycpO1xuXG4gICAgLy8gQ3VzdG9tIGNsYXNzXG4gICAgYXBwbHlDdXN0b21DbGFzcyhjbG9zZUJ1dHRvbiwgcGFyYW1zLCAnY2xvc2VCdXR0b24nKTtcbiAgICB0b2dnbGUoY2xvc2VCdXR0b24sIHBhcmFtcy5zaG93Q2xvc2VCdXR0b24pO1xuICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jbG9zZUJ1dHRvbkFyaWFMYWJlbCB8fCAnJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCByZW5kZXJDb250YWluZXIgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhhbmRsZUJhY2tkcm9wUGFyYW0oY29udGFpbmVyLCBwYXJhbXMuYmFja2Ryb3ApO1xuICAgIGhhbmRsZVBvc2l0aW9uUGFyYW0oY29udGFpbmVyLCBwYXJhbXMucG9zaXRpb24pO1xuICAgIGhhbmRsZUdyb3dQYXJhbShjb250YWluZXIsIHBhcmFtcy5ncm93KTtcblxuICAgIC8vIEN1c3RvbSBjbGFzc1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoY29udGFpbmVyLCBwYXJhbXMsICdjb250YWluZXInKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnNbJ2JhY2tkcm9wJ119IGJhY2tkcm9wXG4gICAqL1xuICBmdW5jdGlvbiBoYW5kbGVCYWNrZHJvcFBhcmFtKGNvbnRhaW5lciwgYmFja2Ryb3ApIHtcbiAgICBpZiAodHlwZW9mIGJhY2tkcm9wID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQgPSBiYWNrZHJvcDtcbiAgICB9IGVsc2UgaWYgKCFiYWNrZHJvcCkge1xuICAgICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnNbJ3Bvc2l0aW9uJ119IHBvc2l0aW9uXG4gICAqL1xuICBmdW5jdGlvbiBoYW5kbGVQb3NpdGlvblBhcmFtKGNvbnRhaW5lciwgcG9zaXRpb24pIHtcbiAgICBpZiAoIXBvc2l0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwb3NpdGlvbiBpbiBzd2FsQ2xhc3Nlcykge1xuICAgICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1twb3NpdGlvbl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKCdUaGUgXCJwb3NpdGlvblwiIHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJjZW50ZXJcIicpO1xuICAgICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlcy5jZW50ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc1snZ3JvdyddfSBncm93XG4gICAqL1xuICBmdW5jdGlvbiBoYW5kbGVHcm93UGFyYW0oY29udGFpbmVyLCBncm93KSB7XG4gICAgaWYgKCFncm93KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbXCJncm93LVwiLmNvbmNhdChncm93KV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGBXZWFrTWFwYHMgZm9yIGVhY2ggZWZmZWN0aXZlbHktXCJwcml2YXRlICBwcm9wZXJ0eVwiIHRoYXQgYSBgU3dhbGAgaGFzLlxuICAgKiBGb3IgZXhhbXBsZSwgdG8gc2V0IHRoZSBwcml2YXRlIHByb3BlcnR5IFwiZm9vXCIgb2YgYHRoaXNgIHRvIFwiYmFyXCIsIHlvdSBjYW4gYHByaXZhdGVQcm9wcy5mb28uc2V0KHRoaXMsICdiYXInKWBcbiAgICogVGhpcyBpcyB0aGUgYXBwcm9hY2ggdGhhdCBCYWJlbCB3aWxsIHByb2JhYmx5IHRha2UgdG8gaW1wbGVtZW50IHByaXZhdGUgbWV0aG9kcy9maWVsZHNcbiAgICogICBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcml2YXRlLW1ldGhvZHNcbiAgICogICBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvcHVsbC83NTU1XG4gICAqIE9uY2Ugd2UgaGF2ZSB0aGUgY2hhbmdlcyBmcm9tIHRoYXQgUFIgaW4gQmFiZWwsIGFuZCBvdXIgY29yZSBjbGFzcyBmaXRzIHJlYXNvbmFibGUgaW4gKm9uZSBtb2R1bGUqXG4gICAqICAgdGhlbiB3ZSBjYW4gdXNlIHRoYXQgbGFuZ3VhZ2UgZmVhdHVyZS5cbiAgICovXG5cbiAgdmFyIHByaXZhdGVQcm9wcyA9IHtcbiAgICBpbm5lclBhcmFtczogbmV3IFdlYWtNYXAoKSxcbiAgICBkb21DYWNoZTogbmV3IFdlYWtNYXAoKVxuICB9O1xuXG4gIC8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi9zd2VldGFsZXJ0Mi5kLnRzXCIvPlxuXG5cbiAgLyoqIEB0eXBlIHtJbnB1dENsYXNzW119ICovXG4gIGNvbnN0IGlucHV0Q2xhc3NlcyA9IFsnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAndGV4dGFyZWEnXTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHJlbmRlcklucHV0ID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFwb3B1cCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICAgIGNvbnN0IHJlcmVuZGVyID0gIWlubmVyUGFyYW1zIHx8IHBhcmFtcy5pbnB1dCAhPT0gaW5uZXJQYXJhbXMuaW5wdXQ7XG4gICAgaW5wdXRDbGFzc2VzLmZvckVhY2goaW5wdXRDbGFzcyA9PiB7XG4gICAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGdldERpcmVjdENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXNbaW5wdXRDbGFzc10pO1xuICAgICAgaWYgKCFpbnB1dENvbnRhaW5lcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCBhdHRyaWJ1dGVzXG4gICAgICBzZXRBdHRyaWJ1dGVzKGlucHV0Q2xhc3MsIHBhcmFtcy5pbnB1dEF0dHJpYnV0ZXMpO1xuXG4gICAgICAvLyBzZXQgY2xhc3NcbiAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzW2lucHV0Q2xhc3NdO1xuICAgICAgaWYgKHJlcmVuZGVyKSB7XG4gICAgICAgIGhpZGUoaW5wdXRDb250YWluZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChwYXJhbXMuaW5wdXQpIHtcbiAgICAgIGlmIChyZXJlbmRlcikge1xuICAgICAgICBzaG93SW5wdXQocGFyYW1zKTtcbiAgICAgIH1cbiAgICAgIC8vIHNldCBjdXN0b20gY2xhc3NcbiAgICAgIHNldEN1c3RvbUNsYXNzKHBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHNob3dJbnB1dCA9IHBhcmFtcyA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5wdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFyZW5kZXJJbnB1dFR5cGVbcGFyYW1zLmlucHV0XSkge1xuICAgICAgZXJyb3IoXCJVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXQhIEV4cGVjdGVkIFxcXCJ0ZXh0XFxcIiwgXFxcImVtYWlsXFxcIiwgXFxcInBhc3N3b3JkXFxcIiwgXFxcIm51bWJlclxcXCIsIFxcXCJ0ZWxcXFwiLCBcXFwic2VsZWN0XFxcIiwgXFxcInJhZGlvXFxcIiwgXFxcImNoZWNrYm94XFxcIiwgXFxcInRleHRhcmVhXFxcIiwgXFxcImZpbGVcXFwiIG9yIFxcXCJ1cmxcXFwiLCBnb3QgXFxcIlwiLmNvbmNhdChwYXJhbXMuaW5wdXQsIFwiXFxcIlwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZ2V0SW5wdXRDb250YWluZXIocGFyYW1zLmlucHV0KTtcbiAgICBjb25zdCBpbnB1dCA9IHJlbmRlcklucHV0VHlwZVtwYXJhbXMuaW5wdXRdKGlucHV0Q29udGFpbmVyLCBwYXJhbXMpO1xuICAgIHNob3coaW5wdXRDb250YWluZXIpO1xuXG4gICAgLy8gaW5wdXQgYXV0b2ZvY3VzXG4gICAgaWYgKHBhcmFtcy5pbnB1dEF1dG9Gb2N1cykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZvY3VzSW5wdXQoaW5wdXQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGlucHV0XG4gICAqL1xuICBjb25zdCByZW1vdmVBdHRyaWJ1dGVzID0gaW5wdXQgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYXR0ck5hbWUgPSBpbnB1dC5hdHRyaWJ1dGVzW2ldLm5hbWU7XG4gICAgICBpZiAoIVsnaWQnLCAndHlwZScsICd2YWx1ZScsICdzdHlsZSddLmluY2x1ZGVzKGF0dHJOYW1lKSkge1xuICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtJbnB1dENsYXNzfSBpbnB1dENsYXNzXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnNbJ2lucHV0QXR0cmlidXRlcyddfSBpbnB1dEF0dHJpYnV0ZXNcbiAgICovXG4gIGNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoaW5wdXRDbGFzcywgaW5wdXRBdHRyaWJ1dGVzKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBnZXRJbnB1dCQxKGdldFBvcHVwKCksIGlucHV0Q2xhc3MpO1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVtb3ZlQXR0cmlidXRlcyhpbnB1dCk7XG4gICAgZm9yIChjb25zdCBhdHRyIGluIGlucHV0QXR0cmlidXRlcykge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKGF0dHIsIGlucHV0QXR0cmlidXRlc1thdHRyXSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHNldEN1c3RvbUNsYXNzID0gcGFyYW1zID0+IHtcbiAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGdldElucHV0Q29udGFpbmVyKHBhcmFtcy5pbnB1dCk7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuY3VzdG9tQ2xhc3MgPT09ICdvYmplY3QnKSB7XG4gICAgICBhZGRDbGFzcyhpbnB1dENvbnRhaW5lciwgcGFyYW1zLmN1c3RvbUNsYXNzLmlucHV0KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnR9IGlucHV0XG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3Qgc2V0SW5wdXRQbGFjZWhvbGRlciA9IChpbnB1dCwgcGFyYW1zKSA9PiB7XG4gICAgaWYgKCFpbnB1dC5wbGFjZWhvbGRlciB8fCBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcikge1xuICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SW5wdXR9IGlucHV0XG4gICAqIEBwYXJhbSB7SW5wdXR9IHByZXBlbmRUb1xuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHNldElucHV0TGFiZWwgPSAoaW5wdXQsIHByZXBlbmRUbywgcGFyYW1zKSA9PiB7XG4gICAgaWYgKHBhcmFtcy5pbnB1dExhYmVsKSB7XG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICBjb25zdCBsYWJlbENsYXNzID0gc3dhbENsYXNzZXNbJ2lucHV0LWxhYmVsJ107XG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0LmlkKTtcbiAgICAgIGxhYmVsLmNsYXNzTmFtZSA9IGxhYmVsQ2xhc3M7XG4gICAgICBpZiAodHlwZW9mIHBhcmFtcy5jdXN0b21DbGFzcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYWRkQ2xhc3MobGFiZWwsIHBhcmFtcy5jdXN0b21DbGFzcy5pbnB1dExhYmVsKTtcbiAgICAgIH1cbiAgICAgIGxhYmVsLmlubmVyVGV4dCA9IHBhcmFtcy5pbnB1dExhYmVsO1xuICAgICAgcHJlcGVuZFRvLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBsYWJlbCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zWydpbnB1dCddfSBpbnB1dFR5cGVcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgY29uc3QgZ2V0SW5wdXRDb250YWluZXIgPSBpbnB1dFR5cGUgPT4ge1xuICAgIHJldHVybiBnZXREaXJlY3RDaGlsZEJ5Q2xhc3MoZ2V0UG9wdXAoKSwgc3dhbENsYXNzZXNbaW5wdXRUeXBlXSB8fCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudCB8IEhUTUxPdXRwdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudH0gaW5wdXRcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc1snaW5wdXRWYWx1ZSddfSBpbnB1dFZhbHVlXG4gICAqL1xuICBjb25zdCBjaGVja0FuZFNldElucHV0VmFsdWUgPSAoaW5wdXQsIGlucHV0VmFsdWUpID0+IHtcbiAgICBpZiAoWydzdHJpbmcnLCAnbnVtYmVyJ10uaW5jbHVkZXModHlwZW9mIGlucHV0VmFsdWUpKSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IFwiXCIuY29uY2F0KGlucHV0VmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoIWlzUHJvbWlzZShpbnB1dFZhbHVlKSkge1xuICAgICAgd2FybihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dFZhbHVlISBFeHBlY3RlZCBcXFwic3RyaW5nXFxcIiwgXFxcIm51bWJlclxcXCIgb3IgXFxcIlByb21pc2VcXFwiLCBnb3QgXFxcIlwiLmNvbmNhdCh0eXBlb2YgaW5wdXRWYWx1ZSwgXCJcXFwiXCIpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqIEB0eXBlIHtSZWNvcmQ8U3dlZXRBbGVydElucHV0LCAoaW5wdXQ6IElucHV0IHwgSFRNTEVsZW1lbnQsIHBhcmFtczogU3dlZXRBbGVydE9wdGlvbnMpID0+IElucHV0Pn0gKi9cbiAgY29uc3QgcmVuZGVySW5wdXRUeXBlID0ge307XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gaW5wdXRcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50fVxuICAgKi9cbiAgcmVuZGVySW5wdXRUeXBlLnRleHQgPSByZW5kZXJJbnB1dFR5cGUuZW1haWwgPSByZW5kZXJJbnB1dFR5cGUucGFzc3dvcmQgPSByZW5kZXJJbnB1dFR5cGUubnVtYmVyID0gcmVuZGVySW5wdXRUeXBlLnRlbCA9IHJlbmRlcklucHV0VHlwZS51cmwgPSAoaW5wdXQsIHBhcmFtcykgPT4ge1xuICAgIGNoZWNrQW5kU2V0SW5wdXRWYWx1ZShpbnB1dCwgcGFyYW1zLmlucHV0VmFsdWUpO1xuICAgIHNldElucHV0TGFiZWwoaW5wdXQsIGlucHV0LCBwYXJhbXMpO1xuICAgIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcyk7XG4gICAgaW5wdXQudHlwZSA9IHBhcmFtcy5pbnB1dDtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gaW5wdXRcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50fVxuICAgKi9cbiAgcmVuZGVySW5wdXRUeXBlLmZpbGUgPSAoaW5wdXQsIHBhcmFtcykgPT4ge1xuICAgIHNldElucHV0TGFiZWwoaW5wdXQsIGlucHV0LCBwYXJhbXMpO1xuICAgIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcyk7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IHJhbmdlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7SFRNTElucHV0RWxlbWVudH1cbiAgICovXG4gIHJlbmRlcklucHV0VHlwZS5yYW5nZSA9IChyYW5nZSwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3QgcmFuZ2VJbnB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgY29uc3QgcmFuZ2VPdXRwdXQgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCdvdXRwdXQnKTtcbiAgICBjaGVja0FuZFNldElucHV0VmFsdWUocmFuZ2VJbnB1dCwgcGFyYW1zLmlucHV0VmFsdWUpO1xuICAgIHJhbmdlSW5wdXQudHlwZSA9IHBhcmFtcy5pbnB1dDtcbiAgICBjaGVja0FuZFNldElucHV0VmFsdWUocmFuZ2VPdXRwdXQsIHBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgICBzZXRJbnB1dExhYmVsKHJhbmdlSW5wdXQsIHJhbmdlLCBwYXJhbXMpO1xuICAgIHJldHVybiByYW5nZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MU2VsZWN0RWxlbWVudH0gc2VsZWN0XG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7SFRNTFNlbGVjdEVsZW1lbnR9XG4gICAqL1xuICByZW5kZXJJbnB1dFR5cGUuc2VsZWN0ID0gKHNlbGVjdCwgcGFyYW1zKSA9PiB7XG4gICAgc2VsZWN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgaWYgKHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKSB7XG4gICAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgc2V0SW5uZXJIdG1sKHBsYWNlaG9sZGVyLCBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcik7XG4gICAgICBwbGFjZWhvbGRlci52YWx1ZSA9ICcnO1xuICAgICAgcGxhY2Vob2xkZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcGxhY2Vob2xkZXIuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcbiAgICB9XG4gICAgc2V0SW5wdXRMYWJlbChzZWxlY3QsIHNlbGVjdCwgcGFyYW1zKTtcbiAgICByZXR1cm4gc2VsZWN0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IHJhZGlvXG4gICAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50fVxuICAgKi9cbiAgcmVuZGVySW5wdXRUeXBlLnJhZGlvID0gcmFkaW8gPT4ge1xuICAgIHJhZGlvLnRleHRDb250ZW50ID0gJyc7XG4gICAgcmV0dXJuIHJhZGlvO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxMYWJlbEVsZW1lbnR9IGNoZWNrYm94Q29udGFpbmVyXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7SFRNTElucHV0RWxlbWVudH1cbiAgICovXG4gIHJlbmRlcklucHV0VHlwZS5jaGVja2JveCA9IChjaGVja2JveENvbnRhaW5lciwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBnZXRJbnB1dCQxKGdldFBvcHVwKCksICdjaGVja2JveCcpO1xuICAgIGNoZWNrYm94LnZhbHVlID0gJzEnO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBCb29sZWFuKHBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgICBjb25zdCBsYWJlbCA9IGNoZWNrYm94Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICBzZXRJbm5lckh0bWwobGFiZWwsIHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKTtcbiAgICByZXR1cm4gY2hlY2tib3g7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTFRleHRBcmVhRWxlbWVudH0gdGV4dGFyZWFcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtIVE1MVGV4dEFyZWFFbGVtZW50fVxuICAgKi9cbiAgcmVuZGVySW5wdXRUeXBlLnRleHRhcmVhID0gKHRleHRhcmVhLCBwYXJhbXMpID0+IHtcbiAgICBjaGVja0FuZFNldElucHV0VmFsdWUodGV4dGFyZWEsIHBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgICBzZXRJbnB1dFBsYWNlaG9sZGVyKHRleHRhcmVhLCBwYXJhbXMpO1xuICAgIHNldElucHV0TGFiZWwodGV4dGFyZWEsIHRleHRhcmVhLCBwYXJhbXMpO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGNvbnN0IGdldE1hcmdpbiA9IGVsID0+IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5tYXJnaW5MZWZ0KSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5tYXJnaW5SaWdodCk7XG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzIyOTFcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMTY5OVxuICAgICAgaWYgKCdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbFBvcHVwV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShnZXRQb3B1cCgpKS53aWR0aCk7XG4gICAgICAgIGNvbnN0IHRleHRhcmVhUmVzaXplSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB0ZXhhcmVhIGlzIHN0aWxsIGluIGRvY3VtZW50IChpLmUuIHBvcHVwIHdhc24ndCBjbG9zZWQgaW4gdGhlIG1lYW50aW1lKVxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyh0ZXh0YXJlYSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgdGV4dGFyZWFXaWR0aCA9IHRleHRhcmVhLm9mZnNldFdpZHRoICsgZ2V0TWFyZ2luKHRleHRhcmVhKTtcbiAgICAgICAgICBpZiAodGV4dGFyZWFXaWR0aCA+IGluaXRpYWxQb3B1cFdpZHRoKSB7XG4gICAgICAgICAgICBnZXRQb3B1cCgpLnN0eWxlLndpZHRoID0gXCJcIi5jb25jYXQodGV4dGFyZWFXaWR0aCwgXCJweFwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXBwbHlOdW1lcmljYWxTdHlsZShnZXRQb3B1cCgpLCAnd2lkdGgnLCBwYXJhbXMud2lkdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGV4dGFyZWFSZXNpemVIYW5kbGVyKS5vYnNlcnZlKHRleHRhcmVhLCB7XG4gICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGV4dGFyZWE7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCByZW5kZXJDb250ZW50ID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBodG1sQ29udGFpbmVyID0gZ2V0SHRtbENvbnRhaW5lcigpO1xuICAgIGlmICghaHRtbENvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhcHBseUN1c3RvbUNsYXNzKGh0bWxDb250YWluZXIsIHBhcmFtcywgJ2h0bWxDb250YWluZXInKTtcblxuICAgIC8vIENvbnRlbnQgYXMgSFRNTFxuICAgIGlmIChwYXJhbXMuaHRtbCkge1xuICAgICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLmh0bWwsIGh0bWxDb250YWluZXIpO1xuICAgICAgc2hvdyhodG1sQ29udGFpbmVyLCAnYmxvY2snKTtcbiAgICB9XG5cbiAgICAvLyBDb250ZW50IGFzIHBsYWluIHRleHRcbiAgICBlbHNlIGlmIChwYXJhbXMudGV4dCkge1xuICAgICAgaHRtbENvbnRhaW5lci50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0O1xuICAgICAgc2hvdyhodG1sQ29udGFpbmVyLCAnYmxvY2snKTtcbiAgICB9XG5cbiAgICAvLyBObyBjb250ZW50XG4gICAgZWxzZSB7XG4gICAgICBoaWRlKGh0bWxDb250YWluZXIpO1xuICAgIH1cbiAgICByZW5kZXJJbnB1dChpbnN0YW5jZSwgcGFyYW1zKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHJlbmRlckZvb3RlciA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZ2V0Rm9vdGVyKCk7XG4gICAgaWYgKCFmb290ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdG9nZ2xlKGZvb3RlciwgcGFyYW1zLmZvb3RlciwgJ2Jsb2NrJyk7XG4gICAgaWYgKHBhcmFtcy5mb290ZXIpIHtcbiAgICAgIHBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtcy5mb290ZXIsIGZvb3Rlcik7XG4gICAgfVxuXG4gICAgLy8gQ3VzdG9tIGNsYXNzXG4gICAgYXBwbHlDdXN0b21DbGFzcyhmb290ZXIsIHBhcmFtcywgJ2Zvb3RlcicpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgcmVuZGVySWNvbiA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcbiAgICBjb25zdCBpY29uID0gZ2V0SWNvbigpO1xuICAgIGlmICghaWNvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZSBnaXZlbiBpY29uIGFscmVhZHkgcmVuZGVyZWQsIGFwcGx5IHRoZSBzdHlsaW5nIHdpdGhvdXQgcmUtcmVuZGVyaW5nIHRoZSBpY29uXG4gICAgaWYgKGlubmVyUGFyYW1zICYmIHBhcmFtcy5pY29uID09PSBpbm5lclBhcmFtcy5pY29uKSB7XG4gICAgICAvLyBDdXN0b20gb3IgZGVmYXVsdCBjb250ZW50XG4gICAgICBzZXRDb250ZW50KGljb24sIHBhcmFtcyk7XG4gICAgICBhcHBseVN0eWxlcyhpY29uLCBwYXJhbXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXBhcmFtcy5pY29uICYmICFwYXJhbXMuaWNvbkh0bWwpIHtcbiAgICAgIGhpZGUoaWNvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwYXJhbXMuaWNvbiAmJiBPYmplY3Qua2V5cyhpY29uVHlwZXMpLmluZGV4T2YocGFyYW1zLmljb24pID09PSAtMSkge1xuICAgICAgZXJyb3IoXCJVbmtub3duIGljb24hIEV4cGVjdGVkIFxcXCJzdWNjZXNzXFxcIiwgXFxcImVycm9yXFxcIiwgXFxcIndhcm5pbmdcXFwiLCBcXFwiaW5mb1xcXCIgb3IgXFxcInF1ZXN0aW9uXFxcIiwgZ290IFxcXCJcIi5jb25jYXQocGFyYW1zLmljb24sIFwiXFxcIlwiKSk7XG4gICAgICBoaWRlKGljb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzaG93KGljb24pO1xuXG4gICAgLy8gQ3VzdG9tIG9yIGRlZmF1bHQgY29udGVudFxuICAgIHNldENvbnRlbnQoaWNvbiwgcGFyYW1zKTtcbiAgICBhcHBseVN0eWxlcyhpY29uLCBwYXJhbXMpO1xuXG4gICAgLy8gQW5pbWF0ZSBpY29uXG4gICAgYWRkQ2xhc3MoaWNvbiwgcGFyYW1zLnNob3dDbGFzcyAmJiBwYXJhbXMuc2hvd0NsYXNzLmljb24pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpY29uXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgYXBwbHlTdHlsZXMgPSAoaWNvbiwgcGFyYW1zKSA9PiB7XG4gICAgZm9yIChjb25zdCBbaWNvblR5cGUsIGljb25DbGFzc05hbWVdIG9mIE9iamVjdC5lbnRyaWVzKGljb25UeXBlcykpIHtcbiAgICAgIGlmIChwYXJhbXMuaWNvbiAhPT0gaWNvblR5cGUpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaWNvbiwgaWNvbkNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGFkZENsYXNzKGljb24sIHBhcmFtcy5pY29uICYmIGljb25UeXBlc1twYXJhbXMuaWNvbl0pO1xuXG4gICAgLy8gSWNvbiBjb2xvclxuICAgIHNldENvbG9yKGljb24sIHBhcmFtcyk7XG5cbiAgICAvLyBTdWNjZXNzIGljb24gYmFja2dyb3VuZCBjb2xvclxuICAgIGFkanVzdFN1Y2Nlc3NJY29uQmFja2dyb3VuZENvbG9yKCk7XG5cbiAgICAvLyBDdXN0b20gY2xhc3NcbiAgICBhcHBseUN1c3RvbUNsYXNzKGljb24sIHBhcmFtcywgJ2ljb24nKTtcbiAgfTtcblxuICAvLyBBZGp1c3Qgc3VjY2VzcyBpY29uIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggdGhlIHBvcHVwIGJhY2tncm91bmQgY29sb3JcbiAgY29uc3QgYWRqdXN0U3VjY2Vzc0ljb25CYWNrZ3JvdW5kQ29sb3IgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcG9wdXBCYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwb3B1cCkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgIC8qKiBAdHlwZSB7Tm9kZUxpc3RPZjxIVE1MRWxlbWVudD59ICovXG4gICAgY29uc3Qgc3VjY2Vzc0ljb25QYXJ0cyA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXSwgLnN3YWwyLXN1Y2Nlc3MtZml4Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWNjZXNzSWNvblBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdWNjZXNzSWNvblBhcnRzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBvcHVwQmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc3VjY2Vzc0ljb25IdG1sID0gXCJcXG4gIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1sZWZ0XFxcIj48L2Rpdj5cXG4gIDxzcGFuIGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWxpbmUtdGlwXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ1xcXCI+PC9zcGFuPlxcbiAgPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1yaW5nXFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1maXhcXFwiPjwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0XFxcIj48L2Rpdj5cXG5cIjtcbiAgY29uc3QgZXJyb3JJY29uSHRtbCA9IFwiXFxuICA8c3BhbiBjbGFzcz1cXFwic3dhbDIteC1tYXJrXFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFyay1saW5lLWxlZnRcXFwiPjwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFyay1saW5lLXJpZ2h0XFxcIj48L3NwYW4+XFxuICA8L3NwYW4+XFxuXCI7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGljb25cbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCBzZXRDb250ZW50ID0gKGljb24sIHBhcmFtcykgPT4ge1xuICAgIGlmICghcGFyYW1zLmljb24gJiYgIXBhcmFtcy5pY29uSHRtbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgb2xkQ29udGVudCA9IGljb24uaW5uZXJIVE1MO1xuICAgIGxldCBuZXdDb250ZW50ID0gJyc7XG4gICAgaWYgKHBhcmFtcy5pY29uSHRtbCkge1xuICAgICAgbmV3Q29udGVudCA9IGljb25Db250ZW50KHBhcmFtcy5pY29uSHRtbCk7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMuaWNvbiA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICBuZXdDb250ZW50ID0gc3VjY2Vzc0ljb25IdG1sO1xuICAgICAgb2xkQ29udGVudCA9IG9sZENvbnRlbnQucmVwbGFjZSgvIHN0eWxlPVwiLio/XCIvZywgJycpOyAvLyB1bmRvIGFkanVzdFN1Y2Nlc3NJY29uQmFja2dyb3VuZENvbG9yKClcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5pY29uID09PSAnZXJyb3InKSB7XG4gICAgICBuZXdDb250ZW50ID0gZXJyb3JJY29uSHRtbDtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5pY29uKSB7XG4gICAgICBjb25zdCBkZWZhdWx0SWNvbkh0bWwgPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnPycsXG4gICAgICAgIHdhcm5pbmc6ICchJyxcbiAgICAgICAgaW5mbzogJ2knXG4gICAgICB9O1xuICAgICAgbmV3Q29udGVudCA9IGljb25Db250ZW50KGRlZmF1bHRJY29uSHRtbFtwYXJhbXMuaWNvbl0pO1xuICAgIH1cbiAgICBpZiAob2xkQ29udGVudC50cmltKCkgIT09IG5ld0NvbnRlbnQudHJpbSgpKSB7XG4gICAgICBzZXRJbm5lckh0bWwoaWNvbiwgbmV3Q29udGVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpY29uXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3Qgc2V0Q29sb3IgPSAoaWNvbiwgcGFyYW1zKSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaWNvbkNvbG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGljb24uc3R5bGUuY29sb3IgPSBwYXJhbXMuaWNvbkNvbG9yO1xuICAgIGljb24uc3R5bGUuYm9yZGVyQ29sb3IgPSBwYXJhbXMuaWNvbkNvbG9yO1xuICAgIGZvciAoY29uc3Qgc2VsIG9mIFsnLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXAnLCAnLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nJywgJy5zd2FsMi14LW1hcmstbGluZS1sZWZ0JywgJy5zd2FsMi14LW1hcmstbGluZS1yaWdodCddKSB7XG4gICAgICBzZXRTdHlsZShpY29uLCBzZWwsICdiYWNrZ3JvdW5kQ29sb3InLCBwYXJhbXMuaWNvbkNvbG9yKTtcbiAgICB9XG4gICAgc2V0U3R5bGUoaWNvbiwgJy5zd2FsMi1zdWNjZXNzLXJpbmcnLCAnYm9yZGVyQ29sb3InLCBwYXJhbXMuaWNvbkNvbG9yKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGNvbnN0IGljb25Db250ZW50ID0gY29udGVudCA9PiBcIjxkaXYgY2xhc3M9XFxcIlwiLmNvbmNhdChzd2FsQ2xhc3Nlc1snaWNvbi1jb250ZW50J10sIFwiXFxcIj5cIikuY29uY2F0KGNvbnRlbnQsIFwiPC9kaXY+XCIpO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgcmVuZGVySW1hZ2UgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gZ2V0SW1hZ2UoKTtcbiAgICBpZiAoIWltYWdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcGFyYW1zLmltYWdlVXJsKSB7XG4gICAgICBoaWRlKGltYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2hvdyhpbWFnZSwgJycpO1xuXG4gICAgLy8gU3JjLCBhbHRcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBhcmFtcy5pbWFnZVVybCk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBwYXJhbXMuaW1hZ2VBbHQgfHwgJycpO1xuXG4gICAgLy8gV2lkdGgsIGhlaWdodFxuICAgIGFwcGx5TnVtZXJpY2FsU3R5bGUoaW1hZ2UsICd3aWR0aCcsIHBhcmFtcy5pbWFnZVdpZHRoKTtcbiAgICBhcHBseU51bWVyaWNhbFN0eWxlKGltYWdlLCAnaGVpZ2h0JywgcGFyYW1zLmltYWdlSGVpZ2h0KTtcblxuICAgIC8vIENsYXNzXG4gICAgaW1hZ2UuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuaW1hZ2U7XG4gICAgYXBwbHlDdXN0b21DbGFzcyhpbWFnZSwgcGFyYW1zLCAnaW1hZ2UnKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHJlbmRlclBvcHVwID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFjb250YWluZXIgfHwgIXBvcHVwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gV2lkdGhcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzIxNzBcbiAgICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgICBhcHBseU51bWVyaWNhbFN0eWxlKGNvbnRhaW5lciwgJ3dpZHRoJywgcGFyYW1zLndpZHRoKTtcbiAgICAgIHBvcHVwLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgY29uc3QgbG9hZGVyID0gZ2V0TG9hZGVyKCk7XG4gICAgICBsb2FkZXIgJiYgcG9wdXAuaW5zZXJ0QmVmb3JlKGxvYWRlciwgZ2V0SWNvbigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwbHlOdW1lcmljYWxTdHlsZShwb3B1cCwgJ3dpZHRoJywgcGFyYW1zLndpZHRoKTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgYXBwbHlOdW1lcmljYWxTdHlsZShwb3B1cCwgJ3BhZGRpbmcnLCBwYXJhbXMucGFkZGluZyk7XG5cbiAgICAvLyBDb2xvclxuICAgIGlmIChwYXJhbXMuY29sb3IpIHtcbiAgICAgIHBvcHVwLnN0eWxlLmNvbG9yID0gcGFyYW1zLmNvbG9yO1xuICAgIH1cblxuICAgIC8vIEJhY2tncm91bmRcbiAgICBpZiAocGFyYW1zLmJhY2tncm91bmQpIHtcbiAgICAgIHBvcHVwLnN0eWxlLmJhY2tncm91bmQgPSBwYXJhbXMuYmFja2dyb3VuZDtcbiAgICB9XG4gICAgaGlkZShnZXRWYWxpZGF0aW9uTWVzc2FnZSgpKTtcblxuICAgIC8vIENsYXNzZXNcbiAgICBhZGRDbGFzc2VzJDEocG9wdXAsIHBhcmFtcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHVwXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgYWRkQ2xhc3NlcyQxID0gKHBvcHVwLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBzaG93Q2xhc3MgPSBwYXJhbXMuc2hvd0NsYXNzIHx8IHt9O1xuICAgIC8vIERlZmF1bHQgQ2xhc3MgKyBzaG93Q2xhc3Mgd2hlbiB1cGRhdGluZyBTd2FsLnVwZGF0ZSh7fSlcbiAgICBwb3B1cC5jbGFzc05hbWUgPSBcIlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5wb3B1cCwgXCIgXCIpLmNvbmNhdChpc1Zpc2libGUkMShwb3B1cCkgPyBzaG93Q2xhc3MucG9wdXAgOiAnJyk7XG4gICAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy50b2FzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5tb2RhbCk7XG4gICAgfVxuXG4gICAgLy8gQ3VzdG9tIGNsYXNzXG4gICAgYXBwbHlDdXN0b21DbGFzcyhwb3B1cCwgcGFyYW1zLCAncG9wdXAnKTtcbiAgICBpZiAodHlwZW9mIHBhcmFtcy5jdXN0b21DbGFzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBwYXJhbXMuY3VzdG9tQ2xhc3MpO1xuICAgIH1cblxuICAgIC8vIEljb24gY2xhc3MgKCMxODQyKVxuICAgIGlmIChwYXJhbXMuaWNvbikge1xuICAgICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzW1wiaWNvbi1cIi5jb25jYXQocGFyYW1zLmljb24pXSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgcmVuZGVyUHJvZ3Jlc3NTdGVwcyA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3QgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lciA9IGdldFByb2dyZXNzU3RlcHMoKTtcbiAgICBpZiAoIXByb2dyZXNzU3RlcHNDb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgcHJvZ3Jlc3NTdGVwcyxcbiAgICAgIGN1cnJlbnRQcm9ncmVzc1N0ZXBcbiAgICB9ID0gcGFyYW1zO1xuICAgIGlmICghcHJvZ3Jlc3NTdGVwcyB8fCBwcm9ncmVzc1N0ZXBzLmxlbmd0aCA9PT0gMCB8fCBjdXJyZW50UHJvZ3Jlc3NTdGVwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhpZGUocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNob3cocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGlmIChjdXJyZW50UHJvZ3Jlc3NTdGVwID49IHByb2dyZXNzU3RlcHMubGVuZ3RoKSB7XG4gICAgICB3YXJuKCdJbnZhbGlkIGN1cnJlbnRQcm9ncmVzc1N0ZXAgcGFyYW1ldGVyLCBpdCBzaG91bGQgYmUgbGVzcyB0aGFuIHByb2dyZXNzU3RlcHMubGVuZ3RoICcgKyAnKGN1cnJlbnRQcm9ncmVzc1N0ZXAgbGlrZSBKUyBhcnJheXMgc3RhcnRzIGZyb20gMCknKTtcbiAgICB9XG4gICAgcHJvZ3Jlc3NTdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgc3RlcEVsID0gY3JlYXRlU3RlcEVsZW1lbnQoc3RlcCk7XG4gICAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0ZXBFbCk7XG4gICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRQcm9ncmVzc1N0ZXApIHtcbiAgICAgICAgYWRkQ2xhc3Moc3RlcEVsLCBzd2FsQ2xhc3Nlc1snYWN0aXZlLXByb2dyZXNzLXN0ZXAnXSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggIT09IHByb2dyZXNzU3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBjb25zdCBsaW5lRWwgPSBjcmVhdGVMaW5lRWxlbWVudChwYXJhbXMpO1xuICAgICAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmVFbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdGVwXG4gICAqIEByZXR1cm5zIHtIVE1MTElFbGVtZW50fVxuICAgKi9cbiAgY29uc3QgY3JlYXRlU3RlcEVsZW1lbnQgPSBzdGVwID0+IHtcbiAgICBjb25zdCBzdGVwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFkZENsYXNzKHN0ZXBFbCwgc3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXAnXSk7XG4gICAgc2V0SW5uZXJIdG1sKHN0ZXBFbCwgc3RlcCk7XG4gICAgcmV0dXJuIHN0ZXBFbDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtIVE1MTElFbGVtZW50fVxuICAgKi9cbiAgY29uc3QgY3JlYXRlTGluZUVsZW1lbnQgPSBwYXJhbXMgPT4ge1xuICAgIGNvbnN0IGxpbmVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYWRkQ2xhc3MobGluZUVsLCBzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcC1saW5lJ10pO1xuICAgIGlmIChwYXJhbXMucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlKSB7XG4gICAgICBhcHBseU51bWVyaWNhbFN0eWxlKGxpbmVFbCwgJ3dpZHRoJywgcGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZSk7XG4gICAgfVxuICAgIHJldHVybiBsaW5lRWw7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCByZW5kZXJUaXRsZSA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBnZXRUaXRsZSgpO1xuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdG9nZ2xlKHRpdGxlLCBwYXJhbXMudGl0bGUgfHwgcGFyYW1zLnRpdGxlVGV4dCwgJ2Jsb2NrJyk7XG4gICAgaWYgKHBhcmFtcy50aXRsZSkge1xuICAgICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLnRpdGxlLCB0aXRsZSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMudGl0bGVUZXh0KSB7XG4gICAgICB0aXRsZS5pbm5lclRleHQgPSBwYXJhbXMudGl0bGVUZXh0O1xuICAgIH1cblxuICAgIC8vIEN1c3RvbSBjbGFzc1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3ModGl0bGUsIHBhcmFtcywgJ3RpdGxlJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCByZW5kZXIgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIHJlbmRlclBvcHVwKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckNvbnRhaW5lcihpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJQcm9ncmVzc1N0ZXBzKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckljb24oaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVySW1hZ2UoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyVGl0bGUoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyQ2xvc2VCdXR0b24oaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyQ29udGVudChpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJBY3Rpb25zKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckZvb3RlcihpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuZGlkUmVuZGVyID09PSAnZnVuY3Rpb24nICYmIHBvcHVwKSB7XG4gICAgICBwYXJhbXMuZGlkUmVuZGVyKHBvcHVwKTtcbiAgICB9XG4gIH07XG5cbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBTd2VldEFsZXJ0MiBwb3B1cCBpcyBzaG93blxuICAgKi9cbiAgY29uc3QgaXNWaXNpYmxlID0gKCkgPT4ge1xuICAgIHJldHVybiBpc1Zpc2libGUkMShnZXRQb3B1cCgpKTtcbiAgfTtcblxuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0NvbmZpcm0nIGJ1dHRvblxuICAgKi9cbiAgY29uc3QgY2xpY2tDb25maXJtID0gKCkgPT4ge1xuICAgIHZhciBfZG9tJGdldENvbmZpcm1CdXR0b247XG4gICAgcmV0dXJuIChfZG9tJGdldENvbmZpcm1CdXR0b24gPSBnZXRDb25maXJtQnV0dG9uKCkpID09PSBudWxsIHx8IF9kb20kZ2V0Q29uZmlybUJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RvbSRnZXRDb25maXJtQnV0dG9uLmNsaWNrKCk7XG4gIH07XG5cbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdEZW55JyBidXR0b25cbiAgICovXG4gIGNvbnN0IGNsaWNrRGVueSA9ICgpID0+IHtcbiAgICB2YXIgX2RvbSRnZXREZW55QnV0dG9uO1xuICAgIHJldHVybiAoX2RvbSRnZXREZW55QnV0dG9uID0gZ2V0RGVueUJ1dHRvbigpKSA9PT0gbnVsbCB8fCBfZG9tJGdldERlbnlCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kb20kZ2V0RGVueUJ1dHRvbi5jbGljaygpO1xuICB9O1xuXG4gIC8qXG4gICAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ2FuY2VsJyBidXR0b25cbiAgICovXG4gIGNvbnN0IGNsaWNrQ2FuY2VsID0gKCkgPT4ge1xuICAgIHZhciBfZG9tJGdldENhbmNlbEJ1dHRvbjtcbiAgICByZXR1cm4gKF9kb20kZ2V0Q2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCkpID09PSBudWxsIHx8IF9kb20kZ2V0Q2FuY2VsQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZG9tJGdldENhbmNlbEJ1dHRvbi5jbGljaygpO1xuICB9O1xuXG4gIC8qKiBAdHlwZWRlZiB7J2NhbmNlbCcgfCAnYmFja2Ryb3AnIHwgJ2Nsb3NlJyB8ICdlc2MnIHwgJ3RpbWVyJ30gRGlzbWlzc1JlYXNvbiAqL1xuXG4gIC8qKiBAdHlwZSB7UmVjb3JkPERpc21pc3NSZWFzb24sIERpc21pc3NSZWFzb24+fSAqL1xuICBjb25zdCBEaXNtaXNzUmVhc29uID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgY2FuY2VsOiAnY2FuY2VsJyxcbiAgICBiYWNrZHJvcDogJ2JhY2tkcm9wJyxcbiAgICBjbG9zZTogJ2Nsb3NlJyxcbiAgICBlc2M6ICdlc2MnLFxuICAgIHRpbWVyOiAndGltZXInXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0dsb2JhbFN0YXRlfSBnbG9iYWxTdGF0ZVxuICAgKi9cbiAgY29uc3QgcmVtb3ZlS2V5ZG93bkhhbmRsZXIgPSBnbG9iYWxTdGF0ZSA9PiB7XG4gICAgaWYgKGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQgJiYgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCkge1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0dsb2JhbFN0YXRlfSBnbG9iYWxTdGF0ZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcGFyYW0geyp9IGRpc21pc3NXaXRoXG4gICAqL1xuICBjb25zdCBhZGRLZXlkb3duSGFuZGxlciA9IChnbG9iYWxTdGF0ZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKSA9PiB7XG4gICAgcmVtb3ZlS2V5ZG93bkhhbmRsZXIoZ2xvYmFsU3RhdGUpO1xuICAgIGlmICghaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyID0gZSA9PiBrZXlkb3duSGFuZGxlcihpbm5lclBhcmFtcywgZSwgZGlzbWlzc1dpdGgpO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldCA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPyB3aW5kb3cgOiBnZXRQb3B1cCgpO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmU7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwge1xuICAgICAgICBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmNyZW1lbnRcbiAgICovXG4gIGNvbnN0IHNldEZvY3VzID0gKGluZGV4LCBpbmNyZW1lbnQpID0+IHtcbiAgICB2YXIgX2RvbSRnZXRQb3B1cDtcbiAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IGdldEZvY3VzYWJsZUVsZW1lbnRzKCk7XG4gICAgLy8gc2VhcmNoIGZvciB2aXNpYmxlIGVsZW1lbnRzIGFuZCBzZWxlY3QgdGhlIG5leHQgcG9zc2libGUgbWF0Y2hcbiAgICBpZiAoZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICBpbmRleCA9IGluZGV4ICsgaW5jcmVtZW50O1xuXG4gICAgICAvLyByb2xsb3ZlciB0byBmaXJzdCBpdGVtXG4gICAgICBpZiAoaW5kZXggPT09IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBpbmRleCA9IDA7XG5cbiAgICAgICAgLy8gZ28gdG8gbGFzdCBpdGVtXG4gICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgICBmb2N1c2FibGVFbGVtZW50c1tpbmRleF0uZm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbm8gdmlzaWJsZSBmb2N1c2FibGUgZWxlbWVudHMsIGZvY3VzIHRoZSBwb3B1cFxuICAgIChfZG9tJGdldFBvcHVwID0gZ2V0UG9wdXAoKSkgPT09IG51bGwgfHwgX2RvbSRnZXRQb3B1cCA9PT0gdm9pZCAwIHx8IF9kb20kZ2V0UG9wdXAuZm9jdXMoKTtcbiAgfTtcbiAgY29uc3QgYXJyb3dLZXlzTmV4dEJ1dHRvbiA9IFsnQXJyb3dSaWdodCcsICdBcnJvd0Rvd24nXTtcbiAgY29uc3QgYXJyb3dLZXlzUHJldmlvdXNCdXR0b24gPSBbJ0Fycm93TGVmdCcsICdBcnJvd1VwJ107XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzbWlzc1dpdGhcbiAgICovXG4gIGNvbnN0IGtleWRvd25IYW5kbGVyID0gKGlubmVyUGFyYW1zLCBldmVudCwgZGlzbWlzc1dpdGgpID0+IHtcbiAgICBpZiAoIWlubmVyUGFyYW1zKSB7XG4gICAgICByZXR1cm47IC8vIFRoaXMgaW5zdGFuY2UgaGFzIGFscmVhZHkgYmVlbiBkZXN0cm95ZWRcbiAgICB9XG5cbiAgICAvLyBJZ25vcmUga2V5ZG93biBkdXJpbmcgSU1FIGNvbXBvc2l0aW9uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L2tleWRvd25fZXZlbnQjaWdub3Jpbmdfa2V5ZG93bl9kdXJpbmdfaW1lX2NvbXBvc2l0aW9uXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy83MjBcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzI0MDZcbiAgICBpZiAoZXZlbnQuaXNDb21wb3NpbmcgfHwgZXZlbnQua2V5Q29kZSA9PT0gMjI5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbm5lclBhcmFtcy5zdG9wS2V5ZG93blByb3BhZ2F0aW9uKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBFTlRFUlxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGhhbmRsZUVudGVyKGV2ZW50LCBpbm5lclBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gVEFCXG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgaGFuZGxlVGFiKGV2ZW50KTtcbiAgICB9XG5cbiAgICAvLyBBUlJPV1MgLSBzd2l0Y2ggZm9jdXMgYmV0d2VlbiBidXR0b25zXG4gICAgZWxzZSBpZiAoWy4uLmFycm93S2V5c05leHRCdXR0b24sIC4uLmFycm93S2V5c1ByZXZpb3VzQnV0dG9uXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICBoYW5kbGVBcnJvd3MoZXZlbnQua2V5KTtcbiAgICB9XG5cbiAgICAvLyBFU0NcbiAgICBlbHNlIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICBoYW5kbGVFc2MoZXZlbnQsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqL1xuICBjb25zdCBoYW5kbGVFbnRlciA9IChldmVudCwgaW5uZXJQYXJhbXMpID0+IHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzIzODZcbiAgICBpZiAoIWNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93RW50ZXJLZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGlucHV0ID0gZ2V0SW5wdXQkMShnZXRQb3B1cCgpLCBpbm5lclBhcmFtcy5pbnB1dCk7XG4gICAgaWYgKGV2ZW50LnRhcmdldCAmJiBpbnB1dCAmJiBldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBldmVudC50YXJnZXQub3V0ZXJIVE1MID09PSBpbnB1dC5vdXRlckhUTUwpIHtcbiAgICAgIGlmIChbJ3RleHRhcmVhJywgJ2ZpbGUnXS5pbmNsdWRlcyhpbm5lclBhcmFtcy5pbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuOyAvLyBkbyBub3Qgc3VibWl0XG4gICAgICB9XG5cbiAgICAgIGNsaWNrQ29uZmlybSgpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAgICovXG4gIGNvbnN0IGhhbmRsZVRhYiA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKTtcbiAgICBsZXQgYnRuSW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGFyZ2V0RWxlbWVudCA9PT0gZm9jdXNhYmxlRWxlbWVudHNbaV0pIHtcbiAgICAgICAgYnRuSW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDeWNsZSB0byB0aGUgbmV4dCBidXR0b25cbiAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICBzZXRGb2N1cyhidG5JbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLy8gQ3ljbGUgdG8gdGhlIHByZXYgYnV0dG9uXG4gICAgZWxzZSB7XG4gICAgICBzZXRGb2N1cyhidG5JbmRleCwgLTEpO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqL1xuICBjb25zdCBoYW5kbGVBcnJvd3MgPSBrZXkgPT4ge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgICBjb25zdCBkZW55QnV0dG9uID0gZ2V0RGVueUJ1dHRvbigpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpO1xuICAgIGlmICghYWN0aW9ucyB8fCAhY29uZmlybUJ1dHRvbiB8fCAhZGVueUJ1dHRvbiB8fCAhY2FuY2VsQnV0dG9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKiBAdHlwZSBIVE1MRWxlbWVudFtdICovXG4gICAgY29uc3QgYnV0dG9ucyA9IFtjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b25dO1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgIWJ1dHRvbnMuaW5jbHVkZXMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2libGluZyA9IGFycm93S2V5c05leHRCdXR0b24uaW5jbHVkZXMoa2V5KSA/ICduZXh0RWxlbWVudFNpYmxpbmcnIDogJ3ByZXZpb3VzRWxlbWVudFNpYmxpbmcnO1xuICAgIGxldCBidXR0b25Ub0ZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICBpZiAoIWJ1dHRvblRvRm9jdXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBidXR0b25Ub0ZvY3VzID0gYnV0dG9uVG9Gb2N1c1tzaWJsaW5nXTtcbiAgICAgIGlmICghYnV0dG9uVG9Gb2N1cykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoYnV0dG9uVG9Gb2N1cyBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50ICYmIGlzVmlzaWJsZSQxKGJ1dHRvblRvRm9jdXMpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYnV0dG9uVG9Gb2N1cyBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50KSB7XG4gICAgICBidXR0b25Ub0ZvY3VzLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc21pc3NXaXRoXG4gICAqL1xuICBjb25zdCBoYW5kbGVFc2MgPSAoZXZlbnQsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCkgPT4ge1xuICAgIGlmIChjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd0VzY2FwZUtleSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmVzYyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIG1vZHVsZSBjb250YWlucyBgV2Vha01hcGBzIGZvciBlYWNoIGVmZmVjdGl2ZWx5LVwicHJpdmF0ZSAgcHJvcGVydHlcIiB0aGF0IGEgYFN3YWxgIGhhcy5cbiAgICogRm9yIGV4YW1wbGUsIHRvIHNldCB0aGUgcHJpdmF0ZSBwcm9wZXJ0eSBcImZvb1wiIG9mIGB0aGlzYCB0byBcImJhclwiLCB5b3UgY2FuIGBwcml2YXRlUHJvcHMuZm9vLnNldCh0aGlzLCAnYmFyJylgXG4gICAqIFRoaXMgaXMgdGhlIGFwcHJvYWNoIHRoYXQgQmFiZWwgd2lsbCBwcm9iYWJseSB0YWtlIHRvIGltcGxlbWVudCBwcml2YXRlIG1ldGhvZHMvZmllbGRzXG4gICAqICAgaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJpdmF0ZS1tZXRob2RzXG4gICAqICAgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL3B1bGwvNzU1NVxuICAgKiBPbmNlIHdlIGhhdmUgdGhlIGNoYW5nZXMgZnJvbSB0aGF0IFBSIGluIEJhYmVsLCBhbmQgb3VyIGNvcmUgY2xhc3MgZml0cyByZWFzb25hYmxlIGluICpvbmUgbW9kdWxlKlxuICAgKiAgIHRoZW4gd2UgY2FuIHVzZSB0aGF0IGxhbmd1YWdlIGZlYXR1cmUuXG4gICAqL1xuXG4gIHZhciBwcml2YXRlTWV0aG9kcyA9IHtcbiAgICBzd2FsUHJvbWlzZVJlc29sdmU6IG5ldyBXZWFrTWFwKCksXG4gICAgc3dhbFByb21pc2VSZWplY3Q6IG5ldyBXZWFrTWFwKClcbiAgfTtcblxuICAvLyBGcm9tIGh0dHBzOi8vZGV2ZWxvcGVyLnBhY2llbGxvZ3JvdXAuY29tL2Jsb2cvMjAxOC8wNi90aGUtY3VycmVudC1zdGF0ZS1vZi1tb2RhbC1kaWFsb2ctYWNjZXNzaWJpbGl0eS9cbiAgLy8gQWRkaW5nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRvIGVsZW1lbnRzIG91dHNpZGUgb2YgdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgZW5zdXJlcyB0aGF0XG4gIC8vIGVsZW1lbnRzIG5vdCB3aXRoaW4gdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgd2lsbCBub3QgYmUgc3VyZmFjZWQgaWYgYSB1c2VyIG9wZW5zIGEgc2NyZWVuXG4gIC8vIHJlYWRlcuKAmXMgbGlzdCBvZiBlbGVtZW50cyAoaGVhZGluZ3MsIGZvcm0gY29udHJvbHMsIGxhbmRtYXJrcywgZXRjLikgaW4gdGhlIGRvY3VtZW50LlxuXG4gIGNvbnN0IHNldEFyaWFIaWRkZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keUNoaWxkcmVuID0gQXJyYXkuZnJvbShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAgICBib2R5Q2hpbGRyZW4uZm9yRWFjaChlbCA9PiB7XG4gICAgICBpZiAoZWwgPT09IGdldENvbnRhaW5lcigpIHx8IGVsLmNvbnRhaW5zKGdldENvbnRhaW5lcigpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicsIGVsLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSB8fCAnJyk7XG4gICAgICB9XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgdW5zZXRBcmlhSGlkZGVuID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHlDaGlsZHJlbiA9IEFycmF5LmZyb20oZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gICAgYm9keUNoaWxkcmVuLmZvckVhY2goZWwgPT4ge1xuICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpKSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKSB8fCAnJyk7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgaXNTYWZhcmlPcklPUyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICEhd2luZG93Lkdlc3R1cmVFdmVudDsgLy8gdHJ1ZSBmb3IgU2FmYXJpIGRlc2t0b3AgKyBhbGwgaU9TIGJyb3dzZXJzIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83MDU4NTM5NFxuXG4gIC8qKlxuICAgKiBGaXggaU9TIHNjcm9sbGluZ1xuICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTYyNjMwMlxuICAgKi9cbiAgY29uc3QgaU9TZml4ID0gKCkgPT4ge1xuICAgIGlmIChpc1NhZmFyaU9ySU9TICYmICFoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gXCJcIi5jb25jYXQob2Zmc2V0ICogLTEsIFwicHhcIik7XG4gICAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICAgICAgbG9ja0JvZHlTY3JvbGwoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMTI0NlxuICAgKi9cbiAgY29uc3QgbG9ja0JvZHlTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgIGxldCBwcmV2ZW50VG91Y2hNb3ZlO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VG91Y2hFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBjb250YWluZXIub250b3VjaHN0YXJ0ID0gZXZlbnQgPT4ge1xuICAgICAgcHJldmVudFRvdWNoTW92ZSA9IHNob3VsZFByZXZlbnRUb3VjaE1vdmUoZXZlbnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUb3VjaEV2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGNvbnRhaW5lci5vbnRvdWNobW92ZSA9IGV2ZW50ID0+IHtcbiAgICAgIGlmIChwcmV2ZW50VG91Y2hNb3ZlKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VG91Y2hFdmVudH0gZXZlbnRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBzaG91bGRQcmV2ZW50VG91Y2hNb3ZlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICBjb25zdCBodG1sQ29udGFpbmVyID0gZ2V0SHRtbENvbnRhaW5lcigpO1xuICAgIGlmICghY29udGFpbmVyIHx8ICFodG1sQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpc1N0eWx1cyhldmVudCkgfHwgaXNab29tKGV2ZW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0ID09PSBjb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWlzU2Nyb2xsYWJsZShjb250YWluZXIpICYmIHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnICYmXG4gICAgLy8gIzE2MDNcbiAgICB0YXJnZXQudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJyAmJlxuICAgIC8vICMyMjY2XG4gICAgIShpc1Njcm9sbGFibGUoaHRtbENvbnRhaW5lcikgJiZcbiAgICAvLyAjMTk0NFxuICAgIGh0bWxDb250YWluZXIuY29udGFpbnModGFyZ2V0KSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMTc4NlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGV2ZW50XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNTdHlsdXMgPSBldmVudCA9PiB7XG4gICAgcmV0dXJuIGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggJiYgZXZlbnQudG91Y2hlc1swXS50b3VjaFR5cGUgPT09ICdzdHlsdXMnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzE4OTFcbiAgICpcbiAgICogQHBhcmFtIHtUb3VjaEV2ZW50fSBldmVudFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzWm9vbSA9IGV2ZW50ID0+IHtcbiAgICByZXR1cm4gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA+IDE7XG4gIH07XG4gIGNvbnN0IHVuZG9JT1NmaXggPSAoKSA9PiB7XG4gICAgaWYgKGhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUudG9wLCAxMCk7XG4gICAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAnJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gb2Zmc2V0ICogLTE7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBNZWFzdXJlIHNjcm9sbGJhciB3aWR0aCBmb3IgcGFkZGluZyBib2R5IGR1cmluZyBtb2RhbCBzaG93L2hpZGVcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL2pzL3NyYy9tb2RhbC5qc1xuICAgKlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgY29uc3QgbWVhc3VyZVNjcm9sbGJhciA9ICgpID0+IHtcbiAgICBjb25zdCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gc3dhbENsYXNzZXNbJ3Njcm9sbGJhci1tZWFzdXJlJ107XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbWVtYmVyIHN0YXRlIGluIGNhc2VzIHdoZXJlIG9wZW5pbmcgYW5kIGhhbmRsaW5nIGEgbW9kYWwgd2lsbCBmaWRkbGUgd2l0aCBpdC5cbiAgICogQHR5cGUge251bWJlciB8IG51bGx9XG4gICAqL1xuICBsZXQgcHJldmlvdXNCb2R5UGFkZGluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbml0aWFsQm9keU92ZXJmbG93XG4gICAqL1xuICBjb25zdCByZXBsYWNlU2Nyb2xsYmFyV2l0aFBhZGRpbmcgPSBpbml0aWFsQm9keU92ZXJmbG93ID0+IHtcbiAgICAvLyBmb3IgcXVldWVzLCBkbyBub3QgZG8gdGhpcyBtb3JlIHRoYW4gb25jZVxuICAgIGlmIChwcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIHRoZSBib2R5IGhhcyBvdmVyZmxvd1xuICAgIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCB8fCBpbml0aWFsQm9keU92ZXJmbG93ID09PSAnc2Nyb2xsJyAvLyBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzI2NjNcbiAgICApIHtcbiAgICAgIC8vIGFkZCBwYWRkaW5nIHNvIHRoZSBjb250ZW50IGRvZXNuJ3Qgc2hpZnQgYWZ0ZXIgcmVtb3ZhbCBvZiBzY3JvbGxiYXJcbiAgICAgIHByZXZpb3VzQm9keVBhZGRpbmcgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiLmNvbmNhdChwcmV2aW91c0JvZHlQYWRkaW5nICsgbWVhc3VyZVNjcm9sbGJhcigpLCBcInB4XCIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdW5kb1JlcGxhY2VTY3JvbGxiYXJXaXRoUGFkZGluZyA9ICgpID0+IHtcbiAgICBpZiAocHJldmlvdXNCb2R5UGFkZGluZyAhPT0gbnVsbCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiLmNvbmNhdChwcmV2aW91c0JvZHlQYWRkaW5nLCBcInB4XCIpO1xuICAgICAgcHJldmlvdXNCb2R5UGFkZGluZyA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJldHVybkZvY3VzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRpZENsb3NlXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoaW5zdGFuY2UsIGNvbnRhaW5lciwgcmV0dXJuRm9jdXMsIGRpZENsb3NlKSB7XG4gICAgaWYgKGlzVG9hc3QoKSkge1xuICAgICAgdHJpZ2dlckRpZENsb3NlQW5kRGlzcG9zZShpbnN0YW5jZSwgZGlkQ2xvc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN0b3JlQWN0aXZlRWxlbWVudChyZXR1cm5Gb2N1cykudGhlbigoKSA9PiB0cmlnZ2VyRGlkQ2xvc2VBbmREaXNwb3NlKGluc3RhbmNlLCBkaWRDbG9zZSkpO1xuICAgICAgcmVtb3ZlS2V5ZG93bkhhbmRsZXIoZ2xvYmFsU3RhdGUpO1xuICAgIH1cblxuICAgIC8vIHdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMjA4OFxuICAgIC8vIGZvciBzb21lIHJlYXNvbiByZW1vdmluZyB0aGUgY29udGFpbmVyIGluIFNhZmFyaSB3aWxsIHNjcm9sbCB0aGUgZG9jdW1lbnQgdG8gYm90dG9tXG4gICAgaWYgKGlzU2FmYXJpT3JJT1MpIHtcbiAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50Jyk7XG4gICAgICBjb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmIChpc01vZGFsKCkpIHtcbiAgICAgIHVuZG9SZXBsYWNlU2Nyb2xsYmFyV2l0aFBhZGRpbmcoKTtcbiAgICAgIHVuZG9JT1NmaXgoKTtcbiAgICAgIHVuc2V0QXJpYUhpZGRlbigpO1xuICAgIH1cbiAgICByZW1vdmVCb2R5Q2xhc3NlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBTd2VldEFsZXJ0MiBjbGFzc2VzIGZyb20gYm9keVxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlQm9keUNsYXNzZXMoKSB7XG4gICAgcmVtb3ZlQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIFtzd2FsQ2xhc3Nlcy5zaG93biwgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10sIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc3RhbmNlIG1ldGhvZCB0byBjbG9zZSBzd2VldEFsZXJ0XG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSByZXNvbHZlVmFsdWVcbiAgICovXG4gIGZ1bmN0aW9uIGNsb3NlKHJlc29sdmVWYWx1ZSkge1xuICAgIHJlc29sdmVWYWx1ZSA9IHByZXBhcmVSZXNvbHZlVmFsdWUocmVzb2x2ZVZhbHVlKTtcbiAgICBjb25zdCBzd2FsUHJvbWlzZVJlc29sdmUgPSBwcml2YXRlTWV0aG9kcy5zd2FsUHJvbWlzZVJlc29sdmUuZ2V0KHRoaXMpO1xuICAgIGNvbnN0IGRpZENsb3NlID0gdHJpZ2dlckNsb3NlUG9wdXAodGhpcyk7XG4gICAgaWYgKHRoaXMuaXNBd2FpdGluZ1Byb21pc2UpIHtcbiAgICAgIC8vIEEgc3dhbCBhd2FpdGluZyBmb3IgYSBwcm9taXNlIChhZnRlciBhIGNsaWNrIG9uIENvbmZpcm0gb3IgRGVueSkgY2Fubm90IGJlIGRpc21pc3NlZCBhbnltb3JlICMyMzM1XG4gICAgICBpZiAoIXJlc29sdmVWYWx1ZS5pc0Rpc21pc3NlZCkge1xuICAgICAgICBoYW5kbGVBd2FpdGluZ1Byb21pc2UodGhpcyk7XG4gICAgICAgIHN3YWxQcm9taXNlUmVzb2x2ZShyZXNvbHZlVmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlkQ2xvc2UpIHtcbiAgICAgIC8vIFJlc29sdmUgU3dhbCBwcm9taXNlXG4gICAgICBzd2FsUHJvbWlzZVJlc29sdmUocmVzb2x2ZVZhbHVlKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgdHJpZ2dlckNsb3NlUG9wdXAgPSBpbnN0YW5jZSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcbiAgICBpZiAoIWlubmVyUGFyYW1zIHx8IGhhc0NsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5zaG93Q2xhc3MucG9wdXApO1xuICAgIGFkZENsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApO1xuICAgIGNvbnN0IGJhY2tkcm9wID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgcmVtb3ZlQ2xhc3MoYmFja2Ryb3AsIGlubmVyUGFyYW1zLnNob3dDbGFzcy5iYWNrZHJvcCk7XG4gICAgYWRkQ2xhc3MoYmFja2Ryb3AsIGlubmVyUGFyYW1zLmhpZGVDbGFzcy5iYWNrZHJvcCk7XG4gICAgaGFuZGxlUG9wdXBBbmltYXRpb24oaW5zdGFuY2UsIHBvcHVwLCBpbm5lclBhcmFtcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7YW55fSBlcnJvclxuICAgKi9cbiAgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShlcnJvcikge1xuICAgIGNvbnN0IHJlamVjdFByb21pc2UgPSBwcml2YXRlTWV0aG9kcy5zd2FsUHJvbWlzZVJlamVjdC5nZXQodGhpcyk7XG4gICAgaGFuZGxlQXdhaXRpbmdQcm9taXNlKHRoaXMpO1xuICAgIGlmIChyZWplY3RQcm9taXNlKSB7XG4gICAgICAvLyBSZWplY3QgU3dhbCBwcm9taXNlXG4gICAgICByZWplY3RQcm9taXNlKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3QgaGFuZGxlQXdhaXRpbmdQcm9taXNlID0gaW5zdGFuY2UgPT4ge1xuICAgIGlmIChpbnN0YW5jZS5pc0F3YWl0aW5nUHJvbWlzZSkge1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmlzQXdhaXRpbmdQcm9taXNlO1xuICAgICAgLy8gVGhlIGluc3RhbmNlIG1pZ2h0IGhhdmUgYmVlbiBwcmV2aW91c2x5IHBhcnRseSBkZXN0cm95ZWQsIHdlIG11c3QgcmVzdW1lIHRoZSBkZXN0cm95IHByb2Nlc3MgaW4gdGhpcyBjYXNlICMyMzM1XG4gICAgICBpZiAoIXByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpKSB7XG4gICAgICAgIGluc3RhbmNlLl9kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2FueX0gcmVzb2x2ZVZhbHVlXG4gICAqIEByZXR1cm5zIHtTd2VldEFsZXJ0UmVzdWx0fVxuICAgKi9cbiAgY29uc3QgcHJlcGFyZVJlc29sdmVWYWx1ZSA9IHJlc29sdmVWYWx1ZSA9PiB7XG4gICAgLy8gV2hlbiB1c2VyIGNhbGxzIFN3YWwuY2xvc2UoKVxuICAgIGlmICh0eXBlb2YgcmVzb2x2ZVZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNDb25maXJtZWQ6IGZhbHNlLFxuICAgICAgICBpc0RlbmllZDogZmFsc2UsXG4gICAgICAgIGlzRGlzbWlzc2VkOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgICBpc0NvbmZpcm1lZDogZmFsc2UsXG4gICAgICBpc0RlbmllZDogZmFsc2UsXG4gICAgICBpc0Rpc21pc3NlZDogZmFsc2VcbiAgICB9LCByZXNvbHZlVmFsdWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHVwXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqL1xuICBjb25zdCBoYW5kbGVQb3B1cEFuaW1hdGlvbiA9IChpbnN0YW5jZSwgcG9wdXAsIGlubmVyUGFyYW1zKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgLy8gSWYgYW5pbWF0aW9uIGlzIHN1cHBvcnRlZCwgYW5pbWF0ZVxuICAgIGNvbnN0IGFuaW1hdGlvbklzU3VwcG9ydGVkID0gYW5pbWF0aW9uRW5kRXZlbnQgJiYgaGFzQ3NzQW5pbWF0aW9uKHBvcHVwKTtcbiAgICBpZiAodHlwZW9mIGlubmVyUGFyYW1zLndpbGxDbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaW5uZXJQYXJhbXMud2lsbENsb3NlKHBvcHVwKTtcbiAgICB9XG4gICAgaWYgKGFuaW1hdGlvbklzU3VwcG9ydGVkKSB7XG4gICAgICBhbmltYXRlUG9wdXAoaW5zdGFuY2UsIHBvcHVwLCBjb250YWluZXIsIGlubmVyUGFyYW1zLnJldHVybkZvY3VzLCBpbm5lclBhcmFtcy5kaWRDbG9zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgcmVtb3ZlIGltbWVkaWF0ZWx5XG4gICAgICByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoaW5zdGFuY2UsIGNvbnRhaW5lciwgaW5uZXJQYXJhbXMucmV0dXJuRm9jdXMsIGlubmVyUGFyYW1zLmRpZENsb3NlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wdXBcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmV0dXJuRm9jdXNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGlkQ2xvc2VcbiAgICovXG4gIGNvbnN0IGFuaW1hdGVQb3B1cCA9IChpbnN0YW5jZSwgcG9wdXAsIGNvbnRhaW5lciwgcmV0dXJuRm9jdXMsIGRpZENsb3NlKSA9PiB7XG4gICAgaWYgKCFhbmltYXRpb25FbmRFdmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2sgPSByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUuYmluZChudWxsLCBpbnN0YW5jZSwgY29udGFpbmVyLCByZXR1cm5Gb2N1cywgZGlkQ2xvc2UpO1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IHBvcHVwKSB7XG4gICAgICAgIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaygpO1xuICAgICAgICBkZWxldGUgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRpZENsb3NlXG4gICAqL1xuICBjb25zdCB0cmlnZ2VyRGlkQ2xvc2VBbmREaXNwb3NlID0gKGluc3RhbmNlLCBkaWRDbG9zZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBkaWRDbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkaWRDbG9zZS5iaW5kKGluc3RhbmNlLnBhcmFtcykoKTtcbiAgICAgIH1cbiAgICAgIC8vIGluc3RhbmNlIG1pZ2h0IGhhdmUgYmVlbiBkZXN0cm95ZWQgYWxyZWFkeVxuICAgICAgaWYgKGluc3RhbmNlLl9kZXN0cm95KSB7XG4gICAgICAgIGluc3RhbmNlLl9kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3dzIGxvYWRlciAoc3Bpbm5lciksIHRoaXMgaXMgdXNlZnVsIHdpdGggQUpBWCByZXF1ZXN0cy5cbiAgICogQnkgZGVmYXVsdCB0aGUgbG9hZGVyIGJlIHNob3duIGluc3RlYWQgb2YgdGhlIFwiQ29uZmlybVwiIGJ1dHRvbi5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MQnV0dG9uRWxlbWVudCB8IG51bGx9IFtidXR0b25Ub1JlcGxhY2VdXG4gICAqL1xuICBjb25zdCBzaG93TG9hZGluZyA9IGJ1dHRvblRvUmVwbGFjZSA9PiB7XG4gICAgbGV0IHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBpZiAoIXBvcHVwKSB7XG4gICAgICBuZXcgU3dhbCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIH1cblxuICAgIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBpZiAoIXBvcHVwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxvYWRlciA9IGdldExvYWRlcigpO1xuICAgIGlmIChpc1RvYXN0KCkpIHtcbiAgICAgIGhpZGUoZ2V0SWNvbigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVwbGFjZUJ1dHRvbihwb3B1cCwgYnV0dG9uVG9SZXBsYWNlKTtcbiAgICB9XG4gICAgc2hvdyhsb2FkZXIpO1xuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJywgJ3RydWUnKTtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYnVzeScsICd0cnVlJyk7XG4gICAgcG9wdXAuZm9jdXMoKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wdXBcbiAgICogQHBhcmFtIHtIVE1MQnV0dG9uRWxlbWVudCB8IG51bGx9IFtidXR0b25Ub1JlcGxhY2VdXG4gICAqL1xuICBjb25zdCByZXBsYWNlQnV0dG9uID0gKHBvcHVwLCBidXR0b25Ub1JlcGxhY2UpID0+IHtcbiAgICBjb25zdCBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICAgIGNvbnN0IGxvYWRlciA9IGdldExvYWRlcigpO1xuICAgIGlmICghYWN0aW9ucyB8fCAhbG9hZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghYnV0dG9uVG9SZXBsYWNlICYmIGlzVmlzaWJsZSQxKGdldENvbmZpcm1CdXR0b24oKSkpIHtcbiAgICAgIGJ1dHRvblRvUmVwbGFjZSA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgICB9XG4gICAgc2hvdyhhY3Rpb25zKTtcbiAgICBpZiAoYnV0dG9uVG9SZXBsYWNlKSB7XG4gICAgICBoaWRlKGJ1dHRvblRvUmVwbGFjZSk7XG4gICAgICBsb2FkZXIuc2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbi10by1yZXBsYWNlJywgYnV0dG9uVG9SZXBsYWNlLmNsYXNzTmFtZSk7XG4gICAgICBhY3Rpb25zLmluc2VydEJlZm9yZShsb2FkZXIsIGJ1dHRvblRvUmVwbGFjZSk7XG4gICAgfVxuICAgIGFkZENsYXNzKFtwb3B1cCwgYWN0aW9uc10sIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgaGFuZGxlSW5wdXRPcHRpb25zQW5kVmFsdWUgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGlmIChwYXJhbXMuaW5wdXQgPT09ICdzZWxlY3QnIHx8IHBhcmFtcy5pbnB1dCA9PT0gJ3JhZGlvJykge1xuICAgICAgaGFuZGxlSW5wdXRPcHRpb25zKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIH0gZWxzZSBpZiAoWyd0ZXh0JywgJ2VtYWlsJywgJ251bWJlcicsICd0ZWwnLCAndGV4dGFyZWEnXS5zb21lKGkgPT4gaSA9PT0gcGFyYW1zLmlucHV0KSAmJiAoaGFzVG9Qcm9taXNlRm4ocGFyYW1zLmlucHV0VmFsdWUpIHx8IGlzUHJvbWlzZShwYXJhbXMuaW5wdXRWYWx1ZSkpKSB7XG4gICAgICBzaG93TG9hZGluZyhnZXRDb25maXJtQnV0dG9uKCkpO1xuICAgICAgaGFuZGxlSW5wdXRWYWx1ZShpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gaW5uZXJQYXJhbXNcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRJbnB1dFZhbHVlfVxuICAgKi9cbiAgY29uc3QgZ2V0SW5wdXRWYWx1ZSA9IChpbnN0YW5jZSwgaW5uZXJQYXJhbXMpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGluc3RhbmNlLmdldElucHV0KCk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHN3aXRjaCAoaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgcmV0dXJuIGdldENoZWNrYm94VmFsdWUoaW5wdXQpO1xuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICByZXR1cm4gZ2V0UmFkaW9WYWx1ZShpbnB1dCk7XG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgcmV0dXJuIGdldEZpbGVWYWx1ZShpbnB1dCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gaW5uZXJQYXJhbXMuaW5wdXRBdXRvVHJpbSA/IGlucHV0LnZhbHVlLnRyaW0oKSA6IGlucHV0LnZhbHVlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBpbnB1dFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgY29uc3QgZ2V0Q2hlY2tib3hWYWx1ZSA9IGlucHV0ID0+IGlucHV0LmNoZWNrZWQgPyAxIDogMDtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBpbnB1dFxuICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldFJhZGlvVmFsdWUgPSBpbnB1dCA9PiBpbnB1dC5jaGVja2VkID8gaW5wdXQudmFsdWUgOiBudWxsO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGlucHV0XG4gICAqIEByZXR1cm5zIHtGaWxlTGlzdCB8IEZpbGUgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0RmlsZVZhbHVlID0gaW5wdXQgPT4gaW5wdXQuZmlsZXMgJiYgaW5wdXQuZmlsZXMubGVuZ3RoID8gaW5wdXQuZ2V0QXR0cmlidXRlKCdtdWx0aXBsZScpICE9PSBudWxsID8gaW5wdXQuZmlsZXMgOiBpbnB1dC5maWxlc1swXSA6IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCBoYW5kbGVJbnB1dE9wdGlvbnMgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBpZiAoIXBvcHVwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYW55Pn0gaW5wdXRPcHRpb25zXG4gICAgICovXG4gICAgY29uc3QgcHJvY2Vzc0lucHV0T3B0aW9ucyA9IGlucHV0T3B0aW9ucyA9PiB7XG4gICAgICBpZiAocGFyYW1zLmlucHV0ID09PSAnc2VsZWN0Jykge1xuICAgICAgICBwb3B1bGF0ZVNlbGVjdE9wdGlvbnMocG9wdXAsIGZvcm1hdElucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpLCBwYXJhbXMpO1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXMuaW5wdXQgPT09ICdyYWRpbycpIHtcbiAgICAgICAgcG9wdWxhdGVSYWRpb09wdGlvbnMocG9wdXAsIGZvcm1hdElucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpLCBwYXJhbXMpO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGhhc1RvUHJvbWlzZUZuKHBhcmFtcy5pbnB1dE9wdGlvbnMpIHx8IGlzUHJvbWlzZShwYXJhbXMuaW5wdXRPcHRpb25zKSkge1xuICAgICAgc2hvd0xvYWRpbmcoZ2V0Q29uZmlybUJ1dHRvbigpKTtcbiAgICAgIGFzUHJvbWlzZShwYXJhbXMuaW5wdXRPcHRpb25zKS50aGVuKGlucHV0T3B0aW9ucyA9PiB7XG4gICAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgIHByb2Nlc3NJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtcy5pbnB1dE9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICBwcm9jZXNzSW5wdXRPcHRpb25zKHBhcmFtcy5pbnB1dE9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dE9wdGlvbnMhIEV4cGVjdGVkIG9iamVjdCwgTWFwIG9yIFByb21pc2UsIGdvdCBcIi5jb25jYXQodHlwZW9mIHBhcmFtcy5pbnB1dE9wdGlvbnMpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCBoYW5kbGVJbnB1dFZhbHVlID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGluc3RhbmNlLmdldElucHV0KCk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoaWRlKGlucHV0KTtcbiAgICBhc1Byb21pc2UocGFyYW1zLmlucHV0VmFsdWUpLnRoZW4oaW5wdXRWYWx1ZSA9PiB7XG4gICAgICBpbnB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dCA9PT0gJ251bWJlcicgPyBcIlwiLmNvbmNhdChwYXJzZUZsb2F0KGlucHV0VmFsdWUpIHx8IDApIDogXCJcIi5jb25jYXQoaW5wdXRWYWx1ZSk7XG4gICAgICBzaG93KGlucHV0KTtcbiAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpO1xuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICBlcnJvcihcIkVycm9yIGluIGlucHV0VmFsdWUgcHJvbWlzZTogXCIuY29uY2F0KGVycikpO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIHNob3coaW5wdXQpO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHVwXG4gICAqIEBwYXJhbSB7SW5wdXRPcHRpb25GbGF0dGVuZWRbXX0gaW5wdXRPcHRpb25zXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgZnVuY3Rpb24gcG9wdWxhdGVTZWxlY3RPcHRpb25zKHBvcHVwLCBpbnB1dE9wdGlvbnMsIHBhcmFtcykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGdldERpcmVjdENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuc2VsZWN0KTtcbiAgICBpZiAoIXNlbGVjdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uVmFsdWVcbiAgICAgKi9cbiAgICBjb25zdCByZW5kZXJPcHRpb24gPSAocGFyZW50LCBvcHRpb25MYWJlbCwgb3B0aW9uVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XG4gICAgICBzZXRJbm5lckh0bWwob3B0aW9uLCBvcHRpb25MYWJlbCk7XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSBpc1NlbGVjdGVkKG9wdGlvblZhbHVlLCBwYXJhbXMuaW5wdXRWYWx1ZSk7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9O1xuICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGlucHV0T3B0aW9uID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gaW5wdXRPcHRpb25bMF07XG4gICAgICBjb25zdCBvcHRpb25MYWJlbCA9IGlucHV0T3B0aW9uWzFdO1xuICAgICAgLy8gPG9wdGdyb3VwPiBzcGVjOlxuICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw0MDEvaW50ZXJhY3QvZm9ybXMuaHRtbCNoLTE3LjZcbiAgICAgIC8vIFwiLi4uYWxsIE9QVEdST1VQIGVsZW1lbnRzIG11c3QgYmUgc3BlY2lmaWVkIGRpcmVjdGx5IHdpdGhpbiBhIFNFTEVDVCBlbGVtZW50IChpLmUuLCBncm91cHMgbWF5IG5vdCBiZSBuZXN0ZWQpLi4uXCJcbiAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhpcyBpcyBhIDxvcHRncm91cD5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbkxhYmVsKSkge1xuICAgICAgICAvLyBpZiBpdCBpcyBhbiBhcnJheSwgdGhlbiBpdCBpcyBhbiA8b3B0Z3JvdXA+XG4gICAgICAgIGNvbnN0IG9wdGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcbiAgICAgICAgb3B0Z3JvdXAubGFiZWwgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgb3B0Z3JvdXAuZGlzYWJsZWQgPSBmYWxzZTsgLy8gbm90IGNvbmZpZ3VyYWJsZSBmb3Igbm93XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRncm91cCk7XG4gICAgICAgIG9wdGlvbkxhYmVsLmZvckVhY2gobyA9PiByZW5kZXJPcHRpb24ob3B0Z3JvdXAsIG9bMV0sIG9bMF0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNhc2Ugb2YgPG9wdGlvbj5cbiAgICAgICAgcmVuZGVyT3B0aW9uKHNlbGVjdCwgb3B0aW9uTGFiZWwsIG9wdGlvblZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWxlY3QuZm9jdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKiBAcGFyYW0ge0lucHV0T3B0aW9uRmxhdHRlbmVkW119IGlucHV0T3B0aW9uc1xuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGZ1bmN0aW9uIHBvcHVsYXRlUmFkaW9PcHRpb25zKHBvcHVwLCBpbnB1dE9wdGlvbnMsIHBhcmFtcykge1xuICAgIGNvbnN0IHJhZGlvID0gZ2V0RGlyZWN0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5yYWRpbyk7XG4gICAgaWYgKCFyYWRpbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChpbnB1dE9wdGlvbiA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gaW5wdXRPcHRpb25bMF07XG4gICAgICBjb25zdCByYWRpb0xhYmVsID0gaW5wdXRPcHRpb25bMV07XG4gICAgICBjb25zdCByYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGNvbnN0IHJhZGlvTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgIHJhZGlvSW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgICByYWRpb0lucHV0Lm5hbWUgPSBzd2FsQ2xhc3Nlcy5yYWRpbztcbiAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSByYWRpb1ZhbHVlO1xuICAgICAgaWYgKGlzU2VsZWN0ZWQocmFkaW9WYWx1ZSwgcGFyYW1zLmlucHV0VmFsdWUpKSB7XG4gICAgICAgIHJhZGlvSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNldElubmVySHRtbChsYWJlbCwgcmFkaW9MYWJlbCk7XG4gICAgICBsYWJlbC5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5sYWJlbDtcbiAgICAgIHJhZGlvTGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xuICAgICAgcmFkaW9MYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgcmFkaW8uYXBwZW5kQ2hpbGQocmFkaW9MYWJlbEVsZW1lbnQpO1xuICAgIH0pO1xuICAgIGNvbnN0IHJhZGlvcyA9IHJhZGlvLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgaWYgKHJhZGlvcy5sZW5ndGgpIHtcbiAgICAgIHJhZGlvc1swXS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBgaW5wdXRPcHRpb25zYCBpbnRvIGFuIGFycmF5IG9mIGBbdmFsdWUsIGxhYmVsXWBzXG4gICAqXG4gICAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYW55Pn0gaW5wdXRPcHRpb25zXG4gICAqIEB0eXBlZGVmIHtzdHJpbmdbXX0gSW5wdXRPcHRpb25GbGF0dGVuZWRcbiAgICogQHJldHVybnMge0lucHV0T3B0aW9uRmxhdHRlbmVkW119XG4gICAqL1xuICBjb25zdCBmb3JtYXRJbnB1dE9wdGlvbnMgPSBpbnB1dE9wdGlvbnMgPT4ge1xuICAgIC8qKiBAdHlwZSB7SW5wdXRPcHRpb25GbGF0dGVuZWRbXX0gKi9cbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBpZiAoaW5wdXRPcHRpb25zIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWVGb3JtYXR0ZWQgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZUZvcm1hdHRlZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyBjYXNlIG9mIDxvcHRncm91cD5cbiAgICAgICAgICB2YWx1ZUZvcm1hdHRlZCA9IGZvcm1hdElucHV0T3B0aW9ucyh2YWx1ZUZvcm1hdHRlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2goW2tleSwgdmFsdWVGb3JtYXR0ZWRdKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3Qua2V5cyhpbnB1dE9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgbGV0IHZhbHVlRm9ybWF0dGVkID0gaW5wdXRPcHRpb25zW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWVGb3JtYXR0ZWQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgLy8gY2FzZSBvZiA8b3B0Z3JvdXA+XG4gICAgICAgICAgdmFsdWVGb3JtYXR0ZWQgPSBmb3JtYXRJbnB1dE9wdGlvbnModmFsdWVGb3JtYXR0ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKFtrZXksIHZhbHVlRm9ybWF0dGVkXSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvblZhbHVlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydElucHV0VmFsdWV9IGlucHV0VmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc1NlbGVjdGVkID0gKG9wdGlvblZhbHVlLCBpbnB1dFZhbHVlKSA9PiB7XG4gICAgcmV0dXJuICEhaW5wdXRWYWx1ZSAmJiBpbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IG9wdGlvblZhbHVlLnRvU3RyaW5nKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm1CdXR0b25DbGljayA9IGluc3RhbmNlID0+IHtcbiAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICAgIGluc3RhbmNlLmRpc2FibGVCdXR0b25zKCk7XG4gICAgaWYgKGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICBoYW5kbGVDb25maXJtT3JEZW55V2l0aElucHV0KGluc3RhbmNlLCAnY29uZmlybScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maXJtKGluc3RhbmNlLCB0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0IGhhbmRsZURlbnlCdXR0b25DbGljayA9IGluc3RhbmNlID0+IHtcbiAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICAgIGluc3RhbmNlLmRpc2FibGVCdXR0b25zKCk7XG4gICAgaWYgKGlubmVyUGFyYW1zLnJldHVybklucHV0VmFsdWVPbkRlbnkpIHtcbiAgICAgIGhhbmRsZUNvbmZpcm1PckRlbnlXaXRoSW5wdXQoaW5zdGFuY2UsICdkZW55Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbnkoaW5zdGFuY2UsIGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzbWlzc1dpdGhcbiAgICovXG4gIGNvbnN0IGhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrID0gKGluc3RhbmNlLCBkaXNtaXNzV2l0aCkgPT4ge1xuICAgIGluc3RhbmNlLmRpc2FibGVCdXR0b25zKCk7XG4gICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jYW5jZWwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7J2NvbmZpcm0nIHwgJ2RlbnknfSB0eXBlXG4gICAqL1xuICBjb25zdCBoYW5kbGVDb25maXJtT3JEZW55V2l0aElucHV0ID0gKGluc3RhbmNlLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcbiAgICBpZiAoIWlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICBlcnJvcihcIlRoZSBcXFwiaW5wdXRcXFwiIHBhcmFtZXRlciBpcyBuZWVkZWQgdG8gYmUgc2V0IHdoZW4gdXNpbmcgcmV0dXJuSW5wdXRWYWx1ZU9uXCIuY29uY2F0KGNhcGl0YWxpemVGaXJzdExldHRlcih0eXBlKSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dCA9IGluc3RhbmNlLmdldElucHV0KCk7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGdldElucHV0VmFsdWUoaW5zdGFuY2UsIGlubmVyUGFyYW1zKTtcbiAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IpIHtcbiAgICAgIGhhbmRsZUlucHV0VmFsaWRhdG9yKGluc3RhbmNlLCBpbnB1dFZhbHVlLCB0eXBlKTtcbiAgICB9IGVsc2UgaWYgKGlucHV0ICYmICFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIGluc3RhbmNlLmVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGluc3RhbmNlLnNob3dWYWxpZGF0aW9uTWVzc2FnZShpbm5lclBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGVueScpIHtcbiAgICAgIGRlbnkoaW5zdGFuY2UsIGlucHV0VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maXJtKGluc3RhbmNlLCBpbnB1dFZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0SW5wdXRWYWx1ZX0gaW5wdXRWYWx1ZVxuICAgKiBAcGFyYW0geydjb25maXJtJyB8ICdkZW55J30gdHlwZVxuICAgKi9cbiAgY29uc3QgaGFuZGxlSW5wdXRWYWxpZGF0b3IgPSAoaW5zdGFuY2UsIGlucHV0VmFsdWUsIHR5cGUpID0+IHtcbiAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICAgIGluc3RhbmNlLmRpc2FibGVJbnB1dCgpO1xuICAgIGNvbnN0IHZhbGlkYXRpb25Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiBhc1Byb21pc2UoaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IoaW5wdXRWYWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKSk7XG4gICAgdmFsaWRhdGlvblByb21pc2UudGhlbih2YWxpZGF0aW9uTWVzc2FnZSA9PiB7XG4gICAgICBpbnN0YW5jZS5lbmFibGVCdXR0b25zKCk7XG4gICAgICBpbnN0YW5jZS5lbmFibGVJbnB1dCgpO1xuICAgICAgaWYgKHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICAgIGluc3RhbmNlLnNob3dWYWxpZGF0aW9uTWVzc2FnZSh2YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkZW55Jykge1xuICAgICAgICBkZW55KGluc3RhbmNlLCBpbnB1dFZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpcm0oaW5zdGFuY2UsIGlucHV0VmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKi9cbiAgY29uc3QgZGVueSA9IChpbnN0YW5jZSwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UgfHwgdW5kZWZpbmVkKTtcbiAgICBpZiAoaW5uZXJQYXJhbXMuc2hvd0xvYWRlck9uRGVueSkge1xuICAgICAgc2hvd0xvYWRpbmcoZ2V0RGVueUJ1dHRvbigpKTtcbiAgICB9XG4gICAgaWYgKGlubmVyUGFyYW1zLnByZURlbnkpIHtcbiAgICAgIGluc3RhbmNlLmlzQXdhaXRpbmdQcm9taXNlID0gdHJ1ZTsgLy8gRmxhZ2dpbmcgdGhlIGluc3RhbmNlIGFzIGF3YWl0aW5nIGEgcHJvbWlzZSBzbyBpdCdzIG93biBwcm9taXNlJ3MgcmVqZWN0L3Jlc29sdmUgbWV0aG9kcyBkb2Vzbid0IGdldCBkZXN0cm95ZWQgdW50aWwgdGhlIHJlc3VsdCBmcm9tIHRoaXMgcHJlRGVueSdzIHByb21pc2UgaXMgcmVjZWl2ZWRcbiAgICAgIGNvbnN0IHByZURlbnlQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiBhc1Byb21pc2UoaW5uZXJQYXJhbXMucHJlRGVueSh2YWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKSk7XG4gICAgICBwcmVEZW55UHJvbWlzZS50aGVuKHByZURlbnlWYWx1ZSA9PiB7XG4gICAgICAgIGlmIChwcmVEZW55VmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICBoYW5kbGVBd2FpdGluZ1Byb21pc2UoaW5zdGFuY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGluc3RhbmNlLmNsb3NlKHtcbiAgICAgICAgICAgIGlzRGVuaWVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IHR5cGVvZiBwcmVEZW55VmFsdWUgPT09ICd1bmRlZmluZWQnID8gdmFsdWUgOiBwcmVEZW55VmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gcmVqZWN0V2l0aChpbnN0YW5jZSB8fCB1bmRlZmluZWQsIGVycm9yKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLmNsb3NlKHtcbiAgICAgICAgaXNEZW5pZWQ6IHRydWUsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqL1xuICBjb25zdCBzdWNjZWVkV2l0aCA9IChpbnN0YW5jZSwgdmFsdWUpID0+IHtcbiAgICBpbnN0YW5jZS5jbG9zZSh7XG4gICAgICBpc0NvbmZpcm1lZDogdHJ1ZSxcbiAgICAgIHZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yXG4gICAqL1xuICBjb25zdCByZWplY3RXaXRoID0gKGluc3RhbmNlLCBlcnJvcikgPT4ge1xuICAgIGluc3RhbmNlLnJlamVjdFByb21pc2UoZXJyb3IpO1xuICB9O1xuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKi9cbiAgY29uc3QgY29uZmlybSA9IChpbnN0YW5jZSwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UgfHwgdW5kZWZpbmVkKTtcbiAgICBpZiAoaW5uZXJQYXJhbXMuc2hvd0xvYWRlck9uQ29uZmlybSkge1xuICAgICAgc2hvd0xvYWRpbmcoKTtcbiAgICB9XG4gICAgaWYgKGlubmVyUGFyYW1zLnByZUNvbmZpcm0pIHtcbiAgICAgIGluc3RhbmNlLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcbiAgICAgIGluc3RhbmNlLmlzQXdhaXRpbmdQcm9taXNlID0gdHJ1ZTsgLy8gRmxhZ2dpbmcgdGhlIGluc3RhbmNlIGFzIGF3YWl0aW5nIGEgcHJvbWlzZSBzbyBpdCdzIG93biBwcm9taXNlJ3MgcmVqZWN0L3Jlc29sdmUgbWV0aG9kcyBkb2Vzbid0IGdldCBkZXN0cm95ZWQgdW50aWwgdGhlIHJlc3VsdCBmcm9tIHRoaXMgcHJlQ29uZmlybSdzIHByb21pc2UgaXMgcmVjZWl2ZWRcbiAgICAgIGNvbnN0IHByZUNvbmZpcm1Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiBhc1Byb21pc2UoaW5uZXJQYXJhbXMucHJlQ29uZmlybSh2YWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKSk7XG4gICAgICBwcmVDb25maXJtUHJvbWlzZS50aGVuKHByZUNvbmZpcm1WYWx1ZSA9PiB7XG4gICAgICAgIGlmIChpc1Zpc2libGUkMShnZXRWYWxpZGF0aW9uTWVzc2FnZSgpKSB8fCBwcmVDb25maXJtVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICBoYW5kbGVBd2FpdGluZ1Byb21pc2UoaW5zdGFuY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1Y2NlZWRXaXRoKGluc3RhbmNlLCB0eXBlb2YgcHJlQ29uZmlybVZhbHVlID09PSAndW5kZWZpbmVkJyA/IHZhbHVlIDogcHJlQ29uZmlybVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gcmVqZWN0V2l0aChpbnN0YW5jZSB8fCB1bmRlZmluZWQsIGVycm9yKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Y2NlZWRXaXRoKGluc3RhbmNlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBIaWRlcyBsb2FkZXIgYW5kIHNob3dzIGJhY2sgdGhlIGJ1dHRvbiB3aGljaCB3YXMgaGlkZGVuIGJ5IC5zaG93TG9hZGluZygpXG4gICAqL1xuICBmdW5jdGlvbiBoaWRlTG9hZGluZygpIHtcbiAgICAvLyBkbyBub3RoaW5nIGlmIHBvcHVwIGlzIGNsb3NlZFxuICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgICBpZiAoIWlubmVyUGFyYW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICBoaWRlKGRvbUNhY2hlLmxvYWRlcik7XG4gICAgaWYgKGlzVG9hc3QoKSkge1xuICAgICAgaWYgKGlubmVyUGFyYW1zLmljb24pIHtcbiAgICAgICAgc2hvdyhnZXRJY29uKCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaG93UmVsYXRlZEJ1dHRvbihkb21DYWNoZSk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKFtkb21DYWNoZS5wb3B1cCwgZG9tQ2FjaGUuYWN0aW9uc10sIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICAgIGRvbUNhY2hlLnBvcHVwLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1idXN5Jyk7XG4gICAgZG9tQ2FjaGUucG9wdXAucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgZG9tQ2FjaGUuZGVueUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG4gIGNvbnN0IHNob3dSZWxhdGVkQnV0dG9uID0gZG9tQ2FjaGUgPT4ge1xuICAgIGNvbnN0IGJ1dHRvblRvUmVwbGFjZSA9IGRvbUNhY2hlLnBvcHVwLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZG9tQ2FjaGUubG9hZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1idXR0b24tdG8tcmVwbGFjZScpKTtcbiAgICBpZiAoYnV0dG9uVG9SZXBsYWNlLmxlbmd0aCkge1xuICAgICAgc2hvdyhidXR0b25Ub1JlcGxhY2VbMF0sICdpbmxpbmUtYmxvY2snKTtcbiAgICB9IGVsc2UgaWYgKGFsbEJ1dHRvbnNBcmVIaWRkZW4oKSkge1xuICAgICAgaGlkZShkb21DYWNoZS5hY3Rpb25zKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGlucHV0IERPTSBub2RlLCB0aGlzIG1ldGhvZCB3b3JrcyB3aXRoIGlucHV0IHBhcmFtZXRlci5cbiAgICpcbiAgICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SW5wdXQoKSB7XG4gICAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICAgIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICBpZiAoIWRvbUNhY2hlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGdldElucHV0JDEoZG9tQ2FjaGUucG9wdXAsIGlubmVyUGFyYW1zLmlucHV0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGJ1dHRvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZFxuICAgKi9cbiAgZnVuY3Rpb24gc2V0QnV0dG9uc0Rpc2FibGVkKGluc3RhbmNlLCBidXR0b25zLCBkaXNhYmxlZCkge1xuICAgIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldChpbnN0YW5jZSk7XG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBkb21DYWNoZVtidXR0b25dLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50IHwgbnVsbH0gaW5wdXRcbiAgICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZFxuICAgKi9cbiAgZnVuY3Rpb24gc2V0SW5wdXREaXNhYmxlZChpbnB1dCwgZGlzYWJsZWQpIHtcbiAgICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFwb3B1cCB8fCAhaW5wdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIC8qKiBAdHlwZSB7Tm9kZUxpc3RPZjxIVE1MSW5wdXRFbGVtZW50Pn0gKi9cbiAgICAgIGNvbnN0IHJhZGlvcyA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1cXFwiXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhZGlvLCBcIlxcXCJdXCIpKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJhZGlvc1tpXS5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgYWxsIHRoZSBidXR0b25zXG4gICAqIEB0aGlzIHtTd2VldEFsZXJ0fVxuICAgKi9cbiAgZnVuY3Rpb24gZW5hYmxlQnV0dG9ucygpIHtcbiAgICBzZXRCdXR0b25zRGlzYWJsZWQodGhpcywgWydjb25maXJtQnV0dG9uJywgJ2RlbnlCdXR0b24nLCAnY2FuY2VsQnV0dG9uJ10sIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGFsbCB0aGUgYnV0dG9uc1xuICAgKiBAdGhpcyB7U3dlZXRBbGVydH1cbiAgICovXG4gIGZ1bmN0aW9uIGRpc2FibGVCdXR0b25zKCkge1xuICAgIHNldEJ1dHRvbnNEaXNhYmxlZCh0aGlzLCBbJ2NvbmZpcm1CdXR0b24nLCAnZGVueUJ1dHRvbicsICdjYW5jZWxCdXR0b24nXSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBpbnB1dCBmaWVsZFxuICAgKiBAdGhpcyB7U3dlZXRBbGVydH1cbiAgICovXG4gIGZ1bmN0aW9uIGVuYWJsZUlucHV0KCkge1xuICAgIHNldElucHV0RGlzYWJsZWQodGhpcy5nZXRJbnB1dCgpLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgaW5wdXQgZmllbGRcbiAgICogQHRoaXMge1N3ZWV0QWxlcnR9XG4gICAqL1xuICBmdW5jdGlvbiBkaXNhYmxlSW5wdXQoKSB7XG4gICAgc2V0SW5wdXREaXNhYmxlZCh0aGlzLmdldElucHV0KCksIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYmxvY2sgd2l0aCB2YWxpZGF0aW9uIG1lc3NhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yXG4gICAqIEB0aGlzIHtTd2VldEFsZXJ0fVxuICAgKi9cbiAgZnVuY3Rpb24gc2hvd1ZhbGlkYXRpb25NZXNzYWdlKGVycm9yKSB7XG4gICAgY29uc3QgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG4gICAgc2V0SW5uZXJIdG1sKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLCBlcnJvcik7XG4gICAgZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UuY2xhc3NOYW1lID0gc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddO1xuICAgIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MgJiYgcGFyYW1zLmN1c3RvbUNsYXNzLnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICBhZGRDbGFzcyhkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSwgcGFyYW1zLmN1c3RvbUNsYXNzLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9XG4gICAgc2hvdyhkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsICd0cnVlJyk7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10pO1xuICAgICAgZm9jdXNJbnB1dChpbnB1dCk7XG4gICAgICBhZGRDbGFzcyhpbnB1dCwgc3dhbENsYXNzZXMuaW5wdXRlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgYmxvY2sgd2l0aCB2YWxpZGF0aW9uIG1lc3NhZ2VcbiAgICpcbiAgICogQHRoaXMge1N3ZWV0QWxlcnR9XG4gICAqL1xuICBmdW5jdGlvbiByZXNldFZhbGlkYXRpb25NZXNzYWdlKCkge1xuICAgIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICBpZiAoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGhpZGUoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJyk7XG4gICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgICAgIHJlbW92ZUNsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZWZhdWx0UGFyYW1zID0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICB0aXRsZVRleHQ6ICcnLFxuICAgIHRleHQ6ICcnLFxuICAgIGh0bWw6ICcnLFxuICAgIGZvb3RlcjogJycsXG4gICAgaWNvbjogdW5kZWZpbmVkLFxuICAgIGljb25Db2xvcjogdW5kZWZpbmVkLFxuICAgIGljb25IdG1sOiB1bmRlZmluZWQsXG4gICAgdGVtcGxhdGU6IHVuZGVmaW5lZCxcbiAgICB0b2FzdDogZmFsc2UsXG4gICAgc2hvd0NsYXNzOiB7XG4gICAgICBwb3B1cDogJ3N3YWwyLXNob3cnLFxuICAgICAgYmFja2Ryb3A6ICdzd2FsMi1iYWNrZHJvcC1zaG93JyxcbiAgICAgIGljb246ICdzd2FsMi1pY29uLXNob3cnXG4gICAgfSxcbiAgICBoaWRlQ2xhc3M6IHtcbiAgICAgIHBvcHVwOiAnc3dhbDItaGlkZScsXG4gICAgICBiYWNrZHJvcDogJ3N3YWwyLWJhY2tkcm9wLWhpZGUnLFxuICAgICAgaWNvbjogJ3N3YWwyLWljb24taGlkZSdcbiAgICB9LFxuICAgIGN1c3RvbUNsYXNzOiB7fSxcbiAgICB0YXJnZXQ6ICdib2R5JyxcbiAgICBjb2xvcjogdW5kZWZpbmVkLFxuICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgIGhlaWdodEF1dG86IHRydWUsXG4gICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgYWxsb3dFc2NhcGVLZXk6IHRydWUsXG4gICAgYWxsb3dFbnRlcktleTogdHJ1ZSxcbiAgICBzdG9wS2V5ZG93blByb3BhZ2F0aW9uOiB0cnVlLFxuICAgIGtleWRvd25MaXN0ZW5lckNhcHR1cmU6IGZhbHNlLFxuICAgIHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuICAgIHNob3dEZW55QnV0dG9uOiBmYWxzZSxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcbiAgICBwcmVDb25maXJtOiB1bmRlZmluZWQsXG4gICAgcHJlRGVueTogdW5kZWZpbmVkLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgIGNvbmZpcm1CdXR0b25BcmlhTGFiZWw6ICcnLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogdW5kZWZpbmVkLFxuICAgIGRlbnlCdXR0b25UZXh0OiAnTm8nLFxuICAgIGRlbnlCdXR0b25BcmlhTGFiZWw6ICcnLFxuICAgIGRlbnlCdXR0b25Db2xvcjogdW5kZWZpbmVkLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICAgIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogJycsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6IHVuZGVmaW5lZCxcbiAgICBidXR0b25zU3R5bGluZzogdHJ1ZSxcbiAgICByZXZlcnNlQnV0dG9uczogZmFsc2UsXG4gICAgZm9jdXNDb25maXJtOiB0cnVlLFxuICAgIGZvY3VzRGVueTogZmFsc2UsXG4gICAgZm9jdXNDYW5jZWw6IGZhbHNlLFxuICAgIHJldHVybkZvY3VzOiB0cnVlLFxuICAgIHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG4gICAgY2xvc2VCdXR0b25IdG1sOiAnJnRpbWVzOycsXG4gICAgY2xvc2VCdXR0b25BcmlhTGFiZWw6ICdDbG9zZSB0aGlzIGRpYWxvZycsXG4gICAgbG9hZGVySHRtbDogJycsXG4gICAgc2hvd0xvYWRlck9uQ29uZmlybTogZmFsc2UsXG4gICAgc2hvd0xvYWRlck9uRGVueTogZmFsc2UsXG4gICAgaW1hZ2VVcmw6IHVuZGVmaW5lZCxcbiAgICBpbWFnZVdpZHRoOiB1bmRlZmluZWQsXG4gICAgaW1hZ2VIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICBpbWFnZUFsdDogJycsXG4gICAgdGltZXI6IHVuZGVmaW5lZCxcbiAgICB0aW1lclByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgIHBhZGRpbmc6IHVuZGVmaW5lZCxcbiAgICBiYWNrZ3JvdW5kOiB1bmRlZmluZWQsXG4gICAgaW5wdXQ6IHVuZGVmaW5lZCxcbiAgICBpbnB1dFBsYWNlaG9sZGVyOiAnJyxcbiAgICBpbnB1dExhYmVsOiAnJyxcbiAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICBpbnB1dE9wdGlvbnM6IHt9LFxuICAgIGlucHV0QXV0b0ZvY3VzOiB0cnVlLFxuICAgIGlucHV0QXV0b1RyaW06IHRydWUsXG4gICAgaW5wdXRBdHRyaWJ1dGVzOiB7fSxcbiAgICBpbnB1dFZhbGlkYXRvcjogdW5kZWZpbmVkLFxuICAgIHJldHVybklucHV0VmFsdWVPbkRlbnk6IGZhbHNlLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlOiB1bmRlZmluZWQsXG4gICAgZ3JvdzogZmFsc2UsXG4gICAgcG9zaXRpb246ICdjZW50ZXInLFxuICAgIHByb2dyZXNzU3RlcHM6IFtdLFxuICAgIGN1cnJlbnRQcm9ncmVzc1N0ZXA6IHVuZGVmaW5lZCxcbiAgICBwcm9ncmVzc1N0ZXBzRGlzdGFuY2U6IHVuZGVmaW5lZCxcbiAgICB3aWxsT3BlbjogdW5kZWZpbmVkLFxuICAgIGRpZE9wZW46IHVuZGVmaW5lZCxcbiAgICBkaWRSZW5kZXI6IHVuZGVmaW5lZCxcbiAgICB3aWxsQ2xvc2U6IHVuZGVmaW5lZCxcbiAgICBkaWRDbG9zZTogdW5kZWZpbmVkLFxuICAgIGRpZERlc3Ryb3k6IHVuZGVmaW5lZCxcbiAgICBzY3JvbGxiYXJQYWRkaW5nOiB0cnVlXG4gIH07XG4gIGNvbnN0IHVwZGF0YWJsZVBhcmFtcyA9IFsnYWxsb3dFc2NhcGVLZXknLCAnYWxsb3dPdXRzaWRlQ2xpY2snLCAnYmFja2dyb3VuZCcsICdidXR0b25zU3R5bGluZycsICdjYW5jZWxCdXR0b25BcmlhTGFiZWwnLCAnY2FuY2VsQnV0dG9uQ29sb3InLCAnY2FuY2VsQnV0dG9uVGV4dCcsICdjbG9zZUJ1dHRvbkFyaWFMYWJlbCcsICdjbG9zZUJ1dHRvbkh0bWwnLCAnY29sb3InLCAnY29uZmlybUJ1dHRvbkFyaWFMYWJlbCcsICdjb25maXJtQnV0dG9uQ29sb3InLCAnY29uZmlybUJ1dHRvblRleHQnLCAnY3VycmVudFByb2dyZXNzU3RlcCcsICdjdXN0b21DbGFzcycsICdkZW55QnV0dG9uQXJpYUxhYmVsJywgJ2RlbnlCdXR0b25Db2xvcicsICdkZW55QnV0dG9uVGV4dCcsICdkaWRDbG9zZScsICdkaWREZXN0cm95JywgJ2Zvb3RlcicsICdoaWRlQ2xhc3MnLCAnaHRtbCcsICdpY29uJywgJ2ljb25Db2xvcicsICdpY29uSHRtbCcsICdpbWFnZUFsdCcsICdpbWFnZUhlaWdodCcsICdpbWFnZVVybCcsICdpbWFnZVdpZHRoJywgJ3ByZUNvbmZpcm0nLCAncHJlRGVueScsICdwcm9ncmVzc1N0ZXBzJywgJ3JldHVybkZvY3VzJywgJ3JldmVyc2VCdXR0b25zJywgJ3Nob3dDYW5jZWxCdXR0b24nLCAnc2hvd0Nsb3NlQnV0dG9uJywgJ3Nob3dDb25maXJtQnV0dG9uJywgJ3Nob3dEZW55QnV0dG9uJywgJ3RleHQnLCAndGl0bGUnLCAndGl0bGVUZXh0JywgJ3dpbGxDbG9zZSddO1xuXG4gIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn0gKi9cbiAgY29uc3QgZGVwcmVjYXRlZFBhcmFtcyA9IHt9O1xuICBjb25zdCB0b2FzdEluY29tcGF0aWJsZVBhcmFtcyA9IFsnYWxsb3dPdXRzaWRlQ2xpY2snLCAnYWxsb3dFbnRlcktleScsICdiYWNrZHJvcCcsICdmb2N1c0NvbmZpcm0nLCAnZm9jdXNEZW55JywgJ2ZvY3VzQ2FuY2VsJywgJ3JldHVybkZvY3VzJywgJ2hlaWdodEF1dG8nLCAna2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSddO1xuXG4gIC8qKlxuICAgKiBJcyB2YWxpZCBwYXJhbWV0ZXJcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtTmFtZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzVmFsaWRQYXJhbWV0ZXIgPSBwYXJhbU5hbWUgPT4ge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGVmYXVsdFBhcmFtcywgcGFyYW1OYW1lKTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgdmFsaWQgcGFyYW1ldGVyIGZvciBTd2FsLnVwZGF0ZSgpIG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1OYW1lXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNVcGRhdGFibGVQYXJhbWV0ZXIgPSBwYXJhbU5hbWUgPT4ge1xuICAgIHJldHVybiB1cGRhdGFibGVQYXJhbXMuaW5kZXhPZihwYXJhbU5hbWUpICE9PSAtMTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgZGVwcmVjYXRlZCBwYXJhbWV0ZXJcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtTmFtZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgY29uc3QgaXNEZXByZWNhdGVkUGFyYW1ldGVyID0gcGFyYW1OYW1lID0+IHtcbiAgICByZXR1cm4gZGVwcmVjYXRlZFBhcmFtc1twYXJhbU5hbWVdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1cbiAgICovXG4gIGNvbnN0IGNoZWNrSWZQYXJhbUlzVmFsaWQgPSBwYXJhbSA9PiB7XG4gICAgaWYgKCFpc1ZhbGlkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgd2FybihcIlVua25vd24gcGFyYW1ldGVyIFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIlwiKSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1cbiAgICovXG4gIGNvbnN0IGNoZWNrSWZUb2FzdFBhcmFtSXNWYWxpZCA9IHBhcmFtID0+IHtcbiAgICBpZiAodG9hc3RJbmNvbXBhdGlibGVQYXJhbXMuaW5jbHVkZXMocGFyYW0pKSB7XG4gICAgICB3YXJuKFwiVGhlIHBhcmFtZXRlciBcXFwiXCIuY29uY2F0KHBhcmFtLCBcIlxcXCIgaXMgaW5jb21wYXRpYmxlIHdpdGggdG9hc3RzXCIpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbVxuICAgKi9cbiAgY29uc3QgY2hlY2tJZlBhcmFtSXNEZXByZWNhdGVkID0gcGFyYW0gPT4ge1xuICAgIGNvbnN0IGlzRGVwcmVjYXRlZCA9IGlzRGVwcmVjYXRlZFBhcmFtZXRlcihwYXJhbSk7XG4gICAgaWYgKGlzRGVwcmVjYXRlZCkge1xuICAgICAgd2FybkFib3V0RGVwcmVjYXRpb24ocGFyYW0sIGlzRGVwcmVjYXRlZCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBTaG93IHJlbGV2YW50IHdhcm5pbmdzIGZvciBnaXZlbiBwYXJhbXNcbiAgICpcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCBzaG93V2FybmluZ3NGb3JQYXJhbXMgPSBwYXJhbXMgPT4ge1xuICAgIGlmIChwYXJhbXMuYmFja2Ryb3AgPT09IGZhbHNlICYmIHBhcmFtcy5hbGxvd091dHNpZGVDbGljaykge1xuICAgICAgd2FybignXCJhbGxvd091dHNpZGVDbGlja1wiIHBhcmFtZXRlciByZXF1aXJlcyBgYmFja2Ryb3BgIHBhcmFtZXRlciB0byBiZSBzZXQgdG8gYHRydWVgJyk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICBjaGVja0lmUGFyYW1Jc1ZhbGlkKHBhcmFtKTtcbiAgICAgIGlmIChwYXJhbXMudG9hc3QpIHtcbiAgICAgICAgY2hlY2tJZlRvYXN0UGFyYW1Jc1ZhbGlkKHBhcmFtKTtcbiAgICAgIH1cbiAgICAgIGNoZWNrSWZQYXJhbUlzRGVwcmVjYXRlZChwYXJhbSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHBvcHVwIHBhcmFtZXRlcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlKHBhcmFtcykge1xuICAgIGNvbnN0IHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG4gICAgaWYgKCFwb3B1cCB8fCBoYXNDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLnBvcHVwKSkge1xuICAgICAgd2FybihcIllvdSdyZSB0cnlpbmcgdG8gdXBkYXRlIHRoZSBjbG9zZWQgb3IgY2xvc2luZyBwb3B1cCwgdGhhdCB3b24ndCB3b3JrLiBVc2UgdGhlIHVwZGF0ZSgpIG1ldGhvZCBpbiBwcmVDb25maXJtIHBhcmFtZXRlciBvciBzaG93IGEgbmV3IHBvcHVwLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsaWRVcGRhdGFibGVQYXJhbXMgPSBmaWx0ZXJWYWxpZFBhcmFtcyhwYXJhbXMpO1xuICAgIGNvbnN0IHVwZGF0ZWRQYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBpbm5lclBhcmFtcywgdmFsaWRVcGRhdGFibGVQYXJhbXMpO1xuICAgIHJlbmRlcih0aGlzLCB1cGRhdGVkUGFyYW1zKTtcbiAgICBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuc2V0KHRoaXMsIHVwZGF0ZWRQYXJhbXMpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICB2YWx1ZTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wYXJhbXMsIHBhcmFtcyksXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7U3dlZXRBbGVydE9wdGlvbnN9XG4gICAqL1xuICBjb25zdCBmaWx0ZXJWYWxpZFBhcmFtcyA9IHBhcmFtcyA9PiB7XG4gICAgY29uc3QgdmFsaWRVcGRhdGFibGVQYXJhbXMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgaWYgKGlzVXBkYXRhYmxlUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgICB2YWxpZFVwZGF0YWJsZVBhcmFtc1twYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybihcIkludmFsaWQgcGFyYW1ldGVyIHRvIHVwZGF0ZTogXCIuY29uY2F0KHBhcmFtKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbGlkVXBkYXRhYmxlUGFyYW1zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNwb3NlIHRoZSBjdXJyZW50IFN3ZWV0QWxlcnQyIGluc3RhbmNlXG4gICAqL1xuICBmdW5jdGlvbiBfZGVzdHJveSgpIHtcbiAgICBjb25zdCBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gICAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICAgIGlmICghaW5uZXJQYXJhbXMpIHtcbiAgICAgIGRpc3Bvc2VXZWFrTWFwcyh0aGlzKTsgLy8gVGhlIFdlYWtNYXBzIG1pZ2h0IGhhdmUgYmVlbiBwYXJ0bHkgZGVzdHJveWVkLCB3ZSBtdXN0IHJlY2FsbCBpdCB0byBkaXNwb3NlIGFueSByZW1haW5pbmcgV2Vha01hcHMgIzIzMzVcbiAgICAgIHJldHVybjsgLy8gVGhpcyBpbnN0YW5jZSBoYXMgYWxyZWFkeSBiZWVuIGRlc3Ryb3llZFxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGFub3RoZXIgU3dhbCBjbG9zaW5nXG4gICAgaWYgKGRvbUNhY2hlLnBvcHVwICYmIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaykge1xuICAgICAgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKCk7XG4gICAgICBkZWxldGUgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGlubmVyUGFyYW1zLmRpZERlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlubmVyUGFyYW1zLmRpZERlc3Ryb3koKTtcbiAgICB9XG4gICAgZGlzcG9zZVN3YWwodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3QgZGlzcG9zZVN3YWwgPSBpbnN0YW5jZSA9PiB7XG4gICAgZGlzcG9zZVdlYWtNYXBzKGluc3RhbmNlKTtcbiAgICAvLyBVbnNldCB0aGlzLnBhcmFtcyBzbyBHQyB3aWxsIGRpc3Bvc2UgaXQgKCMxNTY5KVxuICAgIGRlbGV0ZSBpbnN0YW5jZS5wYXJhbXM7XG4gICAgLy8gVW5zZXQgZ2xvYmFsU3RhdGUgcHJvcHMgc28gR0Mgd2lsbCBkaXNwb3NlIGdsb2JhbFN0YXRlICgjMTU2OSlcbiAgICBkZWxldGUgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXI7XG4gICAgZGVsZXRlIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQ7XG4gICAgLy8gVW5zZXQgY3VycmVudEluc3RhbmNlXG4gICAgZGVsZXRlIGdsb2JhbFN0YXRlLmN1cnJlbnRJbnN0YW5jZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3QgZGlzcG9zZVdlYWtNYXBzID0gaW5zdGFuY2UgPT4ge1xuICAgIC8vIElmIHRoZSBjdXJyZW50IGluc3RhbmNlIGlzIGF3YWl0aW5nIGEgcHJvbWlzZSByZXN1bHQsIHdlIGtlZXAgdGhlIHByaXZhdGVNZXRob2RzIHRvIGNhbGwgdGhlbSBvbmNlIHRoZSBwcm9taXNlIHJlc3VsdCBpcyByZXRyaWV2ZWQgIzIzMzVcbiAgICBpZiAoaW5zdGFuY2UuaXNBd2FpdGluZ1Byb21pc2UpIHtcbiAgICAgIHVuc2V0V2Vha01hcHMocHJpdmF0ZVByb3BzLCBpbnN0YW5jZSk7XG4gICAgICBpbnN0YW5jZS5pc0F3YWl0aW5nUHJvbWlzZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuc2V0V2Vha01hcHMocHJpdmF0ZU1ldGhvZHMsIGluc3RhbmNlKTtcbiAgICAgIHVuc2V0V2Vha01hcHMocHJpdmF0ZVByb3BzLCBpbnN0YW5jZSk7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuaXNBd2FpdGluZ1Byb21pc2U7XG4gICAgICAvLyBVbnNldCBpbnN0YW5jZSBtZXRob2RzXG4gICAgICBkZWxldGUgaW5zdGFuY2UuZGlzYWJsZUJ1dHRvbnM7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuZW5hYmxlQnV0dG9ucztcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5nZXRJbnB1dDtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5kaXNhYmxlSW5wdXQ7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuZW5hYmxlSW5wdXQ7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuaGlkZUxvYWRpbmc7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuZGlzYWJsZUxvYWRpbmc7XG4gICAgICBkZWxldGUgaW5zdGFuY2Uuc2hvd1ZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuY2xvc2U7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuY2xvc2VQb3B1cDtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5jbG9zZU1vZGFsO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmNsb3NlVG9hc3Q7XG4gICAgICBkZWxldGUgaW5zdGFuY2UucmVqZWN0UHJvbWlzZTtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS51cGRhdGU7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuX2Rlc3Ryb3k7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0IHVuc2V0V2Vha01hcHMgPSAob2JqLCBpbnN0YW5jZSkgPT4ge1xuICAgIGZvciAoY29uc3QgaSBpbiBvYmopIHtcbiAgICAgIG9ialtpXS5kZWxldGUoaW5zdGFuY2UpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaW5zdGFuY2VNZXRob2RzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBfZGVzdHJveTogX2Rlc3Ryb3ksXG4gICAgY2xvc2U6IGNsb3NlLFxuICAgIGNsb3NlTW9kYWw6IGNsb3NlLFxuICAgIGNsb3NlUG9wdXA6IGNsb3NlLFxuICAgIGNsb3NlVG9hc3Q6IGNsb3NlLFxuICAgIGRpc2FibGVCdXR0b25zOiBkaXNhYmxlQnV0dG9ucyxcbiAgICBkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCxcbiAgICBkaXNhYmxlTG9hZGluZzogaGlkZUxvYWRpbmcsXG4gICAgZW5hYmxlQnV0dG9uczogZW5hYmxlQnV0dG9ucyxcbiAgICBlbmFibGVJbnB1dDogZW5hYmxlSW5wdXQsXG4gICAgZ2V0SW5wdXQ6IGdldElucHV0LFxuICAgIGhhbmRsZUF3YWl0aW5nUHJvbWlzZTogaGFuZGxlQXdhaXRpbmdQcm9taXNlLFxuICAgIGhpZGVMb2FkaW5nOiBoaWRlTG9hZGluZyxcbiAgICByZWplY3RQcm9taXNlOiByZWplY3RQcm9taXNlLFxuICAgIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U6IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgc2hvd1ZhbGlkYXRpb25NZXNzYWdlOiBzaG93VmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgdXBkYXRlOiB1cGRhdGVcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqIEBwYXJhbSB7RG9tQ2FjaGV9IGRvbUNhY2hlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc21pc3NXaXRoXG4gICAqL1xuICBjb25zdCBoYW5kbGVQb3B1cENsaWNrID0gKGlubmVyUGFyYW1zLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpID0+IHtcbiAgICBpZiAoaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIGhhbmRsZVRvYXN0Q2xpY2soaW5uZXJQYXJhbXMsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElnbm9yZSBjbGljayBldmVudHMgdGhhdCBoYWQgbW91c2Vkb3duIG9uIHRoZSBwb3B1cCBidXQgbW91c2V1cCBvbiB0aGUgY29udGFpbmVyXG4gICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gd2hlbiB0aGUgdXNlciBkcmFncyBhIHNsaWRlclxuICAgICAgaGFuZGxlTW9kYWxNb3VzZWRvd24oZG9tQ2FjaGUpO1xuXG4gICAgICAvLyBJZ25vcmUgY2xpY2sgZXZlbnRzIHRoYXQgaGFkIG1vdXNlZG93biBvbiB0aGUgY29udGFpbmVyIGJ1dCBtb3VzZXVwIG9uIHRoZSBwb3B1cFxuICAgICAgaGFuZGxlQ29udGFpbmVyTW91c2Vkb3duKGRvbUNhY2hlKTtcbiAgICAgIGhhbmRsZU1vZGFsQ2xpY2soaW5uZXJQYXJhbXMsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcGFyYW0ge0RvbUNhY2hlfSBkb21DYWNoZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNtaXNzV2l0aFxuICAgKi9cbiAgY29uc3QgaGFuZGxlVG9hc3RDbGljayA9IChpbm5lclBhcmFtcywgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKSA9PiB7XG4gICAgLy8gQ2xvc2luZyB0b2FzdCBieSBpbnRlcm5hbCBjbGlja1xuICAgIGRvbUNhY2hlLnBvcHVwLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoaW5uZXJQYXJhbXMgJiYgKGlzQW55QnV0dG9uU2hvd24oaW5uZXJQYXJhbXMpIHx8IGlubmVyUGFyYW1zLnRpbWVyIHx8IGlubmVyUGFyYW1zLmlucHV0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmNsb3NlKTtcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzQW55QnV0dG9uU2hvd24gPSBpbm5lclBhcmFtcyA9PiB7XG4gICAgcmV0dXJuICEhKGlubmVyUGFyYW1zLnNob3dDb25maXJtQnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dEZW55QnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dDYW5jZWxCdXR0b24gfHwgaW5uZXJQYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKTtcbiAgfTtcbiAgbGV0IGlnbm9yZU91dHNpZGVDbGljayA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvbUNhY2hlfSBkb21DYWNoZVxuICAgKi9cbiAgY29uc3QgaGFuZGxlTW9kYWxNb3VzZWRvd24gPSBkb21DYWNoZSA9PiB7XG4gICAgZG9tQ2FjaGUucG9wdXAub25tb3VzZWRvd24gPSAoKSA9PiB7XG4gICAgICBkb21DYWNoZS5jb250YWluZXIub25tb3VzZXVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2V1cCA9ICgpID0+IHt9O1xuICAgICAgICAvLyBXZSBvbmx5IGNoZWNrIGlmIHRoZSBtb3VzZXVwIHRhcmdldCBpcyB0aGUgY29udGFpbmVyIGJlY2F1c2UgdXN1YWxseSBpdCBkb2Vzbid0XG4gICAgICAgIC8vIGhhdmUgYW55IG90aGVyIGRpcmVjdCBjaGlsZHJlbiBhc2lkZSBvZiB0aGUgcG9wdXBcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb21DYWNoZS5jb250YWluZXIpIHtcbiAgICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9tQ2FjaGV9IGRvbUNhY2hlXG4gICAqL1xuICBjb25zdCBoYW5kbGVDb250YWluZXJNb3VzZWRvd24gPSBkb21DYWNoZSA9PiB7XG4gICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2Vkb3duID0gKCkgPT4ge1xuICAgICAgZG9tQ2FjaGUucG9wdXAub25tb3VzZXVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZG9tQ2FjaGUucG9wdXAub25tb3VzZXVwID0gKCkgPT4ge307XG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBjaGVjayBpZiB0aGUgbW91c2V1cCB0YXJnZXQgaXMgYSBjaGlsZCBvZiB0aGUgcG9wdXBcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb21DYWNoZS5wb3B1cCB8fCBlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGRvbUNhY2hlLnBvcHVwLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gaW5uZXJQYXJhbXNcbiAgICogQHBhcmFtIHtEb21DYWNoZX0gZG9tQ2FjaGVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzbWlzc1dpdGhcbiAgICovXG4gIGNvbnN0IGhhbmRsZU1vZGFsQ2xpY2sgPSAoaW5uZXJQYXJhbXMsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCkgPT4ge1xuICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbmNsaWNrID0gZSA9PiB7XG4gICAgICBpZiAoaWdub3JlT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLmNvbnRhaW5lciAmJiBjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd091dHNpZGVDbGljaykpIHtcbiAgICAgICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5iYWNrZHJvcCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBpc0pxdWVyeUVsZW1lbnQgPSBlbGVtID0+IHR5cGVvZiBlbGVtID09PSAnb2JqZWN0JyAmJiBlbGVtLmpxdWVyeTtcbiAgY29uc3QgaXNFbGVtZW50ID0gZWxlbSA9PiBlbGVtIGluc3RhbmNlb2YgRWxlbWVudCB8fCBpc0pxdWVyeUVsZW1lbnQoZWxlbSk7XG4gIGNvbnN0IGFyZ3NUb1BhcmFtcyA9IGFyZ3MgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcgJiYgIWlzRWxlbWVudChhcmdzWzBdKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIGFyZ3NbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBbJ3RpdGxlJywgJ2h0bWwnLCAnaWNvbiddLmZvckVhY2goKG5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZyA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHwgaXNFbGVtZW50KGFyZykpIHtcbiAgICAgICAgICBwYXJhbXNbbmFtZV0gPSBhcmc7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBcIi5jb25jYXQobmFtZSwgXCIhIEV4cGVjdGVkIFxcXCJzdHJpbmdcXFwiIG9yIFxcXCJFbGVtZW50XFxcIiwgZ290IFwiKS5jb25jYXQodHlwZW9mIGFyZykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfTtcblxuICAvKipcbiAgICogTWFpbiBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFN3ZWV0QWxlcnQyIHBvcHVwXG4gICAqXG4gICAqIEBwYXJhbSAgey4uLlN3ZWV0QWxlcnRPcHRpb25zfSBhcmdzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFN3ZWV0QWxlcnRSZXN1bHQ+fVxuICAgKi9cbiAgZnVuY3Rpb24gZmlyZSgpIHtcbiAgICBjb25zdCBTd2FsID0gdGhpczsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTd2FsKC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXh0ZW5kZWQgdmVyc2lvbiBvZiBgU3dhbGAgY29udGFpbmluZyBgcGFyYW1zYCBhcyBkZWZhdWx0cy5cbiAgICogVXNlZnVsIGZvciByZXVzaW5nIFN3YWwgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqIEJlZm9yZTpcbiAgICogY29uc3QgdGV4dFByb21wdE9wdGlvbnMgPSB7IGlucHV0OiAndGV4dCcsIHNob3dDYW5jZWxCdXR0b246IHRydWUgfVxuICAgKiBjb25zdCB7dmFsdWU6IGZpcnN0TmFtZX0gPSBhd2FpdCBTd2FsLmZpcmUoeyAuLi50ZXh0UHJvbXB0T3B0aW9ucywgdGl0bGU6ICdXaGF0IGlzIHlvdXIgZmlyc3QgbmFtZT8nIH0pXG4gICAqIGNvbnN0IHt2YWx1ZTogbGFzdE5hbWV9ID0gYXdhaXQgU3dhbC5maXJlKHsgLi4udGV4dFByb21wdE9wdGlvbnMsIHRpdGxlOiAnV2hhdCBpcyB5b3VyIGxhc3QgbmFtZT8nIH0pXG4gICAqXG4gICAqIEFmdGVyOlxuICAgKiBjb25zdCBUZXh0UHJvbXB0ID0gU3dhbC5taXhpbih7IGlucHV0OiAndGV4dCcsIHNob3dDYW5jZWxCdXR0b246IHRydWUgfSlcbiAgICogY29uc3Qge3ZhbHVlOiBmaXJzdE5hbWV9ID0gYXdhaXQgVGV4dFByb21wdCgnV2hhdCBpcyB5b3VyIGZpcnN0IG5hbWU/JylcbiAgICogY29uc3Qge3ZhbHVlOiBsYXN0TmFtZX0gPSBhd2FpdCBUZXh0UHJvbXB0KCdXaGF0IGlzIHlvdXIgbGFzdCBuYW1lPycpXG4gICAqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IG1peGluUGFyYW1zXG4gICAqIEByZXR1cm5zIHtTd2VldEFsZXJ0fVxuICAgKi9cbiAgZnVuY3Rpb24gbWl4aW4obWl4aW5QYXJhbXMpIHtcbiAgICBjbGFzcyBNaXhpblN3YWwgZXh0ZW5kcyB0aGlzIHtcbiAgICAgIF9tYWluKHBhcmFtcywgcHJpb3JpdHlNaXhpblBhcmFtcykge1xuICAgICAgICByZXR1cm4gc3VwZXIuX21haW4ocGFyYW1zLCBPYmplY3QuYXNzaWduKHt9LCBtaXhpblBhcmFtcywgcHJpb3JpdHlNaXhpblBhcmFtcykpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIE1peGluU3dhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpcyBzZXQsIHJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAgICogT3RoZXJ3aXNlLCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICpcbiAgICogQHJldHVybnMge251bWJlciB8IHVuZGVmaW5lZH1cbiAgICovXG4gIGNvbnN0IGdldFRpbWVyTGVmdCA9ICgpID0+IHtcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LmdldFRpbWVyTGVmdCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9wIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gICAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtudW1iZXIgfCB1bmRlZmluZWR9XG4gICAqL1xuICBjb25zdCBzdG9wVGltZXIgPSAoKSA9PiB7XG4gICAgaWYgKGdsb2JhbFN0YXRlLnRpbWVvdXQpIHtcbiAgICAgIHN0b3BUaW1lclByb2dyZXNzQmFyKCk7XG4gICAgICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dC5zdG9wKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXN1bWUgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICpcbiAgICogQHJldHVybnMge251bWJlciB8IHVuZGVmaW5lZH1cbiAgICovXG4gIGNvbnN0IHJlc3VtZVRpbWVyID0gKCkgPT4ge1xuICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgICBjb25zdCByZW1haW5pbmcgPSBnbG9iYWxTdGF0ZS50aW1lb3V0LnN0YXJ0KCk7XG4gICAgICBhbmltYXRlVGltZXJQcm9ncmVzc0JhcihyZW1haW5pbmcpO1xuICAgICAgcmV0dXJuIHJlbWFpbmluZztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc3VtZSB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICAgKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7bnVtYmVyIHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgY29uc3QgdG9nZ2xlVGltZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBnbG9iYWxTdGF0ZS50aW1lb3V0O1xuICAgIHJldHVybiB0aW1lciAmJiAodGltZXIucnVubmluZyA/IHN0b3BUaW1lcigpIDogcmVzdW1lVGltZXIoKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEluY3JlYXNlIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgYW4gdXBkYXRlZCB0aW1lci5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1zXG4gICAqIEByZXR1cm5zIHtudW1iZXIgfCB1bmRlZmluZWR9XG4gICAqL1xuICBjb25zdCBpbmNyZWFzZVRpbWVyID0gbXMgPT4ge1xuICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgICBjb25zdCByZW1haW5pbmcgPSBnbG9iYWxTdGF0ZS50aW1lb3V0LmluY3JlYXNlKG1zKTtcbiAgICAgIGFuaW1hdGVUaW1lclByb2dyZXNzQmFyKHJlbWFpbmluZywgdHJ1ZSk7XG4gICAgICByZXR1cm4gcmVtYWluaW5nO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGltZXIgaXMgcnVubmluZy4gUmV0dXJucyB0cnVlIGlmIHRpbWVyIGlzIHJ1bm5pbmdcbiAgICogb3IgZmFsc2UgaWYgdGltZXIgaXMgcGF1c2VkIG9yIHN0b3BwZWQuXG4gICAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWRcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc1RpbWVyUnVubmluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gISEoZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LmlzUnVubmluZygpKTtcbiAgfTtcblxuICBsZXQgYm9keUNsaWNrTGlzdGVuZXJBZGRlZCA9IGZhbHNlO1xuICBjb25zdCBjbGlja0hhbmRsZXJzID0ge307XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kQ2xpY2tIYW5kbGVyKCkge1xuICAgIGxldCBhdHRyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnZGF0YS1zd2FsLXRlbXBsYXRlJztcbiAgICBjbGlja0hhbmRsZXJzW2F0dHJdID0gdGhpcztcbiAgICBpZiAoIWJvZHlDbGlja0xpc3RlbmVyQWRkZWQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBib2R5Q2xpY2tMaXN0ZW5lcik7XG4gICAgICBib2R5Q2xpY2tMaXN0ZW5lckFkZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgY29uc3QgYm9keUNsaWNrTGlzdGVuZXIgPSBldmVudCA9PiB7XG4gICAgZm9yIChsZXQgZWwgPSBldmVudC50YXJnZXQ7IGVsICYmIGVsICE9PSBkb2N1bWVudDsgZWwgPSBlbC5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gY2xpY2tIYW5kbGVycykge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGVsLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICAgICAgY2xpY2tIYW5kbGVyc1thdHRyXS5maXJlKHtcbiAgICAgICAgICAgIHRlbXBsYXRlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBzdGF0aWNNZXRob2RzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBhcmdzVG9QYXJhbXM6IGFyZ3NUb1BhcmFtcyxcbiAgICBiaW5kQ2xpY2tIYW5kbGVyOiBiaW5kQ2xpY2tIYW5kbGVyLFxuICAgIGNsaWNrQ2FuY2VsOiBjbGlja0NhbmNlbCxcbiAgICBjbGlja0NvbmZpcm06IGNsaWNrQ29uZmlybSxcbiAgICBjbGlja0Rlbnk6IGNsaWNrRGVueSxcbiAgICBlbmFibGVMb2FkaW5nOiBzaG93TG9hZGluZyxcbiAgICBmaXJlOiBmaXJlLFxuICAgIGdldEFjdGlvbnM6IGdldEFjdGlvbnMsXG4gICAgZ2V0Q2FuY2VsQnV0dG9uOiBnZXRDYW5jZWxCdXR0b24sXG4gICAgZ2V0Q2xvc2VCdXR0b246IGdldENsb3NlQnV0dG9uLFxuICAgIGdldENvbmZpcm1CdXR0b246IGdldENvbmZpcm1CdXR0b24sXG4gICAgZ2V0Q29udGFpbmVyOiBnZXRDb250YWluZXIsXG4gICAgZ2V0RGVueUJ1dHRvbjogZ2V0RGVueUJ1dHRvbixcbiAgICBnZXRGb2N1c2FibGVFbGVtZW50czogZ2V0Rm9jdXNhYmxlRWxlbWVudHMsXG4gICAgZ2V0Rm9vdGVyOiBnZXRGb290ZXIsXG4gICAgZ2V0SHRtbENvbnRhaW5lcjogZ2V0SHRtbENvbnRhaW5lcixcbiAgICBnZXRJY29uOiBnZXRJY29uLFxuICAgIGdldEljb25Db250ZW50OiBnZXRJY29uQ29udGVudCxcbiAgICBnZXRJbWFnZTogZ2V0SW1hZ2UsXG4gICAgZ2V0SW5wdXRMYWJlbDogZ2V0SW5wdXRMYWJlbCxcbiAgICBnZXRMb2FkZXI6IGdldExvYWRlcixcbiAgICBnZXRQb3B1cDogZ2V0UG9wdXAsXG4gICAgZ2V0UHJvZ3Jlc3NTdGVwczogZ2V0UHJvZ3Jlc3NTdGVwcyxcbiAgICBnZXRUaW1lckxlZnQ6IGdldFRpbWVyTGVmdCxcbiAgICBnZXRUaW1lclByb2dyZXNzQmFyOiBnZXRUaW1lclByb2dyZXNzQmFyLFxuICAgIGdldFRpdGxlOiBnZXRUaXRsZSxcbiAgICBnZXRWYWxpZGF0aW9uTWVzc2FnZTogZ2V0VmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgaW5jcmVhc2VUaW1lcjogaW5jcmVhc2VUaW1lcixcbiAgICBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXI6IGlzRGVwcmVjYXRlZFBhcmFtZXRlcixcbiAgICBpc0xvYWRpbmc6IGlzTG9hZGluZyxcbiAgICBpc1RpbWVyUnVubmluZzogaXNUaW1lclJ1bm5pbmcsXG4gICAgaXNVcGRhdGFibGVQYXJhbWV0ZXI6IGlzVXBkYXRhYmxlUGFyYW1ldGVyLFxuICAgIGlzVmFsaWRQYXJhbWV0ZXI6IGlzVmFsaWRQYXJhbWV0ZXIsXG4gICAgaXNWaXNpYmxlOiBpc1Zpc2libGUsXG4gICAgbWl4aW46IG1peGluLFxuICAgIHJlc3VtZVRpbWVyOiByZXN1bWVUaW1lcixcbiAgICBzaG93TG9hZGluZzogc2hvd0xvYWRpbmcsXG4gICAgc3RvcFRpbWVyOiBzdG9wVGltZXIsXG4gICAgdG9nZ2xlVGltZXI6IHRvZ2dsZVRpbWVyXG4gIH0pO1xuXG4gIGNsYXNzIFRpbWVyIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrLCBkZWxheSkge1xuICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgdGhpcy5yZW1haW5pbmcgPSBkZWxheTtcbiAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgc3RhcnQoKSB7XG4gICAgICBpZiAoIXRoaXMucnVubmluZykge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLmlkID0gc2V0VGltZW91dCh0aGlzLmNhbGxiYWNrLCB0aGlzLnJlbWFpbmluZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yZW1haW5pbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBzdG9wKCkge1xuICAgICAgaWYgKHRoaXMuc3RhcnRlZCAmJiB0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5yZW1haW5pbmcgLT0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0ZWQuZ2V0VGltZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBpbmNyZWFzZShuKSB7XG4gICAgICBjb25zdCBydW5uaW5nID0gdGhpcy5ydW5uaW5nO1xuICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbWFpbmluZyArPSBuO1xuICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0VGltZXJMZWZ0KCkge1xuICAgICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzUnVubmluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ1bm5pbmc7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3dhbFN0cmluZ1BhcmFtcyA9IFsnc3dhbC10aXRsZScsICdzd2FsLWh0bWwnLCAnc3dhbC1mb290ZXInXTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtTd2VldEFsZXJ0T3B0aW9uc31cbiAgICovXG4gIGNvbnN0IGdldFRlbXBsYXRlUGFyYW1zID0gcGFyYW1zID0+IHtcbiAgICAvKiogQHR5cGUge0hUTUxUZW1wbGF0ZUVsZW1lbnR9ICovXG4gICAgY29uc3QgdGVtcGxhdGUgPSB0eXBlb2YgcGFyYW1zLnRlbXBsYXRlID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRlbXBsYXRlKSA6IHBhcmFtcy50ZW1wbGF0ZTtcbiAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIC8qKiBAdHlwZSB7RG9jdW1lbnRGcmFnbWVudH0gKi9cbiAgICBjb25zdCB0ZW1wbGF0ZUNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50O1xuICAgIHNob3dXYXJuaW5nc0ZvckVsZW1lbnRzKHRlbXBsYXRlQ29udGVudCk7XG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbihnZXRTd2FsUGFyYW1zKHRlbXBsYXRlQ29udGVudCksIGdldFN3YWxGdW5jdGlvblBhcmFtcyh0ZW1wbGF0ZUNvbnRlbnQpLCBnZXRTd2FsQnV0dG9ucyh0ZW1wbGF0ZUNvbnRlbnQpLCBnZXRTd2FsSW1hZ2UodGVtcGxhdGVDb250ZW50KSwgZ2V0U3dhbEljb24odGVtcGxhdGVDb250ZW50KSwgZ2V0U3dhbElucHV0KHRlbXBsYXRlQ29udGVudCksIGdldFN3YWxTdHJpbmdQYXJhbXModGVtcGxhdGVDb250ZW50LCBzd2FsU3RyaW5nUGFyYW1zKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSB0ZW1wbGF0ZUNvbnRlbnRcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgY29uc3QgZ2V0U3dhbFBhcmFtcyA9IHRlbXBsYXRlQ29udGVudCA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudFtdfSAqL1xuICAgIGNvbnN0IHN3YWxQYXJhbXMgPSBBcnJheS5mcm9tKHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzd2FsLXBhcmFtJykpO1xuICAgIHN3YWxQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKHBhcmFtLCBbJ25hbWUnLCAndmFsdWUnXSk7XG4gICAgICBjb25zdCBwYXJhbU5hbWUgPSBwYXJhbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gcGFyYW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgaWYgKHR5cGVvZiBkZWZhdWx0UGFyYW1zW3BhcmFtTmFtZV0gPT09ICdib29sZWFuJykge1xuICAgICAgICByZXN1bHRbcGFyYW1OYW1lXSA9IHZhbHVlICE9PSAnZmFsc2UnO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmYXVsdFBhcmFtc1twYXJhbU5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXN1bHRbcGFyYW1OYW1lXSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W3BhcmFtTmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IHRlbXBsYXRlQ29udGVudFxuICAgKiBAcmV0dXJucyB7U3dlZXRBbGVydE9wdGlvbnN9XG4gICAqL1xuICBjb25zdCBnZXRTd2FsRnVuY3Rpb25QYXJhbXMgPSB0ZW1wbGF0ZUNvbnRlbnQgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX0gKi9cbiAgICBjb25zdCBzd2FsRnVuY3Rpb25zID0gQXJyYXkuZnJvbSh0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc3dhbC1mdW5jdGlvbi1wYXJhbScpKTtcbiAgICBzd2FsRnVuY3Rpb25zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgY29uc3QgcGFyYW1OYW1lID0gcGFyYW0uZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHBhcmFtLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgIHJlc3VsdFtwYXJhbU5hbWVdID0gbmV3IEZ1bmN0aW9uKFwicmV0dXJuIFwiLmNvbmNhdCh2YWx1ZSkpKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSB0ZW1wbGF0ZUNvbnRlbnRcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgY29uc3QgZ2V0U3dhbEJ1dHRvbnMgPSB0ZW1wbGF0ZUNvbnRlbnQgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX0gKi9cbiAgICBjb25zdCBzd2FsQnV0dG9ucyA9IEFycmF5LmZyb20odGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N3YWwtYnV0dG9uJykpO1xuICAgIHN3YWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoYnV0dG9uLCBbJ3R5cGUnLCAnY29sb3InLCAnYXJpYS1sYWJlbCddKTtcbiAgICAgIGNvbnN0IHR5cGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKCd0eXBlJyk7XG4gICAgICByZXN1bHRbXCJcIi5jb25jYXQodHlwZSwgXCJCdXR0b25UZXh0XCIpXSA9IGJ1dHRvbi5pbm5lckhUTUw7XG4gICAgICByZXN1bHRbXCJzaG93XCIuY29uY2F0KGNhcGl0YWxpemVGaXJzdExldHRlcih0eXBlKSwgXCJCdXR0b25cIildID0gdHJ1ZTtcbiAgICAgIGlmIChidXR0b24uaGFzQXR0cmlidXRlKCdjb2xvcicpKSB7XG4gICAgICAgIHJlc3VsdFtcIlwiLmNvbmNhdCh0eXBlLCBcIkJ1dHRvbkNvbG9yXCIpXSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgICB9XG4gICAgICBpZiAoYnV0dG9uLmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgIHJlc3VsdFtcIlwiLmNvbmNhdCh0eXBlLCBcIkJ1dHRvbkFyaWFMYWJlbFwiKV0gPSBidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSB0ZW1wbGF0ZUNvbnRlbnRcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgY29uc3QgZ2V0U3dhbEltYWdlID0gdGVtcGxhdGVDb250ZW50ID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuICAgIGNvbnN0IGltYWdlID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3N3YWwtaW1hZ2UnKTtcbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoaW1hZ2UsIFsnc3JjJywgJ3dpZHRoJywgJ2hlaWdodCcsICdhbHQnXSk7XG4gICAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCdzcmMnKSkge1xuICAgICAgICByZXN1bHQuaW1hZ2VVcmwgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgfVxuICAgICAgaWYgKGltYWdlLmhhc0F0dHJpYnV0ZSgnd2lkdGgnKSkge1xuICAgICAgICByZXN1bHQuaW1hZ2VXaWR0aCA9IGltYWdlLmdldEF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbWFnZS5oYXNBdHRyaWJ1dGUoJ2hlaWdodCcpKSB7XG4gICAgICAgIHJlc3VsdC5pbWFnZUhlaWdodCA9IGltYWdlLmdldEF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG4gICAgICB9XG4gICAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCdhbHQnKSkge1xuICAgICAgICByZXN1bHQuaW1hZ2VBbHQgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2FsdCcpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IHRlbXBsYXRlQ29udGVudFxuICAgKiBAcmV0dXJucyB7U3dlZXRBbGVydE9wdGlvbnN9XG4gICAqL1xuICBjb25zdCBnZXRTd2FsSWNvbiA9IHRlbXBsYXRlQ29udGVudCA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi9cbiAgICBjb25zdCBpY29uID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3N3YWwtaWNvbicpO1xuICAgIGlmIChpY29uKSB7XG4gICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKGljb24sIFsndHlwZScsICdjb2xvciddKTtcbiAgICAgIGlmIChpY29uLmhhc0F0dHJpYnV0ZSgndHlwZScpKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7U3dlZXRBbGVydEljb259ICovXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmVzdWx0Lmljb24gPSBpY29uLmdldEF0dHJpYnV0ZSgndHlwZScpO1xuICAgICAgfVxuICAgICAgaWYgKGljb24uaGFzQXR0cmlidXRlKCdjb2xvcicpKSB7XG4gICAgICAgIHJlc3VsdC5pY29uQ29sb3IgPSBpY29uLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5pY29uSHRtbCA9IGljb24uaW5uZXJIVE1MO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IHRlbXBsYXRlQ29udGVudFxuICAgKiBAcmV0dXJucyB7U3dlZXRBbGVydE9wdGlvbnN9XG4gICAqL1xuICBjb25zdCBnZXRTd2FsSW5wdXQgPSB0ZW1wbGF0ZUNvbnRlbnQgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG4gICAgY29uc3QgaW5wdXQgPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3Rvcignc3dhbC1pbnB1dCcpO1xuICAgIGlmIChpbnB1dCkge1xuICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhpbnB1dCwgWyd0eXBlJywgJ2xhYmVsJywgJ3BsYWNlaG9sZGVyJywgJ3ZhbHVlJ10pO1xuICAgICAgLyoqIEB0eXBlIHtTd2VldEFsZXJ0SW5wdXR9ICovXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZXN1bHQuaW5wdXQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSB8fCAndGV4dCc7XG4gICAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdsYWJlbCcpKSB7XG4gICAgICAgIHJlc3VsdC5pbnB1dExhYmVsID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdsYWJlbCcpO1xuICAgICAgfVxuICAgICAgaWYgKGlucHV0Lmhhc0F0dHJpYnV0ZSgncGxhY2Vob2xkZXInKSkge1xuICAgICAgICByZXN1bHQuaW5wdXRQbGFjZWhvbGRlciA9IGlucHV0LmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnB1dC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgcmVzdWx0LmlucHV0VmFsdWUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX0gKi9cbiAgICBjb25zdCBpbnB1dE9wdGlvbnMgPSBBcnJheS5mcm9tKHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzd2FsLWlucHV0LW9wdGlvbicpKTtcbiAgICBpZiAoaW5wdXRPcHRpb25zLmxlbmd0aCkge1xuICAgICAgcmVzdWx0LmlucHV0T3B0aW9ucyA9IHt9O1xuICAgICAgaW5wdXRPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhvcHRpb24sIFsndmFsdWUnXSk7XG4gICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uTmFtZSA9IG9wdGlvbi5pbm5lckhUTUw7XG4gICAgICAgIHJlc3VsdC5pbnB1dE9wdGlvbnNbb3B0aW9uVmFsdWVdID0gb3B0aW9uTmFtZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IHRlbXBsYXRlQ29udGVudFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJhbU5hbWVzXG4gICAqIEByZXR1cm5zIHtTd2VldEFsZXJ0T3B0aW9uc31cbiAgICovXG4gIGNvbnN0IGdldFN3YWxTdHJpbmdQYXJhbXMgPSAodGVtcGxhdGVDb250ZW50LCBwYXJhbU5hbWVzKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBpIGluIHBhcmFtTmFtZXMpIHtcbiAgICAgIGNvbnN0IHBhcmFtTmFtZSA9IHBhcmFtTmFtZXNbaV07XG4gICAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuICAgICAgY29uc3QgdGFnID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1OYW1lKTtcbiAgICAgIGlmICh0YWcpIHtcbiAgICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyh0YWcsIFtdKTtcbiAgICAgICAgcmVzdWx0W3BhcmFtTmFtZS5yZXBsYWNlKC9ec3dhbC0vLCAnJyldID0gdGFnLmlubmVySFRNTC50cmltKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gdGVtcGxhdGVDb250ZW50XG4gICAqL1xuICBjb25zdCBzaG93V2FybmluZ3NGb3JFbGVtZW50cyA9IHRlbXBsYXRlQ29udGVudCA9PiB7XG4gICAgY29uc3QgYWxsb3dlZEVsZW1lbnRzID0gc3dhbFN0cmluZ1BhcmFtcy5jb25jYXQoWydzd2FsLXBhcmFtJywgJ3N3YWwtZnVuY3Rpb24tcGFyYW0nLCAnc3dhbC1idXR0b24nLCAnc3dhbC1pbWFnZScsICdzd2FsLWljb24nLCAnc3dhbC1pbnB1dCcsICdzd2FsLWlucHV0LW9wdGlvbiddKTtcbiAgICBBcnJheS5mcm9tKHRlbXBsYXRlQ29udGVudC5jaGlsZHJlbikuZm9yRWFjaChlbCA9PiB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKCFhbGxvd2VkRWxlbWVudHMuaW5jbHVkZXModGFnTmFtZSkpIHtcbiAgICAgICAgd2FybihcIlVucmVjb2duaXplZCBlbGVtZW50IDxcIi5jb25jYXQodGFnTmFtZSwgXCI+XCIpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gYWxsb3dlZEF0dHJpYnV0ZXNcbiAgICovXG4gIGNvbnN0IHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMgPSAoZWwsIGFsbG93ZWRBdHRyaWJ1dGVzKSA9PiB7XG4gICAgQXJyYXkuZnJvbShlbC5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHJpYnV0ZSA9PiB7XG4gICAgICBpZiAoYWxsb3dlZEF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUubmFtZSkgPT09IC0xKSB7XG4gICAgICAgIHdhcm4oW1wiVW5yZWNvZ25pemVkIGF0dHJpYnV0ZSBcXFwiXCIuY29uY2F0KGF0dHJpYnV0ZS5uYW1lLCBcIlxcXCIgb24gPFwiKS5jb25jYXQoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpLCBcIj4uXCIpLCBcIlwiLmNvbmNhdChhbGxvd2VkQXR0cmlidXRlcy5sZW5ndGggPyBcIkFsbG93ZWQgYXR0cmlidXRlcyBhcmU6IFwiLmNvbmNhdChhbGxvd2VkQXR0cmlidXRlcy5qb2luKCcsICcpKSA6ICdUbyBzZXQgdGhlIHZhbHVlLCB1c2UgSFRNTCB3aXRoaW4gdGhlIGVsZW1lbnQuJyldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBTSE9XX0NMQVNTX1RJTUVPVVQgPSAxMDtcblxuICAvKipcbiAgICogT3BlbiBwb3B1cCwgYWRkIG5lY2Vzc2FyeSBjbGFzc2VzIGFuZCBzdHlsZXMsIGZpeCBzY3JvbGxiYXJcbiAgICpcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCBvcGVuUG9wdXAgPSBwYXJhbXMgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIGNvbnN0IHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBpZiAodHlwZW9mIHBhcmFtcy53aWxsT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGFyYW1zLndpbGxPcGVuKHBvcHVwKTtcbiAgICB9XG4gICAgY29uc3QgYm9keVN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuICAgIGNvbnN0IGluaXRpYWxCb2R5T3ZlcmZsb3cgPSBib2R5U3R5bGVzLm92ZXJmbG93WTtcbiAgICBhZGRDbGFzc2VzKGNvbnRhaW5lciwgcG9wdXAsIHBhcmFtcyk7XG5cbiAgICAvLyBzY3JvbGxpbmcgaXMgJ2hpZGRlbicgdW50aWwgYW5pbWF0aW9uIGlzIGRvbmUsIGFmdGVyIHRoYXQgJ2F1dG8nXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTY3JvbGxpbmdWaXNpYmlsaXR5KGNvbnRhaW5lciwgcG9wdXApO1xuICAgIH0sIFNIT1dfQ0xBU1NfVElNRU9VVCk7XG4gICAgaWYgKGlzTW9kYWwoKSkge1xuICAgICAgZml4U2Nyb2xsQ29udGFpbmVyKGNvbnRhaW5lciwgcGFyYW1zLnNjcm9sbGJhclBhZGRpbmcsIGluaXRpYWxCb2R5T3ZlcmZsb3cpO1xuICAgICAgc2V0QXJpYUhpZGRlbigpO1xuICAgIH1cbiAgICBpZiAoIWlzVG9hc3QoKSAmJiAhZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50KSB7XG4gICAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHBhcmFtcy5kaWRPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHBhcmFtcy5kaWRPcGVuKHBvcHVwKSk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbJ25vLXRyYW5zaXRpb24nXSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QW5pbWF0aW9uRXZlbnR9IGV2ZW50XG4gICAqL1xuICBjb25zdCBzd2FsT3BlbkFuaW1hdGlvbkZpbmlzaGVkID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBwb3B1cCB8fCAhYW5pbWF0aW9uRW5kRXZlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCk7XG4gICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHVwXG4gICAqL1xuICBjb25zdCBzZXRTY3JvbGxpbmdWaXNpYmlsaXR5ID0gKGNvbnRhaW5lciwgcG9wdXApID0+IHtcbiAgICBpZiAoYW5pbWF0aW9uRW5kRXZlbnQgJiYgaGFzQ3NzQW5pbWF0aW9uKHBvcHVwKSkge1xuICAgICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICogQHBhcmFtIHtib29sZWFufSBzY3JvbGxiYXJQYWRkaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbml0aWFsQm9keU92ZXJmbG93XG4gICAqL1xuICBjb25zdCBmaXhTY3JvbGxDb250YWluZXIgPSAoY29udGFpbmVyLCBzY3JvbGxiYXJQYWRkaW5nLCBpbml0aWFsQm9keU92ZXJmbG93KSA9PiB7XG4gICAgaU9TZml4KCk7XG4gICAgaWYgKHNjcm9sbGJhclBhZGRpbmcgJiYgaW5pdGlhbEJvZHlPdmVyZmxvdyAhPT0gJ2hpZGRlbicpIHtcbiAgICAgIHJlcGxhY2VTY3JvbGxiYXJXaXRoUGFkZGluZyhpbml0aWFsQm9keU92ZXJmbG93KTtcbiAgICB9XG5cbiAgICAvLyBzd2VldGFsZXJ0Mi9pc3N1ZXMvMTI0N1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IGFkZENsYXNzZXMgPSAoY29udGFpbmVyLCBwb3B1cCwgcGFyYW1zKSA9PiB7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBwYXJhbXMuc2hvd0NsYXNzLmJhY2tkcm9wKTtcbiAgICAvLyB0aGlzIHdvcmthcm91bmQgd2l0aCBvcGFjaXR5IGlzIG5lZWRlZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8yMDU5XG4gICAgcG9wdXAuc3R5bGUuc2V0UHJvcGVydHkoJ29wYWNpdHknLCAnMCcsICdpbXBvcnRhbnQnKTtcbiAgICBzaG93KHBvcHVwLCAnZ3JpZCcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gQW5pbWF0ZSBwb3B1cCByaWdodCBhZnRlciBzaG93aW5nIGl0XG4gICAgICBhZGRDbGFzcyhwb3B1cCwgcGFyYW1zLnNob3dDbGFzcy5wb3B1cCk7XG4gICAgICAvLyBhbmQgcmVtb3ZlIHRoZSBvcGFjaXR5IHdvcmthcm91bmRcbiAgICAgIHBvcHVwLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvcGFjaXR5Jyk7XG4gICAgfSwgU0hPV19DTEFTU19USU1FT1VUKTsgLy8gMTBtcyBpbiBvcmRlciB0byBmaXggIzIwNjJcblxuICAgIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlcy5zaG93bik7XG4gICAgaWYgKHBhcmFtcy5oZWlnaHRBdXRvICYmIHBhcmFtcy5iYWNrZHJvcCAmJiAhcGFyYW1zLnRvYXN0KSB7XG4gICAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZGVmYXVsdElucHV0VmFsaWRhdG9ycyA9IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt2YWxpZGF0aW9uTWVzc2FnZV1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmcgfCB2b2lkPn1cbiAgICAgKi9cbiAgICBlbWFpbDogKHN0cmluZywgdmFsaWRhdGlvbk1lc3NhZ2UpID0+IHtcbiAgICAgIHJldHVybiAvXlthLXpBLVowLTkuK18tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aMC05LV17MiwyNH0kLy50ZXN0KHN0cmluZykgPyBQcm9taXNlLnJlc29sdmUoKSA6IFByb21pc2UucmVzb2x2ZSh2YWxpZGF0aW9uTWVzc2FnZSB8fCAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt2YWxpZGF0aW9uTWVzc2FnZV1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmcgfCB2b2lkPn1cbiAgICAgKi9cbiAgICB1cmw6IChzdHJpbmcsIHZhbGlkYXRpb25NZXNzYWdlKSA9PiB7XG4gICAgICAvLyB0YWtlbiBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODA5NDM1IHdpdGggYSBzbWFsbCBjaGFuZ2UgZnJvbSAjMTMwNiBhbmQgIzIwMTNcbiAgICAgIHJldHVybiAvXmh0dHBzPzpcXC9cXC8od3d3XFwuKT9bLWEtekEtWjAtOUA6JS5fK34jPV17MSwyNTZ9XFwuW2Etel17Miw2M31cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLz1dKikkLy50ZXN0KHN0cmluZykgPyBQcm9taXNlLnJlc29sdmUoKSA6IFByb21pc2UucmVzb2x2ZSh2YWxpZGF0aW9uTWVzc2FnZSB8fCAnSW52YWxpZCBVUkwnKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgZnVuY3Rpb24gc2V0RGVmYXVsdElucHV0VmFsaWRhdG9ycyhwYXJhbXMpIHtcbiAgICAvLyBVc2UgZGVmYXVsdCBgaW5wdXRWYWxpZGF0b3JgIGZvciBzdXBwb3J0ZWQgaW5wdXQgdHlwZXMgaWYgbm90IHByb3ZpZGVkXG4gICAgaWYgKHBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmlucHV0ID09PSAnZW1haWwnKSB7XG4gICAgICBwYXJhbXMuaW5wdXRWYWxpZGF0b3IgPSBkZWZhdWx0SW5wdXRWYWxpZGF0b3JzWydlbWFpbCddO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmlucHV0ID09PSAndXJsJykge1xuICAgICAgcGFyYW1zLmlucHV0VmFsaWRhdG9yID0gZGVmYXVsdElucHV0VmFsaWRhdG9yc1sndXJsJ107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgZnVuY3Rpb24gdmFsaWRhdGVDdXN0b21UYXJnZXRFbGVtZW50KHBhcmFtcykge1xuICAgIC8vIERldGVybWluZSBpZiB0aGUgY3VzdG9tIHRhcmdldCBlbGVtZW50IGlzIHZhbGlkXG4gICAgaWYgKCFwYXJhbXMudGFyZ2V0IHx8IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy50YXJnZXQuYXBwZW5kQ2hpbGQpIHtcbiAgICAgIHdhcm4oJ1RhcmdldCBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLCBkZWZhdWx0aW5nIHRvIFwiYm9keVwiJyk7XG4gICAgICBwYXJhbXMudGFyZ2V0ID0gJ2JvZHknO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHlwZSwgdGV4dCBhbmQgYWN0aW9ucyBvbiBwb3B1cFxuICAgKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGZ1bmN0aW9uIHNldFBhcmFtZXRlcnMocGFyYW1zKSB7XG4gICAgc2V0RGVmYXVsdElucHV0VmFsaWRhdG9ycyhwYXJhbXMpO1xuXG4gICAgLy8gc2hvd0xvYWRlck9uQ29uZmlybSAmJiBwcmVDb25maXJtXG4gICAgaWYgKHBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtICYmICFwYXJhbXMucHJlQ29uZmlybSkge1xuICAgICAgd2Fybignc2hvd0xvYWRlck9uQ29uZmlybSBpcyBzZXQgdG8gdHJ1ZSwgYnV0IHByZUNvbmZpcm0gaXMgbm90IGRlZmluZWQuXFxuJyArICdzaG93TG9hZGVyT25Db25maXJtIHNob3VsZCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggcHJlQ29uZmlybSwgc2VlIHVzYWdlIGV4YW1wbGU6XFxuJyArICdodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby8jYWpheC1yZXF1ZXN0Jyk7XG4gICAgfVxuICAgIHZhbGlkYXRlQ3VzdG9tVGFyZ2V0RWxlbWVudChwYXJhbXMpO1xuXG4gICAgLy8gUmVwbGFjZSBuZXdsaW5lcyB3aXRoIDxicj4gaW4gdGl0bGVcbiAgICBpZiAodHlwZW9mIHBhcmFtcy50aXRsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmFtcy50aXRsZSA9IHBhcmFtcy50aXRsZS5zcGxpdCgnXFxuJykuam9pbignPGJyIC8+Jyk7XG4gICAgfVxuICAgIGluaXQocGFyYW1zKTtcbiAgfVxuXG4gIC8qKiBAdHlwZSB7U3dlZXRBbGVydH0gKi9cbiAgbGV0IGN1cnJlbnRJbnN0YW5jZTtcbiAgdmFyIF9wcm9taXNlID0gLyojX19QVVJFX18qL25ldyBXZWFrTWFwKCk7XG4gIGNsYXNzIFN3ZWV0QWxlcnQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Li4uYW55fSBhcmdzXG4gICAgICogQHRoaXMge1N3ZWV0QWxlcnR9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEB0eXBlIHtQcm9taXNlPFN3ZWV0QWxlcnRSZXN1bHQ+fVxuICAgICAgICovXG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyh0aGlzLCBfcHJvbWlzZSwge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IHZvaWQgMFxuICAgICAgfSk7XG4gICAgICAvLyBQcmV2ZW50IHJ1biBpbiBOb2RlIGVudlxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRJbnN0YW5jZSA9IHRoaXM7XG5cbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3V0ZXJQYXJhbXMgPSBPYmplY3QuZnJlZXplKHRoaXMuY29uc3RydWN0b3IuYXJnc1RvUGFyYW1zKGFyZ3MpKTtcblxuICAgICAgLyoqIEB0eXBlIHtSZWFkb25seTxTd2VldEFsZXJ0T3B0aW9ucz59ICovXG4gICAgICB0aGlzLnBhcmFtcyA9IG91dGVyUGFyYW1zO1xuXG4gICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICB0aGlzLmlzQXdhaXRpbmdQcm9taXNlID0gZmFsc2U7XG4gICAgICBfY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX3Byb21pc2UsIHRoaXMuX21haW4oY3VycmVudEluc3RhbmNlLnBhcmFtcykpO1xuICAgIH1cbiAgICBfbWFpbih1c2VyUGFyYW1zKSB7XG4gICAgICBsZXQgbWl4aW5QYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgc2hvd1dhcm5pbmdzRm9yUGFyYW1zKE9iamVjdC5hc3NpZ24oe30sIG1peGluUGFyYW1zLCB1c2VyUGFyYW1zKSk7XG4gICAgICBpZiAoZ2xvYmFsU3RhdGUuY3VycmVudEluc3RhbmNlKSB7XG4gICAgICAgIGdsb2JhbFN0YXRlLmN1cnJlbnRJbnN0YW5jZS5fZGVzdHJveSgpO1xuICAgICAgICBpZiAoaXNNb2RhbCgpKSB7XG4gICAgICAgICAgdW5zZXRBcmlhSGlkZGVuKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGdsb2JhbFN0YXRlLmN1cnJlbnRJbnN0YW5jZSA9IGN1cnJlbnRJbnN0YW5jZTtcbiAgICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJlcGFyZVBhcmFtcyh1c2VyUGFyYW1zLCBtaXhpblBhcmFtcyk7XG4gICAgICBzZXRQYXJhbWV0ZXJzKGlubmVyUGFyYW1zKTtcbiAgICAgIE9iamVjdC5mcmVlemUoaW5uZXJQYXJhbXMpO1xuXG4gICAgICAvLyBjbGVhciB0aGUgcHJldmlvdXMgdGltZXJcbiAgICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgICAgIGdsb2JhbFN0YXRlLnRpbWVvdXQuc3RvcCgpO1xuICAgICAgICBkZWxldGUgZ2xvYmFsU3RhdGUudGltZW91dDtcbiAgICAgIH1cblxuICAgICAgLy8gY2xlYXIgdGhlIHJlc3RvcmUgZm9jdXMgdGltZW91dFxuICAgICAgY2xlYXJUaW1lb3V0KGdsb2JhbFN0YXRlLnJlc3RvcmVGb2N1c1RpbWVvdXQpO1xuICAgICAgY29uc3QgZG9tQ2FjaGUgPSBwb3B1bGF0ZURvbUNhY2hlKGN1cnJlbnRJbnN0YW5jZSk7XG4gICAgICByZW5kZXIoY3VycmVudEluc3RhbmNlLCBpbm5lclBhcmFtcyk7XG4gICAgICBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuc2V0KGN1cnJlbnRJbnN0YW5jZSwgaW5uZXJQYXJhbXMpO1xuICAgICAgcmV0dXJuIHN3YWxQcm9taXNlKGN1cnJlbnRJbnN0YW5jZSwgZG9tQ2FjaGUsIGlubmVyUGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBgY2F0Y2hgIGNhbm5vdCBiZSB0aGUgbmFtZSBvZiBhIG1vZHVsZSBleHBvcnQsIHNvIHdlIGRlZmluZSBvdXIgdGhlbmFibGUgbWV0aG9kcyBoZXJlIGluc3RlYWRcbiAgICB0aGVuKG9uRnVsZmlsbGVkKSB7XG4gICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9wcm9taXNlKS50aGVuKG9uRnVsZmlsbGVkKTtcbiAgICB9XG4gICAgZmluYWxseShvbkZpbmFsbHkpIHtcbiAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX3Byb21pc2UpLmZpbmFsbHkob25GaW5hbGx5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge0RvbUNhY2hlfSBkb21DYWNoZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGNvbnN0IHN3YWxQcm9taXNlID0gKGluc3RhbmNlLCBkb21DYWNoZSwgaW5uZXJQYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gZnVuY3Rpb25zIHRvIGhhbmRsZSBhbGwgY2xvc2luZ3MvZGlzbWlzc2Fsc1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge0Rpc21pc3NSZWFzb259IGRpc21pc3NcbiAgICAgICAqL1xuICAgICAgY29uc3QgZGlzbWlzc1dpdGggPSBkaXNtaXNzID0+IHtcbiAgICAgICAgaW5zdGFuY2UuY2xvc2Uoe1xuICAgICAgICAgIGlzRGlzbWlzc2VkOiB0cnVlLFxuICAgICAgICAgIGRpc21pc3NcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgcHJpdmF0ZU1ldGhvZHMuc3dhbFByb21pc2VSZXNvbHZlLnNldChpbnN0YW5jZSwgcmVzb2x2ZSk7XG4gICAgICBwcml2YXRlTWV0aG9kcy5zd2FsUHJvbWlzZVJlamVjdC5zZXQoaW5zdGFuY2UsIHJlamVjdCk7XG4gICAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGhhbmRsZUNvbmZpcm1CdXR0b25DbGljayhpbnN0YW5jZSk7XG4gICAgICB9O1xuICAgICAgZG9tQ2FjaGUuZGVueUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBoYW5kbGVEZW55QnV0dG9uQ2xpY2soaW5zdGFuY2UpO1xuICAgICAgfTtcbiAgICAgIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBoYW5kbGVDYW5jZWxCdXR0b25DbGljayhpbnN0YW5jZSwgZGlzbWlzc1dpdGgpO1xuICAgICAgfTtcbiAgICAgIGRvbUNhY2hlLmNsb3NlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGRpc21pc3NXaXRoKERpc21pc3NSZWFzb24uY2xvc2UpO1xuICAgICAgfTtcbiAgICAgIGhhbmRsZVBvcHVwQ2xpY2soaW5uZXJQYXJhbXMsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCk7XG4gICAgICBhZGRLZXlkb3duSGFuZGxlcihnbG9iYWxTdGF0ZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKTtcbiAgICAgIGhhbmRsZUlucHV0T3B0aW9uc0FuZFZhbHVlKGluc3RhbmNlLCBpbm5lclBhcmFtcyk7XG4gICAgICBvcGVuUG9wdXAoaW5uZXJQYXJhbXMpO1xuICAgICAgc2V0dXBUaW1lcihnbG9iYWxTdGF0ZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKTtcbiAgICAgIGluaXRGb2N1cyhkb21DYWNoZSwgaW5uZXJQYXJhbXMpO1xuXG4gICAgICAvLyBTY3JvbGwgY29udGFpbmVyIHRvIHRvcCBvbiBvcGVuICgjMTI0NywgIzE5NDYpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gdXNlclBhcmFtc1xuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBtaXhpblBhcmFtc1xuICAgKiBAcmV0dXJucyB7U3dlZXRBbGVydE9wdGlvbnN9XG4gICAqL1xuICBjb25zdCBwcmVwYXJlUGFyYW1zID0gKHVzZXJQYXJhbXMsIG1peGluUGFyYW1zKSA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGVQYXJhbXMgPSBnZXRUZW1wbGF0ZVBhcmFtcyh1c2VyUGFyYW1zKTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UGFyYW1zLCBtaXhpblBhcmFtcywgdGVtcGxhdGVQYXJhbXMsIHVzZXJQYXJhbXMpOyAvLyBwcmVjZWRlbmNlIGlzIGRlc2NyaWJlZCBpbiAjMjEzMVxuICAgIHBhcmFtcy5zaG93Q2xhc3MgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UGFyYW1zLnNob3dDbGFzcywgcGFyYW1zLnNob3dDbGFzcyk7XG4gICAgcGFyYW1zLmhpZGVDbGFzcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQYXJhbXMuaGlkZUNsYXNzLCBwYXJhbXMuaGlkZUNsYXNzKTtcbiAgICByZXR1cm4gcGFyYW1zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEByZXR1cm5zIHtEb21DYWNoZX1cbiAgICovXG4gIGNvbnN0IHBvcHVsYXRlRG9tQ2FjaGUgPSBpbnN0YW5jZSA9PiB7XG4gICAgY29uc3QgZG9tQ2FjaGUgPSB7XG4gICAgICBwb3B1cDogZ2V0UG9wdXAoKSxcbiAgICAgIGNvbnRhaW5lcjogZ2V0Q29udGFpbmVyKCksXG4gICAgICBhY3Rpb25zOiBnZXRBY3Rpb25zKCksXG4gICAgICBjb25maXJtQnV0dG9uOiBnZXRDb25maXJtQnV0dG9uKCksXG4gICAgICBkZW55QnV0dG9uOiBnZXREZW55QnV0dG9uKCksXG4gICAgICBjYW5jZWxCdXR0b246IGdldENhbmNlbEJ1dHRvbigpLFxuICAgICAgbG9hZGVyOiBnZXRMb2FkZXIoKSxcbiAgICAgIGNsb3NlQnV0dG9uOiBnZXRDbG9zZUJ1dHRvbigpLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2U6IGdldFZhbGlkYXRpb25NZXNzYWdlKCksXG4gICAgICBwcm9ncmVzc1N0ZXBzOiBnZXRQcm9ncmVzc1N0ZXBzKClcbiAgICB9O1xuICAgIHByaXZhdGVQcm9wcy5kb21DYWNoZS5zZXQoaW5zdGFuY2UsIGRvbUNhY2hlKTtcbiAgICByZXR1cm4gZG9tQ2FjaGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7R2xvYmFsU3RhdGV9IGdsb2JhbFN0YXRlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc21pc3NXaXRoXG4gICAqL1xuICBjb25zdCBzZXR1cFRpbWVyID0gKGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpID0+IHtcbiAgICBjb25zdCB0aW1lclByb2dyZXNzQmFyID0gZ2V0VGltZXJQcm9ncmVzc0JhcigpO1xuICAgIGhpZGUodGltZXJQcm9ncmVzc0Jhcik7XG4gICAgaWYgKGlubmVyUGFyYW1zLnRpbWVyKSB7XG4gICAgICBnbG9iYWxTdGF0ZS50aW1lb3V0ID0gbmV3IFRpbWVyKCgpID0+IHtcbiAgICAgICAgZGlzbWlzc1dpdGgoJ3RpbWVyJyk7XG4gICAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS50aW1lb3V0O1xuICAgICAgfSwgaW5uZXJQYXJhbXMudGltZXIpO1xuICAgICAgaWYgKGlubmVyUGFyYW1zLnRpbWVyUHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgc2hvdyh0aW1lclByb2dyZXNzQmFyKTtcbiAgICAgICAgYXBwbHlDdXN0b21DbGFzcyh0aW1lclByb2dyZXNzQmFyLCBpbm5lclBhcmFtcywgJ3RpbWVyUHJvZ3Jlc3NCYXInKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGdsb2JhbFN0YXRlLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUudGltZW91dC5ydW5uaW5nKSB7XG4gICAgICAgICAgICAvLyB0aW1lciBjYW4gYmUgYWxyZWFkeSBzdG9wcGVkIG9yIHVuc2V0IGF0IHRoaXMgcG9pbnRcbiAgICAgICAgICAgIGFuaW1hdGVUaW1lclByb2dyZXNzQmFyKGlubmVyUGFyYW1zLnRpbWVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb21DYWNoZX0gZG9tQ2FjaGVcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gaW5uZXJQYXJhbXNcbiAgICovXG4gIGNvbnN0IGluaXRGb2N1cyA9IChkb21DYWNoZSwgaW5uZXJQYXJhbXMpID0+IHtcbiAgICBpZiAoaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd0VudGVyS2V5KSkge1xuICAgICAgYmx1ckFjdGl2ZUVsZW1lbnQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFmb2N1c0J1dHRvbihkb21DYWNoZSwgaW5uZXJQYXJhbXMpKSB7XG4gICAgICBzZXRGb2N1cygtMSwgMSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvbUNhY2hlfSBkb21DYWNoZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGZvY3VzQnV0dG9uID0gKGRvbUNhY2hlLCBpbm5lclBhcmFtcykgPT4ge1xuICAgIGlmIChpbm5lclBhcmFtcy5mb2N1c0RlbnkgJiYgaXNWaXNpYmxlJDEoZG9tQ2FjaGUuZGVueUJ1dHRvbikpIHtcbiAgICAgIGRvbUNhY2hlLmRlbnlCdXR0b24uZm9jdXMoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoaW5uZXJQYXJhbXMuZm9jdXNDYW5jZWwgJiYgaXNWaXNpYmxlJDEoZG9tQ2FjaGUuY2FuY2VsQnV0dG9uKSkge1xuICAgICAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmZvY3VzKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlubmVyUGFyYW1zLmZvY3VzQ29uZmlybSAmJiBpc1Zpc2libGUkMShkb21DYWNoZS5jb25maXJtQnV0dG9uKSkge1xuICAgICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5mb2N1cygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgYmx1ckFjdGl2ZUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0eXBlb2YgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gRGVhciBydXNzaWFuIHVzZXJzIHZpc2l0aW5nIHJ1c3NpYW4gc2l0ZXMuIExldCdzIGhhdmUgZnVuLlxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgL15ydVxcYi8udGVzdChuYXZpZ2F0b3IubGFuZ3VhZ2UpICYmIGxvY2F0aW9uLmhvc3QubWF0Y2goL1xcLihydXxzdXxieXx4bi0tcDFhaSkkLykpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGluaXRpYXRpb25EYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N3YWwtaW5pdGlhdGlvbicpO1xuICAgIGlmICghaW5pdGlhdGlvbkRhdGUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzd2FsLWluaXRpYXRpb24nLCBcIlwiLmNvbmNhdChub3cpKTtcbiAgICB9IGVsc2UgaWYgKChub3cuZ2V0VGltZSgpIC0gRGF0ZS5wYXJzZShpbml0aWF0aW9uRGF0ZSkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpID4gMykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgY29uc3QgdWtyYWluaWFuQW50aGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcbiAgICAgICAgdWtyYWluaWFuQW50aGVtLnNyYyA9ICdodHRwczovL2ZsYWctZ2ltbi5ydS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wOS9Va3JhaW5hLm1wMyc7XG4gICAgICAgIHVrcmFpbmlhbkFudGhlbS5sb29wID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1a3JhaW5pYW5BbnRoZW0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB1a3JhaW5pYW5BbnRoZW0ucGxheSgpLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAyNTAwKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQXNzaWduIGluc3RhbmNlIG1ldGhvZHMgZnJvbSBzcmMvaW5zdGFuY2VNZXRob2RzLyouanMgdG8gcHJvdG90eXBlXG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLmRpc2FibGVCdXR0b25zID0gZGlzYWJsZUJ1dHRvbnM7XG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLmVuYWJsZUJ1dHRvbnMgPSBlbmFibGVCdXR0b25zO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5nZXRJbnB1dCA9IGdldElucHV0O1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5kaXNhYmxlSW5wdXQgPSBkaXNhYmxlSW5wdXQ7XG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLmVuYWJsZUlucHV0ID0gZW5hYmxlSW5wdXQ7XG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLmhpZGVMb2FkaW5nID0gaGlkZUxvYWRpbmc7XG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLmRpc2FibGVMb2FkaW5nID0gaGlkZUxvYWRpbmc7XG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLnNob3dWYWxpZGF0aW9uTWVzc2FnZSA9IHNob3dWYWxpZGF0aW9uTWVzc2FnZTtcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U7XG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLmNsb3NlID0gY2xvc2U7XG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLmNsb3NlUG9wdXAgPSBjbG9zZTtcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUuY2xvc2VNb2RhbCA9IGNsb3NlO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5jbG9zZVRvYXN0ID0gY2xvc2U7XG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLnJlamVjdFByb21pc2UgPSByZWplY3RQcm9taXNlO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS51cGRhdGUgPSB1cGRhdGU7XG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLl9kZXN0cm95ID0gX2Rlc3Ryb3k7XG5cbiAgLy8gQXNzaWduIHN0YXRpYyBtZXRob2RzIGZyb20gc3JjL3N0YXRpY01ldGhvZHMvKi5qcyB0byBjb25zdHJ1Y3RvclxuICBPYmplY3QuYXNzaWduKFN3ZWV0QWxlcnQsIHN0YXRpY01ldGhvZHMpO1xuXG4gIC8vIFByb3h5IHRvIGluc3RhbmNlIG1ldGhvZHMgdG8gY29uc3RydWN0b3IsIGZvciBub3csIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICBPYmplY3Qua2V5cyhpbnN0YW5jZU1ldGhvZHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gey4uLmFueX0gYXJnc1xuICAgICAqIEByZXR1cm5zIHthbnkgfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgU3dlZXRBbGVydFtrZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGN1cnJlbnRJbnN0YW5jZSAmJiBjdXJyZW50SW5zdGFuY2Vba2V5XSkge1xuICAgICAgICByZXR1cm4gY3VycmVudEluc3RhbmNlW2tleV0oLi4uYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gIH0pO1xuICBTd2VldEFsZXJ0LkRpc21pc3NSZWFzb24gPSBEaXNtaXNzUmVhc29uO1xuICBTd2VldEFsZXJ0LnZlcnNpb24gPSAnMTEuNy4zMic7XG5cbiAgY29uc3QgU3dhbCA9IFN3ZWV0QWxlcnQ7XG4gIC8vIEB0cy1pZ25vcmVcbiAgU3dhbC5kZWZhdWx0ID0gU3dhbDtcblxuICByZXR1cm4gU3dhbDtcblxufSkpO1xuaWYgKHR5cGVvZiB0aGlzICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLlN3ZWV0YWxlcnQyKXt0aGlzLnN3YWwgPSB0aGlzLnN3ZWV0QWxlcnQgPSB0aGlzLlN3YWwgPSB0aGlzLlN3ZWV0QWxlcnQgPSB0aGlzLlN3ZWV0YWxlcnQyfVxuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiZmdW5jdGlvbihlLHQpe3ZhciBuPWUuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2lmKGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKG4pLG4uc3R5bGVTaGVldCluLnN0eWxlU2hlZXQuZGlzYWJsZWR8fChuLnN0eWxlU2hlZXQuY3NzVGV4dD10KTtlbHNlIHRyeXtuLmlubmVySFRNTD10fWNhdGNoKGUpe24uaW5uZXJUZXh0PXR9fShkb2N1bWVudCxcIi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7Z3JpZC1jb2x1bW46MS80ICFpbXBvcnRhbnQ7Z3JpZC1yb3c6MS80ICFpbXBvcnRhbnQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1pbi1jb250ZW50IGF1dG8gbWluLWNvbnRlbnQ7cGFkZGluZzoxZW07b3ZlcmZsb3cteTpoaWRkZW47YmFja2dyb3VuZDojZmZmO2JveC1zaGFkb3c6MCAwIDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMXB4IDJweCByZ2JhKDAsMCwwLC4wNzUpLDFweCAycHggNHB4IHJnYmEoMCwwLDAsLjA3NSksMXB4IDNweCA4cHggcmdiYSgwLDAsMCwuMDc1KSwycHggNHB4IDE2cHggcmdiYSgwLDAsMCwuMDc1KTtwb2ludGVyLWV2ZW50czphbGx9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0Pip7Z3JpZC1jb2x1bW46Mn0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXRpdGxle21hcmdpbjouNWVtIDFlbTtwYWRkaW5nOjA7Zm9udC1zaXplOjFlbTt0ZXh0LWFsaWduOmluaXRpYWx9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1sb2FkaW5ne2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pbnB1dHtoZWlnaHQ6MmVtO21hcmdpbjouNWVtO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2V7Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWZvb3RlcnttYXJnaW46LjVlbSAwIDA7cGFkZGluZzouNWVtIDAgMDtmb250LXNpemU6LjhlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNsb3Nle2dyaWQtY29sdW1uOjMvMztncmlkLXJvdzoxLzk5O2FsaWduLXNlbGY6Y2VudGVyO3dpZHRoOi44ZW07aGVpZ2h0Oi44ZW07bWFyZ2luOjA7Zm9udC1zaXplOjJlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWh0bWwtY29udGFpbmVye21hcmdpbjouNWVtIDFlbTtwYWRkaW5nOjA7b3ZlcmZsb3c6aW5pdGlhbDtmb250LXNpemU6MWVtO3RleHQtYWxpZ246aW5pdGlhbH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWh0bWwtY29udGFpbmVyOmVtcHR5e3BhZGRpbmc6MH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWxvYWRlcntncmlkLWNvbHVtbjoxO2dyaWQtcm93OjEvOTk7YWxpZ24tc2VsZjpjZW50ZXI7d2lkdGg6MmVtO2hlaWdodDoyZW07bWFyZ2luOi4yNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbntncmlkLWNvbHVtbjoxO2dyaWQtcm93OjEvOTk7YWxpZ24tc2VsZjpjZW50ZXI7d2lkdGg6MmVtO21pbi13aWR0aDoyZW07aGVpZ2h0OjJlbTttYXJnaW46MCAuNWVtIDAgMH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24gLnN3YWwyLWljb24tY29udGVudHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2ZvbnQtc2l6ZToxLjhlbTtmb250LXdlaWdodDpib2xkfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7d2lkdGg6MmVtO2hlaWdodDoyZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVde3RvcDouODc1ZW07d2lkdGg6MS4zNzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPWxlZnRde2xlZnQ6LjMxMjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPXJpZ2h0XXtyaWdodDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItYWN0aW9uc3tqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtoZWlnaHQ6YXV0bzttYXJnaW46MDttYXJnaW4tdG9wOi41ZW07cGFkZGluZzowIC41ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdHlsZWR7bWFyZ2luOi4yNWVtIC41ZW07cGFkZGluZzouNGVtIC42ZW07Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3N7Ym9yZGVyLWNvbG9yOiNhNWRjODZ9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxLjZlbTtoZWlnaHQ6M2VtO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO2JvcmRlci1yYWRpdXM6NTAlfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPWxlZnRde3RvcDotMC44ZW07bGVmdDotMC41ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybS1vcmlnaW46MmVtIDJlbTtib3JkZXItcmFkaXVzOjRlbSAwIDAgNGVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPXJpZ2h0XXt0b3A6LTAuMjVlbTtsZWZ0Oi45Mzc1ZW07dHJhbnNmb3JtLW9yaWdpbjowIDEuNWVtO2JvcmRlci1yYWRpdXM6MCA0ZW0gNGVtIDB9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7d2lkdGg6MmVtO2hlaWdodDoyZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeHt0b3A6MDtsZWZ0Oi40Mzc1ZW07d2lkdGg6LjQzNzVlbTtoZWlnaHQ6Mi42ODc1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXXtoZWlnaHQ6LjMxMjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD10aXBde3RvcDoxLjEyNWVtO2xlZnQ6LjE4NzVlbTt3aWR0aDouNzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD1sb25nXXt0b3A6LjkzNzVlbTtyaWdodDouMTg3NWVtO3dpZHRoOjEuMzc1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcHthbmltYXRpb246c3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIC43NXN9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmd7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Quc3dhbDItc2hvd3thbmltYXRpb246c3dhbDItdG9hc3Qtc2hvdyAuNXN9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLWhpZGV7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LWhpZGUgLjFzIGZvcndhcmRzfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKXtkaXNwbGF5OmdyaWQ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDYwO2luc2V0OjA7Ym94LXNpemluZzpib3JkZXItYm94O2dyaWQtdGVtcGxhdGUtYXJlYXM6XFxcInRvcC1zdGFydCAgICAgdG9wICAgICAgICAgICAgdG9wLWVuZFxcXCIgXFxcImNlbnRlci1zdGFydCAgY2VudGVyICAgICAgICAgY2VudGVyLWVuZFxcXCIgXFxcImJvdHRvbS1zdGFydCAgYm90dG9tLWNlbnRlciAgYm90dG9tLWVuZFxcXCI7Z3JpZC10ZW1wbGF0ZS1yb3dzOm1pbm1heChtaW4tY29udGVudCwgYXV0bykgbWlubWF4KG1pbi1jb250ZW50LCBhdXRvKSBtaW5tYXgobWluLWNvbnRlbnQsIGF1dG8pO2hlaWdodDoxMDAlO3BhZGRpbmc6LjYyNWVtO292ZXJmbG93LXg6aGlkZGVuO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMXM7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWJhY2tkcm9wLXNob3csZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLW5vYW5pbWF0aW9ue2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNCl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWJhY2tkcm9wLWhpZGV7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApICFpbXBvcnRhbnR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLXRvcC1zdGFydCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItY2VudGVyLXN0YXJ0LGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1ib3R0b20tc3RhcnR7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1pbm1heCgwLCAxZnIpIGF1dG8gYXV0b31kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItdG9wLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1jZW50ZXIsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWJvdHRvbXtncmlkLXRlbXBsYXRlLWNvbHVtbnM6YXV0byBtaW5tYXgoMCwgMWZyKSBhdXRvfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi10b3AtZW5kLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1jZW50ZXItZW5kLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1ib3R0b20tZW5ke2dyaWQtdGVtcGxhdGUtY29sdW1uczphdXRvIGF1dG8gbWlubWF4KDAsIDFmcil9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLXRvcC1zdGFydD4uc3dhbDItcG9wdXB7YWxpZ24tc2VsZjpzdGFydH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItdG9wPi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjoyO2FsaWduLXNlbGY6c3RhcnQ7anVzdGlmeS1zZWxmOmNlbnRlcn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItdG9wLWVuZD4uc3dhbDItcG9wdXAsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLXRvcC1yaWdodD4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MzthbGlnbi1zZWxmOnN0YXJ0O2p1c3RpZnktc2VsZjplbmR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWNlbnRlci1zdGFydD4uc3dhbDItcG9wdXAsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWNlbnRlci1sZWZ0Pi5zd2FsMi1wb3B1cHtncmlkLXJvdzoyO2FsaWduLXNlbGY6Y2VudGVyfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1jZW50ZXI+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjI7Z3JpZC1yb3c6MjthbGlnbi1zZWxmOmNlbnRlcjtqdXN0aWZ5LXNlbGY6Y2VudGVyfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1jZW50ZXItZW5kPi5zd2FsMi1wb3B1cCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItY2VudGVyLXJpZ2h0Pi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjozO2dyaWQtcm93OjI7YWxpZ24tc2VsZjpjZW50ZXI7anVzdGlmeS1zZWxmOmVuZH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLXN0YXJ0Pi5zd2FsMi1wb3B1cCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLWxlZnQ+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjE7Z3JpZC1yb3c6MzthbGlnbi1zZWxmOmVuZH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tPi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjoyO2dyaWQtcm93OjM7anVzdGlmeS1zZWxmOmNlbnRlcjthbGlnbi1zZWxmOmVuZH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLWVuZD4uc3dhbDItcG9wdXAsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWJvdHRvbS1yaWdodD4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MztncmlkLXJvdzozO2FsaWduLXNlbGY6ZW5kO2p1c3RpZnktc2VsZjplbmR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWdyb3ctcm93Pi5zd2FsMi1wb3B1cCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItZ3Jvdy1mdWxsc2NyZWVuPi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjoxLzQ7d2lkdGg6MTAwJX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItZ3Jvdy1jb2x1bW4+LnN3YWwyLXBvcHVwLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1ncm93LWZ1bGxzY3JlZW4+LnN3YWwyLXBvcHVwe2dyaWQtcm93OjEvNDthbGlnbi1zZWxmOnN0cmV0Y2h9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLW5vLXRyYW5zaXRpb257dHJhbnNpdGlvbjpub25lICFpbXBvcnRhbnR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItcG9wdXApe2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1pbm1heCgwLCAxMDAlKTt3aWR0aDozMmVtO21heC13aWR0aDoxMDAlO3BhZGRpbmc6MCAwIDEuMjVlbTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6IzU0NTQ1NDtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxcmVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLXBvcHVwKTpmb2N1c3tvdXRsaW5lOm5vbmV9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItcG9wdXApLnN3YWwyLWxvYWRpbmd7b3ZlcmZsb3cteTpoaWRkZW59ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGgyOndoZXJlKC5zd2FsMi10aXRsZSl7cG9zaXRpb246cmVsYXRpdmU7bWF4LXdpZHRoOjEwMCU7bWFyZ2luOjA7cGFkZGluZzouOGVtIDFlbSAwO2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOjEuODc1ZW07Zm9udC13ZWlnaHQ6NjAwO3RleHQtYWxpZ246Y2VudGVyO3RleHQtdHJhbnNmb3JtOm5vbmU7d29yZC13cmFwOmJyZWFrLXdvcmR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItYWN0aW9ucyl7ZGlzcGxheTpmbGV4O3otaW5kZXg6MTtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6YXV0bzttYXJnaW46MS4yNWVtIGF1dG8gMDtwYWRkaW5nOjB9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItYWN0aW9ucyk6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkW2Rpc2FibGVkXXtvcGFjaXR5Oi40fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLWFjdGlvbnMpOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDpob3ZlcntiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMSksIHJnYmEoMCwgMCwgMCwgMC4xKSl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItYWN0aW9ucyk6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkOmFjdGl2ZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItbG9hZGVyKXtkaXNwbGF5Om5vbmU7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6Mi4yZW07aGVpZ2h0OjIuMmVtO21hcmdpbjowIDEuODc1ZW07YW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtib3JkZXItd2lkdGg6LjI1ZW07Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6MTAwJTtib3JkZXItY29sb3I6IzI3NzhjNCByZ2JhKDAsMCwwLDApICMyNzc4YzQgcmdiYSgwLDAsMCwwKX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1zdHlsZWQpe21hcmdpbjouMzEyNWVtO3BhZGRpbmc6LjYyNWVtIDEuMWVtO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuMXM7Ym94LXNoYWRvdzowIDAgMCAzcHggcmdiYSgwLDAsMCwwKTtmb250LXdlaWdodDo1MDB9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKTpub3QoW2Rpc2FibGVkXSl7Y3Vyc29yOnBvaW50ZXJ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKS5zd2FsMi1jb25maXJte2JvcmRlcjowO2JvcmRlci1yYWRpdXM6LjI1ZW07YmFja2dyb3VuZDppbml0aWFsO2JhY2tncm91bmQtY29sb3I6IzcwNjZlMDtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKS5zd2FsMi1jb25maXJtOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEoMTEyLDEwMiwyMjQsLjUpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCkuc3dhbDItZGVueXtib3JkZXI6MDtib3JkZXItcmFkaXVzOi4yNWVtO2JhY2tncm91bmQ6aW5pdGlhbDtiYWNrZ3JvdW5kLWNvbG9yOiNkYzM3NDE7Y29sb3I6I2ZmZjtmb250LXNpemU6MWVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCkuc3dhbDItZGVueTpmb2N1c3tib3gtc2hhZG93OjAgMCAwIDNweCByZ2JhKDIyMCw1NSw2NSwuNSl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKS5zd2FsMi1jYW5jZWx7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czouMjVlbTtiYWNrZ3JvdW5kOmluaXRpYWw7YmFja2dyb3VuZC1jb2xvcjojNmU3ODgxO2NvbG9yOiNmZmY7Zm9udC1zaXplOjFlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1zdHlsZWQpLnN3YWwyLWNhbmNlbDpmb2N1c3tib3gtc2hhZG93OjAgMCAwIDNweCByZ2JhKDExMCwxMjAsMTI5LC41KX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1zdHlsZWQpLnN3YWwyLWRlZmF1bHQtb3V0bGluZTpmb2N1c3tib3gtc2hhZG93OjAgMCAwIDNweCByZ2JhKDEwMCwxNTAsMjAwLC41KX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1zdHlsZWQpOmZvY3Vze291dGxpbmU6bm9uZX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1zdHlsZWQpOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLWZvb3Rlcil7bWFyZ2luOjFlbSAwIDA7cGFkZGluZzoxZW0gMWVtIDA7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZTtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToxZW07dGV4dC1hbGlnbjpjZW50ZXJ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXItY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2dyaWQtY29sdW1uOmF1dG8gIWltcG9ydGFudDtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NXB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NXB4fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhcil7d2lkdGg6MTAwJTtoZWlnaHQ6LjI1ZW07YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4yKX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW1nOndoZXJlKC5zd2FsMi1pbWFnZSl7bWF4LXdpZHRoOjEwMCU7bWFyZ2luOjJlbSBhdXRvIDFlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1jbG9zZSl7ei1pbmRleDoyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEuMmVtO2hlaWdodDoxLjJlbTttYXJnaW4tdG9wOjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWJvdHRvbTotMS4yZW07cGFkZGluZzowO292ZXJmbG93OmhpZGRlbjt0cmFuc2l0aW9uOmNvbG9yIC4xcyxib3gtc2hhZG93IC4xcztib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCk7Y29sb3I6I2NjYztmb250LWZhbWlseTptb25vc3BhY2U7Zm9udC1zaXplOjIuNWVtO2N1cnNvcjpwb2ludGVyO2p1c3RpZnktc2VsZjplbmR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItY2xvc2UpOmhvdmVye3RyYW5zZm9ybTpub25lO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTtjb2xvcjojZjI3NDc0fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLWNsb3NlKTpmb2N1c3tvdXRsaW5lOm5vbmU7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAzcHggcmdiYSgxMDAsMTUwLDIwMCwuNSl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItY2xvc2UpOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItaHRtbC1jb250YWluZXJ7ei1pbmRleDoxO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luOjFlbSAxLjZlbSAuM2VtO3BhZGRpbmc6MDtvdmVyZmxvdzphdXRvO2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOjEuMTI1ZW07Zm9udC13ZWlnaHQ6bm9ybWFsO2xpbmUtaGVpZ2h0Om5vcm1hbDt0ZXh0LWFsaWduOmNlbnRlcjt3b3JkLXdyYXA6YnJlYWstd29yZDt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGlucHV0OndoZXJlKC5zd2FsMi1pbnB1dCksZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGlucHV0OndoZXJlKC5zd2FsMi1maWxlKSxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgdGV4dGFyZWE6d2hlcmUoLnN3YWwyLXRleHRhcmVhKSxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgc2VsZWN0OndoZXJlKC5zd2FsMi1zZWxlY3QpLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLXJhZGlvKSxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgbGFiZWw6d2hlcmUoLnN3YWwyLWNoZWNrYm94KXttYXJnaW46MWVtIDJlbSAzcHh9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGlucHV0OndoZXJlKC5zd2FsMi1pbnB1dCksZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGlucHV0OndoZXJlKC5zd2FsMi1maWxlKSxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgdGV4dGFyZWE6d2hlcmUoLnN3YWwyLXRleHRhcmVhKXtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6YXV0bzt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMXMsYm94LXNoYWRvdyAuMXM7Ym9yZGVyOjFweCBzb2xpZCAjZDlkOWQ5O2JvcmRlci1yYWRpdXM6LjE4NzVlbTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCk7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDYpLDAgMCAwIDNweCByZ2JhKDAsMCwwLDApO2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOjEuMTI1ZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGlucHV0OndoZXJlKC5zd2FsMi1pbnB1dCkuc3dhbDItaW5wdXRlcnJvcixkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWZpbGUpLnN3YWwyLWlucHV0ZXJyb3IsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIHRleHRhcmVhOndoZXJlKC5zd2FsMi10ZXh0YXJlYSkuc3dhbDItaW5wdXRlcnJvcntib3JkZXItY29sb3I6I2YyNzQ3NCAhaW1wb3J0YW50O2JveC1zaGFkb3c6MCAwIDJweCAjZjI3NDc0ICFpbXBvcnRhbnR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGlucHV0OndoZXJlKC5zd2FsMi1pbnB1dCk6Zm9jdXMsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGlucHV0OndoZXJlKC5zd2FsMi1maWxlKTpmb2N1cyxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgdGV4dGFyZWE6d2hlcmUoLnN3YWwyLXRleHRhcmVhKTpmb2N1c3tib3JkZXI6MXB4IHNvbGlkICNiNGRiZWQ7b3V0bGluZTpub25lO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA2KSwwIDAgMCAzcHggcmdiYSgxMDAsMTUwLDIwMCwuNSl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGlucHV0OndoZXJlKC5zd2FsMi1pbnB1dCk6OnBsYWNlaG9sZGVyLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBpbnB1dDp3aGVyZSguc3dhbDItZmlsZSk6OnBsYWNlaG9sZGVyLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSB0ZXh0YXJlYTp3aGVyZSguc3dhbDItdGV4dGFyZWEpOjpwbGFjZWhvbGRlcntjb2xvcjojY2NjfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcmFuZ2V7bWFyZ2luOjFlbSAyZW0gM3B4O2JhY2tncm91bmQ6I2ZmZn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXJhbmdlIGlucHV0e3dpZHRoOjgwJX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXJhbmdlIG91dHB1dHt3aWR0aDoyMCU7Y29sb3I6aW5oZXJpdDtmb250LXdlaWdodDo2MDA7dGV4dC1hbGlnbjpjZW50ZXJ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1yYW5nZSBpbnB1dCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXJhbmdlIG91dHB1dHtoZWlnaHQ6Mi42MjVlbTtwYWRkaW5nOjA7Zm9udC1zaXplOjEuMTI1ZW07bGluZS1oZWlnaHQ6Mi42MjVlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLWlucHV0e2hlaWdodDoyLjYyNWVtO3BhZGRpbmc6MCAuNzVlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLWZpbGV7d2lkdGg6NzUlO21hcmdpbi1yaWdodDphdXRvO21hcmdpbi1sZWZ0OmF1dG87YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApO2ZvbnQtc2l6ZToxLjEyNWVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItdGV4dGFyZWF7aGVpZ2h0OjYuNzVlbTtwYWRkaW5nOi43NWVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItc2VsZWN0e21pbi13aWR0aDo1MCU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzouMzc1ZW0gLjYyNWVtO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToxLjEyNWVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcmFkaW8sZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1jaGVja2JveHthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6aW5oZXJpdH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXJhZGlvIGxhYmVsLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItY2hlY2tib3ggbGFiZWx7bWFyZ2luOjAgLjZlbTtmb250LXNpemU6MS4xMjVlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXJhZGlvIGlucHV0LGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItY2hlY2tib3ggaW5wdXR7ZmxleC1zaHJpbms6MDttYXJnaW46MCAuNGVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBsYWJlbDp3aGVyZSguc3dhbDItaW5wdXQtbGFiZWwpe2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjoxZW0gYXV0byAwfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZSl7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luOjFlbSAwIDA7cGFkZGluZzouNjI1ZW07b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQ6I2YwZjBmMDtjb2xvcjojNjY2O2ZvbnQtc2l6ZToxZW07Zm9udC13ZWlnaHQ6MzAwfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZSk6OmJlZm9yZXtjb250ZW50OlxcXCIhXFxcIjtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxLjVlbTttaW4td2lkdGg6MS41ZW07aGVpZ2h0OjEuNWVtO21hcmdpbjowIC42MjVlbTtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiNmMjc0NzQ7Y29sb3I6I2ZmZjtmb250LXdlaWdodDo2MDA7bGluZS1oZWlnaHQ6MS41ZW07dGV4dC1hbGlnbjpjZW50ZXJ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1wcm9ncmVzcy1zdGVwc3tmbGV4LXdyYXA6d3JhcDthbGlnbi1pdGVtczpjZW50ZXI7bWF4LXdpZHRoOjEwMCU7bWFyZ2luOjEuMjVlbSBhdXRvO3BhZGRpbmc6MDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCk7Zm9udC13ZWlnaHQ6NjAwfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgbGl7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmV9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcHt6LWluZGV4OjIwO2ZsZXgtc2hyaW5rOjA7d2lkdGg6MmVtO2hlaWdodDoyZW07Ym9yZGVyLXJhZGl1czoyZW07YmFja2dyb3VuZDojMjc3OGM0O2NvbG9yOiNmZmY7bGluZS1oZWlnaHQ6MmVtO3RleHQtYWxpZ246Y2VudGVyfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXB7YmFja2dyb3VuZDojMjc3OGM0fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXB+LnN3YWwyLXByb2dyZXNzLXN0ZXB7YmFja2dyb3VuZDojYWRkOGU2O2NvbG9yOiNmZmZ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcH4uc3dhbDItcHJvZ3Jlc3Mtc3RlcC1saW5le2JhY2tncm91bmQ6I2FkZDhlNn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmV7ei1pbmRleDoxMDtmbGV4LXNocmluazowO3dpZHRoOjIuNWVtO2hlaWdodDouNGVtO21hcmdpbjowIC0xcHg7YmFja2dyb3VuZDojMjc3OGM0fWRpdjp3aGVyZSguc3dhbDItaWNvbil7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpjb250ZW50LWJveDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjVlbTtoZWlnaHQ6NWVtO21hcmdpbjoyLjVlbSBhdXRvIC42ZW07Ym9yZGVyOjAuMjVlbSBzb2xpZCByZ2JhKDAsMCwwLDApO2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlci1jb2xvcjojMDAwO2ZvbnQtZmFtaWx5OmluaGVyaXQ7bGluZS1oZWlnaHQ6NWVtO2N1cnNvcjpkZWZhdWx0O3VzZXItc2VsZWN0Om5vbmV9ZGl2OndoZXJlKC5zd2FsMi1pY29uKSAuc3dhbDItaWNvbi1jb250ZW50e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjMuNzVlbX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLWVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0O2NvbG9yOiNmMjc0NzR9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1lcnJvciAuc3dhbDIteC1tYXJre3Bvc2l0aW9uOnJlbGF0aXZlO2ZsZXgtZ3JvdzoxfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV17ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6Mi4zMTI1ZW07d2lkdGg6Mi45Mzc1ZW07aGVpZ2h0Oi4zMTI1ZW07Ym9yZGVyLXJhZGl1czouMTI1ZW07YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0fWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPWxlZnRde2xlZnQ6MS4wNjI1ZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9cmlnaHRde3JpZ2h0OjFlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1lcnJvci5zd2FsMi1pY29uLXNob3d7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXN9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1lcnJvci5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXgtbWFya3thbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgLjVzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItd2FybmluZ3tib3JkZXItY29sb3I6I2ZhY2VhODtjb2xvcjojZjhiYjg2fWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItd2FybmluZy5zd2FsMi1pY29uLXNob3d7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXN9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi13YXJuaW5nLnN3YWwyLWljb24tc2hvdyAuc3dhbDItaWNvbi1jb250ZW50e2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWktbWFyayAuNXN9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1pbmZve2JvcmRlci1jb2xvcjojOWRlMGY2O2NvbG9yOiMzZmMzZWV9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1pbmZvLnN3YWwyLWljb24tc2hvd3thbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41c31kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLWluZm8uc3dhbDItaWNvbi1zaG93IC5zd2FsMi1pY29uLWNvbnRlbnR7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtaS1tYXJrIC44c31kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXF1ZXN0aW9ue2JvcmRlci1jb2xvcjojYzlkYWUxO2NvbG9yOiM4N2FkYmR9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1xdWVzdGlvbi5zd2FsMi1pY29uLXNob3d7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXN9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1xdWVzdGlvbi5zd2FsMi1pY29uLXNob3cgLnN3YWwyLWljb24tY29udGVudHthbmltYXRpb246c3dhbDItYW5pbWF0ZS1xdWVzdGlvbi1tYXJrIC44c31kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3N7Ym9yZGVyLWNvbG9yOiNhNWRjODY7Y29sb3I6I2E1ZGM4Nn1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVde3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjMuNzVlbTtoZWlnaHQ6Ny41ZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXJhZGl1czo1MCV9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF17dG9wOi0wLjQzNzVlbTtsZWZ0Oi0yLjA2MzVlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtLW9yaWdpbjozLjc1ZW0gMy43NWVtO2JvcmRlci1yYWRpdXM6Ny41ZW0gMCAwIDcuNWVtfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPXJpZ2h0XXt0b3A6LTAuNjg3NWVtO2xlZnQ6MS44NzVlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtLW9yaWdpbjowIDMuNzVlbTtib3JkZXItcmFkaXVzOjAgNy41ZW0gNy41ZW0gMH1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3twb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjI7dG9wOi0wLjI1ZW07bGVmdDotMC4yNWVtO2JveC1zaXppbmc6Y29udGVudC1ib3g7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXI6LjI1ZW0gc29saWQgcmdiYSgxNjUsMjIwLDEzNCwuMyk7Ym9yZGVyLXJhZGl1czo1MCV9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7dG9wOi41ZW07bGVmdDoxLjYyNWVtO3dpZHRoOi40Mzc1ZW07aGVpZ2h0OjUuNjI1ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV17ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjI7aGVpZ2h0Oi4zMTI1ZW07Ym9yZGVyLXJhZGl1czouMTI1ZW07YmFja2dyb3VuZC1jb2xvcjojYTVkYzg2fWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF17dG9wOjIuODc1ZW07bGVmdDouODEyNWVtO3dpZHRoOjEuNTYyNWVtO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3RvcDoyLjM3NWVtO3JpZ2h0Oi41ZW07d2lkdGg6Mi45Mzc1ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXB7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25ne2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXN9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0e2FuaW1hdGlvbjpzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIDQuMjVzIGVhc2UtaW59W2NsYXNzXj1zd2FsMl17LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsMCl9LnN3YWwyLXNob3d7YW5pbWF0aW9uOnN3YWwyLXNob3cgLjNzfS5zd2FsMi1oaWRle2FuaW1hdGlvbjpzd2FsMi1oaWRlIC4xNXMgZm9yd2FyZHN9LnN3YWwyLW5vYW5pbWF0aW9ue3RyYW5zaXRpb246bm9uZX0uc3dhbDItc2Nyb2xsYmFyLW1lYXN1cmV7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHg7d2lkdGg6NTBweDtoZWlnaHQ6NTBweDtvdmVyZmxvdzpzY3JvbGx9LnN3YWwyLXJ0bCAuc3dhbDItY2xvc2V7bWFyZ2luLXJpZ2h0OmluaXRpYWw7bWFyZ2luLWxlZnQ6MH0uc3dhbDItcnRsIC5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXJ7cmlnaHQ6MDtsZWZ0OmF1dG99QGtleWZyYW1lcyBzd2FsMi10b2FzdC1zaG93ezAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0wLjYyNWVtKSByb3RhdGVaKDJkZWcpfTMzJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKX02NiV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyl9MTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKDBkZWcpfX1Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWhpZGV7MTAwJXt0cmFuc2Zvcm06cm90YXRlWigxZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwezAle3RvcDouNTYyNWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6LjEyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDouNjI1ZW07bGVmdDotMC4yNWVtO3dpZHRoOjEuNjI1ZW19ODQle3RvcDoxLjA2MjVlbTtsZWZ0Oi43NWVtO3dpZHRoOi41ZW19MTAwJXt0b3A6MS4xMjVlbTtsZWZ0Oi4xODc1ZW07d2lkdGg6Ljc1ZW19fUBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ3swJXt0b3A6MS42MjVlbTtyaWdodDoxLjM3NWVtO3dpZHRoOjB9NjUle3RvcDoxLjI1ZW07cmlnaHQ6LjkzNzVlbTt3aWR0aDowfTg0JXt0b3A6LjkzNzVlbTtyaWdodDowO3dpZHRoOjEuMTI1ZW19MTAwJXt0b3A6LjkzNzVlbTtyaWdodDouMTg3NWVtO3dpZHRoOjEuMzc1ZW19fUBrZXlmcmFtZXMgc3dhbDItc2hvd3swJXt0cmFuc2Zvcm06c2NhbGUoMC43KX00NSV7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXt0cmFuc2Zvcm06c2NhbGUoMC45NSl9MTAwJXt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgc3dhbDItaGlkZXswJXt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7dHJhbnNmb3JtOnNjYWxlKDAuNSk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcHswJXt0b3A6MS4xODc1ZW07bGVmdDouMDYyNWVtO3dpZHRoOjB9NTQle3RvcDoxLjA2MjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6Mi4xODc1ZW07bGVmdDotMC4zNzVlbTt3aWR0aDozLjEyNWVtfTg0JXt0b3A6M2VtO2xlZnQ6MS4zMTI1ZW07d2lkdGg6MS4wNjI1ZW19MTAwJXt0b3A6Mi44MTI1ZW07bGVmdDouODEyNWVtO3dpZHRoOjEuNTYyNWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjMuMzc1ZW07cmlnaHQ6Mi44NzVlbTt3aWR0aDowfTY1JXt0b3A6My4zNzVlbTtyaWdodDoyLjg3NWVtO3dpZHRoOjB9ODQle3RvcDoyLjE4NzVlbTtyaWdodDowO3dpZHRoOjMuNDM3NWVtfTEwMCV7dG9wOjIuMzc1ZW07cmlnaHQ6LjVlbTt3aWR0aDoyLjkzNzVlbX19QGtleWZyYW1lcyBzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lezAle3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX01JXt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9MTIle3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9MTAwJXt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrezAle21hcmdpbi10b3A6MS42MjVlbTt0cmFuc2Zvcm06c2NhbGUoMC40KTtvcGFjaXR5OjB9NTAle21hcmdpbi10b3A6MS42MjVlbTt0cmFuc2Zvcm06c2NhbGUoMC40KTtvcGFjaXR5OjB9ODAle21hcmdpbi10b3A6LTAuMzc1ZW07dHJhbnNmb3JtOnNjYWxlKDEuMTUpfTEwMCV7bWFyZ2luLXRvcDowO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uezAle3RyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7b3BhY2l0eTowfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZVgoMGRlZyk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1sb2FkaW5nezAle3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9MTAwJXt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1xdWVzdGlvbi1tYXJrezAle3RyYW5zZm9ybTpyb3RhdGVZKC0zNjBkZWcpfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZVkoMCl9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1pLW1hcmt7MCV7dHJhbnNmb3JtOnJvdGF0ZVooNDVkZWcpO29wYWNpdHk6MH0yNSV7dHJhbnNmb3JtOnJvdGF0ZVooLTI1ZGVnKTtvcGFjaXR5Oi40fTUwJXt0cmFuc2Zvcm06cm90YXRlWigxNWRlZyk7b3BhY2l0eTouOH03NSV7dHJhbnNmb3JtOnJvdGF0ZVooLTVkZWcpO29wYWNpdHk6MX0xMDAle3RyYW5zZm9ybTpyb3RhdGVYKDApO29wYWNpdHk6MX19Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKXtvdmVyZmxvdzpoaWRkZW59Ym9keS5zd2FsMi1oZWlnaHQtYXV0b3toZWlnaHQ6YXV0byAhaW1wb3J0YW50fWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMCkgIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czpub25lfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lciAuc3dhbDItcG9wdXB7cG9pbnRlci1ldmVudHM6YWxsfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lciAuc3dhbDItbW9kYWx7Ym94LXNoYWRvdzowIDAgMTBweCByZ2JhKDAsMCwwLC40KX1AbWVkaWEgcHJpbnR7Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKXtvdmVyZmxvdy15OnNjcm9sbCAhaW1wb3J0YW50fWJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bik+W2FyaWEtaGlkZGVuPXRydWVde2Rpc3BsYXk6bm9uZX1ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pIC5zd2FsMi1jb250YWluZXJ7cG9zaXRpb246c3RhdGljICFpbXBvcnRhbnR9fWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lcntib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MzYwcHg7bWF4LXdpZHRoOjEwMCU7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDApO3BvaW50ZXItZXZlbnRzOm5vbmV9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcHtpbnNldDowIGF1dG8gYXV0byA1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodHtpbnNldDowIDAgYXV0byBhdXRvfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0e2luc2V0OjAgYXV0byBhdXRvIDB9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1zdGFydCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnR7aW5zZXQ6NTAlIGF1dG8gYXV0byAwO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXJ7aW5zZXQ6NTAlIGF1dG8gYXV0byA1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0e2luc2V0OjUwJSAwIGF1dG8gYXV0bzt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0LGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tbGVmdHtpbnNldDphdXRvIGF1dG8gMCAwfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b217aW5zZXQ6YXV0byBhdXRvIDAgNTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tcmlnaHR7aW5zZXQ6YXV0byAwIDAgYXV0b31cIik7IiwiaW1wb3J0IEFkZFRvQ2FsZW5kYXIgZnJvbSAncmVhY3QtYWRkLXRvLWNhbGVuZGFyJztcbmltcG9ydCBRUkNvZGUgZnJvbSAncXJjb2RlLnJlYWN0JztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcblxuaW1wb3J0IEhlYWQgZnJvbSAnQHNyYy9jb21wb25lbnRzL0hlYWQnO1xuaW1wb3J0IHJlc29sdmVQYXRoIGZyb20gJ0BzcmMvdXRpbHMvcmVzb2x2ZVBhdGgnO1xuaW1wb3J0IGFwcENvbmZpZyBmcm9tICdAc3JjL2NvbmZpZy9hcHAnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24sIGRlZmF1bHRMb2NhbGUgfSBmcm9tICdAc3JjL2kxOG4nO1xuaW1wb3J0IGd1ZXN0TGlzdCBmcm9tICcuL2d1ZXN0X2xpc3QuanNvbic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuY29uc3QgdHJhbnNsYXRlQ29uZmlnID0gKGFwcENvbmZpZywgbG9jYWxlKSA9PiB7XG4gIGlmICghbG9jYWxlIHx8IGxvY2FsZSA9PT0gZGVmYXVsdExvY2FsZSkge1xuICAgIHJldHVybiBhcHBDb25maWc7XG4gIH1cbiAgLy8gUmVwbGFjZSBjb25maWcgd2l0aCBsYW5nXG4gIGNvbnN0IGNvbmZpZ0xhbmcgPSBhcHBDb25maWcubGFuZ1tsb2NhbGVdO1xuICBpZiAoY29uZmlnTGFuZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGxvY2FsZTogJywgbG9jYWxlKTtcbiAgfVxuICByZXR1cm4geyAuLi5hcHBDb25maWcsIC4uLmNvbmZpZ0xhbmcgfTtcbn07XG5cbmNvbnN0IFNob3dJbnZpdGUgPSAoeyBjdXJyZW50VXJsLCBndWVzdExpc3RMYXN0VXBkYXRlZEF0LCBndWVzdCB9KSA9PiB7XG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbihndWVzdC5sb2NhbGUpO1xuXG4gIC8vIEluaXRpYXRlIGNvbmZpZyB2YXJpYWJsZXNcbiAgY29uc3Qge1xuICAgIGxvZ28sXG4gICAgb2dUYWdzLFxuICAgIGNvdXBsZUluZm8sXG4gICAgdmVudWUsXG4gICAgd2VkZGluZ0RheSxcbiAgICB3ZWRkaW5nRGF0ZSxcbiAgICB3ZWRkaW5nVGltZSxcbiAgICBjYWxlbmRhckluZm8sXG4gIH0gPSB0cmFuc2xhdGVDb25maWcoYXBwQ29uZmlnLCBndWVzdC5sb2NhbGUpO1xuICBjb25zdCB7IGJyaWRlTmFtZSwgZ3Jvb21OYW1lLCBoYXNodGFnLCBjb3VwbGVOYW1lRm9ybWF0IH0gPSBjb3VwbGVJbmZvO1xuXG4gIGNvbnN0IGNvdXBsZU5hbWVTdHIgPVxuICAgIGNvdXBsZU5hbWVGb3JtYXQgPT09ICdHUk9PTV9GSVJTVCdcbiAgICAgID8gYCR7Z3Jvb21OYW1lfSAmICR7YnJpZGVOYW1lfWBcbiAgICAgIDogYCR7YnJpZGVOYW1lfSAmICR7Z3Jvb21OYW1lfWA7XG4gIGNvbnN0IGNvdXBsZU5hbWUgPVxuICAgIGNvdXBsZU5hbWVGb3JtYXQgPT09ICdHUk9PTV9GSVJTVCcgPyAoXG4gICAgICA8PlxuICAgICAgICB7Z3Jvb21OYW1lfSA8c3Bhbj4mYW1wOzwvc3Bhbj4ge2JyaWRlTmFtZX1cbiAgICAgIDwvPlxuICAgICkgOiAoXG4gICAgICA8PlxuICAgICAgICB7YnJpZGVOYW1lfSA8c3Bhbj4mYW1wOzwvc3Bhbj4ge2dyb29tTmFtZX1cbiAgICAgIDwvPlxuICAgICk7XG5cbiAgLy8gVmVudWUgaW5mb1xuICBjb25zdCB2ZW51ZUJyaWVmID0gYCR7dmVudWUubmFtZX0sICR7dmVudWUuY2l0eX0sICR7dmVudWUuY291bnRyeX1gO1xuICBjb25zdCB3ZWRkaW5nRGF0ZUJyaWVmID0gYCR7d2VkZGluZ0RheX0sICR7d2VkZGluZ0RhdGV9YDtcblxuICAvLyBFdmVudCBpbmZvXG4gIGNvbnN0IGV2ZW50VGl0bGUgPSBgJHtjb3VwbGVOYW1lU3RyfSdzIFdlZGRpbmdgO1xuICBsZXQgZXZlbnREZXNjcmlwdGlvbiA9IGAke3dlZGRpbmdEYXRlQnJpZWZ9IGF0ICR7dmVudWUubmFtZX0sICR7dmVudWUuY2l0eX1gO1xuICBpZiAoZ3Vlc3QubmFtZSkge1xuICAgIGV2ZW50RGVzY3JpcHRpb24gPSBgRGVhciAke2d1ZXN0Lm5hbWV9LCB5b3UgYXJlIGNvcmRpYWxseSBpbnZpdGVkIHRvIG91ciB3ZWRkaW5nIG9uICR7d2VkZGluZ0RhdGV9IGF0ICR7dmVudWUubmFtZX0uIExvb2tpbmcgZm9yd2FyZCB0byBzZWVpbmcgeW91IWA7XG4gIH1cblxuICAvLyBDYWxlbmRhciBwYXlsb2FkXG4gIGNvbnN0IGNhbGVuZGFyRXZlbnQgPSB7XG4gICAgdGl0bGU6IGV2ZW50VGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGV2ZW50RGVzY3JpcHRpb24sXG4gICAgbG9jYXRpb246IGAke3ZlbnVlLmNpdHl9LCAke3ZlbnVlLmNvdW50cnl9YCxcbiAgICBzdGFydFRpbWU6IGNhbGVuZGFySW5mby50aW1lU3RhcnRJU08sXG4gICAgZW5kVGltZTogY2FsZW5kYXJJbmZvLnRpbWVFbmRJU08sXG4gIH07XG5cbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYXR0ZW5kaW5nLCBzZXRBdHRlbmRpbmddID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IHByb3h5VXJsID0gJ2h0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tLyc7XG4gIGNvbnN0IHNjcmlwdFVybCA9XG4gICAgJ2h0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvQUtmeWNieFQyVUxhOWFsblpJdlRRaWZMdHk0MHV1T25hZlRUQ20yclhRRmVpRE9iN0VSaTcxNmR0ZU1aQ0g1bXFVX3B4UkR0ZkEvZXhlYyc7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsIHx8ICFhdHRlbmRpbmcpIHtcbiAgICAgIFN3YWwuZmlyZSgnJywgJ0FsbCBmaWVsZCBhcmUgcmVxdWlyZWQnLCAnZXJyb3InKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHByb3h5VXJsICsgc2NyaXB0VXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBlbWFpbCwgYXR0ZW5kaW5nIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGAyMjUzMjcxOTU3XzBgLGRhdGEpKTtcbiAgICAgIFN3YWwuZmlyZSgnU3VjY2VzcyEnLCAnV2UgYXBwcmVjaWF0ZSB5b3VyIHJlc3BvbnNlIScsICdzdWNjZXNzJyk7XG4gICAgICAvLyBSZXNwb25zZSBmcm9tIEdvb2dsZSBTY3JpcHRcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICBTd2FsLmZpcmUoJ0Vycm9yIScsICdTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2FpbiEnLCAnZXJyb3InKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgYS5yZWFjdC1hZGQtdG8tY2FsZW5kYXJfX2J1dHRvbiBzcGFuIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8SGVhZFxuICAgICAgICB7Li4ub2dUYWdzfVxuICAgICAgICB0aXRsZT17ZXZlbnRUaXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2V2ZW50RGVzY3JpcHRpb259XG4gICAgICAgIGd1ZXN0TmFtZT17Z3Vlc3QubmFtZX1cbiAgICAgICAgdXJsPXtjdXJyZW50VXJsfVxuICAgICAgICBkYXRlPXt3ZWRkaW5nRGF0ZUJyaWVmfVxuICAgICAgICBtb2RpZmllZFRpbWU9e2d1ZXN0TGlzdExhc3RVcGRhdGVkQXR9XG4gICAgICAgIHZlbnVlPXt2ZW51ZUJyaWVmfVxuICAgICAgICBsb2dvPXtyZXNvbHZlUGF0aChvZ1RhZ3MubG9nbyl9XG4gICAgICAgIGF1dGhvcj17cmVzb2x2ZVBhdGgoJy8nKX1cbiAgICAgIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2hlYWRlcl9hcmVhJz5cbiAgICAgICAgPGRpdiBpZD0naG9tZScgY2xhc3NOYW1lPSdoZWFkZXJfc2xpZGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpY2stbGlzdCBkcmFnZ2FibGUnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWNrLXRyYWNrJyBzdHlsZT17eyBvcGFjaXR5OiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVfc2xpZGVyIGJnX2NvdmVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTEwJz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl9jb250ZW50IHRleHQtY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiA2MCwgbWFyZ2luOiAyNSwgbWFyZ2luVG9wOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bG9nby5oZWFkZXJMb2dvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2xvZ28nXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyX3N1Yl90aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScwLjJzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzAuMnMnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdzaXRlSW50cm8nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWRlcl90aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249J2ZhZGVJblVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PScwLjdzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzAuN3MnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VwbGVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xvY2F0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzFzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzFzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzaHRhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xvY2F0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj0nZmFkZUluVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9JzFzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheTogJzFzJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmVudWUubmFtZX0sIHt2ZW51ZS5jaXR5fSwge3ZlbnVlLmNvdW50cnl9LlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gaWQ9J2NvbWluZ19zb29uJyBjbGFzc05hbWU9J2NvbWluZ19zb29uX2FyZWEgcHQtMjAgcGItNzAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29taW5nX3Nvb25fc2hhcGVfMScgc3R5bGU9e3sgekluZGV4OiAxIH19PlxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnBuZycgYWx0PSdzaGFwZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctNCc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NlY3Rpb25fdGl0bGUgcHQtNTAgd293IGZhZGVJbidcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC4ycydcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjNzJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiAnMC4ycycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUnPnt0KCdldmVudERhdGUnKX06PC9oMz5cbiAgICAgICAgICAgICAgICA8cD57d2VkZGluZ0RhdGVCcmllZn08L3A+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzAuMnJlbScsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcwLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QWRkVG9DYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICBldmVudD17Y2FsZW5kYXJFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uTGFiZWw9e3QoJ2J0bkFkZFRvTXlDYWxlbmRhcicpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nYXNzZXRzL2ltYWdlcy9zZWN0aW9uX3NoYXBlLnBuZycgYWx0PSdTaGFwZScgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOCc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3dvdyBmYWRlSW4nXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249JzEuM3MnXG4gICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNnMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzAuNnMnLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9jb3VudCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC0yMCc+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNjAsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzgsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZV9jb3VudCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMzAnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvdW50X2NvbnRlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxLCBwYWRkaW5nVG9wOiAyMCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmVudWUubWFwVXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nYXNzZXRzL2ltYWdlcy9iZXZlbnQucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2JldmVudCBjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dmVudWUubWFwVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc3NXZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmVudWUubWFwVXJsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21pbmdfc29vbl9zaGFwZV8yJz5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvc2hhcGUtMi5wbmcnIGFsdD0nc2hhcGUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD0nY29udGFjdCcgY2xhc3NOYW1lPSdjb250YWN0X2FyZWEnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J2NvbnRhY3Rfd3JhcHBlciB3b3cgZmFkZUluVXBCaWcnXG4gICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj0nMS4zcydcbiAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjRzJ1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMzAsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS4zcycsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiAnMC40cycsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW5VcCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25fdGl0bGUgdGV4dC1jZW50ZXIgcGItMzAnPlxuICAgICAgICAgICAgICAgICAge2d1ZXN0Lm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25HcmVldGluZycpfVxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS41cmVtJyB9fT57Z3Vlc3QubmFtZX0sPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e3QoJ2ludml0YXRpb25JbnRybycpfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZGltZ3JleScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IHQoJ2ludml0YXRpb25Db250ZW50VGV4dEFsaWduJyksXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxpPlxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25Db250ZW50Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgnaW52aXRhdGlvbk91dHJvJykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXQoJ2ludml0YXRpb25PdXRybycpLnN0YXJ0c1dpdGgoJ1ttaXNzaW5nJykgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25PdXRybycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHthcHBDb25maWcuc2hvd1FyQ29kZSAmJiBndWVzdC5uYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwLCBtYXJnaW5Cb3R0b206IDM1IH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9e2d1ZXN0Lmd1ZXN0SWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXt2ZW51ZS5tYXBVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzAuMnJlbSBzb2xpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Yj57dmVudWUubmFtZX08L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHt2ZW51ZS5hZGRyZXNzTGluZTF9XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICB7Lyoge3ZlbnVlLmFkZHJlc3NMaW5lMn1cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICB7dmVudWUuY291bnRyeX0uXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQnIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgIHt3ZWRkaW5nRGF0ZX0gwrcge3dlZGRpbmdUaW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICB7LyogYXR0ZW5kaW5nIGZvcm0gKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG10LTUnPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdmb3JtX3RpdGxlIG1iLTInPlxuICAgICAgICAgICAgICAgICAgICAgIEluZm9ybSBVcyBvZiB5b3VyIGF2YWlsYWJpbGl0eVxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IG1iLTMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnIGNsYXNzTmFtZT0nZm9ybS1sYWJlbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnIGNsYXNzTmFtZT0nZm9ybS1sYWJlbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1haWw6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nYXR0ZW5kaW5nJyBjbGFzc05hbWU9J2Zvcm0tbGFiZWwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBXaWxsIHlvdSBiZSBhdHRlbmRpbmc/XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdhdHRlbmRpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthdHRlbmRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXR0ZW5kaW5nKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzTG9hZGluZyA/ICdTdWJtaXR0aW5nLi4uJyA6ICdTdWJtaXQnfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHsvKiByZXNwb25zZSBtb2RhbCAqL31cblxuICAgICAgICAgICAgICAgICAge3QoJ2ludml0YXRpb25DbG9zaW5nJykgJiZcbiAgICAgICAgICAgICAgICAgICAgIXQoJ2ludml0YXRpb25DbG9zaW5nJykuc3RhcnRzV2l0aCgnW21pc3NpbmcnKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA0MjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDYwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogdCgnaW52aXRhdGlvbkNsb3NpbmcnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBGb290ZXIgc2VjdGlvbiAqL31cbiAgICAgIDxmb290ZXIgaWQ9J2Zvb3RlcicgY2xhc3NOYW1lPSdmb290ZXJfYXJlYSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfc2hhcGVfMSc+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEucG5nJyBhbHQ9J3NoYXBlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl93aWRnZXQgcHQtNTAgcGItMTAgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9sb2dvJz5cbiAgICAgICAgICAgICAgey8qIHtsb2dvLmZvb3RlckxvZ28gJiZcbiAgICAgICAgICAgICAgICAobG9nby5mb290ZXJMb2dvVHlwZSA9PT0gJ21wNCcgPyAoXG4gICAgICAgICAgICAgICAgICA8dmlkZW8gaGVpZ2h0PScxNDAnIGF1dG9QbGF5IG11dGVkIGxvb3A+XG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtsb2dvLmZvb3RlckxvZ299IHR5cGU9J3ZpZGVvL21wNCcgLz5cbiAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgICAgKSA6ICggKi99XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDkwLCBtYXJnaW46IDI1LCBtYXJnaW5Ub3A6IDAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e2xvZ28uaGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICBhbHQ9J2xvZ28nXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17bG9nby5mb290ZXJMb2dvfSAvPiAqL31cbiAgICAgICAgICAgICAgey8qICkpfSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl90aXRsZSAnPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e2NvdXBsZU5hbWV9PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGg1XG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdncmV5JywgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnNDBweCcgfX1cbiAgICAgICAgPlxuICAgICAgICAgICNEV2VkZGluZ1xuICAgICAgICA8L2g1PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TaG93SW52aXRlLmdldEluaXRpYWxQcm9wcyA9IChjdHgpID0+IHtcbiAgY29uc3QgbG9jYWxlUGFyYW1zID0gY3R4LnF1ZXJ5LmxhbmcgfHwgZGVmYXVsdExvY2FsZTtcbiAgY29uc3QgZW1wdHlHdWVzdFBhcmFtcyA9IHtcbiAgICBndWVzdDoge1xuICAgICAgZ3Vlc3RJZDogJycsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGdyZWV0aW5nOiAnJyxcbiAgICAgIGxvY2FsZTogbG9jYWxlUGFyYW1zLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgY3VycmVudFVybCA9IHJlc29sdmVQYXRoKGN0eC5yZXEudXJsKTtcbiAgY29uc3QgZ3Vlc3RJZCA9IGN0eC5xdWVyeS51O1xuICBpZiAoIWd1ZXN0SWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIC4uLmVtcHR5R3Vlc3RQYXJhbXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGd1ZXN0RGF0YSA9IGd1ZXN0TGlzdC5kYXRhO1xuICBjb25zdCBndWVzdExpc3RMYXN0VXBkYXRlZEF0ID0gZ3Vlc3RMaXN0Lm1ldGEubGFzdFVwZGF0ZWRBdDtcbiAgY29uc3QgeyBuYW1lLCBncmVldGluZywgbG9jYWxlIH0gPVxuICAgIGd1ZXN0RGF0YS5maWx0ZXIoKGd1ZXN0KSA9PiBndWVzdC5ndWVzdElkID09PSBndWVzdElkKVswXSB8fCB7fTtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICAuLi5lbXB0eUd1ZXN0UGFyYW1zLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRVcmwsXG4gICAgZ3Vlc3RMaXN0TGFzdFVwZGF0ZWRBdCxcbiAgICBndWVzdDoge1xuICAgICAgbmFtZSxcbiAgICAgIGdyZWV0aW5nLFxuICAgICAgZ3Vlc3RJZCxcbiAgICAgIGxvY2FsZTogbG9jYWxlIHx8IGxvY2FsZVBhcmFtcyxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd0ludml0ZTtcbi8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0Jzt2YXIgXzB4MjlkNTk2PV8weDQxYzk7KGZ1bmN0aW9uKF8weDI1MjY4MyxfMHgzNzJiY2Epe3ZhciBfMHgyM2FiZmY9XzB4NDFjOSxfMHgyZjFiNDE9XzB4MjUyNjgzKCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHg0ZWZkYTI9cGFyc2VJbnQoXzB4MjNhYmZmKDB4MWY1KSkvMHgxKy1wYXJzZUludChfMHgyM2FiZmYoMHgxNzgpKS8weDIqKC1wYXJzZUludChfMHgyM2FiZmYoMHgxZmMpKS8weDMpKy1wYXJzZUludChfMHgyM2FiZmYoMHgxNjIpKS8weDQrLXBhcnNlSW50KF8weDIzYWJmZigweDIzMikpLzB4NSooLXBhcnNlSW50KF8weDIzYWJmZigweDE2NykpLzB4NikrLXBhcnNlSW50KF8weDIzYWJmZigweDFjOCkpLzB4NystcGFyc2VJbnQoXzB4MjNhYmZmKDB4MjBkKSkvMHg4K3BhcnNlSW50KF8weDIzYWJmZigweDE4MikpLzB4OSoocGFyc2VJbnQoXzB4MjNhYmZmKDB4MWMxKSkvMHhhKTtpZihfMHg0ZWZkYTI9PT1fMHgzNzJiY2EpYnJlYWs7ZWxzZSBfMHgyZjFiNDFbJ3B1c2gnXShfMHgyZjFiNDFbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDQ1ZGVjMil7XzB4MmYxYjQxWydwdXNoJ10oXzB4MmYxYjQxWydzaGlmdCddKCkpO319fShfMHg1NTU2LDB4MTk0ZTkpKTt2YXIgaj1PYmplY3RbXzB4MjlkNTk2KDB4MjE1KV0sSD1PYmplY3RbJ2RlZmluZVByb3BlcnR5J10sRz1PYmplY3RbXzB4MjlkNTk2KDB4MjA1KV0sZWU9T2JqZWN0WydnZXRPd25Qcm9wZXJ0eU5hbWVzJ10sdGU9T2JqZWN0W18weDI5ZDU5NigweDFiMSldLG5lPU9iamVjdFtfMHgyOWQ1OTYoMHgxODApXVsnaGFzT3duUHJvcGVydHknXSxyZT0oXzB4MjhlM2QyLF8weDQ5OTYxMCxfMHhmNDg5MjAsXzB4ZjFkYTgxKT0+e3ZhciBfMHgxZWI0MGM9XzB4MjlkNTk2O2lmKF8weDQ5OTYxMCYmdHlwZW9mIF8weDQ5OTYxMD09XzB4MWViNDBjKDB4MTk0KXx8dHlwZW9mIF8weDQ5OTYxMD09XzB4MWViNDBjKDB4MjFkKSl7Zm9yKGxldCBfMHgxZTQ2YzYgb2YgZWUoXzB4NDk5NjEwKSkhbmVbXzB4MWViNDBjKDB4MThjKV0oXzB4MjhlM2QyLF8weDFlNDZjNikmJl8weDFlNDZjNiE9PV8weGY0ODkyMCYmSChfMHgyOGUzZDIsXzB4MWU0NmM2LHsnZ2V0JzooKT0+XzB4NDk5NjEwW18weDFlNDZjNl0sJ2VudW1lcmFibGUnOiEoXzB4ZjFkYTgxPUcoXzB4NDk5NjEwLF8weDFlNDZjNikpfHxfMHhmMWRhODFbJ2VudW1lcmFibGUnXX0pO31yZXR1cm4gXzB4MjhlM2QyO30seD0oXzB4MjY0YjkzLF8weDNiYzc5YyxfMHg1NTc0YjYpPT4oXzB4NTU3NGI2PV8weDI2NGI5MyE9bnVsbD9qKHRlKF8weDI2NGI5MykpOnt9LHJlKF8weDNiYzc5Y3x8IV8weDI2NGI5M3x8IV8weDI2NGI5M1snX19lcycrJ01vZHVsZSddP0goXzB4NTU3NGI2LF8weDI5ZDU5NigweDFkYikseyd2YWx1ZSc6XzB4MjY0YjkzLCdlbnVtZXJhYmxlJzohMHgwfSk6XzB4NTU3NGI2LF8weDI2NGI5MykpLFg9Y2xhc3N7Y29uc3RydWN0b3IoXzB4NWRhNmQ1LF8weDE3MGU2NyxfMHgzY2M3MmUsXzB4NDRmY2IzLF8weDU4ZDY4Yil7dmFyIF8weDU0NzUyOD1fMHgyOWQ1OTY7dGhpc1snZ2xvYmFsJ109XzB4NWRhNmQ1LHRoaXNbXzB4NTQ3NTI4KDB4MTczKV09XzB4MTcwZTY3LHRoaXNbXzB4NTQ3NTI4KDB4MWU5KV09XzB4M2NjNzJlLHRoaXNbXzB4NTQ3NTI4KDB4MjI1KV09XzB4NDRmY2IzLHRoaXNbXzB4NTQ3NTI4KDB4MTY0KV09XzB4NThkNjhiLHRoaXNbXzB4NTQ3NTI4KDB4MWJkKV09ITB4MCx0aGlzW18weDU0NzUyOCgweDFkYyldPSEweDAsdGhpc1tfMHg1NDc1MjgoMHgyMGUpXT0hMHgxLHRoaXNbXzB4NTQ3NTI4KDB4MTgzKV09ITB4MSx0aGlzW18weDU0NzUyOCgweDE3YSldPV8weDVkYTZkNVsncHJvY2VzcyddPy5bXzB4NTQ3NTI4KDB4MWViKV0/LlsnTkVYVF9SVU5USU1FJ109PT1fMHg1NDc1MjgoMHgyMjMpLHRoaXNbJ19pbkJyb3dzZXInXT0hdGhpc1snZ2xvYmFsJ11bXzB4NTQ3NTI4KDB4MWU3KV0/LlsndmVyc2lvbnMnXT8uW18weDU0NzUyOCgweDFlZSldJiYhdGhpc1snX2luTmV4dEVkZ2UnXSx0aGlzW18weDU0NzUyOCgweDIwZildPW51bGwsdGhpc1tfMHg1NDc1MjgoMHgxODQpXT0weDAsdGhpc1tfMHg1NDc1MjgoMHgyMzEpXT0weDE0LHRoaXNbJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJ109XzB4NTQ3NTI4KDB4MjAzKSx0aGlzWydfc2VuZEVycm9yTWVzc2FnZSddPSh0aGlzW18weDU0NzUyOCgweDFlNCldP18weDU0NzUyOCgweDI0MCk6XzB4NTQ3NTI4KDB4MWFmKSkrdGhpc1tfMHg1NDc1MjgoMHgyMmEpXTt9YXN5bmNbXzB4MjlkNTk2KDB4MTViKV0oKXt2YXIgXzB4NTQ3ZjMyPV8weDI5ZDU5NjtpZih0aGlzW18weDU0N2YzMigweDIwZildKXJldHVybiB0aGlzW18weDU0N2YzMigweDIwZildO2xldCBfMHgyMDZjNzE7aWYodGhpc1tfMHg1NDdmMzIoMHgxZTQpXXx8dGhpc1tfMHg1NDdmMzIoMHgxN2EpXSlfMHgyMDZjNzE9dGhpc1tfMHg1NDdmMzIoMHgxYTUpXVtfMHg1NDdmMzIoMHgxNmQpXTtlbHNle2lmKHRoaXNbXzB4NTQ3ZjMyKDB4MWE1KV1bXzB4NTQ3ZjMyKDB4MWU3KV0/LlsnX1dlYlNvY2tldCddKV8weDIwNmM3MT10aGlzW18weDU0N2YzMigweDFhNSldWydwcm9jZXNzJ10/LltfMHg1NDdmMzIoMHgyMWIpXTtlbHNlIHRyeXtsZXQgXzB4NGRhMzZhPWF3YWl0IGltcG9ydChfMHg1NDdmMzIoMHgxYzApKTtfMHgyMDZjNzE9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KF8weDU0N2YzMigweDFmMikpKVtfMHg1NDdmMzIoMHgyMzUpXShfMHg0ZGEzNmFbXzB4NTQ3ZjMyKDB4MWI4KV0odGhpc1tfMHg1NDdmMzIoMHgyMjUpXSxfMHg1NDdmMzIoMHgxNTcpKSlbXzB4NTQ3ZjMyKDB4MWJlKV0oKSkpW18weDU0N2YzMigweDFkYildO31jYXRjaHt0cnl7XzB4MjA2YzcxPXJlcXVpcmUocmVxdWlyZShfMHg1NDdmMzIoMHgxYzApKVtfMHg1NDdmMzIoMHgxYjgpXSh0aGlzW18weDU0N2YzMigweDIyNSldLCd3cycpKTt9Y2F0Y2h7dGhyb3cgbmV3IEVycm9yKF8weDU0N2YzMigweDFhZSkpO319fXJldHVybiB0aGlzW18weDU0N2YzMigweDIwZildPV8weDIwNmM3MSxfMHgyMDZjNzE7fVsnX2Nvbm5lY3RUb0hvc3ROb3cnXSgpe3ZhciBfMHg1YzY3OTI9XzB4MjlkNTk2O3RoaXNbXzB4NWM2NzkyKDB4MTgzKV18fHRoaXNbXzB4NWM2NzkyKDB4MjBlKV18fHRoaXNbXzB4NWM2NzkyKDB4MTg0KV0+PXRoaXNbXzB4NWM2NzkyKDB4MjMxKV18fCh0aGlzW18weDVjNjc5MigweDFkYyldPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgwLHRoaXNbXzB4NWM2NzkyKDB4MTg0KV0rKyx0aGlzW18weDVjNjc5MigweDE2YSldPW5ldyBQcm9taXNlKChfMHgzZmJiNDcsXzB4NWQ5OTM2KT0+e3ZhciBfMHgyZDBkNWE9XzB4NWM2NzkyO3RoaXNbXzB4MmQwZDVhKDB4MTViKV0oKVtfMHgyZDBkNWEoMHgxOWUpXShfMHg1NzIzZTU9Pnt2YXIgXzB4Nzc2OTk9XzB4MmQwZDVhO2xldCBfMHg1YjMwZTA9bmV3IF8weDU3MjNlNSgnd3M6Ly8nKyghdGhpc1tfMHg3NzY5OSgweDFlNCldJiZ0aGlzW18weDc3Njk5KDB4MTY0KV0/J2dhdGV3YXkuZG9ja2VyLmludGVybmFsJzp0aGlzW18weDc3Njk5KDB4MTczKV0pKyc6Jyt0aGlzW18weDc3Njk5KDB4MWU5KV0pO18weDViMzBlMFtfMHg3NzY5OSgweDE5YSldPSgpPT57dmFyIF8weDEzZDBjNj1fMHg3NzY5OTt0aGlzW18weDEzZDBjNigweDFiZCldPSEweDEsdGhpc1tfMHgxM2QwYzYoMHgxYzUpXShfMHg1YjMwZTApLHRoaXNbXzB4MTNkMGM2KDB4MTcwKV0oKSxfMHg1ZDk5MzYobmV3IEVycm9yKCdsb2dnZXJcXFxceDIwd2Vic29ja2V0XFxcXHgyMGVycm9yJykpO30sXzB4NWIzMGUwW18weDc3Njk5KDB4MjJlKV09KCk9Pnt2YXIgXzB4MWRjMDI4PV8weDc3Njk5O3RoaXNbXzB4MWRjMDI4KDB4MWU0KV18fF8weDViMzBlMFtfMHgxZGMwMjgoMHgyMjYpXSYmXzB4NWIzMGUwW18weDFkYzAyOCgweDIyNildW18weDFkYzAyOCgweDFmNildJiZfMHg1YjMwZTBbJ19zb2NrZXQnXVtfMHgxZGMwMjgoMHgxZjYpXSgpLF8weDNmYmI0NyhfMHg1YjMwZTApO30sXzB4NWIzMGUwW18weDc3Njk5KDB4MWI2KV09KCk9Pnt2YXIgXzB4NDMyM2JiPV8weDc3Njk5O3RoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MCx0aGlzWydfZGlzcG9zZVdlYnNvY2tldCddKF8weDViMzBlMCksdGhpc1tfMHg0MzIzYmIoMHgxNzApXSgpO30sXzB4NWIzMGUwW18weDc3Njk5KDB4MTU2KV09XzB4Mzg2ODk1PT57dmFyIF8weDQ0NzczNz1fMHg3NzY5OTt0cnl7XzB4Mzg2ODk1JiZfMHgzODY4OTVbXzB4NDQ3NzM3KDB4MjMzKV0mJnRoaXNbXzB4NDQ3NzM3KDB4MWU0KV0mJkpTT05bXzB4NDQ3NzM3KDB4MTYzKV0oXzB4Mzg2ODk1W18weDQ0NzczNygweDIzMyldKVtfMHg0NDc3MzcoMHgxY2QpXT09PV8weDQ0NzczNygweDIyYikmJnRoaXNbXzB4NDQ3NzM3KDB4MWE1KV1bJ2xvY2F0aW9uJ11bXzB4NDQ3NzM3KDB4MjJiKV0oKTt9Y2F0Y2h7fX07fSlbXzB4MmQwZDVhKDB4MTllKV0oXzB4NDdiZDg5PT4odGhpc1tfMHgyZDBkNWEoMHgyMGUpXT0hMHgwLHRoaXNbXzB4MmQwZDVhKDB4MTgzKV09ITB4MSx0aGlzW18weDJkMGQ1YSgweDFkYyldPSEweDEsdGhpc1tfMHgyZDBkNWEoMHgxYmQpXT0hMHgwLHRoaXNbXzB4MmQwZDVhKDB4MTg0KV09MHgwLF8weDQ3YmQ4OSkpW18weDJkMGQ1YSgweDE3ZSldKF8weDIxOTg5Yz0+KHRoaXNbXzB4MmQwZDVhKDB4MjBlKV09ITB4MSx0aGlzW18weDJkMGQ1YSgweDE4MyldPSEweDEsY29uc29sZVtfMHgyZDBkNWEoMHgyMmQpXSgnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnK3RoaXNbJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJ10pLF8weDVkOTkzNihuZXcgRXJyb3IoXzB4MmQwZDVhKDB4MWQ1KSsoXzB4MjE5ODljJiZfMHgyMTk4OWNbXzB4MmQwZDVhKDB4MjAwKV0pKSkpKTt9KSk7fVsnX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHgxMjY2ZTkpe3ZhciBfMHg0YzYyOTU9XzB4MjlkNTk2O3RoaXNbXzB4NGM2Mjk1KDB4MjBlKV09ITB4MSx0aGlzW18weDRjNjI5NSgweDE4MyldPSEweDE7dHJ5e18weDEyNjZlOVtfMHg0YzYyOTUoMHgxYjYpXT1udWxsLF8weDEyNjZlOVtfMHg0YzYyOTUoMHgxOWEpXT1udWxsLF8weDEyNjZlOVsnb25vcGVuJ109bnVsbDt9Y2F0Y2h7fXRyeXtfMHgxMjY2ZTlbXzB4NGM2Mjk1KDB4MTc3KV08MHgyJiZfMHgxMjY2ZTlbXzB4NGM2Mjk1KDB4MWE2KV0oKTt9Y2F0Y2h7fX1bXzB4MjlkNTk2KDB4MTcwKV0oKXt2YXIgXzB4YjU2YTZlPV8weDI5ZDU5NjtjbGVhclRpbWVvdXQodGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXSksISh0aGlzW18weGI1NmE2ZSgweDE4NCldPj10aGlzWydfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCddKSYmKHRoaXNbXzB4YjU2YTZlKDB4MWUyKV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHg0MGU4YmM9XzB4YjU2YTZlO3RoaXNbXzB4NDBlOGJjKDB4MjBlKV18fHRoaXNbXzB4NDBlOGJjKDB4MTgzKV18fCh0aGlzW18weDQwZThiYygweDE4NyldKCksdGhpc1snX3dzJ10/LltfMHg0MGU4YmMoMHgxN2UpXSgoKT0+dGhpc1tfMHg0MGU4YmMoMHgxNzApXSgpKSk7fSwweDFmNCksdGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXVsndW5yZWYnXSYmdGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXVtfMHhiNTZhNmUoMHgxZjYpXSgpKTt9YXN5bmNbXzB4MjlkNTk2KDB4MjEyKV0oXzB4MzNiMDE0KXt2YXIgXzB4MTQwNTlhPV8weDI5ZDU5Njt0cnl7aWYoIXRoaXNbXzB4MTQwNTlhKDB4MWJkKV0pcmV0dXJuO3RoaXNbXzB4MTQwNTlhKDB4MWRjKV0mJnRoaXNbJ19jb25uZWN0VG9Ib3N0Tm93J10oKSwoYXdhaXQgdGhpc1tfMHgxNDA1OWEoMHgxNmEpXSlbXzB4MTQwNTlhKDB4MjEyKV0oSlNPTlsnc3RyaW5naWZ5J10oXzB4MzNiMDE0KSk7fWNhdGNoKF8weDUxNWNmMSl7Y29uc29sZVtfMHgxNDA1OWEoMHgyMmQpXSh0aGlzW18weDE0MDU5YSgweDE5MCldKyc6XFxcXHgyMCcrKF8weDUxNWNmMSYmXzB4NTE1Y2YxW18weDE0MDU5YSgweDIwMCldKSksdGhpc1tfMHgxNDA1OWEoMHgxYmQpXT0hMHgxLHRoaXNbXzB4MTQwNTlhKDB4MTcwKV0oKTt9fX07ZnVuY3Rpb24gXzB4NTU1Nigpe3ZhciBfMHg1NWJkMGY9WydzcGxpdCcsJ19jb25uZWN0VG9Ib3N0Tm93JywndGltZVN0YW1wJywnMS4wLjAnLCdleHBJZCcsJ3Vuc2hpZnQnLCdjYWxsJywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnaXNBcnJheScsJzE2OTczNzQ2NzI0OTcnLCdfc2VuZEVycm9yTWVzc2FnZScsJ0hUTUxBbGxDb2xsZWN0aW9uJywnX3BfbGVuZ3RoJywnaGl0cycsJ29iamVjdCcsJ25hbWUnLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnY29uc29sZScsJ19pc1ByaW1pdGl2ZVR5cGUnLCdjYXBwZWRFbGVtZW50cycsJ29uZXJyb3InLCdfYWRkaXRpb25hbE1ldGFkYXRhJywncmVwbGFjZScsJ2F1dG9FeHBhbmRMaW1pdCcsJ3RoZW4nLCd1bmtub3duJywnc3ltYm9sJywncG9wJywnX2RhdGVUb1N0cmluZycsJ3B1c2gnLCdub3cnLCdnbG9iYWwnLCdjbG9zZScsJ2dldHRlcicsJ190eXBlJywnZGF0ZScsJ19wXycsJ2hydGltZScsJ2NhcHBlZFByb3BzJywnZm9yRWFjaCcsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywnY29uc3RydWN0b3InLCdnZXRQcm90b3R5cGVPZicsJ3RpbWVFbmQnLCdfc29ydFByb3BzJywnX2FkZFByb3BlcnR5JywnbmVnYXRpdmVaZXJvJywnb25jbG9zZScsJ19jYXBJZlN0cmluZycsJ2pvaW4nLCdyZXNvbHZlR2V0dGVycycsJ2xlbmd0aCcsJ3ZlcnNpb25zJywnMTI3LjAuMC4xJywnX2FsbG93ZWRUb1NlbmQnLCd0b1N0cmluZycsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywncGF0aCcsJzEwYmROanhTJywnW29iamVjdFxcXFx4MjBEYXRlXScsJ2NvdmVyYWdlJywncm9vdF9leHBfaWQnLCdfZGlzcG9zZVdlYnNvY2tldCcsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdpbmNsdWRlcycsJzExNjQyMjZOR21sbFonLCdcXFxceDIwYnJvd3NlcicsJ3RvdGFsU3RyTGVuZ3RoJywnX2hhc1NldE9uSXRzUGF0aCcsJ2FzdHJvJywnbWV0aG9kJywnJywncG9zaXRpdmVJbmZpbml0eScsJ21hdGNoJywnX2FkZE9iamVjdFByb3BlcnR5JywnbG9jYXRpb24nLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCdhdXRvRXhwYW5kJywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdDpcXFxceDIwJywnc29ydFByb3BzJywndGltZScsJ3NldCcsJ2dldE93blByb3BlcnR5TmFtZXMnLCdfYWRkRnVuY3Rpb25zTm9kZScsJ2RlZmF1bHQnLCdfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCcsJ3Byb3BzJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJ25leHQuanMnLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCd2YWx1ZScsJ19yZWNvbm5lY3RUaW1lb3V0JywncGVyZl9ob29rcycsJ19pbkJyb3dzZXInLCdfaXNOZWdhdGl2ZVplcm8nLCdzdWJzdHInLCdwcm9jZXNzJywnX3F1b3RlZFJlZ0V4cCcsJ3BvcnQnLCdfcHJvcGVydHlOYW1lJywnZW52JywnYWxsU3RyTGVuZ3RoJywnW29iamVjdFxcXFx4MjBBcnJheV0nLCdub2RlJywnX1N5bWJvbCcsJ3RvTG93ZXJDYXNlJywnbG9nJywndXJsJywnbm9GdW5jdGlvbnMnLCdzdHJMZW5ndGgnLCcxMzQ3NDV0WHB3WXAnLCd1bnJlZicsJ3N0cmluZycsJ3NldHRlcicsJ3R5cGUnLCdjdXJyZW50JywnZ2V0JywnMTM1TEdwUkFvJywnX0hUTUxBbGxDb2xsZWN0aW9uJywnc29ydCcsJ19zZXROb2RlTGFiZWwnLCdtZXNzYWdlJywnX3NldE5vZGVFeHByZXNzaW9uUGF0aCcsJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnLCdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0JywnX3NldE5vZGVJZCcsJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ3VuZGVmaW5lZCcsJ19jbGVhbk5vZGUnLCdzbGljZScsJ05FR0FUSVZFX0lORklOSVRZJywncm9vdF9leHAnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ0Jvb2xlYW4nLCczMzg4OTZmdG1JdEwnLCdfY29ubmVjdGVkJywnX1dlYlNvY2tldENsYXNzJywnQnVmZmVyJywnY29uY2F0Jywnc2VuZCcsJ051bWJlcicsJzpsb2dQb2ludElkOicsJ2NyZWF0ZScsJ3N0YWNrVHJhY2VMaW1pdCcsXFxcImM6XFxcXFxcXFxVc2Vyc1xcXFxcXFxcVVNFUlxcXFxcXFxcLnZzY29kZVxcXFxcXFxcZXh0ZW5zaW9uc1xcXFxcXFxcd2FsbGFieWpzLmNvbnNvbGUtbmluamEtMS4wLjIzMlxcXFxcXFxcbm9kZV9tb2R1bGVzXFxcIiwnZWxlbWVudHMnLCdudXh0Jywnd2VicGFjaycsJ19XZWJTb2NrZXQnLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdmdW5jdGlvbicsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdbb2JqZWN0XFxcXHgyMFNldF0nLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywncGVyZm9ybWFuY2UnLCdcXFxceDIwc2VydmVyJywnZWRnZScsJ3ZhbHVlT2YnLCdub2RlTW9kdWxlcycsJ19zb2NrZXQnLCdTZXQnLCdlcnJvcicsJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCcsJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJywncmVsb2FkJywnX3JlZ0V4cFRvU3RyaW5nJywnd2FybicsJ29ub3BlbicsJ05FWFRfUlVOVElNRScsJ2FycmF5JywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCcyNTYwT2xGcnFlJywnZGF0YScsJ1tvYmplY3RcXFxceDIwQmlnSW50XScsJ3BhdGhUb0ZpbGVVUkwnLCdfaXNBcnJheScsJycsJ2xldmVsJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdyZWR1Y2VMaW1pdHMnLCdfcHJvcGVydHknLCdjYXBwZWQnLCdpbmRleCcsJ2Jvb2xlYW4nLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywnX2lzVW5kZWZpbmVkJywnUE9TSVRJVkVfSU5GSU5JVFknLCd0ZXN0Jywnb25tZXNzYWdlJywnd3MvaW5kZXguanMnLCdfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZScsJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJ2dldFdlYlNvY2tldENsYXNzJywnbmFuJywndHJhY2UnLCdFcnJvcicsJ3N0YWNrJywnY291bnQnLCdwYXJlbnQnLCc4MDM2MDB1ckpOV0knLCdwYXJzZScsJ2RvY2tlcml6ZWRBcHAnLCdNYXAnLCdudWxsJywnNDhVdFJXVnYnLCdfbnVtYmVyUmVnRXhwJywnNjA5OTInLCdfd3MnLCdfaGFzTWFwT25JdHNQYXRoJywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0JywnV2ViU29ja2V0JywnX2lzTWFwJywnaG9zdG5hbWUnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ2JpZ2ludCcsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCdob3N0JywnbnVtYmVyJywnX29iamVjdFRvU3RyaW5nJywnX2FkZExvYWROb2RlJywncmVhZHlTdGF0ZScsJzE1NzhyZ2NtWHYnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ19pbk5leHRFZGdlJywnZGVwdGgnLCdfdW5kZWZpbmVkJywnU3RyaW5nJywnY2F0Y2gnLCdkaXNhYmxlZExvZycsJ3Byb3RvdHlwZScsJ3NlcmlhbGl6ZScsJzMwNTAwMTlKQ2tib2MnLCdfY29ubmVjdGluZycsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnX2NvbnNvbGVfbmluamEnXTtfMHg1NTU2PWZ1bmN0aW9uKCl7cmV0dXJuIF8weDU1YmQwZjt9O3JldHVybiBfMHg1NTU2KCk7fWZ1bmN0aW9uIGIoXzB4M2Y2Y2ZiLF8weDRjMGMxYixfMHhlMTQ0Y2YsXzB4Mzc3OGI1LF8weDIzMjEwNyxfMHg2ZWNjNjUpe3ZhciBfMHgyYTE0NTk9XzB4MjlkNTk2O2xldCBfMHgxN2Y5MGY9XzB4ZTE0NGNmW18weDJhMTQ1OSgweDE4NildKCcsJylbJ21hcCddKF8weGU1MTZlNT0+e3ZhciBfMHgyN2Y4ZTg9XzB4MmExNDU5O3RyeXtfMHgzZjZjZmJbXzB4MjdmOGU4KDB4MjFlKV18fCgoXzB4MjMyMTA3PT09XzB4MjdmOGU4KDB4MWRmKXx8XzB4MjMyMTA3PT09J3JlbWl4J3x8XzB4MjMyMTA3PT09XzB4MjdmOGU4KDB4MWNjKSkmJihfMHgyMzIxMDcrPSFfMHgzZjZjZmJbJ3Byb2Nlc3MnXT8uW18weDI3ZjhlOCgweDFiYildPy5bXzB4MjdmOGU4KDB4MWVlKV0mJl8weDNmNmNmYltfMHgyN2Y4ZTgoMHgxZTcpXT8uW18weDI3ZjhlOCgweDFlYildPy5bXzB4MjdmOGU4KDB4MjJmKV0hPT0nZWRnZSc/XzB4MjdmOGU4KDB4MWM5KTpfMHgyN2Y4ZTgoMHgyMjIpKSxfMHgzZjZjZmJbXzB4MjdmOGU4KDB4MjFlKV09eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDIzMjEwN30pO2xldCBfMHgzNDM5ZjU9bmV3IFgoXzB4M2Y2Y2ZiLF8weDRjMGMxYixfMHhlNTE2ZTUsXzB4Mzc3OGI1LF8weDZlY2M2NSk7cmV0dXJuIF8weDM0MzlmNVsnc2VuZCddWydiaW5kJ10oXzB4MzQzOWY1KTt9Y2F0Y2goXzB4NDFkYTlmKXtyZXR1cm4gY29uc29sZVtfMHgyN2Y4ZTgoMHgyMmQpXShfMHgyN2Y4ZTgoMHgyM2YpLF8weDQxZGE5ZiYmXzB4NDFkYTlmW18weDI3ZjhlOCgweDIwMCldKSwoKT0+e307fX0pO3JldHVybiBfMHg1ZTNiOGI9Pl8weDE3ZjkwZlsnZm9yRWFjaCddKF8weDQzMTQ4Yj0+XzB4NDMxNDhiKF8weDVlM2I4YikpO31mdW5jdGlvbiBfMHg0MWM5KF8weDE2ZThiNyxfMHg0ODI5MzApe3ZhciBfMHg1NTU2N2E9XzB4NTU1NigpO3JldHVybiBfMHg0MWM5PWZ1bmN0aW9uKF8weDQxYzkzZCxfMHgyOWMyM2Qpe18weDQxYzkzZD1fMHg0MWM5M2QtMHgxNTM7dmFyIF8weDMxM2MwZD1fMHg1NTU2N2FbXzB4NDFjOTNkXTtyZXR1cm4gXzB4MzEzYzBkO30sXzB4NDFjOShfMHgxNmU4YjcsXzB4NDgyOTMwKTt9ZnVuY3Rpb24gVyhfMHgxNDMyMGIpe3ZhciBfMHgzZTMwYTE9XzB4MjlkNTk2O2xldCBfMHgxZjQ0ZDc9ZnVuY3Rpb24oXzB4MmJlYzIwLF8weDEyNzA5ZCl7cmV0dXJuIF8weDEyNzA5ZC1fMHgyYmVjMjA7fSxfMHg0YWQ1OTk7aWYoXzB4MTQzMjBiW18weDNlMzBhMSgweDIyMSldKV8weDRhZDU5OT1mdW5jdGlvbigpe3ZhciBfMHhlODFhNGQ9XzB4M2UzMGExO3JldHVybiBfMHgxNDMyMGJbXzB4ZTgxYTRkKDB4MjIxKV1bXzB4ZTgxYTRkKDB4MWE0KV0oKTt9O2Vsc2V7aWYoXzB4MTQzMjBiW18weDNlMzBhMSgweDFlNyldJiZfMHgxNDMyMGJbXzB4M2UzMGExKDB4MWU3KV1bJ2hydGltZSddJiZfMHgxNDMyMGJbXzB4M2UzMGExKDB4MWU3KV0/LltfMHgzZTMwYTEoMHgxZWIpXT8uW18weDNlMzBhMSgweDIyZildIT09XzB4M2UzMGExKDB4MjIzKSlfMHg0YWQ1OTk9ZnVuY3Rpb24oKXt2YXIgXzB4MTVhMmViPV8weDNlMzBhMTtyZXR1cm4gXzB4MTQzMjBiW18weDE1YTJlYigweDFlNyldW18weDE1YTJlYigweDFhYildKCk7fSxfMHgxZjQ0ZDc9ZnVuY3Rpb24oXzB4MTU2Zjk1LF8weDNiYzA5Myl7cmV0dXJuIDB4M2U4KihfMHgzYmMwOTNbMHgwXS1fMHgxNTZmOTVbMHgwXSkrKF8weDNiYzA5M1sweDFdLV8weDE1NmY5NVsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHgxMTI3OGZ9PXJlcXVpcmUoXzB4M2UzMGExKDB4MWUzKSk7XzB4NGFkNTk5PWZ1bmN0aW9uKCl7dmFyIF8weDUyYjVkNj1fMHgzZTMwYTE7cmV0dXJuIF8weDExMjc4ZltfMHg1MmI1ZDYoMHgxYTQpXSgpO307fWNhdGNoe18weDRhZDU5OT1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weDFmNDRkNywndGltZVN0YW1wJzpfMHg0YWQ1OTksJ25vdyc6KCk9PkRhdGVbJ25vdyddKCl9O31mdW5jdGlvbiBKKF8weDU1NDdmZSxfMHg1NzIyZTYsXzB4M2FmNzkxKXt2YXIgXzB4MjNmYmY0PV8weDI5ZDU5NjtpZihfMHg1NTQ3ZmVbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddIT09dm9pZCAweDApcmV0dXJuIF8weDU1NDdmZVtfMHgyM2ZiZjQoMHgxNmMpXTtsZXQgXzB4NDAzMmM0PV8weDU1NDdmZVsncHJvY2VzcyddPy5bXzB4MjNmYmY0KDB4MWJiKV0/LltfMHgyM2ZiZjQoMHgxZWUpXXx8XzB4NTU0N2ZlW18weDIzZmJmNCgweDFlNyldPy5bJ2VudiddPy5bXzB4MjNmYmY0KDB4MjJmKV09PT1fMHgyM2ZiZjQoMHgyMjMpO3JldHVybiBfMHg0MDMyYzQmJl8weDNhZjc5MT09PV8weDIzZmJmNCgweDIxOSk/XzB4NTU0N2ZlW18weDIzZmJmNCgweDE2YyldPSEweDE6XzB4NTU0N2ZlW18weDIzZmJmNCgweDE2YyldPV8weDQwMzJjNHx8IV8weDU3MjJlNnx8XzB4NTU0N2ZlW18weDIzZmJmNCgweDFkMildPy5bJ2hvc3RuYW1lJ10mJl8weDU3MjJlNltfMHgyM2ZiZjQoMHgxYzcpXShfMHg1NTQ3ZmVbJ2xvY2F0aW9uJ11bXzB4MjNmYmY0KDB4MTZmKV0pLF8weDU1NDdmZVtfMHgyM2ZiZjQoMHgxNmMpXTt9ZnVuY3Rpb24gWShfMHg0ODVkM2EsXzB4NDE0NTdkLF8weGQ0OTRhMyxfMHgyNGNjOWYpe3ZhciBfMHg0OGZmNGY9XzB4MjlkNTk2O18weDQ4NWQzYT1fMHg0ODVkM2EsXzB4NDE0NTdkPV8weDQxNDU3ZCxfMHhkNDk0YTM9XzB4ZDQ5NGEzLF8weDI0Y2M5Zj1fMHgyNGNjOWY7bGV0IF8weDE1NjJiOT1XKF8weDQ4NWQzYSksXzB4MjRmNGM0PV8weDE1NjJiOVsnZWxhcHNlZCddLF8weDJjNmZkOD1fMHgxNTYyYjlbJ3RpbWVTdGFtcCddO2NsYXNzIF8weDFjNGQyOHtjb25zdHJ1Y3Rvcigpe3ZhciBfMHg0ZDBmYjg9XzB4NDFjOTt0aGlzWydfa2V5U3RyUmVnRXhwJ109L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzW18weDRkMGZiOCgweDE2OCldPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1tfMHg0ZDBmYjgoMHgxZTgpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzW18weDRkMGZiOCgweDE3YyldPV8weDQ4NWQzYVtfMHg0ZDBmYjgoMHgyMDYpXSx0aGlzW18weDRkMGZiOCgweDFmZCldPV8weDQ4NWQzYVtfMHg0ZDBmYjgoMHgxOTEpXSx0aGlzW18weDRkMGZiOCgweDE1OSldPU9iamVjdFsnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10sdGhpc1tfMHg0ZDBmYjgoMHgxYmYpXT1PYmplY3RbXzB4NGQwZmI4KDB4MWQ5KV0sdGhpc1tfMHg0ZDBmYjgoMHgxZWYpXT1fMHg0ODVkM2FbJ1N5bWJvbCddLHRoaXNbXzB4NGQwZmI4KDB4MjJjKV09UmVnRXhwW18weDRkMGZiOCgweDE4MCldW18weDRkMGZiOCgweDFiZSldLHRoaXNbJ19kYXRlVG9TdHJpbmcnXT1EYXRlW18weDRkMGZiOCgweDE4MCldWyd0b1N0cmluZyddO31bJ3NlcmlhbGl6ZSddKF8weDEzYjYyYSxfMHg0ZDU2ODMsXzB4M2RmYzhiLF8weDE2ODY1NSl7dmFyIF8weDFiZjk1ZT1fMHg0MWM5LF8weDIzZDRkMz10aGlzLF8weDVkMTYwZT1fMHgzZGZjOGJbXzB4MWJmOTVlKDB4MWQ0KV07ZnVuY3Rpb24gXzB4MjMzMmIzKF8weDE2ODFjOCxfMHg1NzEyZTcsXzB4M2VmYzI3KXt2YXIgXzB4MWY0ZDI3PV8weDFiZjk1ZTtfMHg1NzEyZTdbXzB4MWY0ZDI3KDB4MWY5KV09XzB4MWY0ZDI3KDB4MTlmKSxfMHg1NzEyZTdbXzB4MWY0ZDI3KDB4MjI4KV09XzB4MTY4MWM4W18weDFmNGQyNygweDIwMCldLF8weDMwOThlNj1fMHgzZWZjMjdbXzB4MWY0ZDI3KDB4MWVlKV1bXzB4MWY0ZDI3KDB4MWZhKV0sXzB4M2VmYzI3W18weDFmNGQyNygweDFlZSldW18weDFmNGQyNygweDFmYSldPV8weDU3MTJlNyxfMHgyM2Q0ZDNbXzB4MWY0ZDI3KDB4MjAyKV0oXzB4NTcxMmU3LF8weDNlZmMyNyk7fXRyeXtfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MjM4KV0rKyxfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MWQ0KV0mJl8weDNkZmM4YltfMHgxYmY5NWUoMHgyMjApXVsncHVzaCddKF8weDRkNTY4Myk7dmFyIF8weDI0ZWRkZCxfMHg1MzA4YTMsXzB4NDRhYWM4LF8weDg1ZGQ0OSxfMHgxNjYwNzE9W10sXzB4NDE0NTIxPVtdLF8weDFlOWY4MyxfMHgzMTUyZTM9dGhpc1tfMHgxYmY5NWUoMHgxYTgpXShfMHg0ZDU2ODMpLF8weDRjN2QyYj1fMHgzMTUyZTM9PT1fMHgxYmY5NWUoMHgyMzApLF8weDMwY2I2Zj0hMHgxLF8weDI4NjIyMD1fMHgzMTUyZTM9PT1fMHgxYmY5NWUoMHgyMWQpLF8weDRjNjg2ZT10aGlzW18weDFiZjk1ZSgweDE5OCldKF8weDMxNTJlMyksXzB4NDU1NTcwPXRoaXNbXzB4MWJmOTVlKDB4MTVhKV0oXzB4MzE1MmUzKSxfMHg0ZWQxOWI9XzB4NGM2ODZlfHxfMHg0NTU1NzAsXzB4MzIwYzM0PXt9LF8weDJmMTZlYz0weDAsXzB4NTA5YmQ5PSEweDEsXzB4MzA5OGU2LF8weDFiNTQ4OT0vXigoWzEtOV17MX1bMC05XSopfDApJC87aWYoXzB4M2RmYzhiWydkZXB0aCddKXtpZihfMHg0YzdkMmIpe2lmKF8weDUzMDhhMz1fMHg0ZDU2ODNbXzB4MWJmOTVlKDB4MWJhKV0sXzB4NTMwOGEzPl8weDNkZmM4YltfMHgxYmY5NWUoMHgyMTgpXSl7Zm9yKF8weDQ0YWFjOD0weDAsXzB4ODVkZDQ5PV8weDNkZmM4YltfMHgxYmY5NWUoMHgyMTgpXSxfMHgyNGVkZGQ9XzB4NDRhYWM4O18weDI0ZWRkZDxfMHg4NWRkNDk7XzB4MjRlZGRkKyspXzB4NDE0NTIxW18weDFiZjk1ZSgweDFhMyldKF8weDIzZDRkM1tfMHgxYmY5NWUoMHgxYjQpXShfMHgxNjYwNzEsXzB4NGQ1NjgzLF8weDMxNTJlMyxfMHgyNGVkZGQsXzB4M2RmYzhiKSk7XzB4MTNiNjJhW18weDFiZjk1ZSgweDE5OSldPSEweDA7fWVsc2V7Zm9yKF8weDQ0YWFjOD0weDAsXzB4ODVkZDQ5PV8weDUzMDhhMyxfMHgyNGVkZGQ9XzB4NDRhYWM4O18weDI0ZWRkZDxfMHg4NWRkNDk7XzB4MjRlZGRkKyspXzB4NDE0NTIxW18weDFiZjk1ZSgweDFhMyldKF8weDIzZDRkM1tfMHgxYmY5NWUoMHgxYjQpXShfMHgxNjYwNzEsXzB4NGQ1NjgzLF8weDMxNTJlMyxfMHgyNGVkZGQsXzB4M2RmYzhiKSk7fV8weDNkZmM4YlsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSs9XzB4NDE0NTIxW18weDFiZjk1ZSgweDFiYSldO31pZighKF8weDMxNTJlMz09PSdudWxsJ3x8XzB4MzE1MmUzPT09J3VuZGVmaW5lZCcpJiYhXzB4NGM2ODZlJiZfMHgzMTUyZTMhPT1fMHgxYmY5NWUoMHgxN2QpJiZfMHgzMTUyZTMhPT1fMHgxYmY5NWUoMHgyMTApJiZfMHgzMTUyZTMhPT1fMHgxYmY5NWUoMHgxNzEpKXt2YXIgXzB4MzRmOTdjPV8weDE2ODY1NVtfMHgxYmY5NWUoMHgxZGQpXXx8XzB4M2RmYzhiW18weDFiZjk1ZSgweDFkZCldO2lmKHRoaXNbJ19pc1NldCddKF8weDRkNTY4Myk/KF8weDI0ZWRkZD0weDAsXzB4NGQ1NjgzW18weDFiZjk1ZSgweDFhZCldKGZ1bmN0aW9uKF8weDEzMzA3YSl7dmFyIF8weDgxNTkzYT1fMHgxYmY5NWU7aWYoXzB4MmYxNmVjKyssXzB4M2RmYzhiW18weDgxNTkzYSgweDIzOSldKyssXzB4MmYxNmVjPl8weDM0Zjk3Yyl7XzB4NTA5YmQ5PSEweDA7cmV0dXJuO31pZighXzB4M2RmYzhiWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ10mJl8weDNkZmM4YltfMHg4MTU5M2EoMHgxZDQpXSYmXzB4M2RmYzhiW18weDgxNTkzYSgweDIzOSldPl8weDNkZmM4YltfMHg4MTU5M2EoMHgxOWQpXSl7XzB4NTA5YmQ5PSEweDA7cmV0dXJuO31fMHg0MTQ1MjFbXzB4ODE1OTNhKDB4MWEzKV0oXzB4MjNkNGQzW18weDgxNTkzYSgweDFiNCldKF8weDE2NjA3MSxfMHg0ZDU2ODMsXzB4ODE1OTNhKDB4MjI3KSxfMHgyNGVkZGQrKyxfMHgzZGZjOGIsZnVuY3Rpb24oXzB4NWQ2NWEwKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4NWQ2NWEwO307fShfMHgxMzMwN2EpKSk7fSkpOnRoaXNbXzB4MWJmOTVlKDB4MTZlKV0oXzB4NGQ1NjgzKSYmXzB4NGQ1NjgzW18weDFiZjk1ZSgweDFhZCldKGZ1bmN0aW9uKF8weDI5YjkxOSxfMHgzNTM0ODMpe3ZhciBfMHgxNTZiMWQ9XzB4MWJmOTVlO2lmKF8weDJmMTZlYysrLF8weDNkZmM4YltfMHgxNTZiMWQoMHgyMzkpXSsrLF8weDJmMTZlYz5fMHgzNGY5N2Mpe18weDUwOWJkOT0hMHgwO3JldHVybjt9aWYoIV8weDNkZmM4YltfMHgxNTZiMWQoMHgxZGUpXSYmXzB4M2RmYzhiW18weDE1NmIxZCgweDFkNCldJiZfMHgzZGZjOGJbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4M2RmYzhiW18weDE1NmIxZCgweDE5ZCldKXtfMHg1MDliZDk9ITB4MDtyZXR1cm47fXZhciBfMHg1OTNjOWI9XzB4MzUzNDgzWyd0b1N0cmluZyddKCk7XzB4NTkzYzliW18weDE1NmIxZCgweDFiYSldPjB4NjQmJihfMHg1OTNjOWI9XzB4NTkzYzliW18weDE1NmIxZCgweDIwOCldKDB4MCwweDY0KSsnLi4uJyksXzB4NDE0NTIxW18weDE1NmIxZCgweDFhMyldKF8weDIzZDRkM1snX2FkZFByb3BlcnR5J10oXzB4MTY2MDcxLF8weDRkNTY4MywnTWFwJyxfMHg1OTNjOWIsXzB4M2RmYzhiLGZ1bmN0aW9uKF8weDMyNGY1Nil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDMyNGY1Njt9O30oXzB4MjliOTE5KSkpO30pLCFfMHgzMGNiNmYpe3RyeXtmb3IoXzB4MWU5ZjgzIGluIF8weDRkNTY4MylpZighKF8weDRjN2QyYiYmXzB4MWI1NDg5W18weDFiZjk1ZSgweDE1NSldKF8weDFlOWY4MykpJiYhdGhpc1tfMHgxYmY5NWUoMHgxNzkpXShfMHg0ZDU2ODMsXzB4MWU5ZjgzLF8weDNkZmM4Yikpe2lmKF8weDJmMTZlYysrLF8weDNkZmM4YlsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDJmMTZlYz5fMHgzNGY5N2Mpe18weDUwOWJkOT0hMHgwO2JyZWFrO31pZighXzB4M2RmYzhiWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ10mJl8weDNkZmM4YltfMHgxYmY5NWUoMHgxZDQpXSYmXzB4M2RmYzhiWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDNkZmM4YltfMHgxYmY5NWUoMHgxOWQpXSl7XzB4NTA5YmQ5PSEweDA7YnJlYWs7fV8weDQxNDUyMVtfMHgxYmY5NWUoMHgxYTMpXShfMHgyM2Q0ZDNbXzB4MWJmOTVlKDB4MWQxKV0oXzB4MTY2MDcxLF8weDMyMGMzNCxfMHg0ZDU2ODMsXzB4MzE1MmUzLF8weDFlOWY4MyxfMHgzZGZjOGIpKTt9fWNhdGNoe31pZihfMHgzMjBjMzRbXzB4MWJmOTVlKDB4MTkyKV09ITB4MCxfMHgyODYyMjAmJihfMHgzMjBjMzRbJ19wX25hbWUnXT0hMHgwKSwhXzB4NTA5YmQ5KXt2YXIgXzB4MTA5NTViPVtdW18weDFiZjk1ZSgweDIxMSldKHRoaXNbJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJ10oXzB4NGQ1NjgzKSlbXzB4MWJmOTVlKDB4MjExKV0odGhpc1tfMHgxYmY5NWUoMHgxYzYpXShfMHg0ZDU2ODMpKTtmb3IoXzB4MjRlZGRkPTB4MCxfMHg1MzA4YTM9XzB4MTA5NTViW18weDFiZjk1ZSgweDFiYSldO18weDI0ZWRkZDxfMHg1MzA4YTM7XzB4MjRlZGRkKyspaWYoXzB4MWU5ZjgzPV8weDEwOTU1YltfMHgyNGVkZGRdLCEoXzB4NGM3ZDJiJiZfMHgxYjU0ODlbXzB4MWJmOTVlKDB4MTU1KV0oXzB4MWU5ZjgzW18weDFiZjk1ZSgweDFiZSldKCkpKSYmIXRoaXNbXzB4MWJmOTVlKDB4MTc5KV0oXzB4NGQ1NjgzLF8weDFlOWY4MyxfMHgzZGZjOGIpJiYhXzB4MzIwYzM0W18weDFiZjk1ZSgweDFhYSkrXzB4MWU5ZjgzWyd0b1N0cmluZyddKCldKXtpZihfMHgyZjE2ZWMrKyxfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MjM5KV0rKyxfMHgyZjE2ZWM+XzB4MzRmOTdjKXtfMHg1MDliZDk9ITB4MDticmVhazt9aWYoIV8weDNkZmM4YltfMHgxYmY5NWUoMHgxZGUpXSYmXzB4M2RmYzhiW18weDFiZjk1ZSgweDFkNCldJiZfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MjM5KV0+XzB4M2RmYzhiW18weDFiZjk1ZSgweDE5ZCldKXtfMHg1MDliZDk9ITB4MDticmVhazt9XzB4NDE0NTIxWydwdXNoJ10oXzB4MjNkNGQzW18weDFiZjk1ZSgweDFkMSldKF8weDE2NjA3MSxfMHgzMjBjMzQsXzB4NGQ1NjgzLF8weDMxNTJlMyxfMHgxZTlmODMsXzB4M2RmYzhiKSk7fX19fX1pZihfMHgxM2I2MmFbXzB4MWJmOTVlKDB4MWY5KV09XzB4MzE1MmUzLF8weDRlZDE5Yj8oXzB4MTNiNjJhW18weDFiZjk1ZSgweDFlMSldPV8weDRkNTY4M1sndmFsdWVPZiddKCksdGhpc1tfMHgxYmY5NWUoMHgxYjcpXShfMHgzMTUyZTMsXzB4MTNiNjJhLF8weDNkZmM4YixfMHgxNjg2NTUpKTpfMHgzMTUyZTM9PT1fMHgxYmY5NWUoMHgxYTkpP18weDEzYjYyYVtfMHgxYmY5NWUoMHgxZTEpXT10aGlzW18weDFiZjk1ZSgweDFhMildW18weDFiZjk1ZSgweDE4YyldKF8weDRkNTY4Myk6XzB4MzE1MmUzPT09J2JpZ2ludCc/XzB4MTNiNjJhW18weDFiZjk1ZSgweDFlMSldPV8weDRkNTY4M1sndG9TdHJpbmcnXSgpOl8weDMxNTJlMz09PSdSZWdFeHAnP18weDEzYjYyYVsndmFsdWUnXT10aGlzW18weDFiZjk1ZSgweDIyYyldW18weDFiZjk1ZSgweDE4YyldKF8weDRkNTY4Myk6XzB4MzE1MmUzPT09XzB4MWJmOTVlKDB4MWEwKSYmdGhpc1tfMHgxYmY5NWUoMHgxZWYpXT9fMHgxM2I2MmFbJ3ZhbHVlJ109dGhpc1tfMHgxYmY5NWUoMHgxZWYpXVtfMHgxYmY5NWUoMHgxODApXVtfMHgxYmY5NWUoMHgxYmUpXVtfMHgxYmY5NWUoMHgxOGMpXShfMHg0ZDU2ODMpOiFfMHgzZGZjOGJbJ2RlcHRoJ10mJiEoXzB4MzE1MmUzPT09XzB4MWJmOTVlKDB4MTY2KXx8XzB4MzE1MmUzPT09XzB4MWJmOTVlKDB4MjA2KSkmJihkZWxldGUgXzB4MTNiNjJhWyd2YWx1ZSddLF8weDEzYjYyYVtfMHgxYmY5NWUoMHgyM2MpXT0hMHgwKSxfMHg1MDliZDkmJihfMHgxM2I2MmFbXzB4MWJmOTVlKDB4MWFjKV09ITB4MCksXzB4MzA5OGU2PV8weDNkZmM4YltfMHgxYmY5NWUoMHgxZWUpXVtfMHgxYmY5NWUoMHgxZmEpXSxfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MWVlKV1bXzB4MWJmOTVlKDB4MWZhKV09XzB4MTNiNjJhLHRoaXNbXzB4MWJmOTVlKDB4MjAyKV0oXzB4MTNiNjJhLF8weDNkZmM4YiksXzB4NDE0NTIxWydsZW5ndGgnXSl7Zm9yKF8weDI0ZWRkZD0weDAsXzB4NTMwOGEzPV8weDQxNDUyMVtfMHgxYmY5NWUoMHgxYmEpXTtfMHgyNGVkZGQ8XzB4NTMwOGEzO18weDI0ZWRkZCsrKV8weDQxNDUyMVtfMHgyNGVkZGRdKF8weDI0ZWRkZCk7fV8weDE2NjA3MVtfMHgxYmY5NWUoMHgxYmEpXSYmKF8weDEzYjYyYVtfMHgxYmY5NWUoMHgxZGQpXT1fMHgxNjYwNzEpO31jYXRjaChfMHgyN2I0ZTIpe18weDIzMzJiMyhfMHgyN2I0ZTIsXzB4MTNiNjJhLF8weDNkZmM4Yik7fXJldHVybiB0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4NGQ1NjgzLF8weDEzYjYyYSksdGhpc1tfMHgxYmY5NWUoMHgxZDMpXShfMHgxM2I2MmEsXzB4M2RmYzhiKSxfMHgzZGZjOGJbJ25vZGUnXVsnY3VycmVudCddPV8weDMwOThlNixfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MjM4KV0tLSxfMHgzZGZjOGJbXzB4MWJmOTVlKDB4MWQ0KV09XzB4NWQxNjBlLF8weDNkZmM4YltfMHgxYmY5NWUoMHgxZDQpXSYmXzB4M2RmYzhiW18weDFiZjk1ZSgweDIyMCldW18weDFiZjk1ZSgweDFhMSldKCksXzB4MTNiNjJhO31bXzB4NDhmZjRmKDB4MWM2KV0oXzB4MTBlZWEwKXt2YXIgXzB4NGVhYjlkPV8weDQ4ZmY0ZjtyZXR1cm4gT2JqZWN0W18weDRlYWI5ZCgweDE4ZCldP09iamVjdFsnZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10oXzB4MTBlZWEwKTpbXTt9WydfaXNTZXQnXShfMHgyNjBhMTUpe3ZhciBfMHg0ZjY5MWE9XzB4NDhmZjRmO3JldHVybiEhKF8weDI2MGExNSYmXzB4NDg1ZDNhW18weDRmNjkxYSgweDIyNyldJiZ0aGlzW18weDRmNjkxYSgweDE3NSldKF8weDI2MGExNSk9PT1fMHg0ZjY5MWEoMHgyMWYpJiZfMHgyNjBhMTVbXzB4NGY2OTFhKDB4MWFkKV0pO31bJ19ibGFja2xpc3RlZFByb3BlcnR5J10oXzB4NDY1ZDA4LF8weDJkOTdjYyxfMHg1M2I5NzApe3ZhciBfMHgxZDNmZGI9XzB4NDhmZjRmO3JldHVybiBfMHg1M2I5NzBbXzB4MWQzZmRiKDB4MWYzKV0/dHlwZW9mIF8weDQ2NWQwOFtfMHgyZDk3Y2NdPT1fMHgxZDNmZGIoMHgyMWQpOiEweDE7fVtfMHg0OGZmNGYoMHgxYTgpXShfMHg1MzYyNDcpe3ZhciBfMHgyZGIxN2M9XzB4NDhmZjRmLF8weDViNmQyOT0nJztyZXR1cm4gXzB4NWI2ZDI5PXR5cGVvZiBfMHg1MzYyNDcsXzB4NWI2ZDI5PT09XzB4MmRiMTdjKDB4MTk0KT90aGlzW18weDJkYjE3YygweDE3NSldKF8weDUzNjI0Nyk9PT1fMHgyZGIxN2MoMHgxZWQpP18weDViNmQyOT1fMHgyZGIxN2MoMHgyMzApOnRoaXNbXzB4MmRiMTdjKDB4MTc1KV0oXzB4NTM2MjQ3KT09PV8weDJkYjE3YygweDFjMik/XzB4NWI2ZDI5PV8weDJkYjE3YygweDFhOSk6dGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4NTM2MjQ3KT09PV8weDJkYjE3YygweDIzNCk/XzB4NWI2ZDI5PSdiaWdpbnQnOl8weDUzNjI0Nz09PW51bGw/XzB4NWI2ZDI5PV8weDJkYjE3YygweDE2Nik6XzB4NTM2MjQ3W18weDJkYjE3YygweDFiMCldJiYoXzB4NWI2ZDI5PV8weDUzNjI0N1snY29uc3RydWN0b3InXVtfMHgyZGIxN2MoMHgxOTUpXXx8XzB4NWI2ZDI5KTpfMHg1YjZkMjk9PT0ndW5kZWZpbmVkJyYmdGhpc1tfMHgyZGIxN2MoMHgxZmQpXSYmXzB4NTM2MjQ3IGluc3RhbmNlb2YgdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ10mJihfMHg1YjZkMjk9XzB4MmRiMTdjKDB4MTkxKSksXzB4NWI2ZDI5O31bXzB4NDhmZjRmKDB4MTc1KV0oXzB4NGQ0YWM2KXt2YXIgXzB4MjJmZjgyPV8weDQ4ZmY0ZjtyZXR1cm4gT2JqZWN0W18weDIyZmY4MigweDE4MCldW18weDIyZmY4MigweDFiZSldW18weDIyZmY4MigweDE4YyldKF8weDRkNGFjNik7fVtfMHg0OGZmNGYoMHgxOTgpXShfMHgyYmUwNmQpe3ZhciBfMHgxZTI3NzA9XzB4NDhmZjRmO3JldHVybiBfMHgyYmUwNmQ9PT1fMHgxZTI3NzAoMHgyM2UpfHxfMHgyYmUwNmQ9PT1fMHgxZTI3NzAoMHgxZjcpfHxfMHgyYmUwNmQ9PT1fMHgxZTI3NzAoMHgxNzQpO31bJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJ10oXzB4MWY0YzE0KXt2YXIgXzB4MzY0ZTdiPV8weDQ4ZmY0ZjtyZXR1cm4gXzB4MWY0YzE0PT09XzB4MzY0ZTdiKDB4MjBjKXx8XzB4MWY0YzE0PT09J1N0cmluZyd8fF8weDFmNGMxND09PV8weDM2NGU3YigweDIxMyk7fVtfMHg0OGZmNGYoMHgxYjQpXShfMHhhZGIyYjcsXzB4M2E3YTVmLF8weDJhNmNlNixfMHgzZGQyN2UsXzB4MWMwNjIwLF8weDFiOGQ4MCl7dmFyIF8weDQwZDVkYj10aGlzO3JldHVybiBmdW5jdGlvbihfMHg1Nzc0MTEpe3ZhciBfMHg1ODNkZjM9XzB4NDFjOSxfMHgxYjVhZGU9XzB4MWMwNjIwW18weDU4M2RmMygweDFlZSldW18weDU4M2RmMygweDFmYSldLF8weDM5MjNkMz1fMHgxYzA2MjBbXzB4NTgzZGYzKDB4MWVlKV1bXzB4NTgzZGYzKDB4MjNkKV0sXzB4NzhhODgxPV8weDFjMDYyMFtfMHg1ODNkZjMoMHgxZWUpXVtfMHg1ODNkZjMoMHgxNjEpXTtfMHgxYzA2MjBbXzB4NTgzZGYzKDB4MWVlKV1bXzB4NTgzZGYzKDB4MTYxKV09XzB4MWI1YWRlLF8weDFjMDYyMFsnbm9kZSddW18weDU4M2RmMygweDIzZCldPXR5cGVvZiBfMHgzZGQyN2U9PV8weDU4M2RmMygweDE3NCk/XzB4M2RkMjdlOl8weDU3NzQxMSxfMHhhZGIyYjdbXzB4NTgzZGYzKDB4MWEzKV0oXzB4NDBkNWRiWydfcHJvcGVydHknXShfMHgzYTdhNWYsXzB4MmE2Y2U2LF8weDNkZDI3ZSxfMHgxYzA2MjAsXzB4MWI4ZDgwKSksXzB4MWMwNjIwW18weDU4M2RmMygweDFlZSldW18weDU4M2RmMygweDE2MSldPV8weDc4YTg4MSxfMHgxYzA2MjBbXzB4NTgzZGYzKDB4MWVlKV1bXzB4NTgzZGYzKDB4MjNkKV09XzB4MzkyM2QzO307fVsnX2FkZE9iamVjdFByb3BlcnR5J10oXzB4MmVhNDE3LF8weDRjNGVlNyxfMHgxYjY5MDgsXzB4NTIxMWFjLF8weDU1M2JhNixfMHg1YWExYWQsXzB4MTVjNzI5KXt2YXIgXzB4MTdiN2Y5PV8weDQ4ZmY0ZixfMHgxZDhiM2U9dGhpcztyZXR1cm4gXzB4NGM0ZWU3W18weDE3YjdmOSgweDFhYSkrXzB4NTUzYmE2W18weDE3YjdmOSgweDFiZSldKCldPSEweDAsZnVuY3Rpb24oXzB4MmUzODk1KXt2YXIgXzB4MTRhYjM1PV8weDE3YjdmOSxfMHg1OGM0ZDc9XzB4NWFhMWFkWydub2RlJ11bXzB4MTRhYjM1KDB4MWZhKV0sXzB4MjJmMThhPV8weDVhYTFhZFtfMHgxNGFiMzUoMHgxZWUpXVtfMHgxNGFiMzUoMHgyM2QpXSxfMHgyZjgyOGY9XzB4NWFhMWFkWydub2RlJ11bXzB4MTRhYjM1KDB4MTYxKV07XzB4NWFhMWFkW18weDE0YWIzNSgweDFlZSldW18weDE0YWIzNSgweDE2MSldPV8weDU4YzRkNyxfMHg1YWExYWRbXzB4MTRhYjM1KDB4MWVlKV1bXzB4MTRhYjM1KDB4MjNkKV09XzB4MmUzODk1LF8weDJlYTQxN1tfMHgxNGFiMzUoMHgxYTMpXShfMHgxZDhiM2VbJ19wcm9wZXJ0eSddKF8weDFiNjkwOCxfMHg1MjExYWMsXzB4NTUzYmE2LF8weDVhYTFhZCxfMHgxNWM3MjkpKSxfMHg1YWExYWRbJ25vZGUnXVsncGFyZW50J109XzB4MmY4MjhmLF8weDVhYTFhZFtfMHgxNGFiMzUoMHgxZWUpXVtfMHgxNGFiMzUoMHgyM2QpXT1fMHgyMmYxOGE7fTt9W18weDQ4ZmY0ZigweDIzYildKF8weDM2ZGU3YSxfMHgyNDQyMGUsXzB4MmFmOGU1LF8weDQ4ZmMwZixfMHg0YmJjZDUpe3ZhciBfMHg1NjlmNjI9XzB4NDhmZjRmLF8weDRhZTdmZD10aGlzO18weDRiYmNkNXx8KF8weDRiYmNkNT1mdW5jdGlvbihfMHgxNTEzY2UsXzB4NWNkMGVkKXtyZXR1cm4gXzB4MTUxM2NlW18weDVjZDBlZF07fSk7dmFyIF8weDNhNjZmZT1fMHgyYWY4ZTVbXzB4NTY5ZjYyKDB4MWJlKV0oKSxfMHgyMmM1ZDI9XzB4NDhmYzBmW18weDU2OWY2MigweDFlMCldfHx7fSxfMHg1MTEwZjU9XzB4NDhmYzBmWydkZXB0aCddLF8weDJiZjhhOD1fMHg0OGZjMGZbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXTt0cnl7dmFyIF8weDViMzNjNz10aGlzWydfaXNNYXAnXShfMHgzNmRlN2EpLF8weDM5MDQxZT1fMHgzYTY2ZmU7XzB4NWIzM2M3JiZfMHgzOTA0MWVbMHgwXT09PSdcXFxceDI3JyYmKF8weDM5MDQxZT1fMHgzOTA0MWVbXzB4NTY5ZjYyKDB4MWU2KV0oMHgxLF8weDM5MDQxZVtfMHg1NjlmNjIoMHgxYmEpXS0weDIpKTt2YXIgXzB4NDVhZmExPV8weDQ4ZmMwZlsnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJ109XzB4MjJjNWQyW18weDU2OWY2MigweDFhYSkrXzB4MzkwNDFlXTtfMHg0NWFmYTEmJihfMHg0OGZjMGZbXzB4NTY5ZjYyKDB4MTdiKV09XzB4NDhmYzBmWydkZXB0aCddKzB4MSksXzB4NDhmYzBmW18weDU2OWY2MigweDFkZSldPSEhXzB4NDVhZmExO3ZhciBfMHg1YzdjNTU9dHlwZW9mIF8weDJhZjhlNT09XzB4NTY5ZjYyKDB4MWEwKSxfMHgzNDlmOTA9eyduYW1lJzpfMHg1YzdjNTV8fF8weDViMzNjNz9fMHgzYTY2ZmU6dGhpc1tfMHg1NjlmNjIoMHgxZWEpXShfMHgzYTY2ZmUpfTtpZihfMHg1YzdjNTUmJihfMHgzNDlmOTBbXzB4NTY5ZjYyKDB4MWEwKV09ITB4MCksIShfMHgyNDQyMGU9PT1fMHg1NjlmNjIoMHgyMzApfHxfMHgyNDQyMGU9PT1fMHg1NjlmNjIoMHgxNWUpKSl7dmFyIF8weDQyNWY2ZD10aGlzW18weDU2OWY2MigweDE1OSldKF8weDM2ZGU3YSxfMHgyYWY4ZTUpO2lmKF8weDQyNWY2ZCYmKF8weDQyNWY2ZFtfMHg1NjlmNjIoMHgxZDgpXSYmKF8weDM0OWY5MFtfMHg1NjlmNjIoMHgxZjgpXT0hMHgwKSxfMHg0MjVmNmRbXzB4NTY5ZjYyKDB4MWZiKV0mJiFfMHg0NWFmYTEmJiFfMHg0OGZjMGZbXzB4NTY5ZjYyKDB4MWI5KV0pKXJldHVybiBfMHgzNDlmOTBbXzB4NTY5ZjYyKDB4MWE3KV09ITB4MCx0aGlzW18weDU2OWY2MigweDE3MildKF8weDM0OWY5MCxfMHg0OGZjMGYpLF8weDM0OWY5MDt9dmFyIF8weDUzYWUwNzt0cnl7XzB4NTNhZTA3PV8weDRiYmNkNShfMHgzNmRlN2EsXzB4MmFmOGU1KTt9Y2F0Y2goXzB4MTgyMzljKXtyZXR1cm4gXzB4MzQ5ZjkwPXsnbmFtZSc6XzB4M2E2NmZlLCd0eXBlJzondW5rbm93bicsJ2Vycm9yJzpfMHgxODIzOWNbJ21lc3NhZ2UnXX0sdGhpc1tfMHg1NjlmNjIoMHgxNzIpXShfMHgzNDlmOTAsXzB4NDhmYzBmKSxfMHgzNDlmOTA7fXZhciBfMHg0MmQ2ZGY9dGhpc1tfMHg1NjlmNjIoMHgxYTgpXShfMHg1M2FlMDcpLF8weDM3MGE2MT10aGlzW18weDU2OWY2MigweDE5OCldKF8weDQyZDZkZik7aWYoXzB4MzQ5ZjkwWyd0eXBlJ109XzB4NDJkNmRmLF8weDM3MGE2MSl0aGlzW18weDU2OWY2MigweDE3MildKF8weDM0OWY5MCxfMHg0OGZjMGYsXzB4NTNhZTA3LGZ1bmN0aW9uKCl7dmFyIF8weDUyNWU4Nz1fMHg1NjlmNjI7XzB4MzQ5ZjkwW18weDUyNWU4NygweDFlMSldPV8weDUzYWUwN1tfMHg1MjVlODcoMHgyMjQpXSgpLCFfMHg0NWFmYTEmJl8weDRhZTdmZFtfMHg1MjVlODcoMHgxYjcpXShfMHg0MmQ2ZGYsXzB4MzQ5ZjkwLF8weDQ4ZmMwZix7fSk7fSk7ZWxzZXt2YXIgXzB4MzRkZDA1PV8weDQ4ZmMwZlsnYXV0b0V4cGFuZCddJiZfMHg0OGZjMGZbXzB4NTY5ZjYyKDB4MjM4KV08XzB4NDhmYzBmWydhdXRvRXhwYW5kTWF4RGVwdGgnXSYmXzB4NDhmYzBmW18weDU2OWY2MigweDIyMCldWydpbmRleE9mJ10oXzB4NTNhZTA3KTwweDAmJl8weDQyZDZkZiE9PV8weDU2OWY2MigweDIxZCkmJl8weDQ4ZmMwZltfMHg1NjlmNjIoMHgyMzkpXTxfMHg0OGZjMGZbXzB4NTY5ZjYyKDB4MTlkKV07XzB4MzRkZDA1fHxfMHg0OGZjMGZbXzB4NTY5ZjYyKDB4MjM4KV08XzB4NTExMGY1fHxfMHg0NWFmYTE/KHRoaXNbXzB4NTY5ZjYyKDB4MTgxKV0oXzB4MzQ5ZjkwLF8weDUzYWUwNyxfMHg0OGZjMGYsXzB4NDVhZmExfHx7fSksdGhpc1tfMHg1NjlmNjIoMHgxOWIpXShfMHg1M2FlMDcsXzB4MzQ5ZjkwKSk6dGhpc1tfMHg1NjlmNjIoMHgxNzIpXShfMHgzNDlmOTAsXzB4NDhmYzBmLF8weDUzYWUwNyxmdW5jdGlvbigpe3ZhciBfMHg1ZTQzZWY9XzB4NTY5ZjYyO18weDQyZDZkZj09PV8weDVlNDNlZigweDE2Nil8fF8weDQyZDZkZj09PV8weDVlNDNlZigweDIwNil8fChkZWxldGUgXzB4MzQ5ZjkwWyd2YWx1ZSddLF8weDM0OWY5MFsnY2FwcGVkJ109ITB4MCk7fSk7fXJldHVybiBfMHgzNDlmOTA7fWZpbmFsbHl7XzB4NDhmYzBmW18weDU2OWY2MigweDFlMCldPV8weDIyYzVkMixfMHg0OGZjMGZbXzB4NTY5ZjYyKDB4MTdiKV09XzB4NTExMGY1LF8weDQ4ZmMwZltfMHg1NjlmNjIoMHgxZGUpXT1fMHgyYmY4YTg7fX1bXzB4NDhmZjRmKDB4MWI3KV0oXzB4MWI2MmYxLF8weDE4ZWI3MSxfMHgzNzk0OGYsXzB4MWFiNWVlKXt2YXIgXzB4MWQ4YzA2PV8weDQ4ZmY0ZixfMHg0ODc3NmQ9XzB4MWFiNWVlWydzdHJMZW5ndGgnXXx8XzB4Mzc5NDhmW18weDFkOGMwNigweDFmNCldO2lmKChfMHgxYjYyZjE9PT1fMHgxZDhjMDYoMHgxZjcpfHxfMHgxYjYyZjE9PT1fMHgxZDhjMDYoMHgxN2QpKSYmXzB4MThlYjcxW18weDFkOGMwNigweDFlMSldKXtsZXQgXzB4NWQ4ZjZhPV8weDE4ZWI3MVsndmFsdWUnXVtfMHgxZDhjMDYoMHgxYmEpXTtfMHgzNzk0OGZbXzB4MWQ4YzA2KDB4MWVjKV0rPV8weDVkOGY2YSxfMHgzNzk0OGZbXzB4MWQ4YzA2KDB4MWVjKV0+XzB4Mzc5NDhmW18weDFkOGMwNigweDFjYSldPyhfMHgxOGViNzFbXzB4MWQ4YzA2KDB4MjNjKV09JycsZGVsZXRlIF8weDE4ZWI3MVsndmFsdWUnXSk6XzB4NWQ4ZjZhPl8weDQ4Nzc2ZCYmKF8weDE4ZWI3MVtfMHgxZDhjMDYoMHgyM2MpXT1fMHgxOGViNzFbJ3ZhbHVlJ11bJ3N1YnN0ciddKDB4MCxfMHg0ODc3NmQpLGRlbGV0ZSBfMHgxOGViNzFbXzB4MWQ4YzA2KDB4MWUxKV0pO319W18weDQ4ZmY0ZigweDE2ZSldKF8weDVlNGFjMyl7dmFyIF8weDk4YjEwOT1fMHg0OGZmNGY7cmV0dXJuISEoXzB4NWU0YWMzJiZfMHg0ODVkM2FbXzB4OThiMTA5KDB4MTY1KV0mJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDVlNGFjMyk9PT0nW29iamVjdFxcXFx4MjBNYXBdJyYmXzB4NWU0YWMzW18weDk4YjEwOSgweDFhZCldKTt9WydfcHJvcGVydHlOYW1lJ10oXzB4NWUwYjgyKXt2YXIgXzB4MjdmY2Y1PV8weDQ4ZmY0ZjtpZihfMHg1ZTBiODJbXzB4MjdmY2Y1KDB4MWQwKV0oL15cXFxcZCskLykpcmV0dXJuIF8weDVlMGI4Mjt2YXIgXzB4MTJmNWI0O3RyeXtfMHgxMmY1YjQ9SlNPTlsnc3RyaW5naWZ5J10oJycrXzB4NWUwYjgyKTt9Y2F0Y2h7XzB4MTJmNWI0PSdcXFxceDIyJyt0aGlzW18weDI3ZmNmNSgweDE3NSldKF8weDVlMGI4MikrJ1xcXFx4MjInO31yZXR1cm4gXzB4MTJmNWI0W18weDI3ZmNmNSgweDFkMCldKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4MTJmNWI0PV8weDEyZjViNFtfMHgyN2ZjZjUoMHgxZTYpXSgweDEsXzB4MTJmNWI0W18weDI3ZmNmNSgweDFiYSldLTB4Mik6XzB4MTJmNWI0PV8weDEyZjViNFtfMHgyN2ZjZjUoMHgxOWMpXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpW18weDI3ZmNmNSgweDE5YyldKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpW18weDI3ZmNmNSgweDE5YyldKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHgxMmY1YjQ7fVtfMHg0OGZmNGYoMHgxNzIpXShfMHgyNGQ2MTcsXzB4NDIxMzg4LF8weDEwZGFjMyxfMHgzNjEwNDApe3ZhciBfMHg0MThhN2M9XzB4NDhmZjRmO3RoaXNbXzB4NDE4YTdjKDB4MjAyKV0oXzB4MjRkNjE3LF8weDQyMTM4OCksXzB4MzYxMDQwJiZfMHgzNjEwNDAoKSx0aGlzW18weDQxOGE3YygweDE5YildKF8weDEwZGFjMyxfMHgyNGQ2MTcpLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDI0ZDYxNyxfMHg0MjEzODgpO31bJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHgyZTIwMGYsXzB4NGNjYjVjKXt2YXIgXzB4NTZmOGU5PV8weDQ4ZmY0Zjt0aGlzW18weDU2ZjhlOSgweDIwNCldKF8weDJlMjAwZixfMHg0Y2NiNWMpLHRoaXNbXzB4NTZmOGU5KDB4MjBiKV0oXzB4MmUyMDBmLF8weDRjY2I1YyksdGhpc1tfMHg1NmY4ZTkoMHgyMDEpXShfMHgyZTIwMGYsXzB4NGNjYjVjKSx0aGlzW18weDU2ZjhlOSgweDE5NildKF8weDJlMjAwZixfMHg0Y2NiNWMpO31bJ19zZXROb2RlSWQnXShfMHg1MDkwNTIsXzB4MTQ2MmEyKXt9Wydfc2V0Tm9kZVF1ZXJ5UGF0aCddKF8weDNlNTA2YixfMHgxMTg2MmIpe31bXzB4NDhmZjRmKDB4MWZmKV0oXzB4NTk3YzI4LF8weDE5ZmFhNCl7fVtfMHg0OGZmNGYoMHgxNTMpXShfMHg0ZDFlZTEpe3ZhciBfMHg0NTVkYWM9XzB4NDhmZjRmO3JldHVybiBfMHg0ZDFlZTE9PT10aGlzW18weDQ1NWRhYygweDE3YyldO31bJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDJlNWY0ZSxfMHg1ZjBiYzYpe3ZhciBfMHgzODViYjA9XzB4NDhmZjRmO3RoaXNbXzB4Mzg1YmIwKDB4MWZmKV0oXzB4MmU1ZjRlLF8weDVmMGJjNiksdGhpc1tfMHgzODViYjAoMHgxNTgpXShfMHgyZTVmNGUpLF8weDVmMGJjNltfMHgzODViYjAoMHgxZDYpXSYmdGhpc1tfMHgzODViYjAoMHgxYjMpXShfMHgyZTVmNGUpLHRoaXNbXzB4Mzg1YmIwKDB4MWRhKV0oXzB4MmU1ZjRlLF8weDVmMGJjNiksdGhpc1tfMHgzODViYjAoMHgxNzYpXShfMHgyZTVmNGUsXzB4NWYwYmM2KSx0aGlzW18weDM4NWJiMCgweDIwNyldKF8weDJlNWY0ZSk7fVtfMHg0OGZmNGYoMHgxOWIpXShfMHgyZjc2ZDcsXzB4MjMyOWI2KXt2YXIgXzB4NDY3NWFjPV8weDQ4ZmY0ZjtsZXQgXzB4NWY0ZjJkO3RyeXtfMHg0ODVkM2FbJ2NvbnNvbGUnXSYmKF8weDVmNGYyZD1fMHg0ODVkM2FbJ2NvbnNvbGUnXVtfMHg0Njc1YWMoMHgyMjgpXSxfMHg0ODVkM2FbXzB4NDY3NWFjKDB4MTk3KV1bXzB4NDY3NWFjKDB4MjI4KV09ZnVuY3Rpb24oKXt9KSxfMHgyZjc2ZDcmJnR5cGVvZiBfMHgyZjc2ZDdbXzB4NDY3NWFjKDB4MWJhKV09PSdudW1iZXInJiYoXzB4MjMyOWI2W18weDQ2NzVhYygweDFiYSldPV8weDJmNzZkN1tfMHg0Njc1YWMoMHgxYmEpXSk7fWNhdGNoe31maW5hbGx5e18weDVmNGYyZCYmKF8weDQ4NWQzYVtfMHg0Njc1YWMoMHgxOTcpXVtfMHg0Njc1YWMoMHgyMjgpXT1fMHg1ZjRmMmQpO31pZihfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWY5KV09PT1fMHg0Njc1YWMoMHgxNzQpfHxfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWY5KV09PT1fMHg0Njc1YWMoMHgyMTMpKXtpZihpc05hTihfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWUxKV0pKV8weDIzMjliNltfMHg0Njc1YWMoMHgxNWMpXT0hMHgwLGRlbGV0ZSBfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWUxKV07ZWxzZSBzd2l0Y2goXzB4MjMyOWI2W18weDQ2NzVhYygweDFlMSldKXtjYXNlIE51bWJlcltfMHg0Njc1YWMoMHgxNTQpXTpfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWNmKV09ITB4MCxkZWxldGUgXzB4MjMyOWI2W18weDQ2NzVhYygweDFlMSldO2JyZWFrO2Nhc2UgTnVtYmVyW18weDQ2NzVhYygweDIwOSldOl8weDIzMjliNlsnbmVnYXRpdmVJbmZpbml0eSddPSEweDAsZGVsZXRlIF8weDIzMjliNltfMHg0Njc1YWMoMHgxZTEpXTticmVhaztjYXNlIDB4MDp0aGlzW18weDQ2NzVhYygweDFlNSldKF8weDIzMjliNltfMHg0Njc1YWMoMHgxZTEpXSkmJihfMHgyMzI5YjZbXzB4NDY3NWFjKDB4MWI1KV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDIzMjliNltfMHg0Njc1YWMoMHgxZjkpXT09PV8weDQ2NzVhYygweDIxZCkmJnR5cGVvZiBfMHgyZjc2ZDdbXzB4NDY3NWFjKDB4MTk1KV09PV8weDQ2NzVhYygweDFmNykmJl8weDJmNzZkN1tfMHg0Njc1YWMoMHgxOTUpXSYmXzB4MjMyOWI2W18weDQ2NzVhYygweDE5NSldJiZfMHgyZjc2ZDdbXzB4NDY3NWFjKDB4MTk1KV0hPT1fMHgyMzI5YjZbXzB4NDY3NWFjKDB4MTk1KV0mJihfMHgyMzI5YjZbJ2Z1bmNOYW1lJ109XzB4MmY3NmQ3W18weDQ2NzVhYygweDE5NSldKTt9WydfaXNOZWdhdGl2ZVplcm8nXShfMHgzNDgyMjMpe3ZhciBfMHg0YTIzODY9XzB4NDhmZjRmO3JldHVybiAweDEvXzB4MzQ4MjIzPT09TnVtYmVyW18weDRhMjM4NigweDIwOSldO31bJ19zb3J0UHJvcHMnXShfMHgxMDdlYWEpe3ZhciBfMHg0YjM3Y2M9XzB4NDhmZjRmOyFfMHgxMDdlYWFbXzB4NGIzN2NjKDB4MWRkKV18fCFfMHgxMDdlYWFbXzB4NGIzN2NjKDB4MWRkKV1bXzB4NGIzN2NjKDB4MWJhKV18fF8weDEwN2VhYVtfMHg0YjM3Y2MoMHgxZjkpXT09PV8weDRiMzdjYygweDIzMCl8fF8weDEwN2VhYVtfMHg0YjM3Y2MoMHgxZjkpXT09PV8weDRiMzdjYygweDE2NSl8fF8weDEwN2VhYVtfMHg0YjM3Y2MoMHgxZjkpXT09PV8weDRiMzdjYygweDIyNyl8fF8weDEwN2VhYVsncHJvcHMnXVtfMHg0YjM3Y2MoMHgxZmUpXShmdW5jdGlvbihfMHgxZDg2NjMsXzB4NDVlZDIzKXt2YXIgXzB4NTFhNGY2PV8weDRiMzdjYyxfMHgzOGYyNTk9XzB4MWQ4NjYzW18weDUxYTRmNigweDE5NSldW18weDUxYTRmNigweDFmMCldKCksXzB4NTNhYjRmPV8weDQ1ZWQyM1tfMHg1MWE0ZjYoMHgxOTUpXVsndG9Mb3dlckNhc2UnXSgpO3JldHVybiBfMHgzOGYyNTk8XzB4NTNhYjRmPy0weDE6XzB4MzhmMjU5Pl8weDUzYWI0Zj8weDE6MHgwO30pO31bJ19hZGRGdW5jdGlvbnNOb2RlJ10oXzB4MTVlMWVkLF8weDVjMDMyOCl7dmFyIF8weDViMDBlOT1fMHg0OGZmNGY7aWYoIShfMHg1YzAzMjhbXzB4NWIwMGU5KDB4MWYzKV18fCFfMHgxNWUxZWRbXzB4NWIwMGU5KDB4MWRkKV18fCFfMHgxNWUxZWRbXzB4NWIwMGU5KDB4MWRkKV1bXzB4NWIwMGU5KDB4MWJhKV0pKXtmb3IodmFyIF8weDQwMDZhNT1bXSxfMHgxOTA1MTc9W10sXzB4NWRhYTEzPTB4MCxfMHg1YzcyOGI9XzB4MTVlMWVkW18weDViMDBlOSgweDFkZCldWydsZW5ndGgnXTtfMHg1ZGFhMTM8XzB4NWM3MjhiO18weDVkYWExMysrKXt2YXIgXzB4MTc2YWEwPV8weDE1ZTFlZFtfMHg1YjAwZTkoMHgxZGQpXVtfMHg1ZGFhMTNdO18weDE3NmFhMFtfMHg1YjAwZTkoMHgxZjkpXT09PV8weDViMDBlOSgweDIxZCk/XzB4NDAwNmE1W18weDViMDBlOSgweDFhMyldKF8weDE3NmFhMCk6XzB4MTkwNTE3W18weDViMDBlOSgweDFhMyldKF8weDE3NmFhMCk7fWlmKCEoIV8weDE5MDUxN1tfMHg1YjAwZTkoMHgxYmEpXXx8XzB4NDAwNmE1W18weDViMDBlOSgweDFiYSldPD0weDEpKXtfMHgxNWUxZWRbXzB4NWIwMGU5KDB4MWRkKV09XzB4MTkwNTE3O3ZhciBfMHg0YTA5ZGE9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4NDAwNmE1fTt0aGlzW18weDViMDBlOSgweDIwNCldKF8weDRhMDlkYSxfMHg1YzAzMjgpLHRoaXNbXzB4NWIwMGU5KDB4MWZmKV0oXzB4NGEwOWRhLF8weDVjMDMyOCksdGhpc1tfMHg1YjAwZTkoMHgxNTgpXShfMHg0YTA5ZGEpLHRoaXNbXzB4NWIwMGU5KDB4MTk2KV0oXzB4NGEwOWRhLF8weDVjMDMyOCksXzB4NGEwOWRhWydpZCddKz0nXFxcXHgyMGYnLF8weDE1ZTFlZFtfMHg1YjAwZTkoMHgxZGQpXVtfMHg1YjAwZTkoMHgxOGIpXShfMHg0YTA5ZGEpO319fVtfMHg0OGZmNGYoMHgxNzYpXShfMHgyN2QzMTIsXzB4MTQ1MzcxKXt9W18weDQ4ZmY0ZigweDE1OCldKF8weDQ4NDc2Yyl7fVtfMHg0OGZmNGYoMHgyMzYpXShfMHgxNWFlNmUpe3ZhciBfMHg1NTkyMGQ9XzB4NDhmZjRmO3JldHVybiBBcnJheVtfMHg1NTkyMGQoMHgxOGUpXShfMHgxNWFlNmUpfHx0eXBlb2YgXzB4MTVhZTZlPT1fMHg1NTkyMGQoMHgxOTQpJiZ0aGlzW18weDU1OTIwZCgweDE3NSldKF8weDE1YWU2ZSk9PT0nW29iamVjdFxcXFx4MjBBcnJheV0nO31bXzB4NDhmZjRmKDB4MTk2KV0oXzB4OWU4ZGQ4LF8weDIxYmYzMSl7fVtfMHg0OGZmNGYoMHgyMDcpXShfMHg0ZDg2ZGMpe3ZhciBfMHgxZDM1MjM9XzB4NDhmZjRmO2RlbGV0ZSBfMHg0ZDg2ZGNbXzB4MWQzNTIzKDB4MjI5KV0sZGVsZXRlIF8weDRkODZkY1tfMHgxZDM1MjMoMHgxY2IpXSxkZWxldGUgXzB4NGQ4NmRjW18weDFkMzUyMygweDE2YildO31bXzB4NDhmZjRmKDB4MjAxKV0oXzB4NTAxMWVkLF8weDM3YjU0Myl7fX1sZXQgXzB4MTVjY2ZlPW5ldyBfMHgxYzRkMjgoKSxfMHg1MDhkY2M9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4MTJhZDBlPXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn07ZnVuY3Rpb24gXzB4NzYwNjA3KF8weDIxODU3ZCxfMHgxYWFlODMsXzB4MjZhNTQwLF8weDM3NzU4NSxfMHg1NjQzYjgsXzB4MzExNmU1KXt2YXIgXzB4NzBmNjIwPV8weDQ4ZmY0ZjtsZXQgXzB4MWI2NjE3LF8weDQwMmI4ODt0cnl7XzB4NDAyYjg4PV8weDJjNmZkOCgpLF8weDFiNjYxNz1fMHhkNDk0YTNbXzB4MWFhZTgzXSwhXzB4MWI2NjE3fHxfMHg0MDJiODgtXzB4MWI2NjE3Wyd0cyddPjB4MWY0JiZfMHgxYjY2MTdbXzB4NzBmNjIwKDB4MTYwKV0mJl8weDFiNjYxN1tfMHg3MGY2MjAoMHgxZDcpXS9fMHgxYjY2MTdbJ2NvdW50J108MHg2ND8oXzB4ZDQ5NGEzW18weDFhYWU4M109XzB4MWI2NjE3PXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4NDAyYjg4fSxfMHhkNDk0YTNbXzB4NzBmNjIwKDB4MTkzKV09e30pOl8weDQwMmI4OC1fMHhkNDk0YTNbXzB4NzBmNjIwKDB4MTkzKV1bJ3RzJ10+MHgzMiYmXzB4ZDQ5NGEzWydoaXRzJ11bXzB4NzBmNjIwKDB4MTYwKV0mJl8weGQ0OTRhM1tfMHg3MGY2MjAoMHgxOTMpXVsndGltZSddL18weGQ0OTRhM1snaGl0cyddW18weDcwZjYyMCgweDE2MCldPDB4NjQmJihfMHhkNDk0YTNbXzB4NzBmNjIwKDB4MTkzKV09e30pO2xldCBfMHgyYWRjZjQ9W10sXzB4M2IwYWEzPV8weDFiNjYxN1tfMHg3MGY2MjAoMHgyM2EpXXx8XzB4ZDQ5NGEzW18weDcwZjYyMCgweDE5MyldW18weDcwZjYyMCgweDIzYSldP18weDEyYWQwZTpfMHg1MDhkY2MsXzB4NDk3NDk4PV8weDFiMzBjNz0+e3ZhciBfMHgyYjdiYjU9XzB4NzBmNjIwO2xldCBfMHgzNjBjZGM9e307cmV0dXJuIF8weDM2MGNkY1tfMHgyYjdiYjUoMHgxZGQpXT1fMHgxYjMwYzdbXzB4MmI3YmI1KDB4MWRkKV0sXzB4MzYwY2RjW18weDJiN2JiNSgweDIxOCldPV8weDFiMzBjN1tfMHgyYjdiYjUoMHgyMTgpXSxfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MWY0KV09XzB4MWIzMGM3W18weDJiN2JiNSgweDFmNCldLF8weDM2MGNkY1sndG90YWxTdHJMZW5ndGgnXT1fMHgxYjMwYzdbJ3RvdGFsU3RyTGVuZ3RoJ10sXzB4MzYwY2RjW18weDJiN2JiNSgweDE5ZCldPV8weDFiMzBjN1tfMHgyYjdiYjUoMHgxOWQpXSxfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MjFjKV09XzB4MWIzMGM3WydhdXRvRXhwYW5kTWF4RGVwdGgnXSxfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MWQ2KV09ITB4MSxfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MWYzKV09IV8weDQxNDU3ZCxfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MTdiKV09MHgxLF8weDM2MGNkY1snbGV2ZWwnXT0weDAsXzB4MzYwY2RjW18weDJiN2JiNSgweDE4YSldPV8weDJiN2JiNSgweDFjNCksXzB4MzYwY2RjWydyb290RXhwcmVzc2lvbiddPV8weDJiN2JiNSgweDIwYSksXzB4MzYwY2RjW18weDJiN2JiNSgweDFkNCldPSEweDAsXzB4MzYwY2RjWydhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJ109W10sXzB4MzYwY2RjW18weDJiN2JiNSgweDIzOSldPTB4MCxfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MWI5KV09ITB4MCxfMHgzNjBjZGNbXzB4MmI3YmI1KDB4MWVjKV09MHgwLF8weDM2MGNkY1tfMHgyYjdiYjUoMHgxZWUpXT17J2N1cnJlbnQnOnZvaWQgMHgwLCdwYXJlbnQnOnZvaWQgMHgwLCdpbmRleCc6MHgwfSxfMHgzNjBjZGM7fTtmb3IodmFyIF8weDEwYjUyMT0weDA7XzB4MTBiNTIxPF8weDU2NDNiOFtfMHg3MGY2MjAoMHgxYmEpXTtfMHgxMGI1MjErKylfMHgyYWRjZjRbXzB4NzBmNjIwKDB4MWEzKV0oXzB4MTVjY2ZlW18weDcwZjYyMCgweDE4MSldKHsndGltZU5vZGUnOl8weDIxODU3ZD09PV8weDcwZjYyMCgweDFkNyl8fHZvaWQgMHgwfSxfMHg1NjQzYjhbXzB4MTBiNTIxXSxfMHg0OTc0OTgoXzB4M2IwYWEzKSx7fSkpO2lmKF8weDIxODU3ZD09PV8weDcwZjYyMCgweDE1ZCkpe2xldCBfMHgzNWJmZDk9RXJyb3JbXzB4NzBmNjIwKDB4MjE2KV07dHJ5e0Vycm9yW18weDcwZjYyMCgweDIxNildPTB4MS8weDAsXzB4MmFkY2Y0W18weDcwZjYyMCgweDFhMyldKF8weDE1Y2NmZVtfMHg3MGY2MjAoMHgxODEpXSh7J3N0YWNrTm9kZSc6ITB4MH0sbmV3IEVycm9yKClbXzB4NzBmNjIwKDB4MTVmKV0sXzB4NDk3NDk4KF8weDNiMGFhMykseydzdHJMZW5ndGgnOjB4MS8weDB9KSk7fWZpbmFsbHl7RXJyb3JbXzB4NzBmNjIwKDB4MjE2KV09XzB4MzViZmQ5O319cmV0dXJueydtZXRob2QnOl8weDcwZjYyMCgweDFmMSksJ3ZlcnNpb24nOl8weDI0Y2M5ZiwnYXJncyc6W3sndHMnOl8weDI2YTU0MCwnc2Vzc2lvbic6XzB4Mzc3NTg1LCdhcmdzJzpfMHgyYWRjZjQsJ2lkJzpfMHgxYWFlODMsJ2NvbnRleHQnOl8weDMxMTZlNX1dfTt9Y2F0Y2goXzB4NGNlNDEyKXtyZXR1cm57J21ldGhvZCc6XzB4NzBmNjIwKDB4MWYxKSwndmVyc2lvbic6XzB4MjRjYzlmLCdhcmdzJzpbeyd0cyc6XzB4MjZhNTQwLCdzZXNzaW9uJzpfMHgzNzc1ODUsJ2FyZ3MnOlt7J3R5cGUnOid1bmtub3duJywnZXJyb3InOl8weDRjZTQxMiYmXzB4NGNlNDEyW18weDcwZjYyMCgweDIwMCldfV0sJ2lkJzpfMHgxYWFlODMsJ2NvbnRleHQnOl8weDMxMTZlNX1dfTt9ZmluYWxseXt0cnl7aWYoXzB4MWI2NjE3JiZfMHg0MDJiODgpe2xldCBfMHgyNmY2MjE9XzB4MmM2ZmQ4KCk7XzB4MWI2NjE3W18weDcwZjYyMCgweDE2MCldKyssXzB4MWI2NjE3W18weDcwZjYyMCgweDFkNyldKz1fMHgyNGY0YzQoXzB4NDAyYjg4LF8weDI2ZjYyMSksXzB4MWI2NjE3Wyd0cyddPV8weDI2ZjYyMSxfMHhkNDk0YTNbJ2hpdHMnXVtfMHg3MGY2MjAoMHgxNjApXSsrLF8weGQ0OTRhM1snaGl0cyddW18weDcwZjYyMCgweDFkNyldKz1fMHgyNGY0YzQoXzB4NDAyYjg4LF8weDI2ZjYyMSksXzB4ZDQ5NGEzW18weDcwZjYyMCgweDE5MyldWyd0cyddPV8weDI2ZjYyMSwoXzB4MWI2NjE3Wydjb3VudCddPjB4MzJ8fF8weDFiNjYxN1sndGltZSddPjB4NjQpJiYoXzB4MWI2NjE3WydyZWR1Y2VMaW1pdHMnXT0hMHgwKSwoXzB4ZDQ5NGEzW18weDcwZjYyMCgweDE5MyldWydjb3VudCddPjB4M2U4fHxfMHhkNDk0YTNbXzB4NzBmNjIwKDB4MTkzKV1bXzB4NzBmNjIwKDB4MWQ3KV0+MHgxMmMpJiYoXzB4ZDQ5NGEzW18weDcwZjYyMCgweDE5MyldW18weDcwZjYyMCgweDIzYSldPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weDc2MDYwNzt9KChfMHgzMWQxZjksXzB4M2VhYWI1LF8weDQ0NDcxMixfMHgyNzJiYzksXzB4NzA5MjBhLF8weDNjNTQxNSxfMHgyODNlMTcsXzB4MmQ1NGFhLF8weDJkODRmNSxfMHgxZGJhYmIpPT57dmFyIF8weDJjNDM4OT1fMHgyOWQ1OTY7aWYoXzB4MzFkMWY5WydfY29uc29sZV9uaW5qYSddKXJldHVybiBfMHgzMWQxZjlbXzB4MmM0Mzg5KDB4MTg1KV07aWYoIUooXzB4MzFkMWY5LF8weDJkNTRhYSxfMHg3MDkyMGEpKXJldHVybiBfMHgzMWQxZjlbJ19jb25zb2xlX25pbmphJ109eydjb25zb2xlTG9nJzooKT0+e30sJ2NvbnNvbGVUcmFjZSc6KCk9Pnt9LCdjb25zb2xlVGltZSc6KCk9Pnt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt9LCdhdXRvTG9nJzooKT0+e30sJ2F1dG9Mb2dNYW55JzooKT0+e30sJ2F1dG9UcmFjZU1hbnknOigpPT57fSwnY292ZXJhZ2UnOigpPT57fSwnYXV0b1RyYWNlJzooKT0+e30sJ2F1dG9UaW1lJzooKT0+e30sJ2F1dG9UaW1lRW5kJzooKT0+e319LF8weDMxZDFmOVtfMHgyYzQzODkoMHgxODUpXTtsZXQgXzB4NTFjNjIyPVcoXzB4MzFkMWY5KSxfMHgxNjc3NTQ9XzB4NTFjNjIyWydlbGFwc2VkJ10sXzB4MmNmMzU3PV8weDUxYzYyMltfMHgyYzQzODkoMHgxODgpXSxfMHhjYjNhOGQ9XzB4NTFjNjIyW18weDJjNDM4OSgweDFhNCldLF8weDE1MzliMj17J2hpdHMnOnt9LCd0cyc6e319LF8weDM5ZjJmOT1ZKF8weDMxZDFmOSxfMHgyZDg0ZjUsXzB4MTUzOWIyLF8weDNjNTQxNSksXzB4MTIwMTI0PV8weDU1YWVhZj0+e18weDE1MzliMlsndHMnXVtfMHg1NWFlYWZdPV8weDJjZjM1NygpO30sXzB4MTZlMjNjPShfMHgzNjdmN2QsXzB4MjY5ZTIwKT0+e3ZhciBfMHgyMzMyYmY9XzB4MmM0Mzg5O2xldCBfMHgxNjhiZGY9XzB4MTUzOWIyWyd0cyddW18weDI2OWUyMF07aWYoZGVsZXRlIF8weDE1MzliMlsndHMnXVtfMHgyNjllMjBdLF8weDE2OGJkZil7bGV0IF8weDFjOTA5Yz1fMHgxNjc3NTQoXzB4MTY4YmRmLF8weDJjZjM1NygpKTtfMHg1OTYwOWYoXzB4MzlmMmY5KF8weDIzMzJiZigweDFkNyksXzB4MzY3ZjdkLF8weGNiM2E4ZCgpLF8weDFkZTgyNCxbXzB4MWM5MDljXSxfMHgyNjllMjApKTt9fSxfMHg0MDIxNTE9XzB4MzVhZGY4PT5fMHgyYzUzODg9Pnt0cnl7XzB4MTIwMTI0KF8weDJjNTM4OCksXzB4MzVhZGY4KF8weDJjNTM4OCk7fWZpbmFsbHl7XzB4MzFkMWY5Wydjb25zb2xlJ11bJ3RpbWUnXT1fMHgzNWFkZjg7fX0sXzB4ZGYzNzM1PV8weDM1NzNiMz0+XzB4MzE0YWYyPT57dmFyIF8weDIzNzEyMj1fMHgyYzQzODk7dHJ5e2xldCBbXzB4MzFhNzA2LF8weDNjYmQ4Yl09XzB4MzE0YWYyWydzcGxpdCddKF8weDIzNzEyMigweDIxNCkpO18weDE2ZTIzYyhfMHgzY2JkOGIsXzB4MzFhNzA2KSxfMHgzNTczYjMoXzB4MzFhNzA2KTt9ZmluYWxseXtfMHgzMWQxZjlbXzB4MjM3MTIyKDB4MTk3KV1bXzB4MjM3MTIyKDB4MWIyKV09XzB4MzU3M2IzO319O18weDMxZDFmOVsnX2NvbnNvbGVfbmluamEnXT17J2NvbnNvbGVMb2cnOihfMHg0MjM3YjgsXzB4MjVmNzQ3KT0+e3ZhciBfMHgyYzA4YTk9XzB4MmM0Mzg5O18weDMxZDFmOVtfMHgyYzA4YTkoMHgxOTcpXVtfMHgyYzA4YTkoMHgxZjEpXVtfMHgyYzA4YTkoMHgxOTUpXSE9PV8weDJjMDhhOSgweDE3ZikmJl8weDU5NjA5ZihfMHgzOWYyZjkoXzB4MmMwOGE5KDB4MWYxKSxfMHg0MjM3YjgsXzB4Y2IzYThkKCksXzB4MWRlODI0LF8weDI1Zjc0NykpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDI3NGZjYixfMHg0OTczMjMpPT57dmFyIF8weDk4Y2M2ZT1fMHgyYzQzODk7XzB4MzFkMWY5W18weDk4Y2M2ZSgweDE5NyldWydsb2cnXVtfMHg5OGNjNmUoMHgxOTUpXSE9PSdkaXNhYmxlZFRyYWNlJyYmXzB4NTk2MDlmKF8weDM5ZjJmOShfMHg5OGNjNmUoMHgxNWQpLF8weDI3NGZjYixfMHhjYjNhOGQoKSxfMHgxZGU4MjQsXzB4NDk3MzIzKSk7fSwnY29uc29sZVRpbWUnOigpPT57dmFyIF8weGNkODE5Zj1fMHgyYzQzODk7XzB4MzFkMWY5W18weGNkODE5ZigweDE5NyldW18weGNkODE5ZigweDFkNyldPV8weDQwMjE1MShfMHgzMWQxZjlbXzB4Y2Q4MTlmKDB4MTk3KV1bXzB4Y2Q4MTlmKDB4MWQ3KV0pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHgzYWE1ZDc9XzB4MmM0Mzg5O18weDMxZDFmOVtfMHgzYWE1ZDcoMHgxOTcpXVsndGltZUVuZCddPV8weGRmMzczNShfMHgzMWQxZjlbXzB4M2FhNWQ3KDB4MTk3KV1bXzB4M2FhNWQ3KDB4MWIyKV0pO30sJ2F1dG9Mb2cnOihfMHgzMmNmNTQsXzB4Mzc1NTk0KT0+e3ZhciBfMHgyMDBiYzc9XzB4MmM0Mzg5O18weDU5NjA5ZihfMHgzOWYyZjkoXzB4MjAwYmM3KDB4MWYxKSxfMHgzNzU1OTQsXzB4Y2IzYThkKCksXzB4MWRlODI0LFtfMHgzMmNmNTRdKSk7fSwnYXV0b0xvZ01hbnknOihfMHg0MTE1MzIsXzB4M2FiMDhmKT0+e18weDU5NjA5ZihfMHgzOWYyZjkoJ2xvZycsXzB4NDExNTMyLF8weGNiM2E4ZCgpLF8weDFkZTgyNCxfMHgzYWIwOGYpKTt9LCdhdXRvVHJhY2UnOihfMHg1NjYwYjQsXzB4MmZiNzJkKT0+e3ZhciBfMHg0ODBmNWI9XzB4MmM0Mzg5O18weDU5NjA5ZihfMHgzOWYyZjkoXzB4NDgwZjViKDB4MTVkKSxfMHgyZmI3MmQsXzB4Y2IzYThkKCksXzB4MWRlODI0LFtfMHg1NjYwYjRdKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weGRhZTIzZCxfMHgxODZhYzkpPT57dmFyIF8weDU1OGQ0Mj1fMHgyYzQzODk7XzB4NTk2MDlmKF8weDM5ZjJmOShfMHg1NThkNDIoMHgxNWQpLF8weGRhZTIzZCxfMHhjYjNhOGQoKSxfMHgxZGU4MjQsXzB4MTg2YWM5KSk7fSwnYXV0b1RpbWUnOihfMHgzZTdlOGUsXzB4MTJlOTlhLF8weDVhMzU2Yik9PntfMHgxMjAxMjQoXzB4NWEzNTZiKTt9LCdhdXRvVGltZUVuZCc6KF8weGQ1ZTI3MCxfMHhiYmM0NjUsXzB4YWJkYWQzKT0+e18weDE2ZTIzYyhfMHhiYmM0NjUsXzB4YWJkYWQzKTt9LCdjb3ZlcmFnZSc6XzB4MzVlNDVjPT57dmFyIF8weDM2M2VkMT1fMHgyYzQzODk7XzB4NTk2MDlmKHsnbWV0aG9kJzpfMHgzNjNlZDEoMHgxYzMpLCd2ZXJzaW9uJzpfMHgzYzU0MTUsJ2FyZ3MnOlt7J2lkJzpfMHgzNWU0NWN9XX0pO319O2xldCBfMHg1OTYwOWY9YihfMHgzMWQxZjksXzB4M2VhYWI1LF8weDQ0NDcxMixfMHgyNzJiYzksXzB4NzA5MjBhLF8weDFkYmFiYiksXzB4MWRlODI0PV8weDMxZDFmOVtfMHgyYzQzODkoMHgyMWUpXTtyZXR1cm4gXzB4MzFkMWY5W18weDJjNDM4OSgweDE4NSldO30pKGdsb2JhbFRoaXMsXzB4MjlkNTk2KDB4MWJjKSxfMHgyOWQ1OTYoMHgxNjkpLF8weDI5ZDU5NigweDIxNyksXzB4MjlkNTk2KDB4MjFhKSxfMHgyOWQ1OTYoMHgxODkpLF8weDI5ZDU5NigweDE4ZiksW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJEYW1pbGFyZVxcXCIsXFxcIjE2OS4yNTQuODAuODBcXFwiLFxcXCIxOTIuMTY4LjAuMTAxXFxcIixcXFwiMTcyLjIzLjE5Mi4xXFxcIl0sXzB4MjlkNTk2KDB4MjM3KSxfMHgyOWQ1OTYoMHgxY2UpKTtcIik7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX29vKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZUxvZyhpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RzKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUoKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fdGUoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZUVuZCgpO31jYXRjaChlKXt9fTsvKmVzbGludCB1bmljb3JuL25vLWFidXNpdmUtZXNsaW50LWRpc2FibGU6LGVzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyOixlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby1hZ2dyZWdhdGluZy1lbmFibGU6LGVzbGludC1jb21tZW50cy9uby1kdXBsaWNhdGUtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWVuYWJsZTosKi8iXSwic291cmNlUm9vdCI6IiJ9
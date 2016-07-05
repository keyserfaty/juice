(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.socialButton = factory();
  }
})(this, function() {
  'use strict';
  
  var juice = {};

  /**
   * Append any number of child elements to a container element
   * @param container
   * @returns {appendToContainer}
   */
  juice.appendChildren = function (container) {
    return function appendToContainer() {
      return Array.prototype.map.call(arguments, function (elem) {
        container.appendChild(elem);
      });
    }
  };

  /**
   * Set any number of attributes to a DOM element
   * @param container
   * @param attrs
   * @returns {*}
   */
  juice.setAttributes = function(container, attrs) {
    Object.keys(attrs).map(function (key) {
      container.setAttribute(key, attrs[key]);
    });

    return container;
  };

  /**
   * Create an element with a predefined class
   * @param tag
   * @param attrs
   * @returns {Element}
   */
  juice.createElementWithClass = function (tag, attrs) {
    var node = doc.createElement(tag);
    setAttributes(node, attrs);
    return node;
  };

  return juice;
});
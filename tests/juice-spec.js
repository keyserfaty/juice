var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;

var appendChildren = function appendChildren(container) {
  return function appendToContainer() {
    return Array.prototype.map.call(arguments, function (elem) {
      container.appendChild(elem);
    });
  }
};

var setAttributes = function(container, attrs) {
  Object.keys(attrs).map(function (key) {
    container.setAttribute(key, attrs[key]);
  });

  return container;
};

describe('appendChildren', function () {
  jsdom();

  it('should be a function', function () {
    /**
     * Create basic elements for testing
     */
    var doc = document;

    var container = doc.createElement('div');
    container.setAttribute('id', 'container');

    var container = appendChildren(container);
    expect(container).to.be.a('function');
  });
});

describe('setAttributes', function() {
  jsdom();

  it('should append three children', function () {
    /**
     * Create basic elements for testing
     */
    var doc = document;

    var container = doc.createElement('div');
    container.setAttribute('id', 'container');

    var child1 =  doc.createElement('div');
    var child2 =  doc.createElement('div');
    var child3 =  doc.createElement('div');

    var containerForChildren = appendChildren(container);
    containerForChildren(child1, child2, child3);

    expect(container.childElementCount).to.eqls(3);
  });

  it('should have three attributes', function () {
    /**
     * Create basic elements for testing
     */
    var doc = document;

    var container = doc.createElement('div');
    var containerWithAttrs = setAttributes(container, {
      'class': 'test',
      'id': 'test',
      'thing': 'test',
    });

    expect(container.attributes.length).to.eqls(3);
  });
});

describe('createElementWithClass', function() {
  jsdom();

  it('should create a div element with two attributes', function () {
    /**
     * Create basic elements for testing
     */

    var createElementWithClass = function (tag, attrs) {
      var node = document.createElement(tag);
      setAttributes(node, attrs);
      return node;
    };

    var element = createElementWithClass('div', {
      'class': 'test',
      'id': 'test',
    });

    expect(element.nodeName).eql('DIV')
    expect(element.attributes.length).to.eqls(2);
  });
});
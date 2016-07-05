var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var juice = require('../src/juice')();

describe('juice', function() {
  jsdom();

  describe('appendChildren', function () {
    it('should be a function', function () {
      /**
       * Create basic elements for testing
       */
      var doc = document;

      var container = doc.createElement('div');
      container.setAttribute('id', 'container');

      var container = juice.appendChildren(container);
      expect(container).to.be.a('function');
    });
  });

  describe('setAttributes', function() {
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

      var containerForChildren = juice.appendChildren(container);
      containerForChildren(child1, child2, child3);

      expect(container.childElementCount).to.eqls(3);
    });

    it('should have three attributes', function () {
      /**
       * Create basic elements for testing
       */
      var doc = document;

      var container = doc.createElement('div');
      var containerWithAttrs = juice.setAttributes(container, {
        'class': 'test',
        'id': 'test',
        'thing': 'test',
      });

      expect(container.attributes.length).to.eqls(3);
    });
  });

  describe('createElementWithClass', function() {
    it('should create a div element with two attributes', function () {
      /**
       * Create basic elements for testing
       */
      var element = juice.createElementWithClass('div', {
        'class': 'test',
        'id': 'test',
      });

      expect(element.nodeName).eql('DIV')
      expect(element.attributes.length).to.eqls(2);
    });
  });
});


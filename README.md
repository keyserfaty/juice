Juice
=====

[![npm version](https://badge.fury.io/js/vanilla-juice.svg)](https://badge.fury.io/js/vanilla-juice) [![npm](https://img.shields.io/npm/dt/vanilla-juice.svg?maxAge=2592000)]()

Juice lets you handle DOM operations a little more easily with vanilla.js. It creates three functions: `createElementWithAttrs`, `setAttributes` and `appendChildren`.

----------

Installation
---

    npm install vanilla-juice


Example
---

```javascript
// Creates a div element with as many attributes as you want
var container = juice.createElementWithAttrs('div', {
	'class': 'container',
	'name': 'my-container',
};

// Lets you set any number of attributes to a DOM element
var otherContainer = juice.setAttributes(container, {
	'class': 'other-container',
	'name': 'my-other-container',
});

// Also lets you append any number of children elements to a container element
// You first define a container element where the children will be appended
var parent = juice.appendChildren(container);
// And then attach to that element all the children you want
parent(child1, child2, child3);
```


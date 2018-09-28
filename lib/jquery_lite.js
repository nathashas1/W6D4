const DOMNodeCollection = require('./dom_node_collection.js');


window.$l = function(selector) {
  if (selector instanceof HTMLElement ) {
    return new DOMNodeCollection([selector]);
  }
  const nodelist = document.querySelectorAll(selector);
  return new DOMNodeCollection(Array.from(nodelist));
};

document.addEventListener('DOMContentLoaded', () => {
  alldivs = $l('div');
  austin = $l('.austin');
  p = $l('p');
  p.addClass('nathasha');
  p.addClass('cool-things');
  alldivs.addClass('cool-things');
  setTimeout(() => alldivs.removeClass('cool-things'), 2000);
});

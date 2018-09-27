const Test = require('./method_test.js');


window.$l = function(selector) {
  const nodelist = document.querySelectorAll(selector);
  return Array.from(nodelist);
};

document.addEventListener('DOMContentLoaded', () => {
  console.log($l('div'));
  console.log($l("p"));
  console.log('things');
});

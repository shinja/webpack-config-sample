import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

console.log('s1.js, lodash version:', _.VERSION);

document.body.appendChild(component());
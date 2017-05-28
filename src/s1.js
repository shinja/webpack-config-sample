import _ from 'lodash';
import $ from 'jquery';

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello', 'webpack', _.VERSION, $.fn.jquery], ' ');

  return element;
}

console.log('s1.js, lodash version:', _.VERSION, 'jQuery:', $.fn.jquery);

document.body.appendChild(component());
import Todo from './js/logic/Todo';
import Group from './js/logic/Group';
import Tform from './js/DOM/todo_form.js';
import Tdisplay from './js/DOM/todo_display.js';
import Gform from './js/DOM/group_form.js';
import Gdisplay from './js/DOM/group_display';
import getParam from './js/DOM/tools';
const url = [];
const data = JSON.parse(localStorage.getItem('groups'));
for (let x of data) {
  url.push(x.title);
}
if (getParam() === '' || getParam() === ' ') {
  document.getElementById('content').innerHTML = '';
  Gform();
  Gdisplay();
}
if (url.includes(getParam().trim())) {
  document.getElementById('content').innerHTML = '';
  Tform();
  Tdisplay();
}

import Tform from './js/DOM/todo_form';
import Tdisplay from './js/DOM/todo_display';
import Gform from './js/DOM/group_form';
import Gdisplay from './js/DOM/group_display';
import getParam from './js/DOM/tools';

const url = [];
const data = JSON.parse(localStorage.getItem('groups'));
for (const x of data) {
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

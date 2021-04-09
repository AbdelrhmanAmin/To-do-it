import Tdisplay from '../src/js/DOM/todo_display';
import Tform from '../src/js/DOM/todo_form';
import Todo from '../src/js/logic/Todo';
import Group from '../src/js/logic/Group';
import { formatDate } from '../src/js/DOM/tools';

describe('Todo form testing', () => {
  document.body.innerHTML = `<div id="content"></div>
  <div
      class="modal"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    ></div>`;

  Tform();
  test('Check if create button exist', () => {
    const btn = document.querySelector('#modal-btn2');
    const modal = document.querySelector('#exampleModal');
    btn.click();
    expect(modal.style.display).not.toBe('');
  });
  test('Check if Todo appears after submitting', () => {
    const title = document.querySelector('#title');
    title.value = 'Kiss mommy';
    const description = document.querySelector('#description');
    description.value = "I love to kiss mommy's hand everyday!";
    const btn = document.querySelector('#btn');
    btn.click();
    const group = new Group('Mommy', 'Kiss mom', []);
    group.add();
    const todo = new Todo(title.value, description.value, formatDate(new Date()), false, 'high');
    todo.add();
    Tdisplay();
    const h3 = document.getElementsByTagName('h3');
    for (let i = 0; i < h3.length; i += 1) {
      if (h3[i].innerHTML === title.value) {
        expect(h3[i].innerHTML).toBe(title.value);
      }
    }
  });
});
import Tdisplay from '../src/js/DOM/todo_display';
import Todo from '../src/js/logic/Todo';
import Gdisplay from '../src/js/DOM/group_display';
import Group from '../src/js/logic/Group';
import { formatDate } from '../src/js/DOM/tools';

describe('Todo display testing', () => {
  document.body.innerHTML = '<div id="content"></div>';
  Gdisplay();
  Tdisplay();
  test('Display auto default todo', () => {
    const h3 = document.getElementsByTagName('h3');
    for (let i = 0; i < h3.length; i += 1) {
      if (h3[i].innerHTML === 'Morning mommy') {
        expect(h3[i].innerHTML).toBe('Morning mommy');
      }
    }
  });
  test('Check if the todo is displayed', () => {
    const group = new Group('Mommy', 'Kiss mom', []);
    group.add();
    const todo = new Todo('Morning Mommy', "Kissing mom's hand", formatDate(new Date()), false, 'high');
    todo.add();
    const h3 = document.getElementsByTagName('h3');
    for (let i = 0; i < h3.length; i += 1) {
      if (h3[i].innerHTML === 'Morning Mommy') {
        expect(h3[i].innerHTML).toBe('Morning Mommy');
      }
    }
  });
});
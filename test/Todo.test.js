import Todo from '../src/js/logic/Todo';
import Group from '../src/js/logic/Group';
import { formatDate } from '../src/js/DOM/tools'
describe('todo testing', () => {
  describe('create a new todo', () => {
    let todo = new Todo('Mommy', "Kissing mom's hand", formatDate(new Date()), false, 'high')
    test('Check todo title', () => {
      expect(todo.title).toBe('Mommy')
    });
    test('Check todo title type', () => {
      todo = new Todo(2, "Kissing mom's hand", formatDate(new Date()), false, 'high')
      expect(typeof todo.title).not.toBe('number')
    })
    test('Check todo title type', () => {
      expect(typeof todo.title).toBe('string')
    })
    test('Check todo description', () => {
      expect(todo.description).toBe("Kissing mom's hand")
    })
    test('Check todo done state', () => {
      expect(todo.done).toBe(false)
    })
    test('Check todo object', () => {
      expect(Object.keys(todo)).toEqual(['title', 'description', 'date', 'done', 'priority']);
    })
  })
  describe('save', () => {
    test('Check if the todo is saved to localStorage', () => {
      let todo = new Todo('Mommy', "Kissing mom's hand", formatDate(new Date()), false, 'high')
      let group = new Group('Mommy', 'Kiss mom', [])
      group.add()
      todo.add()
      expect(JSON.stringify(JSON.parse(localStorage.getItem('groups'))[0].todos)).toBe(JSON.stringify([todo]));
    });
  });
})
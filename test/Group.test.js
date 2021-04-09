import Group from '../src/js/logic/Group';

describe('Group testing', () => {
  describe('create a new group', () => {
    let group = new Group('Mommy', 'Kiss mom', []);
    test('Check group title', () => {
      expect(group.title).toBe('Mommy');
    });
    test('Check group title type', () => {
      group = new Group(2, 'Kiss mom', []);
      expect(typeof group.title).not.toBe('number');
    });
    test('Check group title type', () => {
      expect(typeof group.title).toBe('string');
    });
    test('Check group description', () => {
      expect(group.description).toBe('Kiss mom');
    });
    test('Check group description type', () => {
      group = new Group(2, 'Kiss mom', []);
      expect(typeof group.description).not.toBe('number');
    });
    test('Check group object', () => {
      expect(Object.keys(group)).toEqual(['title', 'description', 'todos']);
    });
  });
  describe('save', () => {
    test('Check if the group is saved to localStorage', () => {
      const group = new Group('Mommy', 'Kiss mom', []);
      group.add();
      expect(localStorage.getItem('groups')).toEqual(JSON.stringify([group]));
    });
  });
});
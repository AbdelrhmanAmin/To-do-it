import Gdisplay from '../src/js/DOM/group_display';
import Group from '../src/js/logic/Group';

describe('Group display testing', () => {
  document.body.innerHTML = '<div id="content"></div>';
  Gdisplay()
  test('Display auto default group', () => {
    const h3 = document.getElementsByTagName('h3');
    for (let i = 0; i < h3.length; i += 1) {
      if (h3[i].innerHTML === 'Default') {
        expect(h3[i].innerHTML).toBe('Default');
      }
    }
  });
  test('Check if the group is displayed', () => {
    let group = new Group('Mommy', 'Kiss mom', [])
    group.add();
    const h3 = document.getElementsByTagName('h3');
    for (let i = 0; i < h3.length; i += 1) {
      if (h3[i].innerHTML === 'Mommy') {
        expect(h3[i].innerHTML).toBe('Mommy');
      }
    }
  });
})
import Gdisplay from '../src/js/DOM/group_display';
import Gform from '../src/js/DOM/group_form';
import Group from '../src/js/logic/Group';

describe('Group form testing', () => {
  document.body.innerHTML = `<div id="content"></div>
  <div
      class="modal"
      id="exampleModal2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    ></div>`;

  Gform();
  test('Check if create button exist', () => {
    const btn = document.querySelector('#modal-btn2');
    const modal = document.querySelector('#exampleModal2');
    btn.click();
    expect(modal.style.display).not.toBe("");
  })
  test('Check if group appears after submitting', () => {
    const title = document.querySelector('#title');
    title.value = 'Mommy'
    const description = document.querySelector('#description');
    description.value = "I love to kiss mommy's hand everyday!"
    let group = new Group(title.value, description.value, [])
    group.add();
    const h3 = document.getElementsByTagName('h3');
    for (let i = 0; i < h3.length; i += 1) {
      if (h3[i].innerHTML === title.value) {
        expect(h3[i].innerHTML).toBe(title.value);
      }
    }
  })
})
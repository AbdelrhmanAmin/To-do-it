import Group from '../logic/Group';
import Tdisplay from './todo_display';
import Tform from './todo_form';
const Delete = (x) => {
  const arr = JSON.parse(localStorage.getItem('groups'));
  for (let i = 0; i < arr.length; i++) {
    if (x.title == arr[i].title) {
      arr.splice(i, 1);
    }
  }
  localStorage.setItem('groups', JSON.stringify(arr));
  window.location.reload();
};
const Gdisplay = () => {
  const content = document.getElementById('content');
  if (
    localStorage.getItem('groups') === null ||
    JSON.parse(localStorage.getItem('groups'))[0] == undefined
  ) {
    localStorage.setItem(
      'groups',
      JSON.stringify([
        new Group('Default', 'Saying good morning to my beloved mother', []),
      ])
    );
  }
  const data = JSON.parse(localStorage.getItem('groups'));
  for (let x of data) {
    const container = document.createElement('div');
    container.className = 'container';
    const card = document.createElement('div');
    card.className = 'card';
    const header = document.createElement('div');
    header.className = 'card-header bg-dark';
    const body = document.createElement('div');
    body.className = 'card-body';
    const footer = document.createElement('div');
    footer.className =
      'card-footer d-flex justify-content-between align-items-center';
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const del = document.createElement('button');
    const view = document.createElement('a');
    del.className = 'ml-auto btn btn-danger';
    del.innerHTML = 'Delete';
    view.className = 'ml-auto btn btn-dark';
    view.innerHTML = 'View Group';
    view.href = `?=${x.title}`;
    view.id = 'view_group';
    h3.innerHTML = x.title;
    h3.className = 'text-white';
    p.innerHTML = `<strong>Description:</strong> <br> ${x.description}`;
    del.addEventListener('click', () => {
      Delete(x);
    });
    footer.appendChild(del);
    footer.appendChild(view);
    body.appendChild(p);
    header.appendChild(h3);
    card.appendChild(header);
    card.appendChild(body);
    card.appendChild(footer);
    container.appendChild(card);
    content.appendChild(container);
  }
};
export default Gdisplay;

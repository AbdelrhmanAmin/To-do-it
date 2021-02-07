import Todo from '../logic/Todo';
import getParam from './tools';

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}
const Done = (obj) => {
  const data = JSON.parse(localStorage.getItem('groups'));
  const priorities = JSON.parse(localStorage.getItem('priorities'));
  console.log(data);
  for (let x of data[0].todos) {
    if (x.title === obj.title) {
      x.done = !x.done;
      if (localStorage.getItem('priorities') === null) {
        const arr = [];
        arr.push({ priority: x.priority, title: x.title });
        localStorage.setItem('priorities', JSON.stringify(arr));
      }
      if (
        priorities.every((i) => {
          return i.title != x.title;
        })
      ) {
        priorities.push({ priority: x.priority, title: x.title });
        localStorage.setItem('priorities', JSON.stringify(priorities));
      }
      if (x.done === true) {
        x.priority = 'done';
      }
      for (let i of priorities) {
        if (x.done === false && i.title == x.title) {
          x.priority = i.priority;
        }
      }
    }
  }
  localStorage.setItem('groups', JSON.stringify(data));
  window.location.reload();
};
const Delete = (x) => {
  const arr = JSON.parse(localStorage.getItem('todos'));
  for (let i = 0; i < arr.length; i++) {
    if (x.title == arr[i].title) {
      arr.splice(i, 1);
    }
  }
  localStorage.setItem('todos', JSON.stringify(arr));
  window.location.reload();
};
const Tdisplay = () => {
  const content = document.getElementById('content');
  const home = document.createElement('a');
  home.href = `?=`;
  home.innerHTML = 'home';
  home.className = 'position-fixed btn btn-primary px-2 m-0';
  home.style = 'top:0';
  if (JSON.parse(localStorage.getItem('groups'))[0].todos.length === 0) {
    const today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    const groups = JSON.parse(localStorage.getItem('groups'));
    groups[0].todos.push(
      new Todo(
        'Morning mommy',
        'Saying good morning to my beloved mother',
        date,
        false,
        'high'
      )
    );
    localStorage.setItem('groups', JSON.stringify(groups));
  }
  let data = [];
  const groups = JSON.parse(localStorage.getItem('groups'));
  const param = getParam();
  groups.map((x) => {
    if (x.title === param) {
      data = [...x.todos];
    }
  });

  for (let x of data) {
    const container = document.createElement('div');
    container.className = 'container';
    const card = document.createElement('div');
    card.className = 'card';
    const header = document.createElement('div');
    header.className = 'card-header';
    const body = document.createElement('div');
    body.className = 'card-body';
    const footer = document.createElement('div');
    footer.className =
      'card-footer d-flex justify-content-between align-items-center';
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const span = document.createElement('span');
    const divDone = document.createElement('div');
    const done = document.createElement('input');
    const doneL = document.createElement('LABEL');
    const priority = document.createElement('div');
    done.setAttribute('type', 'checkbox');
    done.className = 'form-check-input';
    doneL.innerHTML = 'Done:';
    doneL.className = 'form-label px-1';
    const del = document.createElement('button');
    del.className = 'ml-auto btn btn-danger';
    del.innerHTML = 'Delete';
    priority.innerHTML = x.priority;
    h3.innerHTML = x.title;
    h3.className = 'text-white';
    p.innerHTML = `<strong>Description:</strong> <br> ${x.description}`;
    span.innerHTML = `<strong>Date: </strong> <br> ${formatDate(x.date)}`;
    done.checked = x.done;
    if (priority.innerHTML === 'high') {
      header.className = 'p-3 bg-danger';
    }
    if (priority.innerHTML === 'med') {
      header.className = 'p-3 bg-warning';
    }
    if (priority.innerHTML === 'low') {
      header.className = 'p-3 bg-success';
    }
    if (priority.innerHTML === 'done') {
      header.className = 'p-3 bg-default';
      h3.className = 'text-dark';
    }
    done.addEventListener('click', () => {
      Done(x);
    });
    del.addEventListener('click', () => {
      Delete(x);
    });
    divDone.appendChild(doneL);
    divDone.appendChild(done);
    footer.appendChild(divDone);
    footer.appendChild(del);
    body.appendChild(p);
    body.appendChild(span);
    header.appendChild(h3);
    card.appendChild(header);
    card.appendChild(body);
    card.appendChild(footer);
    container.appendChild(card);
    document.body.appendChild(home);
    content.appendChild(container);
  }
};
export default Tdisplay;

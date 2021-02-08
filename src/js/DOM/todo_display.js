import Todo from '../logic/Todo';
import getParam from './tools';

function formatDate(date) {
  const d = new Date(date);
  let month = ` ${(d.getMonth() + 1)}`;
  let day = ` ${d.getDate()}`;
  const year = ` ${d.getFullYear()}`;

  if (month.length < 2) month = `0 ${month}`;
  if (day.length < 2) day = `0 ${day}`;

  return [year, month, day].join('-');
}
const Done = (obj) => {
  const data = JSON.parse(localStorage.getItem('groups'));
  const priorities = JSON.parse(localStorage.getItem('priorities'));
  for (let x = 0; x < data[0].todos.length; x += 1) {
    if (data[0].todos[x].title === obj.title) {
      data[0].todos[x].done = !data[0].todos[x].done;
      if (localStorage.getItem('priorities') === null) {
        const arr = [];
        arr.push({ priority: data[0].todos[x].priority, title: data[0].todos[x].title });
        localStorage.setItem('priorities', JSON.stringify(arr));
      }
      if (
        priorities.every((i) => i.title !== data[0].todos[x].title)
      ) {
        priorities.push({ priority: data[0].todos[x].priority, title: data[0].todos[x].title });
        localStorage.setItem('priorities', JSON.stringify(priorities));
      }
      if (data[0].todos[x].done === true) {
        data[0].todos[x].priority = 'done';
      }
      for (let i = 0; i < priorities.length; i += 1) {
        if (data[0].todos[x].done === false && priorities[i].title === data[0].todos[x].title) {
          data[0].todos[x].priority = priorities[i].priority;
        }
      }
    }
  }
  localStorage.setItem('groups', JSON.stringify(data));
  window.location.reload();
};
const Delete = () => {
  const arr = JSON.parse(localStorage.getItem('groups'));
  for (let i = 0; i < arr.length; i += 1) {
    if (getParam().trim() === arr[i].title) {
      arr[i].todos.forEach((z, index) => {
        arr[i].todos.splice(index, index + 1);
      });
    }
  }
  localStorage.setItem('groups', JSON.stringify(arr));
  window.location.reload();
};
const Tdisplay = () => {
  const content = document.getElementById('content');
  const home = document.createElement('a');
  home.href = '?=';
  home.innerHTML = 'home';
  home.className = 'position-fixed btn btn-primary px-2 m-0';
  home.style = 'top:0';
  if (JSON.parse(localStorage.getItem('groups'))[0].todos.length === 0) {
    const today = new Date();

    const date = `${today.getFullYear()} - ${(today.getMonth() + 1)} - ${today.getDate()}`;
    const groups = JSON.parse(localStorage.getItem('groups'));
    groups[0].todos.push(
      new Todo('Morning mommy', 'Saying good morning to my beloved mother', date, false, 'high'),
    );
    localStorage.setItem('groups', JSON.stringify(groups));
  }
  let data = [];
  const groups = JSON.parse(localStorage.getItem('groups'));
  groups.map((x) => {
    if (x.title === getParam().trim()) {
      data = [...x.todos];
      return data
    }
  });

  for (let x = 0; x < data.length; x += 1) {
    const container = document.createElement('div');
    container.className = 'container';
    const card = document.createElement('div');
    card.className = 'card';
    const header = document.createElement('div');
    header.className = 'card-header';
    const body = document.createElement('div');
    body.className = 'card-body';
    const footer = document.createElement('div');
    footer.className = 'card-footer d-flex justify-content-between align-items-center';
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
    priority.innerHTML = data[x].priority;
    h3.innerHTML = data[x].title;
    h3.className = 'text-white';
    p.innerHTML = `<strong>Description:</strong> <br> ${data[x].description}`;
    span.innerHTML = `<strong>Date: </strong> <br> ${formatDate(data[x].date)}`;
    done.checked = data[x].done;
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
      Done(data[x]);
    });
    del.addEventListener('click', () => {
      Delete(data[x]);
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

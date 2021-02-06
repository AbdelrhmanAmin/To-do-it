import Todo from '../logic/Todo';

const Done = (value) => {
  const data = JSON.parse(localStorage.getItem('todos'));
  for (let x of data) {
    x.done = value;
  }
  localStorage.setItem('todos', JSON.stringify(data));
};
const Display = () => {
  const content = document.getElementById('content');
  if (localStorage.getItem('todos') === null) {
    const today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    localStorage.setItem(
      'todos',
      JSON.stringify([
        new Todo(
          'Morning mommy',
          'Saying good morning to my beloved mother',
          date,
          false,
          'high'
        ),
      ])
    );
  }
  const data = JSON.parse(localStorage.getItem('todos'));
  for (let x of data) {
    const div = document.createElement('div');
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
    doneL.className = 'form-label px-3';
    divDone.className = 'mb-3';
    priority.innerHTML = x.priority;
    if (priority.innerHTML === 'high') {
      priority.className = 'p-5 bg-danger';
    }
    if (priority.innerHTML === 'med') {
      priority.className = 'p-5 bg-warning';
    }
    if (priority.innerHTML === 'low') {
      priority.className = 'p-5 bg-success';
    }

    h3.innerHTML = x.title;
    p.innerHTML = x.description;
    span.innerHTML = x.date;
    done.checked = x.done;
    done.addEventListener('click', () => {
      Done(done.checked);
    });
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(span);
    divDone.appendChild(done);
    divDone.appendChild(doneL);
    div.appendChild(divDone);
    div.appendChild(priority);
    content.appendChild(div);
  }
};
export default Display;

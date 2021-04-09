import Todo from '../logic/Todo';

const Tform = () => {
  const priorities = ['high', 'med', 'low'];
  const displayHTML = document.getElementById('content');
  const modal = document.getElementById('exampleModal');
  const modalBtn = document.createElement('button');
  const i = document.createElement('i');
  modalBtn.className = 'btn btn-warning';
  modalBtn.id = 'modal-btn2';
  modalBtn.appendChild(i);
  i.className = 'fas fa-plus-circle fa-2x text-white';
  const dialog = document.createElement('div');
  dialog.className = 'modal-dialog';

  const container = document.createElement('div');
  container.className = 'modal-content';

  const header = document.createElement('div');
  header.className = 'modal-header bg-primary';

  const h5 = document.createElement('h5');
  h5.className = 'modal-title text-uppercase text-white';
  h5.innerHTML = 'Create a To-do!';

  const exit = document.createElement('button');
  exit.className = 'close';
  const spanExit = document.createElement('span');
  spanExit.innerHTML = '&#215;';
  spanExit.className = 'h2';
  exit.className = 'btn btn-danger py-0 px-2';

  modalBtn.addEventListener('click', () => {
    modal.style = 'display:block; background: #050505a8';
  });
  exit.addEventListener('click', () => {
    modal.style = 'display:none;';
  });
  const content = document.createElement('div');
  content.className = 'modal-body';

  const form = document.createElement('form');
  const divTitle = document.createElement('div');
  const title = document.createElement('input');
  const titleL = document.createElement('LABEL');
  title.setAttribute('type', 'text');
  title.className = 'form-control';
  titleL.innerHTML = 'Title:';
  titleL.className = 'form-label h5';
  divTitle.className = 'mb-3';
  const divDesc = document.createElement('div');
  const description = document.createElement('TEXTAREA');
  const descriptionL = document.createElement('LABEL');
  description.className = 'form-control';
  descriptionL.innerHTML = 'Description:';
  descriptionL.className = 'form-label h5';
  divDesc.className = 'mb-3';
  const divDate = document.createElement('div');
  const date = document.createElement('input');
  divDate.className = 'mb-3';
  date.setAttribute('type', 'date');
  const priority = document.createElement('SELECT');
  const btn = document.createElement('input');
  btn.setAttribute('type', 'submit');
  btn.className = 'btn btn-primary w-100';
  btn.style = 'font-weight: bolder';
  priority.className = 'form-select my-3';
  title.id = 'title';
  title.required = true;
  description.id = 'description';
  description.required = true;
  date.id = 'date';
  date.required = true;
  priority.id = 'priority';
  btn.id = 'btn';
  for (let x = 0; x < priorities.length; x += 1) {
    const option = document.createElement('option');
    if (priorities[x] === priorities[2]) {
      option.selected = true;
    }
    option.value = priorities[x];
    option.text = priorities[x];
    priority.appendChild(option);
  }
  header.appendChild(h5);
  exit.appendChild(spanExit);
  header.appendChild(exit);
  container.appendChild(header);
  divTitle.appendChild(titleL);
  divTitle.appendChild(title);
  form.appendChild(divTitle);
  divDesc.appendChild(descriptionL);
  divDesc.appendChild(description);
  form.appendChild(divDesc);
  divDate.appendChild(date);
  form.appendChild(divDate);
  form.appendChild(priority);
  form.appendChild(btn);
  content.appendChild(form);
  container.appendChild(content);
  dialog.appendChild(container);
  modal.appendChild(dialog);

  displayHTML.appendChild(modalBtn);
  btn.addEventListener('click', () => {
    if (title.value !== '' && description.value !== '') {
      const todo = new Todo(title.value, description.value, date.value, false, priority.value);
      todo.add();
    }
  });
};
export default Tform;

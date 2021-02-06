import Todo from '../logic/Todo';

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}
const Form = () => {
  const priorities = ['high', 'med', 'low'];
  const content = document.getElementById('content');
  const form = document.createElement('form');
  const divTitle = document.createElement('div');
  const title = document.createElement('input');
  const titleL = document.createElement('LABEL');
  title.setAttribute('type', 'text');
  title.className = 'form-control';
  titleL.innerHTML = 'Title:';
  titleL.className = 'form-label h3';
  divTitle.className = 'mb-3';
  const divDesc = document.createElement('div');
  const description = document.createElement('TEXTAREA');
  const descriptionL = document.createElement('LABEL');
  description.className = 'form-control';
  descriptionL.innerHTML = 'description:';
  descriptionL.className = 'form-label h3';
  divDesc.className = 'mb-3';
  const divDate = document.createElement('div');
  const date = document.createElement('input');
  divDate.className = 'mb-3';
  date.setAttribute('type', 'date');
  const priority = document.createElement('SELECT');
  const btn = document.createElement('input');
  btn.setAttribute('type', 'submit');
  btn.className = 'btn btn-primary';
  priority.className = 'form-select';
  title.id = 'title';
  title.required = true;
  description.id = 'description';
  description.required = true;
  date.id = 'date';
  date.required = true;
  priority.id = 'priority';
  btn.id = 'btn';
  for (let x of priorities) {
    var option = document.createElement('option');
    if (x == priorities[2]) {
      option.selected = true;
    }
    option.value = x;
    option.text = x;
    priority.appendChild(option);
  }
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

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (title.value !== '' && description.value !== '') {
      const todo = new Todo(
        title.value,
        description.value,
        formatDate(date.value),
        false,
        priority.value
      );
      todo.add();
    }
    window.location.reload();
  });
};
export default Form;

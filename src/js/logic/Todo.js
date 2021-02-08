import getParam from '../DOM/tools';

export default class Todo {
  constructor(title, description, date, done = false, priority = 'low') {
    this.title = String(title);
    this.description = String(description);
    this.date = new Date(date);
    this.done = done;
    this.priority = priority;
  }

  add() {
    const url = [];
    const data = JSON.parse(localStorage.getItem('groups'));
    let selectedField;
    for (const x of data) {
      url.push(x.title);
    }
    const Gdefault = data[0].todos;
    Gdefault.push(this.create());
    if (url.includes(getParam().trim()) && getParam().trim() !== 'Default') {
      data.map((x) => {
        if (x.title === getParam().trim()) {
         return selectedField = x;
        }
      });
      selectedField.todos.push(this.create());
    }
    localStorage.setItem('groups', JSON.stringify(data));
  }

  create() {
    const { title, description, date, done, priority } = this;

    return {
      title,
      description,
      date,
      done,
      priority,
    };
  }
}

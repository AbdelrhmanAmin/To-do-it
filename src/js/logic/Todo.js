import getParam from '../DOM/tools';

export default class Todo {
  constructor(title, description, date, done = false, priority = 'low', group) {
    this.title = String(title);
    this.description = String(description);
    this.date = new Date(date);
    this.done = done;
    this.priority = priority;
    this.group = group;
  }
  add() {
    const url = [];
    const data = JSON.parse(localStorage.getItem('groups'));
    let selectedField;
    for (let x of data) {
      url.push(x.title);
    }
    const Gdefault = data[0].todos;
    Gdefault.push(this.create());
    if (url.includes(getParam()) && getParam() != 'Default') {
      data.map((x) => {
        if (x.title === getParam()) {
          selectedField = x;
        }
      });
    }
    selectedField.todos.push(this.create());
    localStorage.setItem('groups', JSON.stringify(data));
  }
  create() {
    const { title, description, date, done, priority, group } = this;
    return {
      title,
      description,
      date,
      done,
      priority,
      group,
    };
  }
}

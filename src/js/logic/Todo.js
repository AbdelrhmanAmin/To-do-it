export default class Todo {
  constructor(title, description, date, done = false, priority = 'low') {
    this.title = String(title);
    this.description = String(description);
    this.date = new Date(date);
    this.done = done;
    this.priority = priority;
  }
  add() {
    const arr = JSON.parse(localStorage.getItem('todos'));
    arr.push(this.create());
    localStorage.setItem('todos', JSON.stringify(arr));
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

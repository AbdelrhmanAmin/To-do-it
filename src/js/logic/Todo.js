export default class Todo {
  constructor(title, description, date, done = false, priority = 'low') {
    this.title = String(title);
    this.description = String(description);
    this.date = new Date(date);
    this.done = done;
    this.priority = priority;
  }
  add() {
    const arr = JSON.parse(localStorage.getItem('todos')) || [];
    if (arr === []) {
      localStorage.setItem('todos', []);
    }
    arr.push(this.create());
    localStorage.setItem('todos', JSON.stringify(arr));
  }
  delete() {
    const arr = JSON.parse(localStorage.getItem('todos'));
    priority;
    for (let i = 0; i < arr.length; i++) {
      if (this.title == arr[i].title) {
        arr.splice(i, 1);
      }
    }
    localStorage.setItem('todos', JSON.stringify(arr));
  }
  edit(done = false, priority) {
    const arr = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < arr.length; i++) {
      if (this.title == arr[i].title) {
        arr[i].done = done;
        arr[i].priority = priority;
        console.log(arr[i]);
      }
    }
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

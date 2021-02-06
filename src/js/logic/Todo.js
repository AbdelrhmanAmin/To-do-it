const priorities = ['high', 'med', 'low'];
export default class Todo {
  constructor(title, description, date, done = false) {
    this.title = String(title);
    this.description = String(description);
    this.date = new Date(date);
    this.done = done;
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
  edit(done) {
    const arr = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < arr.length; i++) {
      if (this.title == arr[i].title) {
        arr[i].done = done;
        console.log(arr[i]);
      }
    }
    localStorage.setItem('todos', JSON.stringify(arr));
  }
  create() {
    const { title, description, date, done } = this;
    return {
      title,
      description,
      date,
      done,
    };
  }
}

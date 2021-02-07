export default class Group {
  constructor(title, description) {
    this.title = String(title);
    this.description = String(description);
  }
  add() {
    const arr = JSON.parse(localStorage.getItem('groups'));
    arr.push(this.create());
    localStorage.setItem('groups', JSON.stringify(arr));
  }
  create() {
    const { title, description } = this;
    return {
      title,
      description,
    };
  }
}

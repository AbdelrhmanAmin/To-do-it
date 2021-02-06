(() => {
  'use strict';
  class t {
    constructor(t, e, o, s = !1) {
      (this.title = String(t)),
        (this.description = String(e)),
        (this.date = new Date(o)),
        (this.done = s);
    }
    add() {
      const t = JSON.parse(localStorage.getItem('todos')) || [];
      t === [] && localStorage.setItem('todos', []),
        t.push(this.create()),
        localStorage.setItem('todos', JSON.stringify(t));
    }
    delete() {
      const t = JSON.parse(localStorage.getItem('todos'));
      for (let e = 0; e < t.length; e++)
        this.title == t[e].title && t.splice(e, 1);
      localStorage.setItem('todos', JSON.stringify(t));
    }
    edit(t) {
      const e = JSON.parse(localStorage.getItem('todos'));
      for (let o = 0; o < e.length; o++)
        this.title == e[o].title && ((e[o].done = t), console.log(e[o]));
      localStorage.setItem('todos', JSON.stringify(e));
    }
    create() {
      const { title: t, description: e, date: o, done: s } = this;
      return { title: t, description: e, date: o, done: s };
    }
  }
  const e = new t('Test1', 'Test', '2019-01-01'),
    o = new t('Test2', 'Test', '2019-01-01'),
    s = new t('Test3', 'Test', '2019-01-01');
  e.add(), o.add(), s.add(), o.delete(), s.edit(!0);
})();

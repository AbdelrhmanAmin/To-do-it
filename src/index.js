import Todo from './js/logic/Todo';

const test1 = new Todo('Test1', 'Test', '2019-01-01');
const test2 = new Todo('Test2', 'Test', '2019-01-01');
const test3 = new Todo('Test3', 'Test', '2019-01-01');
test1.add();
test2.add();
test3.add();
test2.delete();
test3.edit(true);

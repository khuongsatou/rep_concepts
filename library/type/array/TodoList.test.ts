import { TodoItem, TodoList } from './TodoList';

describe('TodoList', () => {
    let todoList: TodoList;

    beforeEach(() => {
        todoList = new TodoList();
    });

    test('should add a task', () => {
        todoList.addTask('Buy groceries');
        expect(todoList.getTasks().length).toBe(1);
    });

    test('should complete a task', () => {
        todoList.addTask('Write code');
        todoList.completeTask(1);
        const completedTask = todoList.getTasks()[0];
        expect(completedTask.completed).toBe(true);
    });

    test('should remove a task', () => {
        todoList.addTask('Read a book');
        todoList.removeTask(1);
        expect(todoList.getTasks().length).toBe(0);
    });

    test('should not complete a non-existent task', () => {
        todoList.completeTask(1);
        expect(todoList.getTasks().length).toBe(0);
    });

    test('should not remove a non-existent task', () => {
        todoList.removeTask(1);
        expect(todoList.getTasks().length).toBe(0);
    });
});

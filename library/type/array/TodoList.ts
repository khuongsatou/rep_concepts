export class TodoItem {
    constructor(public id: number, public task: string, public completed: boolean = false) {}
}

export class TodoList {
    private todoItems: TodoItem[] = [];
    private nextId: number = 1;

    addTask(task: string): void {
        const newItem = new TodoItem(this.nextId++, task);
        this.todoItems.push(newItem);
    }

    getTasks(): TodoItem[] {
        return this.todoItems;
    }

    completeTask(id: number): void {
        const item = this.findItemById(id);
        if (item) {
            item.completed = true;
        }
    }

    removeTask(id: number): void {
        this.todoItems = this.todoItems.filter(item => item.id !== id);
    }

    private findItemById(id: number): TodoItem | undefined {
        return this.todoItems.find(item => item.id === id);
    }
}

// Example Usage:

const todoList = new TodoList();

todoList.addTask("Buy groceries");
todoList.addTask("Write code");
todoList.addTask("Read a book");

console.log("All Tasks:");
console.log(todoList.getTasks());

todoList.completeTask(2);

console.log("Tasks after completion:");
console.log(todoList.getTasks());

todoList.removeTask(1);

console.log("Tasks after removal:");
console.log(todoList.getTasks());

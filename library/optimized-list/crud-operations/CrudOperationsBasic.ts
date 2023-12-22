export class SimpleCrud<T> {
    private items: T[] = [];
  
    create(item: T): void {
      this.items.push(item);
    }
  
    read(): T[] {
      return this.items;
    }
  
    update(index: number, newItem: T): void {
      if (index >= 0 && index < this.items.length) {
        this.items[index] = newItem;
      } else {
        throw new Error("Index out of range");
      }
    }
  
    delete(index: number): void {
      if (index >= 0 && index < this.items.length) {
        this.items.splice(index, 1);
      } else {
        throw new Error("Index out of range");
      }
    }
  }
  
// Sử dụng lớp SimpleCrud
const crud = new SimpleCrud<string>();

// Thêm mục mới
crud.create("Item 1");
crud.create("Item 2");
crud.create("Item 3");

// Hiển thị danh sách
console.log("Danh sách ban đầu:", crud.read());

// Cập nhật một mục
crud.update(1, "Item 2 Updated");
console.log("Danh sách sau khi cập nhật:", crud.read());

// Xóa một mục
crud.delete(0);
console.log("Danh sách sau khi xóa:", crud.read());
  
export class SimpleCrudAdvance<T extends { id: number }> {
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
  
    getListById(ids: number[]): T[] {
      return this.items.filter(item => ids.includes(item.id));
    }
  
    getItemById(id: number): T | undefined {
      return this.items.find(item => item.id === id);
    }
  }
  
  // Sử dụng lớp SimpleCrud
  interface Item {
    id: number;
    name: string;
  }
  
  const crudAdvance = new SimpleCrudAdvance<Item>();
  
  // Thêm mục mới
  crudAdvance.create({ id: 1, name: "Item 1" });
  crudAdvance.create({ id: 2, name: "Item 2" });
  crudAdvance.create({ id: 3, name: "Item 3" });
  
  // Hiển thị danh sách
  console.log("Danh sách ban đầu:", crudAdvance.read());
  
  // Lấy danh sách theo ID
  const listById = crudAdvance.getListById([1, 3]);
  console.log("Danh sách theo ID:", listById);
  
  // Lấy mục theo ID
  const itemById = crudAdvance.getItemById(2);
  console.log("Mục theo ID:", itemById);
  
  // Cập nhật một mục
  crudAdvance.update(1, { id: 1, name: "Item 1 Updated" });
  // console.log("Danh sách sau khi cập nhật:", crudAdvance.read());
  
  // Xóa một mục
  crudAdvance.delete(0);
  // console.log("Danh sách sau khi xóa:", crudAdvance.read());
  
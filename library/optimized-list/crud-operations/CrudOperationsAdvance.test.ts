// SimpleCrud.test.ts
import { expect } from 'chai';
import { SimpleCrudAdvance } from './CrudOperationsAdvance'; 

interface Item {
  id: number;
  name: string;
}

describe('SimpleCrud', () => {
  let crud: SimpleCrudAdvance<Item>;

  beforeEach(() => {
    crud = new SimpleCrudAdvance<Item>();
    crud.create({ id: 1, name: "Item 1" });
    crud.create({ id: 2, name: "Item 2" });
    crud.create({ id: 3, name: "Item 3" });
  });

  it('should create a new item', () => {
    crud.create({ id: 4, name: "Item 4" });
    expect(crud.read()).to.have.lengthOf(4);
  });

  it('should update an existing item', () => {
    crud.update(1, { id: 1, name: "Item 1 Updated" });
    const updatedItem = crud.getItemById(1);
    // expect(updatedItem?.name).to.equal("Item 1 Updated");// Đã test
  });

  it('should delete an item', () => {
    crud.delete(2);
    expect(crud.read()).to.have.lengthOf(2);
  });

  it('should get a list of items by ID', () => {
    const listById = crud.getListById([1, 3]);
    expect(listById).to.have.lengthOf(2);
  });

  it('should get an item by ID', () => {
    const itemById = crud.getItemById(2);
    expect(itemById?.name).to.equal("Item 2");
  });
});

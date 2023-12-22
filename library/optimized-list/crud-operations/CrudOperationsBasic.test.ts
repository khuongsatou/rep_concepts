// SimpleCrud.test.ts
import { expect } from 'chai';
import { SimpleCrud } from './CrudOperationsBasic';

interface Item {
  id: number;
  name: string;
}

describe('SimpleCrud', () => {
  let crud: SimpleCrud<Item>;

  beforeEach(() => {
    crud = new SimpleCrud<Item>();
    crud.create({ id: 1, name: "Item 1" });
    crud.create({ id: 2, name: "Item 2" });
    crud.create({ id: 3, name: "Item 3" });
  });

  it('should create a new item', () => {
    crud.create({ id: 4, name: "Item 4" });
    expect(crud.read()).to.have.lengthOf(4);
  });

  it('should delete an item', () => {
    crud.delete(2);
    expect(crud.read()).to.have.lengthOf(2);
  });
});

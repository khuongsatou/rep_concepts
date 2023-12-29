import { Product, ProductManagementSystem } from './ProductManagementSystem';

describe('ProductManagementSystem', () => {
  let productManagementSystem: ProductManagementSystem;

  beforeEach(() => {
    productManagementSystem = new ProductManagementSystem();
  });

  test('should add a product', () => {
    const product = new Product('Laptop', 1000, 'High-performance laptop');
    productManagementSystem.addProduct(product);
    expect(productManagementSystem.getProducts()).toContain(product);
  });

  test('should search products by keyword', () => {
    const product1 = new Product('Laptop', 1000, 'High-performance laptop');
    const product2 = new Product('Smartphone', 500, 'Latest smartphone model');
    productManagementSystem.addProduct(product1);
    productManagementSystem.addProduct(product2);

    const searchResult = productManagementSystem.searchProducts('Laptop');
    expect(searchResult).toContain(product1);
    expect(searchResult).not.toContain(product2);
  });

  test('should delete a product', () => {
    const product = new Product('Laptop', 1000, 'High-performance laptop');
    productManagementSystem.addProduct(product);
    productManagementSystem.deleteProduct(product);
    expect(productManagementSystem.getProducts()).not.toContain(product);
  });
});

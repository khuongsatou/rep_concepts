export class Product {
    constructor(public name: string, public price: number, public description: string) {}
}

export class ProductManagementSystem {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    getProducts(): Product[] {
        return this.products;
    }

    searchProducts(keyword: string): Product[] {
        return this.products.filter(product =>
            product.name.toLowerCase().includes(keyword.toLowerCase()) ||
            product.description.toLowerCase().includes(keyword.toLowerCase())
        );
    }

    deleteProduct(product: Product): void {
        const index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }
}

// Example Usage:

const productManagementSystem = new ProductManagementSystem();

const product1 = new Product("Laptop", 1000, "High-performance laptop");
const product2 = new Product("Smartphone", 500, "Latest smartphone model");

productManagementSystem.addProduct(product1);
productManagementSystem.addProduct(product2);

console.log("All Products:");
console.log(productManagementSystem.getProducts());

const searchResult = productManagementSystem.searchProducts("Laptop");
console.log("Search Result:");
console.log(searchResult);

productManagementSystem.deleteProduct(product1);

console.log("Products after deletion:");
console.log(productManagementSystem.getProducts());

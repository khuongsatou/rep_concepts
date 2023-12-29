// inheritance_and_polymorphism.ts

class Shape {
    constructor(protected name: string) {}
  
    // Phương thức tính diện tích, sẽ được ghi đè trong các lớp con
    calculateArea(): number {
      return 0;
    }
  
    // Phương thức in ra thông tin về hình
    displayInfo(): string {
      return `This is a ${this.name}.`;
    }
  }
  
 export class Circle extends Shape {
    constructor(private radius: number) {
      super("circle");
    }
  
    // Ghi đè phương thức calculateArea của lớp cha
    calculateArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  export  class Square extends Shape {
    constructor(private sideLength: number) {
      super("square");
    }
  
    // Ghi đè phương thức calculateArea của lớp cha
    calculateArea(): number {
      return this.sideLength ** 2;
    }
  }
  



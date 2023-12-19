// let_and_const.ts
function letExample() {
    let x = 10;
  
    if (true) {
      let x = 20; // Khai báo một biến x khác trong phạm vi khác
      // console.log(x); // Output: 20
    }
      
    // console.log(x); // Output: 10
  }
  
  function constExample() {
    const y = 30;
  
    if (true) {
      // const y = 40; // Lỗi: Không thể tái sử dụng tên biến const trong cùng phạm vi
      // console.log(y); // Output: 30
    }
  
    // console.log(y); // Output: 30
  }
  
  export { letExample, constExample };
  
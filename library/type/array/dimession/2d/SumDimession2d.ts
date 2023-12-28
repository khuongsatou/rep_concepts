const array2DDD: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Sử dụng map và reduce để tính tổng
  const totalSummm: number = array2D.map(row => row.reduce((acc, element) => acc + element, 0))
                                  .reduce((acc, rowSum) => acc + rowSum, 0);
  
  console.log(totalSum); // Kết quả: 45
  
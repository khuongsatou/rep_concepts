//Hàm fibonacci tính toán số Fibonacci của một số nguyên n.
//Memoization được sử dụng để lưu trữ kết quả của các giá trị fibonacci(n) đã tính toán trước đó.
//Khi hàm gọi fibonacci(n) với một giá trị đã được tính toán trước đó, nó trả về kết quả lưu trữ trong memoizedFib thay vì tính toán lại từ đầu.


const memoizedFib: { [key: number]: number } = {};

function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }

  if (memoizedFib[n] !== undefined) {
    return memoizedFib[n];
  }

  memoizedFib[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memoizedFib[n];
}

// Sử dụng hàm đã được memoization
const result1: number = fibonacci(5); // Kết quả: 5
const result2: number = fibonacci(8); // Kết quả: 21

//{ '0': 0, '1': 1, '2': 1, '3': 2, '4': 3, '5': 5, '6': 8, '7': 13, '8': 21 }

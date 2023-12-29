// callback_functions.ts

export function calculateAsyncSum(a: number, b: number, callback: (result: number) => void): void {
    // Giả sử đây là một tác vụ bất đồng bộ (async)
    setTimeout(() => {
      const sum = a + b;
      callback(sum);
    }, 1000);
  }
  
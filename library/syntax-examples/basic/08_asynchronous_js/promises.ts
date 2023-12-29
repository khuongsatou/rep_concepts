// promises.ts

export function calculateSumAsync(a: number, b: number): Promise<number> {
    return new Promise((resolve, reject) => {
      // Giả sử đây là một tác vụ bất đồng bộ (async)
      setTimeout(() => {
        const sum = a + b;
        resolve(sum);
      }, 1000);
    });
  }
  
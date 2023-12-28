Vòng lặp reduce cơ bản:

Lần 1:

acc: 0
row: [1, 2, 3]
calculateSum(row, 0): Tính toán tổng của hàng [1, 2, 3] và lưu vào memoizedSum.
totalSum: 0 + (tổng của hàng) = 6
Lần 2:

acc: 6
row: [4, 5, 6]
calculateSum(row, 0): Sử dụng kết quả đã tính toán trước đó cho hàng [4, 5, 6] từ memoizedSum.
totalSum: 6 + (tổng của hàng) = 21
Lần 3:

acc: 21
row: [7, 8, 9]
calculateSum(row, 0): Sử dụng kết quả đã tính toán trước đó cho hàng [7, 8, 9] từ memoizedSum.
totalSum: 21 + (tổng của hàng) = 45
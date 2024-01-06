// Hàm bất đồng bộ cần được mock
async function fetchData() {
    // Mô phỏng việc lấy dữ liệu từ một nguồn nào đó
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: 'Mocked data' });
      }, 1000);
    });
  }
  
  // Test case sử dụng mockResolvedValue
  test('fetchData resolves with mocked data', async () => {
    // Tạo mock cho fetchData và thiết lập giá trị giả định
    const mockedFetchData = jest.fn();
    mockedFetchData.mockResolvedValue({ data: 'Mocked data' });
  
    // Sử dụng fetchData trong test case
    const result = await mockedFetchData();
  
    // Kiểm tra xem giá trị đã được giả định chưa
    expect(result).toEqual({ data: 'Mocked data' });
    // Kiểm tra xem fetchData đã được gọi với đúng các đối số nếu cần
    expect(mockedFetchData).toHaveBeenCalledTimes(1);
  });
  
class Message {
  public timestamp: Date;
  public content: string;

  constructor(content: string, timestamp?: Date) {
    this.content = content;
    this.timestamp = timestamp || new Date(); // Sử dụng thời gian hiện tại nếu không có tham số truyền vào
  }

  getContent() {
    return this.content;
  }

  // Getter cho timestamp, trả về thời gian ở múi giờ +0
  getTimestamp(): Date {
    const timestampUtc = new Date(this.timestamp.toISOString()); // Chuyển đổi sang chuỗi ISO để có thời gian UTC
    return timestampUtc;
  }

  saveTimeStamp() {
    const customerVietnamTime = new Date();
    const customerJapanTime = new Date();

    const vietnamRecord = {
      time: customerVietnamTime.toISOString(),
      timeZone: "+7", // Múi giờ Việt Nam
    };

    const japanRecord = {
      time: customerJapanTime.toISOString(),
      timeZone: "+9", // Múi giờ Nhật Bản
    };
  }

  // Lưu trữ tin nhắn vào cơ sở dữ liệu
  saveToDatabase(): void {
    // TODO: Viết logic để lưu trữ vào cơ sở dữ liệu
    // Trong thực tế, bạn sẽ sử dụng một thư viện hoặc API để thao tác với cơ sở dữ liệu.
    console.log(
      `Saving message "${
        this.content
      }" to the database at timestamp ${this.getTimestamp().toISOString()}`
    );
  }
}

export { Message };

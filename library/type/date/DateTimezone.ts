// Chuyển đổi múi giờ từ máy (+7) sang server  -> (utc) -> database timezone sẽ là bất kì không phải UTC+0
// Còn nếu dùng timezone Europe/London thì sẽ ra UTC+0 nhưng nó sẽ sử dụng thêm GTM để hiển thị nên sẽ khác với UTC
// Vì thế nên dùng UTC là chuẩn
// Nếu sử dụng moment thì sẽ đúng utc == Europe/London


// Quy trình: 
// - Send User [Local User] -> Add [convert UTC] -> Send Server -> Receive DataBase -> Save Database.
// - Send User [Convert UTC to Local user] -> GET Database

// Dùng timezone 
import moment from "moment-timezone";
export class TimeHandler {
  public userTimeZone: string;
  public serverTimeZone: string;

  constructor() {
    this.userTimeZone = "Asia/Bangkok"; // Múi giờ của người dùng
    this.serverTimeZone = "etc/UTC"; // Múi giờ của server mặc định cho UTC đừng cho Europe/London vì sẽ lệch do cơ chế javascript

}

  // Người dùng thêm thời gian từ điện thoại
  addUserTime(): void {
    const userTime = new Date(); // Thời gian từ điện thoại
    console.log(
      "User Time:",
      userTime.toLocaleString("en-US", { timeZone: this.userTimeZone })
    );

    // Chuyển đổi thời gian từ múi giờ của người dùng sang UTC
    const utcTime = this.convertToUTC(userTime);
    console.log(
      "UTC Time:",
      utcTime.toLocaleString("en-US", { timeZone: "UTC" })
    );

    // Gửi dữ liệu lên server
    this.sendDataToServer(utcTime);
    
    // Test với moment.
    const londonTime = moment.tz("2023-12-24T13:25:00", "Asia/Bangkok");
    const utcTime2 = londonTime.utc();

    console.log("London Time:", londonTime.format());
    console.log("UTC Time:", utcTime2.format());
  }

  // Server nhận và lưu dữ liệu vào database
  receiveDataFromUser(utcTime: Date): void {
    // Chuyển đổi thời gian từ UTC sang múi giờ của server
    const serverTime = this.convertFromUTC(utcTime);
    console.log(
      "Server Time:",
      serverTime.toLocaleString("en-US", { timeZone: this.serverTimeZone })
    );

    // Lưu vào cơ sở dữ liệu
    this.saveToDatabase(serverTime);
  }

  // Trả về dữ liệu cho người dùng
  sendDataToUser(): void {
    // Lấy thời gian từ cơ sở dữ liệu
    const dataFromDatabase = this.getDataFromDatabase();

    // Chuyển đổi thời gian từ múi giờ của server sang múi giờ của người dùng
    const userTime = this.convertFromServerTime(dataFromDatabase);
    console.log(
      "User Time:",
      userTime.toLocaleString("en-US", { timeZone: this.userTimeZone })
    );
  }

  // Chuyển đổi thời gian từ múi giờ của người dùng sang UTC
  // Quan trọng trong việc xử lý timezone
  // Rất quan trọng để tính toán trên server
  // Còn khi tính toán thì nên tính toán trên UTC
  // Khi tính toán trên server thì nên config server về timezone UTC+0
  // Khi lưu vào database thì nên config database về timezone UTC+0
  // Con khi nếu muốn chuẩn thì nên dùng moment vì trên javascript nó lấy theo timezone trình duyêt
  public convertToUTC(userTime: Date): Date {
    return new Date(userTime.toLocaleString("en-US", { timeZone: "UTC" }));
  }

  // Chuyển đổi thời gian từ UTC sang múi giờ của người dùng
  public convertFromUTC(utcTime: Date): Date {
    return new Date(
      utcTime.toLocaleString("en-US", { timeZone: this.userTimeZone })
    );
  }

  // Chuyển đổi thời gian từ múi giờ của server sang múi giờ của người dùng
  public convertFromServerTime(serverTime: Date): Date {
    return new Date(
      serverTime.toLocaleString("en-US", { timeZone: this.userTimeZone })
    );
  }

  // Gửi dữ liệu lên server
  public sendDataToServer(utcTime: Date): void {
    // Gửi dữ liệu lên server và nhận kết quả
    // Giả sử có một hàm hoặc API để gửi dữ liệu lên server
    const serverResponse = this.sendDataToServerAPI(utcTime);

    // Server nhận và lưu dữ liệu vào database
    this.receiveDataFromUser(serverResponse);
  }

  // Giả sử có một hàm hoặc API để gửi dữ liệu lên server
  public sendDataToServerAPI(data: Date): Date {
    // Gửi dữ liệu và nhận kết quả từ server
    console.log(
      "Data sent to server:",
      data.toLocaleString("en-US", { timeZone: "UTC" })
    );
    return new Date(); // Giả sử server trả về thời gian sau khi xử lý
  }

  // Lưu vào cơ sở dữ liệu
  public saveToDatabase(serverTime: Date): void {
    // Lưu dữ liệu vào cơ sở dữ liệu
    console.log(
      "Data saved to database:",
      serverTime.toLocaleString("en-US", { timeZone: "UTC" })
    );
  }

  // Lấy dữ liệu từ cơ sở dữ liệu
  public getDataFromDatabase(): Date {
    // Giả sử có một hàm hoặc API để lấy dữ liệu từ cơ sở dữ liệu
    const dataFromDatabase = this.getDataFromDatabaseAPI();
    console.log(
      "Data retrieved from database:",
      dataFromDatabase.toLocaleString("en-US", { timeZone: "UTC" })
    );
    return dataFromDatabase;
  }

  // Giả sử có một hàm hoặc API để lấy dữ liệu từ cơ sở dữ liệu
  public getDataFromDatabaseAPI(): Date {
    // Lấy dữ liệu từ cơ sở dữ liệu và trả về
    return new Date(); // Giả sử dữ liệu trả về từ cơ sở dữ liệu là thời gian
  }

  public changeTimeZone(userTime: Date): Date {
    // Chuyển đổi thời gian về UTC+0
    const utcTime = new Date(
      userTime.getTime() + Math.abs(userTime.getTimezoneOffset() * 60 * 1000)
    );
    return utcTime;
  }
}

// Sử dụng lớp TimeHandler
const timeHandler = new TimeHandler();
timeHandler.addUserTime(); // Người dùng thêm thời gian từ điện thoại
timeHandler.sendDataToUser(); // Trả về dữ liệu cho người dùng
const timeUTC = timeHandler.changeTimeZone(
  new Date("2023-01-01T12:00:00+07:00")
);
console.log("In File: DateTimezone.ts, Line: 107", timeUTC);

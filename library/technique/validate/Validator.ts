import * as fs from 'fs';
import * as mime from 'mime-types';
import * as path from "path";



interface CheckboxItem {
  id: number;
  label: string;
  value: boolean;
}

interface RadioItem {
  id: number;
  label: string;
  value: boolean;
}

interface Option {
  id: number;
  label: string;
  value: boolean;
}

export interface Company {
  name: string;
  registrationNumber: string;
  address: string;
  phoneNumber: string;
  // Các trường thông tin khác có thể được thêm vào tùy thuộc vào yêu cầu cụ thể
}


export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  // Các trường thông tin khác có thể được thêm vào tùy thuộc vào yêu cầu cụ thể
}

export class Validator {
  private static readonly VIETNAMESE_CURRENCY_REGEX = /^\d+(,\d{3})*(\.\d{1,2})?$/;
  private static readonly TIME_FORMAT_REGEX = /^(0[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/;
  private static readonly URL_REGEX = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  private static readonly OTP_REGEX = /^\d{6}$/;
  private static readonly TAG_REGEX = /^[a-zA-Z0-9]+(?:,[a-zA-Z0-9]+)*$/;

  private static isLengthValid(value: string, maxLength: number): boolean {
    return value.length <= maxLength;
  }

  public static isBirthYearValid(birthYear: number): boolean {
    const currentYear = new Date().getFullYear();
    return birthYear <= currentYear && birthYear >= currentYear - 120;
  }

  private static convertToYYYYMMDDFormat(birthdate: string): string | null {
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;

    if (!dateRegex.test(birthdate)) {
      return null;
    }

    const [day, month, year] = birthdate.split('-');
    return `${year}-${month}-${day}`;
  }

  private static isMinMaxLengthValid(
    value: string,
    minLength: number,
    maxLength: number
  ): boolean {
    const length = value.length;
    return length >= minLength && length <= maxLength;
  }

  static isUsernameValid(username: string): boolean {
    // Kiểm tra độ dài không vượt quá 50 ký tự
    if (!Validator.isLengthValid(username, 50)) {
      return false;
    }

    // Độ dài ít nhất là 3 ký tự
    if (username.length < 3) {
      return false;
    }

    // Kiểm tra kiểu ký tự: chỉ chấp nhận chữ cái, số, dấu gạch dưới (_) và dấu chấm (.)
    const validCharRegex = /^[a-zA-Z0-9_]+$/;
    if (!validCharRegex.test(username)) {
      return false;
    }

    // Kiểm tra chữ hoa và chữ thường (coi như không phân biệt chữ hoa và chữ thường)
    const lowercaseUsername = username.toLowerCase();
    // Đảm bảo rằng không có thông tin nhạy cảm trong username
    if (
      lowercaseUsername.includes("admin") ||
      lowercaseUsername.includes("password")
    ) {
      return false;
    }

    // Thông qua tất cả các kiểm tra, username được coi là hợp lệ
    return true;
  }

  static isEmailValid(email: string): boolean {
    // Kiểm tra độ dài không vượt quá 50 ký tự
    if (!Validator.isLengthValid(email, 50)) {
      return false;
    }

    // Validate email, ví dụ: sử dụng regex đơn giản
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static isPhoneNumberValid(phoneNumber: string): boolean {
    // Validate số điện thoại, ví dụ: độ dài ít nhất 10 ký tự và chỉ chứa số, bắt buộc có ít nhất một số 0 đằng trước
    const phoneRegex = /^0\d{9}$/;
    return phoneRegex.test(phoneNumber);
  }

  static isAgeValid(age: number): boolean {
    // Validate tuổi, ví dụ: phải lớn hơn 0 và không quá 120
    return age > 0 && age <= 120;
  }

  static isDateValid(dateString: string): boolean {
    // Validate ngày tháng, ví dụ: sử dụng regex đơn giản cho định dạng YYYY-MM-DD
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateRegex.test(dateString)) {
      return false;
    }

    // Kiểm tra xem ngày có hợp lệ không (ví dụ: không kiểm tra tháng 2 có 30 ngày hay không)
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  }

  static isTimeValid(timeString: string): boolean {
    // Validate thời gian, ví dụ: sử dụng regex đơn giản cho định dạng HH:mm:ss
    const timeRegex = /^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;

    return timeRegex.test(timeString);
  }

  static isNoteValid(note: string): boolean {
    // Kiểm tra độ dài không vượt quá 500 ký tự (ví dụ)
    if (!Validator.isLengthValid(note, 500)) {
      return false;
    }

    // Kiểm tra độ dài tối thiểu
    if (note.length < 10) {
      return false;
    }

    // Kiểm tra không chứa thông tin nhạy cảm
    const lowercaseNote = note.toLowerCase();
    if (lowercaseNote.includes("password") || lowercaseNote.includes("admin")) {
      return false;
    }

    // Kiểm tra loại bỏ HTML/Script (ví dụ đơn giản)
    const hasHtmlOrScript = /<[^>]+>|script/gi.test(note);
    if (hasHtmlOrScript) {
      return false;
    }

    // Kiểm tra ngôn ngữ (ví dụ đơn giản)
    const inappropriateWords = ["badword1", "badword2"];
    if (inappropriateWords.some((word) => lowercaseNote.includes(word))) {
      return false;
    }

    // Trả về true nếu ghi chú hợp lệ
    return true;
  }

  static isNameValid(name: string): boolean {
    // Kiểm tra độ dài không vượt quá 100 ký tự và không ít hơn 3 ký tự
    if (!Validator.isMinMaxLengthValid(name, 3, 100)) {
      return false;
    }

    // Kiểm tra loại ký tự cho phép (chữ cái, khoảng trắng, dấu gạch ngang)
    const validCharRegex = /^[a-zA-Z\s-]+$/;
    if (!validCharRegex.test(name)) {
      return false;
    }

    // Kiểm tra xem tên có chứa số không
    const containsNumber = /\d/.test(name);
    if (containsNumber) {
      return false;
    }

    // Kiểm tra thông tin nhạy cảm
    const lowercaseName = name.toLowerCase();
    if (lowercaseName.includes("admin") || lowercaseName.includes("password")) {
      return false;
    }

    // Trả về true nếu tên hợp lệ
    return true;
  }

  static areCheckboxesChecked(checkboxItems: CheckboxItem[]): boolean {
    // Kiểm tra xem ít nhất một checkbox có giá trị là true hay không
    return checkboxItems.some((item) => item.value === true);
  }

  static isRadioSelected(radioItems: RadioItem[]): boolean {
    // Kiểm tra xem có đúng một radio button được chọn không
    const selectedRadioCount = radioItems.filter(
      (item) => item.value === true
    ).length;
    return selectedRadioCount === 1;
  }

  static isPasswordValid(password: string): boolean {
    // Độ dài tối thiểu là 8 ký tự
    if (password.length < 8) {
      return false;
    }

    // Chứa ít nhất một chữ cái viết hoa
    if (!/[A-Z]/.test(password)) {
      return false;
    }

    // Chứa ít nhất một chữ cái viết thường
    if (!/[a-z]/.test(password)) {
      return false;
    }

    // Chứa ít nhất một chữ số
    if (!/\d/.test(password)) {
      return false;
    }

    // Chứa ít nhất một ký tự đặc biệt
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return false;
    }

    // Không chứa thông tin cá nhân
    // const lowercasePassword = password.toLowerCase();
    // if (
    //   lowercasePassword.includes("password") ||
    //   lowercasePassword.includes("123456") ||
    //   lowercasePassword.includes("qwerty")
    // ) {
    //   return false;
    // }

    // Kiểm tra xem mật khẩu có chứa khoảng trắng không
    if (/\s/.test(password)) {
      return false;
    }
    // Tất cả các kiểm tra đều qua, mật khẩu được coi là hợp lệ

    return true;
  }

  static isOptionValid(options: Option[]): boolean {
    // Kiểm tra xem có ít nhất một option được chọn không
    return options.some(option => option.value === true);
  }


  static isCompanyValid(company: Company): boolean {
    // Kiểm tra độ dài tối thiểu của tên công ty
    if (company.name.length < 3) {
      return false;
    }

    // Kiểm tra độ dài tối thiểu của số đăng ký
    if (company.registrationNumber.length < 5) {
      return false;
    }

    // Kiểm tra độ dài tối thiểu của địa chỉ
    if (company.address.length < 10) {
      return false;
    }

    // Kiểm tra độ dài tối thiểu của số điện thoại và định dạng
    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(company.phoneNumber)) {
      return false;
    }

    // Các kiểm tra khác có thể được thêm vào tùy thuộc vào yêu cầu cụ thể

    // Nếu tất cả các kiểm tra đều qua, thông tin công ty được coi là hợp lệ
    return true;
  }


  static isAddressValid(address: Address): boolean {
    // Kiểm tra độ dài tối thiểu của đường phố
    if (address.street.length < 5) {
      return false;
    }

    // Kiểm tra độ dài tối thiểu của thành phố
    if (address.city.length < 3) {
      return false;
    }

    // Kiểm tra độ dài tối thiểu của bang hoặc tỉnh
    if (address.state.length < 2) {
      return false;
    }

    // Kiểm tra độ dài tối thiểu và định dạng của mã bưu điện
    const postalCodeRegex = /^\d{5}$/;
    if (!postalCodeRegex.test(address.postalCode)) {
      return false;
    }

    // Các kiểm tra khác có thể được thêm vào tùy thuộc vào yêu cầu cụ thể

    // Nếu tất cả các kiểm tra đều qua, địa chỉ được coi là hợp lệ
    return true;
  }

  static isBirthdateValid(birthdate: string): boolean {
    // Validate ngày tháng năm sinh, sử dụng regex đơn giản cho định dạng YYYY-MM-DD
    const convertedBirthdate = Validator.convertToYYYYMMDDFormat(birthdate);

    if (convertedBirthdate === null) {
      return false;
    }

    // Kiểm tra xem ngày có hợp lệ không
    const date = new Date(convertedBirthdate);
    if (isNaN(date.getTime())) {
      return false;
    }

    // Kiểm tra xem năm sinh có nằm trong khoảng hợp lệ không (ví dụ: không lớn hơn năm hiện tại)
    const birthYear = date.getFullYear();

    return Validator.isBirthYearValid(birthYear);
  }

  static isVietnameseCurrencyValid(currency: string): boolean {
    if (!Validator.VIETNAMESE_CURRENCY_REGEX.test(currency)) {
      return false;
    }

    const amount = parseFloat(currency.replace(/,/g, ''));
    return amount > 999; // Giá trị tiền tệ không thấp hơn 1000 VND
  }

  static isTimeWithAmPmValid(timeWithAmPm: string): boolean {
    if (!Validator.TIME_FORMAT_REGEX.test(timeWithAmPm)) {
      return false;
    }

    // Kiểm tra giờ và phút
    const [hour, minute, period] = timeWithAmPm.split(/:| /);
    const parsedHour = parseInt(hour, 10);
    const parsedMinute = parseInt(minute, 10);

    if (parsedHour < 1 || parsedHour > 12 || parsedMinute < 0 || parsedMinute > 59) {
      return false;
    }

    return true;
  }

  static isUrlValid(url: string): boolean {
    return Validator.URL_REGEX.test(url);
  }

  static isOtpValid(otp: string): boolean {
    return Validator.OTP_REGEX.test(otp);
  }

  static areTagsValid(tags: string): boolean {
    return Validator.TAG_REGEX.test(tags);
  }

  static isLocationValid(city: string, district: string, commune: string): boolean {
    // Validate city
    const validCities = ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng'];
    if (!validCities.includes(city)) {
      return false;
    }

    // Validate district based on city
    const validDistrictsByCity: { [key: string]: string[] } = {
      'Hà Nội': ['Ba Đình', 'Hoàn Kiếm', 'Cầu Giấy'],
      'Hồ Chí Minh': ['Quận 1', 'Quận 2', 'Quận 3'],
      'Đà Nẵng': ['Hải Châu', 'Thanh Khê', 'Sơn Trà'],
    };
    if (!validDistrictsByCity[city]?.includes(district)) {
      return false;
    }

    // Validate commune based on district
    const validCommunesByDistrict: { [key: string]: string[] } = {
      'Ba Đình': ['Phường 1', 'Phường 2', 'Phường 3'],
      'Hoàn Kiếm': ['Phường A', 'Phường B', 'Phường C'],
      'Cầu Giấy': ['Phường X', 'Phường Y', 'Phường Z'],
      'Quận 1': ['Phường I', 'Phường II', 'Phường III'],
      'Quận 2': ['Phường IV', 'Phường V', 'Phường VI'],
      'Quận 3': ['Phường VII', 'Phường VIII', 'Phường IX'],
      'Hải Châu': ['Phường A1', 'Phường A2', 'Phường A3'],
      'Thanh Khê': ['Phường B1', 'Phường B2', 'Phường B3'],
      'Sơn Trà': ['Phường C1', 'Phường C2', 'Phường C3'],
    };
    if (!validCommunesByDistrict[district]?.includes(commune)) {
      return false;
    }

    // All options are valid
    return true;
  }

  static isWeightValid(weight: number, unit: string = 'kg'): boolean {
    // Kiểm tra xem khối lượng là một số dương
    if (isNaN(weight) || weight <= 0) {
      return false;
    }

    // Kiểm tra đơn vị (ví dụ: kilogram)
    const validUnits = ['kg', 'g', 'lb']; // Thêm các đơn vị khác nếu cần thiết
    if (!validUnits.includes(unit)) {
      return false;
    }

    // Thêm các yêu cầu khác nếu cần thiết

    return true;
  }

  static async isImageValid(filePath: string, maxSizeInBytes: number = 5 * 1024 * 1024, allowedFormats: string[] = ['jpg', 'jpeg', 'png']): Promise<boolean> {
    // Đọc định dạng của tệp
    const buffer = await fs.promises.readFile(filePath);
    const mimeType = mime.lookup(filePath);

    // Kiểm tra xem tệp có phải là hình ảnh hay không
    if (!mimeType || !mimeType.startsWith('image/')) {
      return false;
    }

    // Kiểm tra định dạng của tệp
    const fileExtension = mime.extension(mimeType) || '';
    if (!allowedFormats.includes(fileExtension)) {
      return false;
    }

    // Kiểm tra kích thước của tệp
    if (buffer.length > maxSizeInBytes) {
      return false;
    }

    // Thêm các điều kiện khác nếu cần thiết, ví dụ: kiểm tra chiều rộng và chiều cao của ảnh

    return true;
  }

  static async isVideoValid(filePath: string, maxSizeInBytes: number = 50 * 1024 * 1024, allowedFormats: string[] = ['mp4', 'avi', 'mkv']): Promise<boolean> {
    // Lấy định dạng của tệp
    const mimeTypeCheck = mime.lookup(filePath);

    // Kiểm tra xem tệp có phải là video hay không
    if (!mimeTypeCheck || !mimeTypeCheck.startsWith('video/')) {
      return false;
    }

    // Kiểm tra định dạng của tệp
    const fileExtension = mime.extension(mimeTypeCheck) || '';
    if (!allowedFormats.includes(fileExtension)) {
      return false;
    }

    // Kiểm tra kích thước của tệp
    const stats = await fs.promises.stat(filePath);
    if (stats.size > maxSizeInBytes) {
      return false;
    }

    // Thêm các điều kiện khác nếu cần thiết

    return true;
  }


  static async isDocumentValid(filePath: string, maxSizeInBytes: number = 10 * 1024 * 1024, allowedFormats: string[] = ['txt', 'pdf', 'doc', 'docx']): Promise<boolean> {
    // Lấy định dạng của tệp
    const mimeType = mime.lookup(filePath);
    console.log("In File: validator.ts, Line: 498",mimeType);
    // Kiểm tra xem tệp có phải là văn bản hay không
    if (!mimeType || !['application/','text/'].some(allowedType => mimeType.startsWith(allowedType))) {
      return false;
    }
    // Kiểm tra định dạng của tệp
    const fileExtension = mime.extension(mimeType) || '';
    if (!allowedFormats.includes(fileExtension)) {
      return false;
    }

    // Kiểm tra kích thước của tệp
    const stats = await fs.promises.stat(filePath);
    if (stats.size > maxSizeInBytes) {
      return false;
    }

    return true;
  }

  static async isFileValid(filePath: string, maxSizeInBytes: number = 10 * 1024 * 1024, allowedFormats: string[] = ['txt', 'pdf', 'doc', 'docx']): Promise<boolean> {
    // Lấy định dạng của tệp
    const mimeType = mime.lookup(filePath);

    // Kiểm tra xem tệp có phải là văn bản hay không
    if (!mimeType || mimeType === 'application/octet-stream') {
      // Thay 'application/octet-stream' bằng mime type mặc định cho các tệp không xác định
      return false;
    }

    // Kiểm tra định dạng của tệp
    const fileExtension = mime.extension(mimeType) || '';
    if (!allowedFormats.includes(fileExtension)) {
      return false;
    }

    // Kiểm tra kích thước của tệp
    const stats = await fs.promises.stat(filePath);
    if (stats.size > maxSizeInBytes) {
      return false;
    }

    // Thêm các điều kiện kiểm tra khác nếu cần thiết

    return true;
  }

  static async areImagesValid(imagePaths: string[], maxSizeInBytes: number = 5 * 1024 * 1024, allowedFormats: string[] = ['jpg', 'jpeg', 'png', 'gif']): Promise<boolean> {
    for (const imagePath of imagePaths) {
      if (!await this.isImageValid(imagePath, maxSizeInBytes, allowedFormats)) {
        return false;
      }
    }
    return true;
  }

  static async areVideosValid(videoPaths: string[], maxSizeInBytes: number = 50 * 1024 * 1024, allowedFormats: string[] = ['mp4', 'avi', 'mkv']): Promise<boolean> {
    for (const videoPath of videoPaths) {
      if (!await this.isVideoValid(videoPath, maxSizeInBytes, allowedFormats)) {
        return false;
      }
    }
    return true;
  }

  static async areDocumentsValid(documentPaths: string[], maxSizeInBytes: number = 20 * 1024 * 1024, allowedFormats: string[] = ['pdf', 'doc', 'docx']): Promise<boolean> {
    for (const documentPath of documentPaths) {
      if (!await this.isDocumentValid(documentPath, maxSizeInBytes, allowedFormats)) {
        return false;
      }
    }
    return true;
  }

}

// const testDocumentsDir = path.join(__dirname, 'test_documents');
// const documentPaths = [
//   path.join(testDocumentsDir, 'valid_document1.pdf'),
//   path.join(testDocumentsDir, 'valid_document2.docx'),
//   // Thêm đường dẫn của các tài liệu khác tùy thuộc vào cấu trúc thư mục của bạn
// ];

// const areValid = async ()=>{
//  const  a = await Validator.areDocumentsValid(documentPaths)

// console.log("In File: validator.ts, Line: 590",a);
// };

// areValid();
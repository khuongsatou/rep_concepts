// Lợi ích của việc sử dụng lớp Transformer là bạn có thể tái sử dụng nó cho nhiều lớp DTO khác nhau và giảm sự lặp lại trong mã nguồn. Đồng thời, phương thức này có thể được mở rộng và tùy chỉnh tùy thuộc vào yêu cầu cụ thể của ứng dụng.
export class Transformer {
  static transformToDTO<T, U>(source: T, destinationClass: { new (): U }): U {
    const destination = new destinationClass();
    Object.assign(destination, source);
    return destination;
  }
}

export class AddressDTO {
  id: number;
  city: string;
}

export class ProfileDTO {
  id: number;
  fullName: string;
  address: AddressDTO;
}

export class UserDTO {
  id: number;
  username: string;
  profile: ProfileDTO;
}

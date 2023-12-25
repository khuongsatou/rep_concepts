// import { plainToClass } from 'class-transformer';
// import { validateSync } from 'class-validator';


export class KhachHang {
  public KhachHangID!: number;
  public HoTen!: string;
  public Email!: string;
  public SoDienThoai!: string;
  public DiaChi!: string;
  // ... other properties according to your model
}

export class Phong {
  public PhongID!: number;
  public SoPhong!: string;
  public LoaiPhong!: string;
  public Gia!: number;
}

export class DichVuDatPhong {
  public DichVuDatPhongID!: number;
  public DatPhongID!: number;
  public DichVuID!: number;
}


export class DatPhong {
//   public DatPhongID: number;
//   public KhachHang: KhachHang;
//   public Phong: Phong;
//   public NgayDat: Date;
//   public DichVuDatPhong: DichVuDatPhong[];
  public bookingId!: number;
  public bookingDate!: Date;
  public roomType!: string
  // ... other properties according to your model

  static fromJson(json: string): DatPhong {
    const parsedJson = JSON.parse(json);

    const datPhong = new DatPhong();
    datPhong.bookingId = JsonConverterHelper.convertToInt(parsedJson.DatPhongID);
    datPhong.bookingDate = JsonConverterHelper.convertDate(parsedJson.NgayDat);
    datPhong.roomType = parsedJson.LoaiPhong.toUpperCase();
    // ... other properties according to your model

    return datPhong;
  }

  toJson(): string {
    return JSON.stringify({
      DatPhongID: this.bookingId,
      NgayDat: JsonConverterHelper.convertDateToISOString(this.bookingDate),
      LoaiPhong: this.roomType.toLowerCase(),
      // ... other properties according to your model
    });
  }
}

class JsonConverterHelper {
    static convertDate(value: any): Date {
      return new Date(value);
    }
  
    static convertToInt(value: any): number {
      return parseInt(value);
    }

    static convertDateToISOString(value: Date): string {
        return value.toISOString();
      }
  
    // Thêm các phương thức chuyển đổi khác nếu cần
  }
  


// Other model classes...

// const json = '{"DatPhongID": 1, "NgayDat": "2023-12-25T08:00:00.000Z", ...}';

// const datPhong = plainToClass(DatPhong, JSON.parse(json));

// const errors = validateSync(datPhong);

// if (errors.length > 0) {
//   console.error('Validation failed!', errors);
// } else {
//   console.log('Validation successful!', datPhong);
// }

const jsonPattern = '{"DatPhongID":1,"NgayDat":"2023-12-25T10:58:37.619Z","LoaiPhong":"deluxe"}'
console.log("In File: ClassParseJsonToObject.ts, Line: 95",DatPhong.fromJson(jsonPattern).toJson());


const datPhong = new DatPhong();
datPhong.bookingId = 1;
datPhong.bookingDate = new Date();
datPhong.roomType = 'Deluxe';

const jsonString = datPhong.toJson();
console.log("In File: ClassParseJsonToObject.ts, Line: 99",jsonString);
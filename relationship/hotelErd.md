Mô tả mối quan hệ:

Mỗi "KhachHang" có thể liên kết với nhiều "DatPhong" (1-n).
Mỗi "Phong" có thể liên kết với nhiều "DatPhong" (1-n).
Mỗi "DatPhong" liên kết với một "KhachHang" và một "Phong".
Mỗi "DatPhong" có thể liên kết với một "HoaDon" (1-1).
Mỗi "HoaDon" liên kết với một "DatPhong".
Mỗi "DatPhong" liên kết với nhiều "DichVu" thông qua "DichVuDatPhong" (many-to-many).
Mỗi "DichVu" có thể liên kết với nhiều "DatPhong" thông qua "DichVuDatPhong" (many-to-many).

Mối quan hệ mới:

Mỗi "NhanVien" có thể có một "ChucVu" (many-to-one).
Mỗi "NhanVien" có thể có nhiều "BangCap" (many-to-many).

Mối quan hệ mới:

Mỗi "HoaDon" có thể liên kết với nhiều "DichVuHoaDon" (1-n).
Mỗi "DichVu" có thể liên kết với nhiều "DichVuHoaDon" (1-n).
Mỗi "NhomDichVu" có thể liên kết với nhiều "DichVu" (1-n).
Mỗi "Phong" có thể liên kết với nhiều "TinhTrangPhong" (1-n).


Mối quan hệ mới:

Mỗi "NhomDichVu" có thể liên kết với nhiều "DichVuNhom" (1-n).
Mỗi "DichVu" có thể liên kết với nhiều "DichVuNhom" (1-n).
Mỗi "LoaiPhong" có thể liên kết với nhiều "DichVuLoaiPhong" (1-n).
Mỗi "DichVu" có thể liên kết với nhiều "DichVuLoaiPhong" (1-n).
Mỗi "KhuVuc" có thể liên kết với nhiều "PhongKhuVuc" (1-n).
Mỗi "Phong" có thể liên kết với nhiều "PhongKhuVuc" (1-n).

Mối quan hệ mới:

Mỗi "Phong" có thể liên kết với nhiều "TienIchPhong" (1-n).
Mỗi "DichVu" có thể liên kết với nhiều "TienIchPhong" (1-n).
Mỗi "DatPhong" có thể liên kết với nhiều "DatPhongKhuyenMai" (1-n).
Mỗi "KhuyenMai" có thể liên kết với nhiều "DatPhongKhuyenMai" (1-n).

Mối quan hệ mới:

Mỗi "DatPhong" có thể liên kết với nhiều "NhanXet" (1-n).
Mỗi "Phong" có thể liên kết với nhiều "SuDungTienIchPhong" (1-n).
Mỗi "KhachHang" có thể liên kết với nhiều "KhachHangLienQuan" (1-n).


Mối quan hệ mới:

Mỗi "DatPhong" có thể liên kết với nhiều "SuDungDichVu" (1-n).
Mỗi "DichVu" có thể liên kết với nhiều "SuDungDichVu" (1-n).
Mỗi "HoaDon" có thể liên kết với nhiều "HoaDonDichVu" (1-n).
Mỗi "DichVu" có thể liên kết với nhiều "HoaDonDichVu" (1-n).
Mỗi "KhachHang" có thể liên kết với nhiều "TheKhachHang" (1-n).



KhachHang ----------< DatPhong >---------- Phong
  ^                      |                  ^
  |                      v                  |
  '-------- HoaDon <-----'                  |
          |        |                      |
          v        v                      |
      DichVuDatPhong DichVuHoaDon          |
                    |                      |
                    v                      |
                 DichVu                  |
                    |                      |
                    v                      |
                DichVuNhom ----< LoaiPhong
  ^                |                            ^
  |                v                            |
  '----- NhomDichVu                        TienIchPhong
                                              ^
                                              |
NhanVien -----< ChucVu                     KhuyenMai
  ^                                          |
  |                                          v
  '----- BangCap                          DatPhongKhuyenMai
                                              ^
                                              |
                                              v
                                          DatPhong
                                              |
                                              v
                                          SuDungTienIchPhong
                                              |
                                              v
                                            NhanXet
                                              |
                                              v
                                    KhachHangLienQuan
                                              |
                                              v
                                        SuDungDichVu
                                              |
                                              v
                                        HoaDonDichVu
                                              |
                                              v
                                      TheKhachHang


{
  "DatPhongID": 1,
  "KhachHang": {
    "KhachHangID": 123,
    "HoTen": "Nguyen Van A",
    "Email": "nguyenvana@example.com",
    "SoDienThoai": "0123456789",
    "DiaChi": "123 Duong ABC, Quan XYZ"
  },
  "Phong": {
    "PhongID": 101,
    "LoaiPhong": {
      "LoaiPhongID": 501,
      "TenLoaiPhong": "Phòng Deluxe",
      "GiaTien": 1500000
    },
    "TienIchPhong": [
      {
        "TienIchPhongID": 403,
        "TenTienIch": "Wi-Fi"
      },
      {
        "TienIchPhongID": 404,
        "TenTienIch": "TV"
      }
    ]
  },
  "NgayDat": "2023-12-25T08:00:00.000Z",
  "DichVuDatPhong": [
    {
      "DichVuID": 201,
      "SoLuong": 2,
      "TenDichVu": "Đồ uống"
    },
    {
      "DichVuID": 202,
      "SoLuong": 1,
      "TenDichVu": "Dịch vụ phòng"
    }
  ],
  "KhuyenMai": [
    {
      "KhuyenMaiID": 301,
      "TenKhuyenMai": "Giảm giá 10%"
    }
  ],
  "NhanXet": {
    "NoiDung": "Phòng sạch sẽ và thoải mái.",
    "Diem": 4.5
  },
  "DichVuDatPhongLoaiPhong": [
    {
      "DichVuID": 203,
      "LoaiPhongID": 501,
      "SoLuong": 3,
      "TenDichVu": "Đồ ăn"
    },
    {
      "DichVuID": 204,
      "LoaiPhongID": 502,
      "SoLuong": 2,
      "TenDichVu": "Đồ chơi"
    }
  ],
  "NhanVienPhong": [
    {
      "NhanVienID": 601,
      "HoTen": "Nguyen Thi B",
      "ChucVu": "Lễ tân"
    },
    {
      "NhanVienID": 602,
      "HoTen": "Tran Van C",
      "ChucVu": "Phục vụ"
    }
  ],
  "DatPhongKhuyenMai": [
    {
      "KhuyenMaiID": 302,
      "TenKhuyenMai": "Quà tặng hấp dẫn"
    }
  ],
  "DatPhongTienIchPhong": [
    {
      "TienIchPhongID": 403,
      "SoLuong": 1,
      "TenTienIch": "Wi-Fi"
    },
    {
      "TienIchPhongID": 404,
      "SoLuong": 2,
      "TenTienIch": "TV"
    }
  ],
  "DatPhongNhanXet": {
    "NhanXetID": 701,
    "NoiDung": "Dịch vụ tốt, nhân viên thân thiện."
  },
  "DatPhongSuDungTienIchPhong": [
    {
      "SuDungTienIchPhongID": 901,
      "TenTienIch": "Wi-Fi"
    },
    {
      "SuDungTienIchPhongID": 902,
      "TenTienIch": "TV"
    }
  ],
  "DatPhongSuDungDichVu": [
    {
      "SuDungDichVuID": 1001,
      "TenDichVu": "Đồ ăn"
    },
    {
      "SuDungDichVuID": 1002,
      "TenDichVu": "Dịch vụ phòng"
    }
  ],
  "DatPhongHoaDonDichVu": [
    {
      "HoaDonDichVuID": 1101,
      "SoLuong": 2,
      "TenDichVu": "Đồ ăn"
    },
    {
      "HoaDonDichVuID": 1102,
      "SoLuong": 1,
      "TenDichVu": "Dịch vụ phòng"
    }
  ],
  "DatPhongHoaDonKhuyenMai": [
    {
      "HoaDonKhuyenMaiID": 1201,
      "TenKhuyenMai": "Quà tặng hấp dẫn"
    }
  ]
}

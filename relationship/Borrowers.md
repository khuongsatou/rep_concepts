+---------------------+       +---------------------+
|     Borrowers      |       |       Banks         |
+---------------------+       +---------------------+
| BorrowerID (PK)     |       | BankID (PK)         |
| FullName            |       | BankName            |
| Address             |       | BankAddress         |
| DateOfBirth         |       | ...                 |
| ...                 |       +---------------------+
+---------------------+              |
       |                             |
       |                             |
       v                             v
+---------------------+              |
|   LoanContracts    |              |
+---------------------+              |
| ContractID (PK)     |              |
| LoanDate            |              |
| LoanAmount          |              |
| InterestRate        |              |
| Term                |              |
| Status              |              |
| BorrowerID (FK)     |------------->| Borrowers          |
| BankID (FK)         |------------->| Banks              |
| ...                 |              |
+---------------------+              |
       |                             |
       |                             |
       v                             |
+---------------------+              |
|    Collaterals     |              |
+---------------------+              |
| CollateralID (PK)   |              |
| CollateralType      |              |
| Value               |              |
| ContractID (FK)     |------------->| LoanContracts      |
| ...                 |              |
+---------------------+              


Trong sơ đồ này:

Mối quan hệ một nhiều từ "LoanContracts" đến "Borrowers" và "Banks" được biểu thị bằng mũi tên chỉ ra từ các trường "BorrowerID" và "BankID" trong "LoanContracts" (nhiều) đến "BorrowerID" và "BankID" trong các bảng tương ứng (một).

Mối quan hệ một nhiều từ "Collaterals" đến "LoanContracts" được biểu thị bằng mũi tên chỉ ra từ trường "ContractID" trong "Collaterals" (nhiều) đến "ContractID" trong "LoanContracts" (một).

Mối quan hệ nhiều một từ "Payments" đến "LoanContracts" được biểu thị bằng mũi tên chỉ ra từ trường "ContractID" trong "Payments" (nhiều) đến "ContractID" trong "LoanContracts" (một). Mối quan hệ này thể hiện mỗi hợp đồng vay có thể có nhiều thanh toán, trong khi mỗi thanh toán chỉ thuộc về một hợp đồng vay.
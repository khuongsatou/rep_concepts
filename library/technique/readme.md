# Quy trình request vào database
schema-validate(Xong) -> validate(Xong) -> services(Dependecy)(Doing) -> Model -> DTO hoặc Reponsitory -> Entity -> Query -> Databases.

# Quy trình response từ database trả dữ liệu về cho người dùng
Database -> Services -> Response
# Các Mối Quan Hệ Trong Database

## 1. User và Profile (One-to-One)

- Mỗi `User` có một `Profile`.
- Mỗi `Profile` chỉ thuộc về một `User`.

## 2. User và Address (One-to-Many và Many-to-One)

- Mỗi `User` có thể có nhiều `Address`.
- Mỗi `Address` chỉ thuộc về một `User`.

## 3. User và Post (One-to-Many và Many-to-One)

- Mỗi `User` có thể tạo nhiều `Post`.
- Mỗi `Post` chỉ thuộc về một `User`.

## 4. User và Comment (One-to-Many và Many-to-One)

- Mỗi `User` có thể tạo nhiều `Comment`.
- Mỗi `Comment` chỉ thuộc về một `User`.

## 5. Post và Comment (One-to-Many và Many-to-One)

- Mỗi `Post` có thể có nhiều `Comment`.
- Mỗi `Comment` chỉ thuộc về một `Post`.




# Đối với entity thì nên tách ra thành từng file và import vào
export class Profile extends BaseEntity {
@OneToOne(() => User, (user) => user.profile)
profile: Profile
// Mối quan hệ 1-1
// User: Là mối quan hệ ngược

Profile_id sẽ là khóa chính
user.profile: Sẽ là khóa ngoại




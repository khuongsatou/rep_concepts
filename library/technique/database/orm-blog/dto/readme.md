// Use
// Hàm lấy dữ liệu và chuyển đổi thành JSON
async function getUserData(): Promise<string> {
  const userRepository = AppDataSource.manager.getRepository(User);
  const user = await userRepository.findOne({
    where: { id: 1 }, // Điều kiện tìm kiếm (ví dụ: tìm user có id là 1)
    relations: ["posts", "profile"],
  });

  console.log("In File: AppDataSourcreConnectionEntity.ts, Line: 79", user);
  if (!user) {
    return "User not found.";
  }

  // Sử dụng hàm transform
  const userDTO = Transformer.transformToDTO(user, UserDTO);

  // Thay đổi dữ liệu trên DTO
  userDTO.username = "new_username";
  userDTO.profile.fullName = "New Full Name";

  // Chuyển đổi DTO thành JSON
  const userData = JSON.stringify(userDTO, null, 2);
  console.log("In File: AppDataSourcreConnectionEntity.ts, Line: 93", userData);
  return userData;
}
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // Tùy chọn: Đặc tả các phương thức tùy chỉnh nếu cần
  async findByUsername(username: string): Promise<User | undefined> {
    return this.findOne({ where: { username } });
  }
}

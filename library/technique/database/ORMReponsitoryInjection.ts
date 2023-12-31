import { Repository } from "typeorm";
import { AppDataSource } from "./AppDataSourceConnection";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ length: 50 })
  codeGame: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}

export class UserService {
  private userRepository: Repository<UserEntity>;

  constructor(userRepository: Repository<UserEntity>) {
    this.userRepository = userRepository;
  }

  get userRepositoryService(): Repository<UserEntity> {
    return this.userRepository;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findByName(firstName: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({ where: { firstName } });
  }

  async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async updateUser(id: number, updatedUser: Partial<UserEntity>): Promise<UserEntity | undefined> {
    const existingUser = await this.userRepository.findOneBy({
        id
    });

    if (existingUser) {
      this.userRepository.merge(existingUser, updatedUser);
      return this.userRepository.save(existingUser);
    }

    return undefined;
  }

  async deleteUser(id: number): Promise<boolean> {
    const deleteResult = await this.userRepository.delete(id);
    return deleteResult.affected === 1;
  }
}

// Sử dụng DI để tạo instance của UserRepository và sau đó inject nó vào UserService
const userRepository = AppDataSource.manager.getRepository(UserEntity);
const userService = new UserService(userRepository);

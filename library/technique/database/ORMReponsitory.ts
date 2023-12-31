// User.ts
import { AppDataSource } from "./AppDataSourceConnection";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { User } from "./User";



export class UserService {
    private userRepository = AppDataSource.manager.getRepository(User);
  
    async getAllUsers(): Promise<User[]> {
      return this.userRepository.find();
    }
  
    async findByName(firstName: string): Promise<User | undefined> {
      return this.userRepository.findOne({ where: { firstName } });
    }


    async createUser(user: Partial<User>): Promise<User> {
      const newUser = this.userRepository.create(user);
      return this.userRepository.save(newUser);
    }
  
    async updateUser(id: number, updatedUser: Partial<User>): Promise<User | undefined> {
      const existingUser = await this.userRepository.findOneBy({id});
      
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



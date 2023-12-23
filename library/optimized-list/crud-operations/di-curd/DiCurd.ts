// Tạo Interface cho Model
interface IEntity {
    id: string;
}

// Tạo Interface cho Repository
interface IRepository<T extends IEntity> {
    getAll(): Promise<T[]>;
    getById(id: string): Promise<T | undefined>;
    add(entity: T): Promise<void>;
    update(id: string, entity: T): Promise<void>;
    delete(id: string): Promise<void>;
}
    

// Tạo Model cụ thể và implement IEntity
export class User implements IEntity {
    constructor(public id: string, public name: string, public email: string) {}
  }
  
// Tạo Repository cụ thể và implement IRepository
export class UserRepository implements IRepository<User> {
    private users: User[] = [];
  
    async getAll(): Promise<User[]> {
      return this.users;
    }
  
    async getById(id: string): Promise<User | undefined> {
      return this.users.find(user => user.id === id);
    }
  
    async add(user: User): Promise<void> {
      this.users.push(user);
    }
  
    async update(id: string, updatedUser: User): Promise<void> {
      const index = this.users.findIndex(user => user.id === id);
  
      if (index !== -1) {
        this.users[index] = updatedUser;
      }
    }
  
    async delete(id: string): Promise<void> {
      this.users = this.users.filter(user => user.id !== id);
    }
  }
  

// Tạo Controller để quản lý logic

export class UserController {
    private userRepository: IRepository<User>;
  
    constructor(userRepository: IRepository<User>) {
      this.userRepository = userRepository;
    }
  
    async getAllUsers(): Promise<User[]> {
      return this.userRepository.getAll();
    }
  
    async getUserById(id: string): Promise<User | undefined> {
      return this.userRepository.getById(id);
    }
  
    async createUser(user: User): Promise<void> {
      await this.userRepository.add(user);
    }
  
    async updateUser(id: string, updatedUser: User): Promise<void> {
      await this.userRepository.update(id, updatedUser);
    }
  
    async deleteUser(id: string): Promise<void> {
      await this.userRepository.delete(id);
    }
  }
  
const userRepository = new UserRepository();
const userController = new UserController(userRepository);
  
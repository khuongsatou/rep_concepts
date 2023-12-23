// tests/user-repository.test.ts
import {UserRepository,User,UserController} from './DiCurd';

describe('UserRepository', () => {
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = new UserRepository();
  });

  test('should add a user to the repository', async () => {
    const user = new User('1', 'John Doe', 'john@example.com');
    await userRepository.add(user);

    const result = await userRepository.getById('1');
    expect(result).toEqual(user);
  });

  // Add more tests for other UserRepository methods...
});

describe('UserController', () => {
    let userController: UserController;
    let userRepository: UserRepository;
  
    beforeEach(() => {
      userRepository = new UserRepository();
      userController = new UserController(userRepository);
    });
  
    test('should get all users from the controller', async () => {
      const users = [new User('1', 'John Doe', 'john@example.com')];
      jest.spyOn(userRepository, 'getAll').mockResolvedValue(users);
  
      const result = await userController.getAllUsers();
      expect(result).toEqual(users);
    });
  
    // Add more tests for other UserController methods...
  });
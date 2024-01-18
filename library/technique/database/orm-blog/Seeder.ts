import { createConnection } from 'typeorm';
import { User } from './entity/User';
import { Profile } from './entity/Profile';
import faker from 'faker';

const seed = async () => {
  await createConnection();

  try {
    const userRepository = connection.getRepository(User);
    const profileRepository = connection.getRepository(Profile);

    // Seed Users
    const users = [];
    for (let i = 0; i < 10; i++) {
      const user = new User();
      user.username = faker.internet.userName();
      users.push(user);
    }
    await userRepository.save(users);

    // Seed Profiles
    const profiles = [];
    for (let i = 0; i < 10; i++) {
      const profile = new Profile();
      profile.fullName = faker.name.findName();
      profiles.push(profile);
    }
    await profileRepository.save(profiles);

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await connection.close();
  }
};

seed();

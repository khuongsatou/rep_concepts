import express, { Request, Response } from 'express';
import { User } from '../entity/User';
import {AppDataSource} from '../DataSource'
import { BaseService } from '../service/BaseServices';

const userRouter = express.Router();
const userService = new BaseService(User,  AppDataSource.manager);

userRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const users = await userService.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

userRouter.get('/:id', async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);

  try {
    const user = await userService.findOne(userId);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

userRouter.post('/', async (req: Request, res: Response) => {
  const newUser = req.body;

  try {
    const createdUser = userService.create(newUser);
    const savedUser = await userService.save(createdUser);

    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

userRouter.put('/:id', async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);
  const updatedUser = req.body;

  try {
    const existingUser = await userService.findOne(userId);

    if (!existingUser) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    AppDataSource.manager.getRepository(User).merge(existingUser, updatedUser);
    const savedUser = await userService.save(existingUser);

    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

userRouter.delete('/:id', async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);

  try {
    const user = await userService.findOne(userId);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    await userService.remove(user.id);
    res.json({ message: 'User removed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default userRouter;

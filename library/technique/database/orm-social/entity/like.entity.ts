// like.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Video } from './video.entity';

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  likeID: number;

  @ManyToOne(() => User, user => user.likes)
  user: User;

  @ManyToOne(() => Video, video => video.likes)
  video: Video;
}

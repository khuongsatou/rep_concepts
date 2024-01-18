// view.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Video } from './video.entity';

@Entity()
export class View {
  @PrimaryGeneratedColumn()
  viewID: number;

  @ManyToOne(() => User, user => user.views)
  user: User;

  @ManyToOne(() => Video, video => video.views)
  video: Video;
}

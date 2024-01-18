// comment.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Video } from './video.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  commentID: number;

  @ManyToOne(() => User, user => user.comments)
  user: User;

  @ManyToOne(() => Video, video => video.comments)
  video: Video;

  @Column()
  content: string;

  @Column()
  commentTime: Date;
}

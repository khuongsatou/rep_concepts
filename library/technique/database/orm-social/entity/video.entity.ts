// video.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { View } from './view.entity';
import { Like } from './like.entity';
import { Comment } from './comment.entity';

@Entity()
export class Video {
  @PrimaryGeneratedColumn()
  videoID: number;

  @ManyToOne(() => User, user => user.videos)
  user: User;

  @Column()
  videoPath: string;

  @Column()
  duration: number;

  // Quan hệ One-to-Many với Lượt Xem
  @OneToMany(() => View, view => view.video)
  views: View[];

  // Quan hệ One-to-Many với Thích
  @OneToMany(() => Like, like => like.video)
  likes: Like[];

  // Quan hệ One-to-Many với Bình Luận
  @OneToMany(() => Comment, comment => comment.video)
  comments: Comment[];
}

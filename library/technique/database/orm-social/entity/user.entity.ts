// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Video } from './video.entity';
import { View } from './view.entity';
import { Like } from './like.entity';
import { Comment } from './comment.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userID: number;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  // Quan hệ One-to-Many với Video
  @OneToMany(() => Video, video => video.user)
  videos: Video[];

  // Quan hệ One-to-Many với Lượt Xem
  @OneToMany(() => View, view => view.user)
  views: View[];

  // Quan hệ One-to-Many với Thích
  @OneToMany(() => Like, like => like.user)
  likes: Like[];

  // Quan hệ One-to-Many với Bình Luận
  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];
}

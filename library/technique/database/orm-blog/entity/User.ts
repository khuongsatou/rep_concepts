import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
  BaseEntity,
} from "typeorm";
import {Post} from './Post'
import {Profile} from './Profile'

@Entity()
export class User extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @OneToMany(() => Post, (post) => post.author, { eager: true }) // Eager Loading
  posts: Post[];

  @OneToOne(() => Profile, (profile) => profile.user, { eager: true }) // Eager Loading
  //   @OneToOne('Profile','user') // Eager Loading
  @JoinColumn()
  profile: Profile;
}

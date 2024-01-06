import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from "typeorm";

import { Address } from "./Address";
import { User } from "./User";
import { Comment } from "./Comment";

@Entity()
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;

  @OneToMany(() => Comment, (comment) => comment.authorProfile, { lazy: true }) // Lazy Loading
  comments: Comment[];

  @ManyToOne(() => Address, (address) => address.profiles, { eager: true }) // Eager Loading
  @JoinColumn()
  address: Address;
}

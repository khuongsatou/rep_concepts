import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Orders } from './Orders';
import { Reviews } from './Reviews';
import { Feedback } from './Feedback';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  userID: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;

  @OneToMany(type => Orders, order => order.user)
  orders: Orders[];

  @OneToMany(type => Reviews, review => review.user)
  reviews: Reviews[];

  @OneToMany(type => Feedback, feedback => feedback.user)
  feedback: Feedback[];
}

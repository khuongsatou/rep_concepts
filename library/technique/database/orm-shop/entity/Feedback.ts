import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Users } from './Users';

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  feedbackID: number;

  @Column()
  feedbackContent: string;

  @ManyToOne(type => Users, user => user.feedback)
  user: Users;
}

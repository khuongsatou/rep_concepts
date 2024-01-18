import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Users } from './Users';
import { Products } from './Products';

@Entity()
export class Reviews {
  @PrimaryGeneratedColumn()
  reviewID: number;

  @Column()
  rating: number;

  @Column()
  comment: string;

  @ManyToOne(type => Users, user => user.reviews)
  user: Users;

  @ManyToOne(type => Products, product => product.reviews)
  product: Products;
}

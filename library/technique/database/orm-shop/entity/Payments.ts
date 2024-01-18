import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Orders } from './Orders';

@Entity()
export class Payments {
  @PrimaryGeneratedColumn()
  paymentID: number;

  @Column()
  paymentMethod: string;

  @Column()
  totalAmount: number;

  @ManyToOne(type => Orders, order => order.payments)
  order: Orders;
}

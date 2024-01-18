import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Orders } from './Orders';
import { Products } from './Products';

@Entity()
export class OrderDetails {
  @PrimaryGeneratedColumn()
  orderDetailID: number;

  @Column()
  quantity: number;

  @Column()
  unitPrice: number;

  @ManyToOne(type => Orders, order => order.orderDetails)
  order: Orders;

  @ManyToMany(type => Products, product => product.orderDetails)
  @JoinTable()
  product: Products[];
}

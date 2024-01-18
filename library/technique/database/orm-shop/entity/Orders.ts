import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Users } from './Users';
import { OrderDetails } from './OrderDetails';
import { Payments } from './Payments';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  orderID: number;

  @Column()
  orderDate: Date;

  @Column()
  orderStatus: string;

  @ManyToOne(type => Users, user => user.orders)
  user: Users;

  @OneToMany(type => OrderDetails, orderDetail => orderDetail.order)
  orderDetails: OrderDetails[];

  @OneToMany(type => Payments, payment => payment.order)
  payments: Payments[];
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { OrderDetails } from './OrderDetails';
import { Reviews } from './Reviews';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  productID: number;

  @Column()
  productName: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stockQuantity: number;

  @ManyToMany(type => OrderDetails, orderDetail => orderDetail.product)
  @JoinTable()
  orderDetails: OrderDetails[];

  @OneToMany(type => Reviews, review => review.product)
  reviews: Reviews[];
}

Tất nhiên, dự án quản lý xăng dầu có thể bao gồm nhiều bảng khác nhau. Dưới đây là thêm 10 bảng có thể bạn quan tâm:

Bảng "Employee" (Nhân viên):

employeeId (PK)
name
position
salary
...
Bảng "Customer" (Khách hàng):

customerId (PK)
name
contactInfo
...
Bảng "Payment" (Thanh toán):

paymentId (PK)
transactionId (FK - khóa ngoại đến bảng Transaction)
amount
paymentDate
...
Bảng "Tank" (Bồn chứa xăng dầu):

tankId (PK)
stationId (FK - khóa ngoại đến bảng Station)
capacity
currentLevel
...
Bảng "Supplier" (Nhà cung cấp xăng dầu):

supplierId (PK)
name
contactInfo
...
Bảng "Inventory" (Kho xăng dầu):

inventoryId (PK)
fuelId (FK - khóa ngoại đến bảng Fuel)
quantity
lastUpdate
...
Bảng "Discount" (Ưu đãi giảm giá):

discountId (PK)
fuelId (FK - khóa ngoại đến bảng Fuel)
discountPercentage
startDate
endDate
...
Bảng "Shift" (Ca làm việc):

shiftId (PK)
employeeId (FK - khóa ngoại đến bảng Employee)
startTime
endTime
...
Bảng "Maintenance" (Bảo dưỡng):

maintenanceId (PK)
stationId (FK - khóa ngoại đến bảng Station)
description
maintenanceDate
...
Bảng "Expense" (Chi phí):

expenseId (PK)
stationId (FK - khóa ngoại đến bảng Station)
description
amount
expenseDate
...
Mối quan hệ và trường cụ thể của từng bảng có thể được điều chỉnh dựa trên yêu cầu chi tiết của dự án của bạn.

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Shift } from './Shift';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  employeeId: number;

  @Column()
  name: string;

  @Column()
  position: string;

  @Column()
  salary: number;

  @OneToMany(() => Shift, (shift) => shift.employee)
  shifts: Shift[];
  // ... other fields and relationships
}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Transaction } from './Transaction';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  customerId: number;

  @Column()
  name: string;

  @Column()
  contactInfo: string;

  @OneToMany(() => Transaction, (transaction) => transaction.customer)
  transactions: Transaction[];
  // ... other fields and relationships
}


import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Transaction } from './Transaction';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  paymentId: number;

  @ManyToOne(() => Transaction, (transaction) => transaction.payments)
  transaction: Transaction;

  @Column()
  amount: number;

  @Column()
  paymentDate: Date;
  // ... other fields
}


import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Station } from './Station';

@Entity()
export class Tank {
  @PrimaryGeneratedColumn()
  tankId: number;

  @ManyToOne(() => Station, (station) => station.tanks)
  station: Station;

  @Column()
  capacity: number;

  @Column()
  currentLevel: number;
  // ... other fields
}


import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Inventory } from './Inventory';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  supplierId: number;

  @Column()
  name: string;

  @Column()
  contactInfo: string;

  @OneToMany(() => Inventory, (inventory) => inventory.supplier)
  inventories: Inventory[];
  // ... other fields and relationships
}


import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Fuel } from './Fuel';
import { Supplier } from './Supplier';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  inventoryId: number;

  @ManyToOne(() => Fuel, (fuel) => fuel.inventories)
  fuel: Fuel;

  @ManyToOne(() => Supplier, (supplier) => supplier.inventories)
  supplier: Supplier;

  @Column()
  quantity: number;

  @Column()
  lastUpdate: Date;
  // ... other fields
}


import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Fuel } from './Fuel';

@Entity()
export class Discount {
  @PrimaryGeneratedColumn()
  discountId: number;

  @ManyToOne(() => Fuel, (fuel) => fuel.discounts)
  fuel: Fuel;

  @Column()
  discountPercentage: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
  // ... other fields
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from "typeorm";

import { Profile } from "./Profile";

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @OneToMany(() => Profile, (profile) => profile.address, { lazy: true }) // Lazy Loading
  profiles: Profile[];
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @OneToMany(() => Post, post => post.author, { eager: true }) // Eager Loading
  posts: Post[];

  @OneToOne(() => Profile, profile => profile.user, { eager: true }) // Eager Loading
  @JoinColumn()
  profile: Profile;
}

@Entity()
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @OneToOne(() => User, user => user.profile)
  user: User;

  @OneToMany(() => Comment, comment => comment.authorProfile, { lazy: true }) // Lazy Loading
  comments: Comment[];

  @ManyToOne(() => Address, address => address.profiles, { eager: true }) // Eager Loading
  @JoinColumn()
  address: Address;
}

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @OneToMany(() => Profile, profile => profile.address, { lazy: true }) // Lazy Loading
  profiles: Profile[];
}

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => User, user => user.posts)
  author: User;

  @OneToMany(() => Comment, comment => comment.post, { lazy: true }) // Lazy Loading
  comments: Comment[];
}

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => Post, post => post.comments)
  post: Post;

  @ManyToOne(() => Profile, profile => profile.comments, { eager: true }) // Eager Loading
  authorProfile: Profile;
}



User có mối quan hệ một-nhiều với Post, mối quan hệ một-một với Profile.
Profile có mối quan hệ nhiều-một với Address, mối quan hệ nhiều-một với Comment.
Post có mối quan hệ nhiều-một với Comment.
Comment có mối quan hệ nhiều-một với Profile.


Lazy loading và eager loading là hai chiến lược tải dữ liệu từ cơ sở dữ liệu trong các hệ thống sử dụng Object-Relational Mapping (ORM) như TypeORM.

Lazy Loading:

Khái Niệm: Lazy loading là chiến lược tải dữ liệu chỉ khi nó cần thiết, tức là dữ liệu sẽ được tải khi bạn thực sự truy cập đến nó.
Ưu Điểm: Tiết kiệm tài nguyên vì chỉ tải dữ liệu khi cần thiết. Điều này đặc biệt hữu ích khi có nhiều quan hệ và bạn chỉ muốn tải dữ liệu cần thiết để tránh tải quá nhiều dữ liệu không cần thiết.
Nhược Điểm: Có thể gây ra vấn đề N+1, nơi mỗi đối tượng được truy cập sẽ tải thêm một truy vấn để lấy dữ liệu của nó.
Eager Loading:

Khái Niệm: Eager loading là chiến lược tải dữ liệu ngay từ đầu, tức là tất cả dữ liệu liên quan được tải cùng một lúc khi truy vấn ban đầu được thực hiện.
Ưu Điểm: Tránh vấn đề N+1, giúp tối ưu hóa hiệu suất với số lượng dữ liệu lớn.
Nhược Điểm: Có thể tải nhiều dữ liệu không cần thiết, dẫn đến tốn tài nguyên nếu không sử dụng toàn bộ dữ liệu được tải.


@OneToMany(() => Post, post => post.author, { eager: true }) // Eager Loading
posts: Post[];

@ManyToOne(() => User, user => user.posts, { lazy: true }) // Lazy Loading
author: User;

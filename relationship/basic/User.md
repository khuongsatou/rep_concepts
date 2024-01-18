# Database
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

# Thêm vào
INSERT INTO users (username, password, email) VALUES
('user1', 'hashed_password_1', 'user1@example.com'),
('user2', 'hashed_password_2', 'user2@example.com'),
('user3', 'hashed_password_3', 'user3@example.com');


# Model
class User {
    id: number;
    username: string;
    password: string;
    email: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;

    constructor(id: number, username: string, password: string, email: string, created_at: Date, updated_at: Date, deleted_at: Date | null) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
    }
}

// Example usage:
const user1 = new User(1, 'user1', 'hashed_password_1', 'user1@example.com', new Date(), new Date(), null);
const user2 = new User(2, 'user2', 'hashed_password_2', 'user2@example.com', new Date(), new Date(), null);
const user3 = new User(3, 'user3', 'hashed_password_3', 'user3@example.com', new Date(), new Date(), null);


# DTO
class UserDTO {
    username: string;
    password: string;
    email: string;

    constructor(username: string, password: string, email: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}

// Example DTO usage:
const userDTO1 = new UserDTO('user1', 'hashed_password_1', 'user1@example.com');
const userDTO2 = new UserDTO('user2', 'hashed_password_2', 'user2@example.com');
const userDTO3 = new UserDTO('user3', 'hashed_password_3', 'user3@example.com');

# Entity
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn({ nullable: true })
    deleted_at: Date;
}

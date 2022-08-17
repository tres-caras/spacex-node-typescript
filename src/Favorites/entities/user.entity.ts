//user entity with typeorm
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Favorite } from './Favorite.entity';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    private _id!: number;
    @Column()
    name!: string;
    @Column()
    email!: string;
    @OneToMany(type => Favorite, favorite => favorite.user)
    favorites!: Favorite[];
}
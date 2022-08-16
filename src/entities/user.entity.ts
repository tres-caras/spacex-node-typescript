//user entity with typeorm
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    private _id: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @OneToMany(type => Favorite, favorite => favorite.user)
    favorites: Favorite[];

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}
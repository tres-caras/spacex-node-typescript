// favorite entity with typeorm
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
@Entity()
export class Favorite {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @ManyToOne(type => User, user => user.favorites)
    user: User;
}


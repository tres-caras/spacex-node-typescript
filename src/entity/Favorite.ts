// favorite entity with typeorm
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';
import { User } from './User';
@Entity()
export class Favorite extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(type => User, user => user.favorites)
    user: User;
    @Column()
    launchId?: string;
    @Column({name: "created_at"})
    createdAt?: Date;

    constructor(launchId: string, user: User) {
        super();
        this.launchId = launchId;
        this.user = user;
    }
}


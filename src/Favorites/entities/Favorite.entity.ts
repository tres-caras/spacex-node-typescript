// favorite entity with typeorm
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';
import { User } from './user.entity';
@Entity()
export class Favorite extends BaseEntity {
    @PrimaryGeneratedColumn()
    private _id: number;
    @ManyToOne(type => User, user => user.favorites)
    user: User;
    @Column()
    launchId?: string;
    @Column({name: "created_at"})
    createdAt?: Date;

    static findByUserId(userId: string) {
        return this.createQueryBuilder("favorite")
            .where("favorite.userId = :userId", { userId })
            .getMany();
    }
}


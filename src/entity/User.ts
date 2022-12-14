//user entity with typeorm
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Favorite } from "./Favorite";
@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name?: string;
  @Column()
  email: string;
  @OneToMany((type) => Favorite, (favorite) => favorite.user)
  favorites: Favorite[];

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

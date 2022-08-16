//typescript service for favorites
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorite } from './entities/favorite.entity';

@Injectable()
export class FavoritesService {
    constructor(
        @InjectRepository(Favorite)
        private readonly favoriteRepository: Repository<Favorite>,
    ) {}

    async getFavorites(): Promise<Favorite[]> {
        return await this.favoriteRepository.find();
    }

    async addFavorite(favorite: Favorite): Promise<Favorite> {
        return await this.favoriteRepository.save(favorite);
    }
    async deleteFavorite(id: string): Promise<void> {
        await this.favoriteRepository.delete(id);
    }
}
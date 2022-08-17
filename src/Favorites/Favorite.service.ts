//typescript service for favorites
import { Repository } from 'typeorm';
import { Favorite } from './entities/Favorite.entity';

export class FavoritesService {
    constructor(
        private readonly favoriteRepository: Repository<Favorite>,
    ) {return this}

    async getFavorites(): Promise<Favorite[]> {
        return await this.favoriteRepository.find();
    }

    async addFavorite(favorite: Favorite): Promise<Favorite> {
        return await this.favoriteRepository.save(favorite);
    }
    async deleteFavorite(id: string): Promise<void> {
        await this.favoriteRepository.delete(id);
    }
    async updateFavorite(id: string, favorite: Favorite) {
        this.favoriteRepository.update(id, favorite);
    }
}
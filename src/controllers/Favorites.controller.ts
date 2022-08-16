//Favorites controller for favorites
import { Controller, Get, Post, Delete, Param, Body, Put } from '@nestjs/common';
import { Favorite } from '../entities/favorite.entity';
import { FavoritesService } from '../services/FavoritesService';

@Controller('favorites')
export class FavoritesController {
    constructor(private readonly favoritesService: FavoritesService) {}
    @Get()
    async getFavorites(): Promise<Favorite[]> {
        return await this.favoritesService.getFavorites();
    }
    @Post()
    async addFavorite(@Body() favorite: Favorite): Promise<Favorite> {
        return await this.favoritesService.addFavorite(favorite);
    }
    @Delete(':id')
    async deleteFavorite(@Param('id') id: string): Promise<void> {
        await this.favoritesService.deleteFavorite(id);
    }
    @Put(':id')
    async updateFavorite(@Param('id') id: string, @Body() favorite: Favorite): Promise<void> {
        await this.favoritesService.updateFavorite(id, favorite);
    }
}
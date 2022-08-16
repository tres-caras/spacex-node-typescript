import { Test } from '@nestjs/testing';

import { FavoritesController } from "../src/controllers/Favorites.controller";
import { FavoritesService } from "../src/services/FavoritesService";

//Test favorites controller with jest
describe('FavoritesController', () => {
    let favoritesController: FavoritesController;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [FavoritesController],
            providers: [FavoritesService],
        }).compile();

        favoritesController = module.get<FavoritesController>(FavoritesController);
    }),

    describe('getFavorites', () => {
        it('should return an array of favorites', async () => {
            const result = ['Favorite 1', 'Favorite 2'];
            jest.spyOn(favoritesController, 'getFavorites').mockImplementation(() => {
                let favorites = [{
                    id: 1,
                    name: 'Favorite 1',
                    user: {
                        id: 1,
                        name: 'User 1',
                        email: 'dis.dis@dis'
                    }
                }, {
                    id: 2,
                    name: 'Favorite 2',
                    user: {
                        id: 2,
                        name: 'User 2',
                        email: 'dis2.dis@dis'
                    }
                }];
                return favorites;
            });
            expect(await favoritesController.getFavorites()).toBe(result);
        })
    }),
    describe('getFavorites', () => {
        it('should return an array of favorites', async () => {
            const result = await favoritesController.getFavorites();
            expect(result).toEqual([]);
        })
    }),
    describe('addFavorite', () => {
        it('should return a favorite', async () => {
            const result = await favoritesController.addFavorite({
                id: 1,
                name: 'favorite',
                user: {
                    _id: 1,
                    name: 'user',
                    email: 'dis.test@dis.io'
                    favorites: [],
                },
            });
            expect(result).toEqual({
                id: 1,
                name: 'favorite',
                user: {
                    id: 1,
                    name: 'user',
                    email: '',
                    favorites: [],
                },
            });
        })}),
    
    describe('deleteFavorite', () => {
        it('should delete a favorite', async () => {
            await favoritesController.deleteFavorite('1');
        }),
    }),
    describe('updateFavorite', () => {
        it('should update a favorite', async () => {
            await favoritesController.updateFavorite('1', {
                id: 1,
                name: 'favorite',
                user: {
                    id: 1,
                    name: 'user',
                    email: '',
                    favorites: [],
                },
            });
        })}),
}),
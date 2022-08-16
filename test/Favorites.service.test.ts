

//test with jest sum function
describe('FavoritesService', () => {
    let service: FavoritesService;
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FavoritesService],
        }).compile();
        service = module.get<FavoritesService>(FavoritesService);
    }),
    describe('getFavorites', () => {
        it('should return an array of favorites', async () => {
            const favorites = await service.getFavorites();
            expect(favorites).toEqual([]);
        }),
    }),
    describe('addFavorite', () => {
        it('should add a favorite', async () => {
            const favorite = {
                id: '1',
                name: 'Favorite 1',
            };
            await service.addFavorite(favorite);
            const favorites = await service.getFavorites();
            expect(favorites).toEqual([favorite]);
        }),
    }),
    describe('deleteFavorite', () => {
        it('should delete a favorite', async () => {
            const favorite = {
                id: '1',
                name: 'Favorite 1',
            };
            await service.addFavorite(favorite);
            await service.deleteFavorite(favorite.id);
            const favorites = await service.getFavorites();
            expect(favorites).toEqual([]);
        }),
    }),
});

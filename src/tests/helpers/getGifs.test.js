import { getGifs } from '../../helpers/getGifs';

describe('Test getGifs Helper', () => {
    test('must show 10 elements', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });
});

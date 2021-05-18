import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Tests on Component GifGrid', () => {
    const category = 'Duke';
    test('should mount component <GifGrid />', () => {
        useFetchGifs.mockReturnValue({ data: [], loading: true });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show images once loaded', () => {
        const imgs = [
            {
                id: 'ABC',
                title: 'Titulo Imagen',
                url: 'https://localhost/imagen.jpg',
            },
        ];
        useFetchGifs.mockReturnValue({ data: imgs, loading: false });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false); // should not have a <p> if loaded
        expect(wrapper.find('GifGridItem').length).toBe(imgs.length);
    });
});

import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

const title = 'My Title';
const url = 'https://localhost/my_image.jpg';
const wrapper = shallow(<GifGridItem title={title} url={url} />);

describe('Test on GifGridItems', () => {
    test('should mount Component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should <p> have a title match', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('should have an image with src and alt', () => {
        const p = wrapper.find('img');
        const image = p.props();
        expect(image.src.trim()).toBe(url);
        expect(image.alt.trim()).toBe(title);
    });

    test('should have CSS class animate__fadeIn', () => {
        const div = wrapper.find('div');
        // expect(div.hasClass('animate__fadeIn'));
        expect(div.hasClass('animate__fadeIn')).toBe(true);
    });
});

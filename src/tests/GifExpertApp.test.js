import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Test related to <GifExpertApp />', () => {
    test('should mount component <GifExpertApp />', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });
    test('should show default Categories', () => {
        const defaultCategories = ['One Punch', 'He Man'];
        const wrapper = shallow(
            <GifExpertApp defaultCategories={defaultCategories} />
        );
        expect(wrapper.find('GifGrid').length).toBe(defaultCategories.length);
    });
});

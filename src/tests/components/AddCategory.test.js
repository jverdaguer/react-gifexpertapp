import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';
import { renderHook } from '@testing-library/react-hooks';

describe('Component <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('should Component exists <AddCategory />', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should change input box', () => {
        const input = wrapper.find('input');
        const value = 'Hello Word';
        input.simulate('change', { target: { value } });
        const inputAfter = wrapper.find('input');
        const newValue = inputAfter.prop('value');
        expect(value).toBe(newValue);
    });

    test('should not call setCategories on submit when category is empty', () => {
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault() {} });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should call setCategories and inputValue should be empty', async () => {
        // 1. add a value to input box
        const input = wrapper.find('input');
        const value = 'Hello Word';
        input.simulate('change', { target: { value } }); // simulate e object

        // 2. Click on Submit
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault() {} }); // e object needs a preventDefault method

        // 3. setCategories should be executed
        expect(setCategories).toHaveBeenCalled();

        // 4. Finally inputValue should be set to empty string
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});

import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';
//'enzyme-to-json' pozwala na uzyskanie czystego snapshota bez zbędnych danych
//react-test-render

//shallow tylko renderuje podany komponent
//full dom render komponuje równiech komponenty child

test('should render Header correctly', () => {
    const wrapper = shallow(<Header/>);
    expect(toJSON(wrapper)).toMatchSnapshot();

    // const renderer = new ReactShallRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expensifity');

});
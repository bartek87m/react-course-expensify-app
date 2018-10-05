import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';
//'enzyme-to-json' pozwala na uzyskanie czystego snapshota bez zbędnych danych
//react-test-render

//shallow tylko renderuje podany komponent
//full dom render komponuje równiech komponenty child

test('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage startLogin={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should simulate login ', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});
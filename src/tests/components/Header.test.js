import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';
//'enzyme-to-json' pozwala na uzyskanie czystego snapshota bez zbędnych danych
//react-test-render

//shallow tylko renderuje podany komponent
//full dom render komponuje równiech komponenty child

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();

});

test('should simulate Header ', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
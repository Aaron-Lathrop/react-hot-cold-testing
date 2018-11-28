import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

import {shallow, mount} from 'enzyme';

import Header from './header';
import TopNav from './top-nav';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Renders an <h1> element', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.contains((<h1>HOT or COLD</h1>))).toEqual(true);
    });
});

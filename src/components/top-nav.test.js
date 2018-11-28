import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Renders expected elements', () => {
        const wrapper = shallow(<TopNav />);
        expect(wrapper.exists('.clearfix', '.what', '.new')).toEqual(true);
    });
});
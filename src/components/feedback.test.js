import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        const feedback = 'Foobar';
        const guessCount = 5;
        shallow(<Feedback feedback={feedback} guessCount={guessCount} />);
    });

    it('Renders some feedback and guessCount', () => {
        const feedback = 'Foobar';
        const wrapper = shallow(<Feedback feedback={feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
});
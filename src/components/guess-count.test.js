import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        const guessCount = 5;
        shallow(<GuessCount guessCount={guessCount} />);
    });

    it('Renders the correct guessCount', () => {
        const guessCount = 5;
        const wrapper = shallow(<GuessCount guessCount={guessCount} />);
        expect(wrapper.text()).toEqual(`You've made ${guessCount} guesses!`);
    });
});
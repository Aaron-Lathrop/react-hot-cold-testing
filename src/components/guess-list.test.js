import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        const guesses = [1, 2, 3, 4, 5];
        shallow(<GuessList guesses={guesses} />);
    });

    it('Renders a list of guesses', () => {
        const guesses = [1, 2, 3, 4, 5]
        const wrapper = shallow(<GuessList guesses={guesses} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(guesses.length);
        guesses.forEach((guess, index) => {
            expect(items.at(index).text()).toEqual(guess.toString());
        });
    });
});
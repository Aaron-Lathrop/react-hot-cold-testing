import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';
import Feedback from './feedback';
import GuessForm from './guess-form';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        const feedback = 'Foobar';
        const guessCount = 5;
        shallow(<GuessSection feedback={feedback} guessCount={guessCount} />);
    });

    it('Should contain a Feedback and GuessForm component', () => {
        const feedback = 'Foobar';
        const guessCount = 5;
        const wrapper = shallow(<GuessSection feedback={feedback} guessCount={guessCount} />);
        expect(wrapper.find(Feedback).exists()).toEqual(true);
        expect(wrapper.find(GuessForm).exists()).toEqual(true);
    });
});
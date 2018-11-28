import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

import {shallow, mount} from 'enzyme';

import Game from './game';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Should have initial state', () => {
        const wrapper = shallow(<Game />);
        const correctAnswer = wrapper.state('correctAnswer');
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('auralStatus')).toEqual('');
        expect(wrapper.state('correctAnswer')).toEqual(correctAnswer);
    });

    it('Should render other components', () => {
        const wrapper = shallow(<Game />);
        expect(wrapper.find(Header).exists()).toEqual(true);
        expect(wrapper.find(GuessSection).exists()).toEqual(true);
        expect(wrapper.find(StatusSection).exists()).toEqual(true);
        expect(wrapper.find(InfoSection).exists()).toEqual(true);
    });

    it('Should give correct feedback and guessCount after makeGuess is called with a string', () => {
        const wrapper = shallow(<Game />);
        const guess = 'Not a number';
        wrapper.instance().makeGuess(guess);
        expect(wrapper.state('feedback')).toEqual('Please enter a valid number');
        wrapper.update();
        expect(wrapper.find(GuessSection).prop('feedback')).toEqual('Please enter a valid number');
        expect(wrapper.find(GuessSection).prop('guessCount')).toEqual(0);
    });

    it('Should give correct feedback and guessCount after makeGuess is called with a valid number', () => {
        const wrapper = shallow(<Game />);
        const guess = [50, 70, 90, 99, 100];
        wrapper.setState({correctAnswer: 100})
        wrapper.instance().makeGuess(50);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
        expect(wrapper.state('guesses')).toEqual([50]);
        wrapper.update();
        expect(wrapper.find(GuessSection).prop('feedback')).toEqual('You\'re Ice Cold...');
        expect(wrapper.find(GuessSection).prop('guessCount')).toEqual(1);

        wrapper.instance().makeGuess(70);
        expect(wrapper.state('feedback')).toEqual('You\'re Cold...');
        expect(wrapper.state('guesses')).toEqual([50, 70]);
        wrapper.update();
        expect(wrapper.find(GuessSection).prop('feedback')).toEqual('You\'re Cold...');
        expect(wrapper.find(GuessSection).prop('guessCount')).toEqual(2);

        wrapper.instance().makeGuess(90);
        expect(wrapper.state('feedback')).toEqual('You\'re Warm.');
        expect(wrapper.state('guesses')).toEqual([50, 70, 90]);
        wrapper.update();
        expect(wrapper.find(GuessSection).prop('feedback')).toEqual('You\'re Warm.');
        expect(wrapper.find(GuessSection).prop('guessCount')).toEqual(3);

        wrapper.instance().makeGuess(99);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
        expect(wrapper.state('guesses')).toEqual([50, 70, 90, 99]);
        wrapper.update();
        expect(wrapper.find(GuessSection).prop('feedback')).toEqual('You\'re Hot!');
        expect(wrapper.find(GuessSection).prop('guessCount')).toEqual(4);

        wrapper.instance().makeGuess(100);
        expect(wrapper.state('feedback')).toEqual('You got it!');
        expect(wrapper.state('guesses')).toEqual([50, 70, 90, 99, 100]);
        wrapper.update();
        expect(wrapper.find(GuessSection).prop('feedback')).toEqual('You got it!');
        expect(wrapper.find(GuessSection).prop('guessCount')).toEqual(5);
    });

    it('Should reset to initial state when onRestartGame() is called', () => {
        const wrapper = mount(<Game />);
        const guess = 5;
        wrapper.instance().makeGuess(guess);
        expect(wrapper.state('guesses')).toEqual([5]);
        wrapper.find('a[className="new"]').simulate('click');
        wrapper.update();
        expect(wrapper.state('guesses')).toEqual([]);
    });

    it('Should update auralStatus when generateAuralUpdate() is called', () => {
        const wrapper = mount(<Game />);
        const guess = [5, 1];
        wrapper.setState({correctAnswer: 100});
        expect(wrapper.state('auralStatus')).toEqual('');
        wrapper.instance().makeGuess(guess[0]);
        wrapper.instance().makeGuess(guess[1]);
        wrapper.update();
        wrapper.find('a[href="#get-status"]').simulate('click');
        expect(wrapper.state('auralStatus')).toEqual(`Here's the status of the game right now: You're Ice Cold... You've made 2 guesses. In order of most- to least-recent, they are: 1, 5`);
    });
});
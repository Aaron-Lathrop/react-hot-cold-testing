import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

import {shallow, mount} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
    it('Renders without crashing', () => {
        const guesses = [1, 2, 3, 4, 5];
        const auralStatus = 'Foobar';
        shallow(<StatusSection guesses={guesses} auralStatus={auralStatus} />);
    });
});
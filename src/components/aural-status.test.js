import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('Renders without crashing', () => {
        const auralStatus = 'Foobar';
        shallow(<AuralStatus auralStatus={auralStatus}/>);
    });

    it('Renders an auralStatus update', () => {
        const update = "Check it out now, the funk's soul brother.";
        const wrapper =  shallow(<AuralStatus auralStatus={update}/>);
        expect(wrapper.contains(update)).toEqual(true);
    });
});
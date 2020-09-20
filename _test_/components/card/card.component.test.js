import React from 'react';
import ReactDOM from 'react-dom';
import {Card}  from '../../../src/components/card/card.component';
import { mount } from 'enzyme';


describe('Testing Card Component', () => {
    const div = document.createElement('div');
    mount(<Card />,div);

    it('Testing Card Component Rendering', () => {
        ReactDOM.render(<Card />,div); 
        ReactDOM.unmountComponentAtNode(div);
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

});
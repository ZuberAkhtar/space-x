import React from 'react';
import ReactDOM from 'react-dom';
import {LandingFilterComponent}  from '../../../src/components/filter/landing-filter.component';
import { mount } from 'enzyme';


describe('Testing Landing Filter Component', () => {
    const div = document.createElement('div');
    mount(<LandingFilterComponent />,div);

    it('Testing Landing Filter Component Rendering', () => {
        ReactDOM.render(<LandingFilterComponent />,div); 
        ReactDOM.unmountComponentAtNode(div);
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

});
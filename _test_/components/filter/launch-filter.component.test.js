import React from 'react';
import ReactDOM from 'react-dom';
import {LaunchFilterComponent}  from '../../../src/components/filter/launch-filter.component';
import { mount } from 'enzyme';


describe('Testing Launch Filter Component', () => {
    const div = document.createElement('div');
    mount(<LaunchFilterComponent />,div);

    it('Testing Launch Filter Component Rendering', () => {
        ReactDOM.render(<LaunchFilterComponent />,div); 
        ReactDOM.unmountComponentAtNode(div);
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

});
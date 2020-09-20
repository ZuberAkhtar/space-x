import React from 'react';
import ReactDOM from 'react-dom';
import {ResetFilterComponent}  from '../../../src/components/filter/reset-filter.component';
import { mount } from 'enzyme';


describe('Testing Reset Filter Component', () => {
    const div = document.createElement('div');
    mount(<ResetFilterComponent />,div);

    it('Testing Reset Filter Component Rendering', () => {
        ReactDOM.render(<ResetFilterComponent />,div); 
        ReactDOM.unmountComponentAtNode(div);
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

});
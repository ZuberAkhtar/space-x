import React from 'react';
import ReactDOM from 'react-dom';
import {YearFilterComponent}  from '../../../src/components/filter/year-filter.component';
import { mount } from 'enzyme';


describe('Testing Year Filter Component', () => {
    const div = document.createElement('div');
    mount(<YearFilterComponent />,div);

    it('Testing Year Filter Component Rendering without Prop Year', () => {
        ReactDOM.render(<YearFilterComponent />,div); 
        ReactDOM.unmountComponentAtNode(div);
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

    it('Testing Year Filter Component Rendering with Prop Year', () => {
       const years = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]
       ReactDOM.render(<YearFilterComponent years = {years}/>,div); 
        ReactDOM.unmountComponentAtNode(div);
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

});
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import FilterContainer  from '../../../src/components/filter/filter-container.component';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});


describe('Testing FilterContainer Component', () => {
    const div = document.createElement('div');
    const component = mount(<Provider store={store}><FilterContainer /></Provider>,div);
    const instance = component.find('FilterContainer').instance();

    it('Testing Rendering FilterContainer Component', () => {
        ReactDOM.render(<Provider store={store}><FilterContainer /></Provider>,div); 
        ReactDOM.unmountComponentAtNode(div);
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

     it('Testing Year Handler Funtion ', () => {
        const selectedYear = 2020
        instance.handleYearChange(selectedYear);
        expect(instance.state.year).toBe(2020)
    });

      it('Testing Launch Handler Function with Success Status', () => {
      
       const launchStatus = 'Success'
        instance.handleLaunchStatus(launchStatus);
        expect(instance.state.launch).toBe(true)
    });

    it('Testing Launch Handler Function with Fail Status', () => {
      
        const launchStatus = 'Fail'
         instance.handleLaunchStatus(launchStatus);
         expect(instance.state.launch).toBe(false)
     });

     it('Testing Landing Handler Function with Success Status', () => {
      
        const landingStatus = 'Success'
         instance.handleLandingStatus(landingStatus);
         expect(instance.state.land).toBe(true)
     });
 
     it('Testing Landing Handler Function with Fail Status', () => {
       
         const landingStatus = 'Fail'
          instance.handleLandingStatus(landingStatus);
          expect(instance.state.land).toBe(false)
      });

    it('Testing Reset Filter Function', () => {
        instance.handleFilterReset();
        expect(instance.state.year).toBe(null)
        expect(instance.state.launch).toBe(null)
        expect(instance.state.land).toBe(null)
    });

});
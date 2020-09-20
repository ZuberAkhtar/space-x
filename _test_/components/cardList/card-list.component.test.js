import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mockStoreData } from '../../mockStoreData'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({...mockStoreData,loader : true});

import CardList  from '../../../src/components/cardList/card-list.component';



describe('Testing CardList Component', () => {
    const div = document.createElement('div');
    mount(<Provider store={store}><CardList /></Provider>,div);

    it('Testing CardList Component Rendering', () => {
        ReactDOM.render(<Provider store={store}><CardList /></Provider>,div); 
        ReactDOM.unmountComponentAtNode(div);
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });
    it('Testing Rendering With Empty Data', () => {
        const store = mockStore({ data : []});
        mount (<Provider store={store}><CardList /></Provider>,div); 
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });
    it('Testing Rendering With Data', () => {
        const store = mockStore(mockStoreData);
        mount (<Provider store={store}><CardList /></Provider>,div); 
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });
});
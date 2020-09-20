import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer  from '../../../src/components/mainContainer/main-container.component';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});


describe('Main Component Testing', () => {
    const div = document.createElement('div');
    mount(<Provider store={store}><MainContainer /></Provider>,div);

    it('Testing Main Component Rendering Without Crashing', () => {
        ReactDOM.render(<Provider store={store}><MainContainer /></Provider>,div); 
        ReactDOM.unmountComponentAtNode(div);
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

});
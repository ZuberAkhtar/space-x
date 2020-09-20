import React from 'react';
import ReactDOM from 'react-dom';
import App  from '../src/App';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});


describe('Testing App Component', () => {
    const div = document.createElement('div');
    mount(<Provider store={store}><App /></Provider>,div);

    it('renders without crashing', () => {
        ReactDOM.render(<Provider store={store}><App /></Provider>,div); 
        ReactDOM.unmountComponentAtNode(div);
        expect(typeof(ReactDOM.unmountComponentAtNode)).toEqual('function');
    });

});
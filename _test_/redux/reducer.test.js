import reducer from '../../src/redux/root-reducer';
import { mockStoreData, loadMoreData } from '../mockStoreData';


describe('Testing reducer cases --', () => {

    it('default test', () => {
        expect(reducer(mockStoreData, {})).toEqual(mockStoreData);
    });
    it('test update store action', () => {
        expect(reducer(mockStoreData, {
            type: 'UPDATE_PROGRAM_LIST',
            payload: { ...loadMoreData }
        })).toEqual({
            data : loadMoreData.data,
        })
    })
    it('test initial data action', () => {
        expect(reducer(mockStoreData, {
            type: 'SET_PROGRAM_LIST',
            payload: {...mockStoreData}
        })).toEqual({
            data : mockStoreData.data,
        })
    })
    it('test loader action', () => {
        expect(reducer({loader : false}, {
            type: 'SET_LOADER',
            payload: { loader:true }
        })).toEqual({
            loader : true
        })
    })
});
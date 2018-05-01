import * as redux from 'redux';
import searchReducer from './search';
import docReducer from './doc';
import successPicsReducer from './successPics';

const rootReducer: redux.Reducer<any> = redux.combineReducers({
    // state: (state = {}) => state
    search: searchReducer,
    doc: docReducer,
    successPics: successPicsReducer
});

export default rootReducer;

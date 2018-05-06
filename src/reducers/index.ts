import * as redux from 'redux';
import searchReducer from './search';
import docReducer from './doc';
import successPicsReducer from './successPics';
import formReducer from './form';

const rootReducer: redux.Reducer<any> = redux.combineReducers({
    // state: (state = {}) => state
    search: searchReducer,
    doc: docReducer,
    successPics: successPicsReducer,
    form: formReducer
});

export default rootReducer;

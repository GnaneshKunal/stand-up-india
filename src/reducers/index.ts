import * as redux from 'redux';
import searchReducer from './search';
import docReducer from './doc';


const rootReducer: redux.Reducer<any> = redux.combineReducers({
    //state: (state = {}) => state
    search: searchReducer,
    doc: docReducer
});

export default rootReducer;

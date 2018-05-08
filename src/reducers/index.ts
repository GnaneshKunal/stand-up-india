import * as redux from 'redux';
import searchReducer from './search';
import docReducer from './doc';
import successPicsReducer from './successPics';
import formReducer from './form';
import meetingsPicsReducer from './meetingsPics';

const rootReducer: redux.Reducer<any> = redux.combineReducers({
    // state: (state = {}) => state
    search: searchReducer,
    doc: docReducer,
    successPics: successPicsReducer,
    form: formReducer,
    meetingsPics: meetingsPicsReducer
});

export default rootReducer;

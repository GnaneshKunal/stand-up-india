import * as redux from 'redux';
import searchReducer from './search';
import docReducer from './doc';
import successPicsReducer from './successPics';
import formReducer from './form';
import meetingsPicsReducer from './meetingsPics';
import uploadPicsReducer from './uploadPics';
import successSubmitReducer from './successSubmit';
import successReducer from './success';
import DownloadFilesReducer from './downloadFiles';

const rootReducer: redux.Reducer<any> = redux.combineReducers({
    // state: (state = {}) => state
    search: searchReducer,
    doc: docReducer,
    successPics: successPicsReducer,
    form: formReducer,
    meetingsPics: meetingsPicsReducer,
    successSubmit: successSubmitReducer,
    uploadPics: uploadPicsReducer,
    success: successReducer,
    downloadFiles: DownloadFilesReducer
});

export default rootReducer;

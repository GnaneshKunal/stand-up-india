import {
    SUCCESS_LIST,
    SUCCESS_DOC
} from '../actions/types';

interface IActionProps {
    type: string,
    payload: any
}

export default function(state = {}, action: IActionProps) {
    switch (action.type) {
        case SUCCESS_LIST:
            return { ...state, successList: action.payload };
        case SUCCESS_DOC:
            return { ...state, successDoc: action.payload };
    }
    return state;
}

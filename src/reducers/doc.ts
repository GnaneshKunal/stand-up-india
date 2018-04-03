import {
    GET_DOC
} from '../actions/types';

interface IActionProps {
    type: string,
    payload: any
}

export default function(state = {}, action: IActionProps) {
    switch(action.type) {
        case GET_DOC:
            return { ...state, data: action.payload }
    }

    return state;
}

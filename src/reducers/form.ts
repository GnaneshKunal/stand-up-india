import {
    SEND_FORM_DETAILS
} from '../actions/types';

interface IActionProps {
    type: string,
    payload: any
}

export default function(state = {}, action: IActionProps) {
    switch (action.type) {
        case SEND_FORM_DETAILS:
            return { ...state, data: action.payload }
    }

    return state;
}

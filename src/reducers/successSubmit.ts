import {
    SUCCESS_SUBMIT
} from '../actions/types';

interface IActionProps {
    type: string,
    payload: any
}

export default function(state = {}, action: IActionProps) {
    switch (action.type) {
        case SUCCESS_SUBMIT:
            return { ...state, data: action.payload }
    }

    return state;
}

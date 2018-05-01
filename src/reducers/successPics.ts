import {
    SUCCESS_PICS
} from '../actions/types';

interface IActionProps {
    type: string;
    payload: any;
}

export default function(state = {}, action: IActionProps) {
    switch (action.type) {
        case SUCCESS_PICS:
            return { ...state, data: action.payload };
    }

    return state;
}

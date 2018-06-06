import { GET_DOWNLOAD_FILES } from '../actions/types';

interface IActionProps {
    type: string,
    payload: any
}

export default function(state = {}, action: IActionProps) {
    switch (action.type) {
        case GET_DOWNLOAD_FILES:
            return { ...state, d_files: action.payload };
    }
    return state;
}


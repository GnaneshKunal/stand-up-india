import axios from 'axios';

import {
    SEARCH_DOC,
    GET_DOC
} from './types';

const ROOT_URL = 'http://localhost:8080';

export function getDocs(search: { search: string }) {
    return function(dispatch: any) {
        let searchDocs = encodeURIComponent(search.search).replace(/%20/g, '+');
        return axios.get(`${ROOT_URL}/api/search?q=${searchDocs}`)
            .then(response => {
                dispatch({
                    type: SEARCH_DOC,
                    payload: response.data.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function getDoc(docID: string) {
    return function(dispatch: any) {
        return axios.get(`${ROOT_URL}/api/doc?id=${docID}`)
            .then(response => {
                dispatch({
                    type: GET_DOC,
                    payload: response.data.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
}

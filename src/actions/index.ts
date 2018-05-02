import axios from 'axios';

import {
    SEARCH_DOC,
    GET_DOC,
    SUCCESS_PICS
} from './types';

const ROOT_URL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');

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

export function getSuccessPics() {
    return function(dispatch: any) {
        return axios.get(`${ROOT_URL}/api/success-pics`)
            .then(response => {
                dispatch({
                    type: SUCCESS_PICS,
                    payload: response.data.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
}

import axios from 'axios';

import {
    SEARCH_DOC,
    GET_DOC,
    SUCCESS_PICS,
    SEND_FORM_DETAILS
} from './types';

interface Idetails {
    name: string;
    email: string;
    phone: string;
    message: string;
}

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

export function sendFormDetails(details: Idetails) {
    return function(dispatch: any) {
        return axios.post(`${ROOT_URL}/api/form`, details)
            .then(response => {
                dispatch({
                    type: SEND_FORM_DETAILS,
                    payload: response.data.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
}

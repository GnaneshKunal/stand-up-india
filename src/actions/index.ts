import axios from 'axios';

import {
    SEARCH_DOC,
    GET_DOC,
    SUCCESS_PICS,
    SEND_FORM_DETAILS,
    MEETINGS_PICS,
    UPLOAD_PICS,
    SUCCESS_SUBMIT
} from './types';

interface Idetails {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const ROOT_URL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');

export function getDocs(search: { search: string }) {
    return (dispatch: any) => {
        const searchDocs = encodeURIComponent(search.search).replace(/%20/g, '+');
        return axios.get(`${ROOT_URL}/api/search?q=${searchDocs}`)
            .then((response: any) => {
                dispatch({
                    type: SEARCH_DOC,
                    payload: response.data.data
                });
            })
            .catch((err: Error) => {
                // tslint:disable-next-line
                console.log(err);
            });
    };
}

export function submitSuccessForm(form: any) {
    return (dispatch: any) => {
        const formData = new FormData();
        formData.append("bank", form.bank);
        formData.append("brief", form.brief);
        formData.append("businessName", form.businessName);
        formData.append("businessNature", form.businessNature);
        formData.append("district", form.district);
        formData.append("email", form.email);
        formData.append("firstTime", form.firstTime);
        formData.append("loan", form.loan);
        formData.append("location", form.location);
        formData.append("name", form.name);
        formData.append("phone", form.phone);
        formData.append("img", form.pic);
        formData.append("vid", form.vid);
        formData.append("year", form.year);
        formData.append("pincode", form.pincode);
        formData.append("place", form.place);
        formData.append("state", form.state);

        axios.post('http://localhost:8080/api/upload', formData, {
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        })
            .then((res: any) => {
                dispatch({
                    type: SUCCESS_SUBMIT,
                    payload: res.data.data
                })
            })
            .catch((err: any) => {
                console.log(err);
            });

        return axios.get
    };
}

export function uploadPics(formData: any) {
    const MainFormData = new FormData;
    MainFormData.append("files", formData[1].files);
    return (dispatch: any) => {
        return axios.post(`${ROOT_URL}/api/upload`, MainFormData, {
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        })
            .then((response: any) => {
                dispatch({
                    type: UPLOAD_PICS,
                    payload: response.data.data
                });
            })
            .catch((err: Error) => {
                //tslint:disable-next-line
                console.log(JSON.stringify(err));
            });
    };
}

export function getDoc(docID: string) {
    return (dispatch: any) => {
        return axios.get(`${ROOT_URL}/api/doc?id=${docID}`)
            .then((response: any) => {
                dispatch({
                    type: GET_DOC,
                    payload: response.data.data
                });
            })
            .catch((err: Error) => {
                // tslint:disable-next-line
                console.log(err);
            });
    };
}

export function getSuccessPics() {
    return (dispatch: any) => {
        return axios.get(`${ROOT_URL}/api/success-pics`)
            .then((response: any) => {
                dispatch({
                    type: SUCCESS_PICS,
                    payload: response.data.data
                });
            })
            .catch((err: Error) => {
                // tslint:disable-next-line
                console.log(err);
            });
    };
}

export function getMeetingsPics() {
    return (dispatch: any) => {
        return axios.get(`${ROOT_URL}/api/meetings-pics`)
            .then((response: any) => {
                dispatch({
                    type: MEETINGS_PICS,
                    payload: response.data.data
                });
            })
            .catch((err: Error) => {
                // tslint:disable-next-line
                console.log(err);
            });
    };
}

export function sendFormDetails(details: Idetails) {
    return (dispatch: any) => {
        return axios.post(`${ROOT_URL}/api/form`, details)
            .then((response: any) => {
                dispatch({
                    type: SEND_FORM_DETAILS,
                    payload: response.data.data
                });
            })
            .catch((err: Error) => {
                // tslint:disable-next-line
                console.log(err);
            });
    };
}

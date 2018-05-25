import {
    ADD_ARTICLE,
    ADD_CLIENTS,
    EDIT_USER,
    GET_USER,
    GET_SEARCH,
} from '../constants/action-types';
import { push } from 'react-router-redux';
import normalizeClientList from '../../normalizr/index';

// const user = new schema.Entity('users');
const serverUrl = 'http://localhost:8000/';

export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article
});

export const getClients = response => ({
    type: ADD_CLIENTS,
    clients: response
});

export const editUser = user => ({
    type: EDIT_USER,
    user,
});

export const getUser = user => ({
    type: GET_USER,
    user,
});

export const GetSearchArr = response => ({
    type: GET_SEARCH,
    clientsAfterSearch: response
});

export function asyncEditUser(user) {
    return (dispatch) => {
        if (localStorage.getItem('token')) {
            fetch(`${serverUrl}Edit/${user}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
                    body: JSON.stringify(user),
                })
                .then(response => response.json())
                .then(response => {
                    dispatch(push('/'));
                    alert(response);
                })
                .catch(err => console.log(err));
        } else {
            alert('You must Autorization');
            dispatch(push('/')); }
    };
}

export function asyncDeleteUser(currentUser) {
    return (dispatch) => {
        if (localStorage.getItem('token')) {
            fetch(`${serverUrl}Delete`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
                    body: JSON.stringify(currentUser),
                })
                .then(response => response.json())
                .then(response => {
                    dispatch(push('/'));
                    alert(response);
                })
                .catch(alert);
        } else {
            alert('You must Autorization');
            dispatch(push('/')); }
    };
}

export function asyncAddUser(user) {
    return (dispatch) => {
        if (localStorage.getItem('token')) {
            fetch(`${serverUrl}AddUser`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
                    body: JSON.stringify(user),
                })
                .then(response => response.json())
                .then(response => {
                    dispatch(push('/'));
                    alert(response);
                })
                .catch(err => console.log(err));
        } else {
            alert('You must Autorization');
            dispatch(push('/')); }
    };

}


export function asyncGetClients() {
    return (dispatch) => {
        fetch(serverUrl)
            .then(response => response.json())
            .then(response => {
                dispatch(getClients(normalizeClientList(response)));
            })
            .catch(alert);
    };
}

export function asyncGetUser(id) {
    return (dispatch) => {
        fetch(`${serverUrl}User/${id}`)
            .then(response => response.json())
            .then(response => {
                dispatch(getUser(response));
            })
            .catch(alert);
    };
}

export function asyncGetSearchArr(text) {
    return (dispatch) => {
        fetch(`${serverUrl}Search/${text}`)
            .then(response => response.json())
            .then(response => {
                dispatch(GetSearchArr(normalizeClientList(response)));
            })
            .catch(alert);
    };
}

export function asyncRegistration(log) {
    return (dispatch) => {
        fetch(`${serverUrl}UserRegistration`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(log),
            })
            .then(response => response.json())
            .then((response) => {
                dispatch(push('/'));
                localStorage.setItem('token', response.token);
                localStorage.setItem('email', response.email);
            })
            .catch(err => console.log(err));
    };
}

export function asyncLogIn(log) {
    return (dispatch) => {
        fetch(`${serverUrl}UserLogIn`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(log),
            })
            .then(response => response.json())
            .then((response) => {
                if (response) {
                    dispatch(push('/'));
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('email', response.email);
                } else { alert('Incorrect password of email'); }
            })
            .catch(err => console.log(err));
    };
}







import * as types from '../constants/action-types';
import createHistory from 'history/createBrowserHistory';

const initialState = {
    deleteUser: {},
    history: {},
    clients: null,
    currentUser: null,
    clientsAfterSearch: null,
};

const rootReducer = (state = initialState, action) => {
    //Create global index for correct working search, and delete
    function clientsToGlobalInxed(array) {
        let newArray = array.filter((client, index) => {
            client.globalIndex = index;
            return client;
        });
        return newArray;
    }
    state.history = createHistory();

    switch (action.type) {
    case (types.ADD_CLIENTS): {
        return { ...state, clientsAfterSearch: action.clients };
    }
    case (types.GET_USER): {
        // console.log(action.user);
        return { ...state, currentUser: action.user};
    }
    case (types.GET_SEARCH): {
        return { ...state, clientsAfterSearch: action.clientsAfterSearch};
    }
    case (types.EDIT_USER): {
        let clients = [...state.clients];
        clients[action.user._id] = action.user;
        return { ...state, clients: clients };
    }
    case (types.ADD_ARTICLE): {
        return { ...state, articles: [...state.articles, action.payload] };
    }
    case (types.ADD_USER): {
        let clients = [...state.clients, action.user];
        return { ...state, clients: clients };
    }
    case (types.DELETE_ARTICLE): {
        let newArray = [...state.clients];
        let deleteLength = 1;
        newArray.splice(action.index, deleteLength);
        clientsToGlobalInxed(newArray);
        return { ...state, clients: [...newArray] };
    }
    default:
        return state;
    }
};

export default rootReducer;
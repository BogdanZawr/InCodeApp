import rootReducer from '../reducers/index';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

export const history = createHistory();

export const middleware = routerMiddleware(history);

const store = createStore(combineReducers({
    rootReducer,
    router: routerReducer
}), composeWithDevTools( applyMiddleware(middleware, ReduxThunk)));

export default store;
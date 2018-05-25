import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './js/store/index';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './js/store/index';
import 'semantic-ui-css/semantic.min.css';
import Header from './js/components/Header'
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Header />
                <div className="mainContainer">
                    <div className="container">
                        <App />
                    </div>
                </div>
            </div>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
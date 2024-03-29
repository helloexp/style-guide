import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/es/integration/react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/index';
import Routes from './routes/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';
import './styles/global/main.scss';

import ga from 'react-ga';
// ga.initialize('UA-136670118-1');

// gaTracking = () => {
//     ga.pageview(window.location.hash);
// }
const { persistor, store } = configureStore();
// persistor.purge(); // Debug to clear persist

const rootElement = document.getElementById('root');

const Root = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Router >
                <Routes />  
            </Router>
        </PersistGate>
    </Provider>
);

ReactDOM.render(<Root />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import Store from './FinalProject/Store';
import { getProducts } from './FinalProject/Slice';
// Store.dispatch(getProducts())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <Provider store={Store}>
        <App/>
    </Provider>
);
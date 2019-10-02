import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store/store';
import './scss/main.scss'

ReactDOM.render(
<Provider store={store}>
	<StrictMode><App /></StrictMode>
</Provider>, document.getElementById('root'));


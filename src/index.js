import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();

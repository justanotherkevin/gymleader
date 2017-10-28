import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import stylesheets
import '@blueprintjs/core/dist/blueprint.css';
import "normalize.css/normalize.css"

ReactDOM.render(<App/>,document.getElementById('root'));
registerServiceWorker();

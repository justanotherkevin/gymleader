import React from 'react';
import ReactDOM from 'react-dom';
import Gymleaders from './Gymleaders';
import registerServiceWorker from './registerServiceWorker';
// import stylesheets
import '@blueprintjs/core/dist/blueprint.css';
import "normalize.css/normalize.css"

ReactDOM.render(<Gymleaders/>,document.getElementById('root'));
registerServiceWorker();

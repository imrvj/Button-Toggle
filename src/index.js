import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import Comps from "./component/comps";
import Navigation from './component/navigation';
import Event from './component/event';

ReactDOM.render(<Comps/>, document.getElementById('root'));
registerServiceWorker();


//ReactDOM.render(<Navigation/>,document.getElementById('root'));


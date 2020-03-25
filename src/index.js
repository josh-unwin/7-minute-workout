import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Go from './components/Go';
import Exercises from './components/Exercises'
import WhatIsThis from './components/WhatIsThis';

ReactDOM.render( 
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route exact={true} path="/" component={App} />
        <Route path="/go" render={(props) => <Go { ...props } />} />
        <Route path="/exercises" component={Exercises} />
        <Route path="/what-is-this" component={WhatIsThis} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

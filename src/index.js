import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, withRouter } from 'react-router-dom';

import './styles.css';
import Loader from './components/Loader';
import Initiator from './components/Initiator';
import App from './App';

const AppWithRouter = withRouter(App);
ReactDOM.render(
  <HashRouter>
    <Loader
      loader={setLoaded => <Initiator setLoaded={setLoaded} />}
      component={AppWithRouter}
      className="page-container"
    />
  </HashRouter>,
  document.getElementById('root'),
);

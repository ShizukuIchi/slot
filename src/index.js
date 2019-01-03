import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './styles.css';
import Loader from './components/Loader';
import Initiator from './components/Initiator';
import App from './App';

ReactDOM.render(
  <HashRouter>
    <Loader
      loader={setLoaded => <Initiator setLoaded={setLoaded} />}
      component={App}
      className="page-container"
    />
  </HashRouter>,
  document.getElementById('root'),
);

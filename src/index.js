import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';

import './styles.css';
import MainPage from './MainPage';
import SlotPage from './SlotPage';

class App extends React.Component {
  state = {
    region: '大安',
    price: 200,
    category: 'XiCan',
    time: 'dinner',
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <HashRouter>
        <div className="page-container">
          <Route
            path="/"
            exact
            render={props => (
              <MainPage
                {...this.state}
                {...props}
                handleChange={this.handleChange}
              />
            )}
          />
          <Route
            path="/slot"
            render={props => <SlotPage {...props} {...this.state} />}
          />
        </div>
      </HashRouter>
    );
  }
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

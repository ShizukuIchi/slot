import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
      <Router>
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
      </Router>
    );
  }
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

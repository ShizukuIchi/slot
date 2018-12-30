import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';

import './styles.css';
import MainPage from './MainPage';
import SlotPage from './SlotPage';
import restaurantsJson from './assets/data.json';

class App extends React.Component {
  state = {
    region: '大安',
    price: 200,
    category: 'XiCan',
    time: 'dinner',
    restaurants: [],
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = () => {
    const randomID = Math.floor(
      Math.random() * (restaurantsJson.data.length - 10),
    );
    const restaurants = restaurantsJson.data.filter(
      res => res.id > randomID && res.id <= randomID + 10,
    );
    setTimeout(() => {
      this.setState({
        restaurants,
      });
    }, 500);
  };
  render() {
    return (
      <div className="page-container">
        <Route
          path="/"
          exact
          render={props => (
            <MainPage
              {...this.state}
              {...props}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          )}
        />
        <Route
          path="/slot"
          render={props => <SlotPage {...props} {...this.state} />}
        />
      </div>
    );
  }
}
const rootElement = document.getElementById('root');
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  rootElement,
);

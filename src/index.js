import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';

import './styles.css';
import MainPage from './MainPage';
import SlotPage from './SlotPage';
import Loader from './components/Loader';
import Initiator from './components/Initiator';
import restaurantsJson from './assets/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    const randomID = Math.floor(
      Math.random() * (restaurantsJson.data.length - 20),
    );
    this.state = {
      region: '大安',
      price: 200,
      category: '速食',
      time: '晚餐',
      restaurants: restaurantsJson.data.filter(
        res => res.id > randomID && res.id <= randomID + 20,
      ),
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = () => {
    const randomID = Math.floor(
      Math.random() * (restaurantsJson.data.length - 20),
    );
    const restaurants = restaurantsJson.data.filter(
      res => res.id > randomID && res.id <= randomID + 20,
    );
    this.setState({
      restaurants,
    });
  };
  render() {
    return (
      <>
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
      </>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <HashRouter>
    <Loader
      loader={setLoaded => <Initiator setLoaded={setLoaded} />}
      component={App}
      className="page-container"
    />
  </HashRouter>,
  rootElement,
);

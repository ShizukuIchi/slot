import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, withRouter } from 'react-router-dom';

import './styles.css';
import MainPage from './MainPage';
import SlotPage from './SlotPage';
import Loader from './components/Loader';
import Initiator from './components/Initiator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      region: '大安',
      price: 200,
      category: '速食',
      time: '晚餐',
      restaurants: [],
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleUpdateRestaurants = restaurants => this.setState({ restaurants });
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
              handleUpdateRestaurants={this.handleUpdateRestaurants}
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
      component={withRouter(App)}
      className="page-container"
    />
  </HashRouter>,
  rootElement,
);

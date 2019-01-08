import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './styles.css';
import MainPage from './MainPage';
import SlotPage from './SlotPage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      region: '都可以',
      price: 300,
      costoption1: '以上',
      costoption2: true,
      category: '中式料理',
      rating: 3.5,
      ratingoption1: true,
      restaurants: [],
    };
  }
  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
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

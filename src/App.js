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

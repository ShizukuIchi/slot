import React, { Component } from 'react';
import WebFont from 'webfontloader';

export default class Initiator extends Component {
  componentDidMount() {
    WebFont.load({
      google: {
        families: ['Noto Sans TC'],
      },
      active: () => {
        this.props.setLoaded();
      },
    });
  }
  render() {
    return <div />;
  }
}

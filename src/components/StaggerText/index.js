import React, { Component } from 'react';
import posed from 'react-pose';

export default class StaggerText extends Component {
  state = {
    visible: false,
  };
  componentDidMount() {
    this.init();
  }
  init() {
    this.setState({ visible: true });
  }
  render() {
    const { text } = this.props;
    return (
      <Title pose={this.state.visible ? 'visible' : 'invisible'}>
        {text.split('').map((c, index) => (
          <Character key={index}>{c}</Character>
        ))}
      </Title>
    );
  }
}

const Title = posed.div({
  visible: {
    delayChildren: 100,
    staggerChildren: 40,
  },
});

const Character = posed.div({
  visible: { y: 0, opacity: 1 },
  invisible: { y: 20, opacity: 0 },
});

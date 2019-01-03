import React from 'react';
import { styler, easing, tween } from 'popmotion';

class SlotRoller extends React.Component {
  componentDidMount() {
    this.listStyler = styler(this.list);
  }
  componentWillUnmount() {
    this.animator.stop();
  }
  roll = () => {
    this.animator = tween({
      from: this.listStyler.get('y'),
      to: { y: this.listStyler.get('y') + 2000 },
      duration: 5000,
      ease: easing.cubicBezier(0.09, 0.69, 0.18, 1),
    })
      .pipe(({ y }) => ({
        y: y % 300,
      }))
      .start(this.listStyler.set);
  };
  render() {
    return <div ref={ref => (this.list = ref)}>{this.props.children}</div>;
  }
}
export default SlotRoller;

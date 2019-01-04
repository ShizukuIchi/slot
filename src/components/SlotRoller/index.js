import React from 'react';
import { styler, easing, tween } from 'popmotion';

class SlotRoller extends React.Component {
  componentDidMount() {
    this.listStyler = styler(this.list);
    this.rowsRolled = 0;
  }
  componentWillUnmount() {
    if (this.animator) this.animator.stop();
  }
  setListRef = ref => {
    this.list = ref;
  };
  roll = () => {
    const rows = Math.floor(Math.random() * 7) + 27;
    this.rowsRolled += rows;
    const bounding = this.listStyler.get('height') - 148;
    this.animator = tween({
      from: this.listStyler.get('y'),
      to: { y: this.listStyler.get('y') + rows * 148 },
      duration: this.props.rollTime,
      ease: easing.cubicBezier(0.14, 0.92, 0.81, 1.03),
    })
      .pipe(({ y }) => ({ y: y % bounding }))
      .start({
        update: this.listStyler.set,
        complete: () => this.props.callback(this.rowsRolled),
      });
  };
  render() {
    return (
      <div className={this.props.className} ref={this.setListRef}>
        {this.props.children}
      </div>
    );
  }
}

export default SlotRoller;

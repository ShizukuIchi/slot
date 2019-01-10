import React from 'react';
import { styler, easing, tween, value } from 'popmotion';

class SlotRoller extends React.Component {
  componentDidMount() {
    this.listStyler = styler(this.list);
    this.listY = value(0, v => this.listStyler.set('y', v))
    this.rowsRolled = 0;
  }
  componentWillUnmount() {
    if (this.animator) this.animator.stop();
  }
  setListRef = ref => {
    this.list = ref;
  };
  roll = () => {
    const rows = Math.floor(Math.random() * 20) + 20;
    this.rowsRolled += rows;
    const bounding = this.listStyler.get('height') - 148;
    this.animator = tween({
      from: this.listY.get(),
      to: this.listY.get() + rows * 148,
      duration: this.props.rollTime,
      ease: easing.cubicBezier(0.14, 0.92, 0.81, 1.03),
    })
      .pipe(v => v % bounding)
      .start({
        update: v => this.listY.update(v),
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

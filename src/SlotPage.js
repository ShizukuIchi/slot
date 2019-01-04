import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import SplitText from 'react-pose-text';

import Modal from './components/Modal';
import LongPressImg from './components/LongPressImg';
import SlotRoller from './components/SlotRoller';
import slot from './assets/slot.png';
import handle from './assets/handle-large.png';

class SlotPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isSlotLocked: false,
      isModalLocked: true,
      restaurant: this.props.restaurants[
        Math.floor(Math.random() * this.props.restaurants.length)
      ],
    };
    this.isFirstTime = true;
  }
  componentWillUnmount() {
    clearTimeout(this.slotLockTimer);
  }
  goBack = () => {
    this.props.history.push('/');
  };
  openModal = () => {
    if (this.state.isSlotLocked || this.isFirstTime) return;
    this.setState({
      isModalOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };
  changeRestaurant = () => {
    if (this.state.isSlotLocked) return;
    this.roller.roll();
    this.isFirstTime = false;
    const { restaurants } = this.props;
    const restaurant =
      restaurants[Math.floor(Math.random() * restaurants.length)];
    this.setState({ restaurant, isSlotLocked: true });
    this.slotLockTimer = setTimeout(() => {
      this.setState({
        isSlotLocked: false,
      });
    }, 2000);
  };
  restaurantWillUpdate = () => {
    if (this.state.isSlotLocked) return;
    this.roller.roll();
    this.isFirstTime = false;
    this.setState({ isSlotLocked: true });
  };
  updateRestaurant = index => {
    const { restaurants } = this.props;
    const restaurant =
      restaurants[restaurants.length - (index % restaurants.length) - 1];
    this.setState({ restaurant, isSlotLocked: false });
  };
  genItems = () => {
    const { restaurants } = this.props;
    const dummy = { ...restaurants[restaurants.length - 1], id: -1 };
    return [dummy, ...restaurants].map(item => (
      <div key={item.id} className="roll-item">
        <div className="inner-roll">{item.name}</div>
      </div>
    ));
  };
  render() {
    const { restaurant, isModalOpen, isSlotLocked } = this.state;
    if (typeof restaurant === 'undefined') return <Redirect to="/" />;
    return (
      <div className={this.props.className}>
        <div className="background">
          <img src={slot} className="slot" alt="slot" />
          <LongPressImg
            src={handle}
            className="handle"
            alt="handle"
            onLongPress={this.changeRestaurant}
            pressTime={500}
          />
        </div>
        <div className="container">
          <div className="title">
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              拉出來的命定餐廳是...
            </SplitText>
          </div>
          <div className="roll">
            <SlotRoller
              ref={r => (this.roller = r)}
              rollTime={4000}
              callback={this.updateRestaurant}
              items={this.props.restaurants}
              className="roll-items"
            >
              {this.genItems()}
            </SlotRoller>
          </div>
          <div className="buttons">
            <button className="button" onClick={this.goBack}>
              回主選單
            </button>
            <button
              className={isSlotLocked ? 'not-allowed' : ''}
              onClick={this.restaurantWillUpdate}
            >
              {this.isFirstTime ? '第一次拉拉' : '哼！我要重拉'}
            </button>
            <button
              className={isSlotLocked || this.isFirstTime ? 'not-allowed' : ''}
              onClick={this.openModal}
            >
              餐廳詳細資訊
            </button>
          </div>
        </div>
        <Modal
          visible={isModalOpen}
          onClose={this.closeModal}
          restaurant={restaurant}
        />
      </div>
    );
  }
}

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30,
  },
};

export default styled(SlotPage)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    height: 600px;
    width: 900px;
    position: relative;
    & > * {
      position: absolute;
    }
  }
  .background {
    position: absolute;
    height: 600px;
    width: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slot {
    width: 87%;
  }
  .handle {
    width: 13%;
    transform: translate(-41px, -60px);
    cursor: pointer;
    z-index: 2;
    filter: drop-shadow(1px 1px 5px black);
    transition: transform 1s;
    transform-origin: bottom;
    &:active {
      transform: translate(-41px, -60px) rotateX(-90deg);
    }
  }
  .title {
    top: 153px;
    left: 74px;
    color: white;
    font-size: 2.5em;
    font-weight: 500;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
  }
  .roll {
    font-size: 3em;
    text-align: center;
    top: 250px;
    left: 86px;
    width: 487px;
    height: 148px;
    overflow: hidden;
  }
  .inner-roll {
    position: absolute;
    top: 0;
    left: 10px;
    right: 10px;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .roll-items {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .roll-item {
    position: relative;
    overflow: hidden;
    height: 148px;
    width: 100%;
  }
  .buttons {
    top: 445px;
    left: 57px;
    width: 659px;
    height: 66px;
    display: flex;
    justify-content: space-around;
    perspective: 400px;
    align-items: center;
  }
  button {
    cursor: pointer;
    width: 180px;
    height: 55px;
    font-size: 1.6em;
    font-weight: 700;
    background: #ca3535;
    transform: rotateX(35deg) translateY(-6px);
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    border: 0;
    border-radius: 10px;
    box-shadow: 0px 6px 0px #630d0d, 0px 3px 15px rgba(0, 0, 0, 0.4),
      inset 0px 1px 0px rgba(255, 255, 255, 0.3),
      inset 0px 0px 3px rgba(255, 255, 255, 0.5);
    outline: 0;
    transition: all 0.05s, color 0.2s;
    color: white;
    &:active {
      color: rgb(255, 255, 255, 0.9);
      box-shadow: none;
      transform: rotateX(35deg) translateY(0px);
      background: #ad2e2e;
    }
  }
  .link {
    display: block;
    width: 100%;
    height: 100%;
  }
  button.not-allowed {
    cursor: not-allowed;
    color: rgb(180, 180, 180);
    &:active {
      color: rgb(180, 180, 180);
      box-shadow: 0px 6px 0px #630d0d, 0px 3px 15px rgba(0, 0, 0, 0.4),
        inset 0px 1px 0px rgba(255, 255, 255, 0.3),
        inset 0px 0px 3px rgba(255, 255, 255, 0.5);
      transform: rotateX(35deg) translateY(-6px);
      background: #ca3535;
    }
  }
`;

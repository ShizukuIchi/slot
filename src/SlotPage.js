import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

import StaggerText from './components/StaggerText';
import Modal from './components/Modal';
import LongPressImg from './components/LongPressImg';
import slot from './assets/slot.png';
import handle from './assets/handle-large.png';

class SlotPage extends React.Component {
  state = {
    isModalOpen: false,
    restaurant: this.props.restaurants[
      Math.floor(Math.random() * this.props.restaurants.length)
    ],
  };
  openModal = () => {
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
    const { restaurants } = this.props;
    const restaurant =
      restaurants[Math.floor(Math.random() * restaurants.length)];
    this.setState({ restaurant });
  };
  render() {
    const { restaurant, isModalOpen } = this.state;
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
          />
        </div>
        <div className="container">
          <div className="title">
            <StaggerText text="拉出來的命定餐廳是..." />
          </div>
          <div className="roll">
            <div className="inner-roll">{restaurant.name}</div>
          </div>
          <div className="buttons">
            <Link className="link" to="/">
              <button className="button">回主選單</button>
            </Link>
            <button className="button" onClick={this.changeRestaurant}>
              哼！我要重拉
            </button>
            <button className="button" onClick={this.openModal}>
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
    transition: transform 1s;
    transform-origin: bottom;
    &:active {
      transform: translate(-41px, -60px) rotateX(-90deg);
    }
  }
  .title {
    top: 153px;
    left: 74px
    color: white;
    font-size: 2.5em;
    font-weight: 500;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
  }
  .roll {
    font-size: 3em;
    text-align: center;
    top: 250px;
    left: 86px
    width: 487px;
    height: 148px;
    overflow: auto;
  }
  .inner-roll {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .buttons {
    top: 445px;
    left: 57px
    width: 659px;
    height: 66px;
    display: flex;
    justify-content: space-around;
    perspective: 400;
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
    text-shadow: 0 1px 1px rgba(0, 0, 0, .5);
    border: 0;
    border-radius: 10px;
    box-shadow: 0px 6px 0px #630d0d, 0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5);
    outline: 0;
    transition: all .04s;
    color: white;
    &:active {
      color: rgb(255,255,255,0.9);
      box-shadow: none;
      transform: rotateX(35deg) translateY(0px);
      background: #ad2e2e;
    }
  }
`;

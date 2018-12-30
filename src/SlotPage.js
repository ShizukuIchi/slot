import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import slot from './assets/slot.png';
import handle from './assets/handle-large.png';

class SlotPage extends React.Component {
  state = {
    isModalOpen: false,
    restaurant: '麥當勞',
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
    this.setState(prevState => ({
      restaurant: prevState.restaurant === '麥當勞' ? '漢堡王' : '麥當勞',
    }));
  };
  render() {
    const { restaurant, isModalOpen } = this.state;
    return (
      <div className={this.props.className}>
        <div className="background">
          <img src={slot} className="slot" alt="slot" />
          <img src={handle} className="handle" alt="handle" />
        </div>
        <div className="container">
          <div className="title">拉出來的命定餐廳是...</div>
          <div className="roll">{restaurant}</div>
          <div className="buttons">
            <Link className="link" to="/">
              <button className="button">回主選單</button>
            </Link>
            <button className="button" onClick={this.changeRestaurant}>
              哼！我要重拉
            </button>
            <button className="button" onClick={this.openModal}>
              看餐廳詳細資訊
            </button>
          </div>
        </div>
        {isModalOpen && (
          <div className="modal-wrapper" onClick={this.closeModal}>
            <div className="modal">
              <div className="modal-title">本日命定餐廳：{restaurant}</div>
              <div className="modal-content">
                <div className="intro">
                  <div>簡介</div>
                  <div>營業時間</div>
                  <div>圖：右側</div>
                </div>
                <div className="addr">地址</div>
                <div className="tel">電話</div>
                <div className="comment">評論</div>
              </div>
            </div>
          </div>
        )}
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
  }
  .roll {
    font-size: 3em;
    text-align: center;
    line-height: 148px;
    top: 250px;
    left: 86px
    width: 487px;
    height: 148px;
  }
  .buttons {
    top: 445px;
    left: 57px
    width: 659px;
    height: 66px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  button {
    width: 150px;
    height: 65px;
    background: rgba(255, 255, 255, 0.5);
  }
  .modal-wrapper {
    z-index: 5;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.3);
  }
  .modal {
    height: 500px;
    width: 800px;
    background: pink;
    padding: 30px;
  }
  .modal-title {
    font-size: 1.5em;
    font-weight: 700;
    height: 10%;
  }
  .modal-content {
    display: grid;
    height: 90%;
    grid-gap: 10px;
    grid-template-rows: 3fr 2fr;
    grid-template-columns: 3fr 2fr 4fr;
    div {
      background: white;
    }
  }
  .intro {
    grid-column: 1/3;
  }
  .addr {
    grid-column: 1;
    grid-row: 2;
  }
  .comment {
    grid-column: 3;
    grid-row: 1/3;
  }
  .tel {
    grid-column: 2;
    grid-row: 2;
  }
`;

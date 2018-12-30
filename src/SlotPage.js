import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
      <div class={this.props.className}>
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
    height: 500px;
    width: 900px;
    border: 1px solid black;
  }
  .title {
    font-size: 2em;
    font-weight: 700;
  }
  .roll {
    height: 50px;
  }
  .buttons {
    display: flex;
  }
  button {
    background: rgba(255, 255, 255, 0.5);
  }
  .modal-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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

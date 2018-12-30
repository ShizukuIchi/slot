import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import slot from './assets/slot-button.png';
import handle from './assets/handle-small.png';

function MainPage(props) {
  const { region, price, category, time, handleChange, handleSubmit } = props;
  return (
    <div className={props.className}>
      <div className="container">
        <div className="content">
          <div className="images">
            <div className="image-outer">
              <img alt="食物" />
            </div>
            <div className="image-outer">
              <img alt="食物" />
            </div>
            <div className="image-outer">
              <img alt="食物" />
            </div>
            <div className="image-outer">
              <img alt="食物" />
            </div>
          </div>
          <div className="slogan">拉出你的下一餐</div>
        </div>
        <div className="content">
          <div className="text-content">
            <div className="title">不知道今天吃甚麼？</div>
            <div className="subtitle">
              回答問題，我們將為您挑選出命中注定的餐廳！
            </div>
            <div className="questions">
              <div className="question">
                1. 您想要用餐的區域:
                <input
                  type="text"
                  name="region"
                  onChange={handleChange}
                  value={region}
                />
              </div>
              <div className="question">
                2. 用餐的價位:
                <input
                  type="text"
                  name="price"
                  onChange={handleChange}
                  value={price}
                />
              </div>
              <div className="question">
                3. 餐點類型:{' '}
                <input
                  type="text"
                  name="category"
                  onChange={handleChange}
                  value={category}
                />
              </div>
              <div className="question">
                4. 用餐時間:{' '}
                <input
                  type="text"
                  name="time"
                  onChange={handleChange}
                  value={time}
                />
              </div>
            </div>
            <div className="slot-wrapper">
              <Link className="slot-button" to="/slot">
                <button className="slot-button-inner" onClick={handleSubmit}>
                  <span className="slot-button-text" to="slot">
                    開始<span className="large">拉</span>
                  </span>
                </button>
              </Link>
              <img className="slot" src={slot} alt="slot-button" />
              <img className="slot-handle" src={handle} alt="slot-handle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default styled(MainPage)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    height: 500px;
    width: 900px;
    display: flex;
    padding: 50px 25px;
  }
  .images {
    width: 100%;
    height: 100%;
    display: grid;
    background: white;
    padding: 5px;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr;
    border-radius: 3px;
    position: absolute;
  }
  .image-outer {
    border-radius: 3px;
    border: 1px solid black;
  }
  .slogan {
    position: relative;
    width: 50%;
    height: 30%;
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
    font-size: 2em;
    padding: 0 20px;
    text-align: center;
  }
  .text-content {
    height: 100%;
    padding: 10px 10px 0;
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 2em;
    font-weight: 700;
    text-align: center;
  }
  .questions {
    margin-top: 20px;
  }
  .question:not(:last-child) {
    margin-bottom: 10px;
  }
  .slot-wrapper {
    flex: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    margin: 0 25px;
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slot-button {
    width: 225px;
    height: 65px;
    border-radius: 10px;
    transform: translate(-19px, 9px);
    background: #ffd966;
    position: absolute;
    text-decoration: none;
    padding: 5px;
    overflow: hidden;
    &:active {
      box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.5);
    }
  }
  .slot-button-inner {
    background: #ffd966;
    outline: 0;
    width: 100%;
    height: 100%;
    border: 5px solid white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active {
      transform: translate(1px, 1px);
    }
  }
  .slot-button-text {
    color: white;
    font-weight: 700;
    font-size: 1.2em;
    .large {
      font-size: 1.6rem;
    }
  }
  .slot {
    width: 80%;
  }
  .slot-handle {
    width: 10%;
    transform: translate(-40%, -40%);
  }
`;

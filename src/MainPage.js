import React from 'react';
import styled from 'styled-components';

import DataRequester from './components/DataRequester';
import slot from './assets/slot-button.png';
import handle from './assets/handle-small.png';
import firstImg from './assets/first-image1.png';
import firstImg2 from './assets/first-image2.png';
import firstImg3 from './assets/first-image3.png';
import firstImg4 from './assets/first-image4.png';
import firstImg5 from './assets/first-image5.png';
import firstImg6 from './assets/first-image6.png';
import firstImg7 from './assets/first-image7.png';
import firstImg8 from './assets/first-image8.png';

function MainPage(props) {
  const {
    region,
    price,
    category,
    time,
    handleChange,
    handleUpdateRestaurants,
  } = props;
  function handleDataUpdate(data) {
    handleUpdateRestaurants(data);
    props.history.push('./slot');
  }
  return (
    <div className={props.className}>
      <div className="container">
        <div className="content">
          <div className="images">
            <div className="image-outer">
              <img src={firstImg} alt="食物" />
              <img src={firstImg5} alt="食物" />
            </div>
            <div className="image-outer">
              <img src={firstImg2} alt="食物" />
              <img src={firstImg6} alt="食物" />
            </div>
            <div className="image-outer">
              <img src={firstImg3} alt="食物" />
              <img src={firstImg7} alt="食物" />
            </div>
            <div className="image-outer">
              <img src={firstImg4} alt="食物" />
              <img src={firstImg8} alt="食物" />
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
                3. 餐點類型:
                <input
                  type="text"
                  name="category"
                  onChange={handleChange}
                  value={category}
                />
              </div>
              <div className="question">
                4. 用餐時間:
                <input
                  type="text"
                  name="time"
                  onChange={handleChange}
                  value={time}
                />
              </div>
            </div>
            <div className="slot-wrapper">
              <DataRequester
                fetchArguments={{ region, price, category, time }}
                callback={handleDataUpdate}
              >
                {(isFetching, onFetch) => (
                  <button
                    className="slot-button"
                    onClick={onFetch}
                    style={{ cursor: isFetching ? 'not-allowed' : 'pointer' }}
                  >
                    <div className="slot-button-inner">
                      <span className="slot-button-text" to="slot">
                        {isFetching ? '讀取' : '開始'}
                        <span className="large">拉</span>
                      </span>
                    </div>
                  </button>
                )}
              </DataRequester>
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
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    img:nth-child(2) {
      opacity: 0;
      animation: fade-in-out 10s infinite;
    }
    &:nth-child(2) img {
      animation-delay: 1s;
    }
    &:nth-child(3) img {
      animation-delay: 2s;
    }
    &:nth-child(4) img {
      animation-delay: 3s;
    }
  }
  @keyframes fade-in-out {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
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
    white-space: nowrap;
    font-size: 2em;
    font-weight: 700;
    text-align: center;
  }
  .subtitle {
    white-space: nowrap;
  }
  .questions {
    margin-top: 20px;
  }
  .question {
    height: 24px;
    display: flex;
  }
  .question:not(:last-child) {
    margin-bottom: 10px;
  }
  .slot-wrapper {
    flex: 1;
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
    outline: 0;
    overflow: hidden;
    &:active {
      transform: translate(-18px, 10px);
      box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.5);
    }
  }
  .slot-button-inner {
    cursor: pointer;
    background: #ffd966;
    width: 100%;
    height: 100%;
    border: 5px solid white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slot-button-text {
    color: white;
    font-weight: 700;
    font-size: 1.6em;
    text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.5);
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

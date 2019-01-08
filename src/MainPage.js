import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useData from './hooks/useData';
import LazyImage from './components/LazyImage';
import { restaurants, MRTStations } from './assets/data';

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
import slotLarge from './assets/slot.png';
import handleLarge from './assets/handle-large.png';
const ImagePlaceholder = () => null;

function MainPage(props) {
  const {
    region,
    price,
    costoption1,
    costoption2,
    category,
    rating,
    handleChange,
    handleUpdateRestaurants,
    ratingoption1,
  } = props;
  const [isFetching, onFetch] = useData();
  function onClick() {
    preloadImages();
    onFetch({
      region,
      price,
      costoption1,
      costoption2,
      category,
      rating,
      ratingoption1,
    })
      .then(handleUpdateRestaurants)
      .catch(console.log);
  }
  function preloadImages() {
    [handleLarge, slotLarge].forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }
  return (
    <div className={props.className}>
      <div className="container">
        <div className="content">
          <div className="images">
            <div className="image-outer">
              <LazyImage
                src={firstImg}
                alt="食物1"
                className="fade-in"
                placeholder={ImagePlaceholder}
              />
              <LazyImage
                src={firstImg5}
                alt="食物5"
                className="fade-in-out"
                placeholder={ImagePlaceholder}
              />
            </div>
            <div className="image-outer">
              <LazyImage
                src={firstImg2}
                className="fade-in"
                alt="食物2"
                placeholder={ImagePlaceholder}
              />
              <LazyImage
                src={firstImg6}
                className="fade-in-out"
                alt="食物6"
                placeholder={ImagePlaceholder}
              />
            </div>
            <div className="image-outer">
              <LazyImage
                src={firstImg3}
                className="fade-in"
                alt="食物3"
                placeholder={ImagePlaceholder}
              />
              <LazyImage
                src={firstImg7}
                className="fade-in-out"
                alt="食物7"
                placeholder={ImagePlaceholder}
              />
            </div>
            <div className="image-outer">
              <LazyImage
                src={firstImg4}
                className="fade-in"
                alt="食物4"
                placeholder={ImagePlaceholder}
              />
              <LazyImage
                src={firstImg8}
                className="fade-in-out"
                alt="食物8"
                placeholder={ImagePlaceholder}
              />
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
                <FontAwesomeIcon
                  className="question-icon"
                  icon="location-arrow"
                />
                <span className="question-title">用餐區域：</span>
                <select onChange={handleChange} name="region" value={region}>
                  {MRTStations.map(m => (
                    <option value={m} key={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
              <div className="question">
                <FontAwesomeIcon className="question-icon" icon="dollar-sign" />
                <span className="question-title">用餐價位：</span>
                <input
                  type="text"
                  name="price"
                  onChange={handleChange}
                  value={price}
                />
                <span className="question-title">以下</span>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="costoption1"
                  checked={costoption1 === '以下'}
                  value="以下"
                />
                <span className="question-title">以上</span>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="costoption1"
                  checked={costoption1 === '以上'}
                  value="以上"
                />
                <span className="question-title">無資訊</span>
                <input
                  type="checkbox"
                  name="costoption2"
                  checked={costoption2}
                  onChange={handleChange}
                />
              </div>
              <div className="question">
                <FontAwesomeIcon className="question-icon" icon="utensils" />
                <span className="question-title">餐點類型：</span>
                <select
                  onChange={handleChange}
                  name="category"
                  value={category}
                >
                  {restaurants.map(r => (
                    <option value={r} key={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <div className="question">
                <FontAwesomeIcon className="question-icon" icon="clock" />
                <span className="question-title">餐廳評價：</span>
                <select onChange={handleChange} name="rating" value={rating}>
                  {[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map(r => (
                    <option value={r} key={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <span className="question-title">無資訊</span>
                <input
                  type="checkbox"
                  name="ratingoption1"
                  checked={ratingoption1}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="slot-wrapper">
              <LazyImage
                src={slot}
                className="slot fade-in"
                alt="slot-button"
                placeholder={ImagePlaceholder}
              />
              <LazyImage
                src={handle}
                className="slot-handle fade-in"
                alt="slot-handle"
                placeholder={ImagePlaceholder}
              />
              <button
                className="slot-button"
                onClick={onClick}
                style={{ cursor: isFetching ? 'not-allowed' : 'pointer' }}
              >
                <div className="slot-button-inner">
                  <span className="slot-button-text" to="slot">
                    {isFetching ? '讀取' : '開始'}
                    <span className="large">拉</span>
                  </span>
                </div>
              </button>
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
    grid-template-rows: 1fr 1fr;
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
      opacity: 0;
      height: 100%;
    }
    &:nth-child(2) img:nth-child(2) {
      animation-delay: 1s;
    }
    &:nth-child(3) img:nth-child(2) {
      animation-delay: 2s;
    }
    &:nth-child(4) img:nth-child(2) {
      animation-delay: 3s;
    }
  }
  .fade-in {
    animation: fade-in 1s forwards;
  }
  .fade-in-out {
    animation: fade-in-out 10s infinite;
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
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
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
    text-align: center;
  }
  .questions {
    margin-top: 20px;
  }
  .question {
    height: 24px;
    display: flex;
    align-items: center;
    input[type='text'] {
      width: 40px;
      padding: 0 3px;
      text-align: right;
      border-width: 1px;
      flex-grow: 1;
    }
    input[type='radio'],
    input[type='checkbox'] {
      margin-left: 7px;
    }

    select {
      width: 100px;
    }
  }
  .question-icon {
    width: 16px;
    height: 16px;
  }
  .question:not(:last-child) {
    margin-bottom: 10px;
  }
  .question-title {
    white-space: nowrap;
    margin-left: 7px;
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
    width: 235px;
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

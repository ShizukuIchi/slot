import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useData from './hooks/useData';
import LazyImage from './components/LazyImage';
import Rating from './components/Rating';
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
      .catch(e => {
        handleUpdateRestaurants([]);
        console.log(e);
      });
  }
  function preloadImages() {
    [handleLarge, slotLarge].forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }
  function handleRatingChange(value) {
    handleChange({
      target: {
        name: 'rating',
        value,
      },
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
                  maxLength="3"
                />
                <span className="question-title">元</span>
                <select
                  onChange={handleChange}
                  name="costoption1"
                  value={costoption1}
                  className="cost-option"
                >
                  {['以上', '以下'].map(r => (
                    <option value={r} key={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <span className="question-title  no-info">包含無資訊</span>
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
                <FontAwesomeIcon className="question-icon" icon="star" />
                <span className="question-title">餐廳評價：</span>
                <Rating
                  maxValue={5}
                  value={rating}
                  size={25}
                  onChange={handleRatingChange}
                />
                <span className="question-title no-info">包含無資訊</span>
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
                className="slot"
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
    background-color: #e17055;
    border-radius: 7px;
    box-shadow: 5px 5px 15px rgba(45, 52, 54, 0.5);
  }
  .images {
    width: 100%;
    height: 100%;
    display: grid;
    background: #dfe6e9;
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
    background: #000c;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
    font-size: 2em;
    padding: 0 20px;
    text-align: center;
    text-shadow: none;
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
    color: #ffeaa7;
    text-shadow: 0 0 1px #fdcb6e;
    text-align: center;
  }
  .subtitle {
    white-space: nowrap;
    color: #ffeaa7;
    font-weight: 700;
    text-align: center;
  }
  .questions {
    margin-top: 20px;
  }
  .question {
    height: 30px;
    display: flex;
    align-items: center;
    color: #ffeaa7;
    font-size: 1.03em;
    input[type='text'] {
      width: 40px;
      height: 100%;
      padding: 0 5px;
      text-align: right;
      background-color: white;
      border-radius: 2px;
      border: 0;
      font-size: 1.03em;
    }
    input[type='checkbox'] {
      height: 100%;
      background-color: white;
    }
    .cost-option {
      width: 70px;
      border: 0;
    }
    select {
      -moz-appearance: auto;
      border-radius: 2px;
      width: 100px;
      height: 100%;
      border: 0;
      background-color: white;
      padding-left: 5px;
    }
  }
  .no-info {
    flex-grow: 1;
    text-align: right;
  }
  .question-icon {
    color: #ffeaa7;
    width: 16px;
    height: 16px;
  }
  .question:not(:last-child) {
    margin-bottom: 7px;
  }
  .question-title {
    line-height: 0;
    white-space: nowrap;
    margin: 0 7px;
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
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
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

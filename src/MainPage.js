import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function MainPage(props) {
  return (
    <div class={props.className}>
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
              <div className="question">1. 您想要用餐的區域</div>
              <div className="question">2. 用餐的價位</div>
              <div className="question">3. 餐點類型</div>
              <div className="question">4. 用餐時間</div>
            </div>
            <div className="slot">
              <Link to="slot">開始拉</Link>
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
    border: 1px solid black;
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
    padding: 10px;
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
  .question {
    margin-bottom: 10px;
  }
  .slot {
    margin-top: 20px;
    border: 1px black solid;
    flex: 1;
  }
  .content {
    margin: 0 25px;
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

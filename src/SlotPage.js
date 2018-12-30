import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Modal from './components/Modal';
import slot from './assets/slot.png';
import handle from './assets/handle-large.png';

class SlotPage extends React.Component {
  state = {
    isModalOpen: false,
    restaurant: {
      id: '1',
      name: '名代富士蕎麥麵((台灣1號分店))',
      address: '台北市信義區松高路12號B2',
      avgPrice: '本店均消 175 元',
      category: '日式料理 / 日式麵食專賣',
      intro: '新光三越A8館',
      phone: '02-8780-9966',
      nearMRT: '近台北市捷運 - 板南線 - 市政府站 (步行約5分鐘)',
      recommend:
        '推 薦 菜:蕎麥麵(9)名代富士蕎麥麵(8)日本蕎麥麵(7)腰內豬排炸雞塊丼(7)炸蝦(6)海鮮起士蕃茄義式蕎麥麵(5)櫻花蝦天婦羅(5)腰內豬排丼(5)天婦羅温泉蛋蕎麥麵(4)明太子香醇奶油蕎麥麵(4)清湯蕎麥麵(4)豬排丼(3)櫻花蝦野菜天(3)台中好吃(2)台中新光三越美食(2)',
      score: '綜合評分40/50(共30人評分)',
      bsMo: '11:00~21:00',
      bsTu: '11:00~21:00',
      bsWe: '11:00~21:00',
      bsTh: '11:00~21:00',
      bsFr: '11:00~21:30',
      bsSa: '11:00~21:30',
      bsSu: '11:00~21:00',
      image1:
        'http://iphoto.ipeen.com.tw/photo/comment/201805/cgm2181d5f79d1a1940f9600e91664d7417182.jpg',
      image2:
        'http://iphoto.ipeen.com.tw/photo/comment/14618/1637766/cgm8fb50e9e292abc80f6251326ce8e4dfa438.jpg',
      image3:
        'http://iphoto.ipeen.com.tw/photo/comment/201804/cgmfaed32255549037e2d7007fed652a311413.jpg',
      image4:
        'http://iphoto.ipeen.com.tw/photo/comment/201804/cgm44684ede86b1e2ee7cdd888ac67d633b485.jpg',
      image5:
        'http://iphoto.ipeen.com.tw/photo/comment/161309/816010/cm20150225___57d814749cf25808e71a359348821f2c607.jpg',
    },
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
    return (
      <div className={this.props.className}>
        <div className="background">
          <img src={slot} className="slot" alt="slot" />
          <img src={handle} className="handle" alt="handle" />
        </div>
        <div className="container">
          <div className="title">拉出來的命定餐廳是...</div>
          <div className="roll">{restaurant.name}</div>
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
        {isModalOpen && <Modal onClose={this.closeModal} restaurant={restaurant} />}
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
    top: 250px;
    left: 86px
    width: 487px;
    height: 148px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
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
`;

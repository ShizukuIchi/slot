import React from 'react';
import styled from 'styled-components';

class Modal extends React.Component {
  onClose = ({ currentTarget, target }) =>
    currentTarget === target && this.props.onClose();
  render() {
    const { restaurant, className } = this.props;
    const {
      name,
      address,
      bsMo,
      bsTu,
      bsWe,
      bsTh,
      bsFr,
      bsSa,
      bsSu,
      bsAll,
      intro,
      phone,
      recommend,
      score,
    } = restaurant;
    return (
      <div className={className} onClick={this.onClose}>
        <div className="modal">
          <div className="modal-title">本日命定餐廳：{name}</div>
          <div className="modal-content">
            <div className="intro">
              <div>{intro}</div>
              <div>
                {getOpenTime([bsSu, bsMo, bsTu, bsWe, bsTh, bsFr, bsSa, bsAll])}
              </div>
            </div>
            <div className="addr">{address}</div>
            <div className="tel">{phone}</div>
            <div className="comment">
              <div>{recommend}</div>
              <div>{score}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function getOpenTime(days) {
  return days[new Date().getDay()] || days[7];
}

export default styled(Modal)`
  z-index: 5;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);

  .modal {
    border-radius: 5px;
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

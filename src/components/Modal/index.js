import React from 'react';
import styled from 'styled-components'

function Modal(props) {
  const { onClose, restaurant, className } = props
  return (
    <div className={className} onClick={onClose}>
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
  );
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
  background: rgba(0,0,0,0.3);
  
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

import React from 'react';
import styled from 'styled-components';
import pose, { PoseGroup } from 'react-pose';
import SplitText from 'react-pose-text';

const Container = pose.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});
const PosedModal = pose.div({
  enter: { y: 0 },
  exit: { y: 100 },
  transition: {
    ease: 'linear',
  },
});
const Content = pose.div({
  enter: {
    delayChildren: 200,
    staggerChildren: 60,
  },
});
const Item = pose.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 15, opacity: 0 },
});
const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30,
  },
};

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
      <PoseGroup>
        {this.props.visible && (
          <Container key="container" className={className}>
            <div className={className} onClick={this.onClose}>
              <PosedModal className="modal" beforeChildren>
                <div className="modal-title">
                  <span>本日命定餐廳：</span>
                  <SplitText charPoses={charPoses}>{name}</SplitText>
                </div>
                <Content className="modal-content">
                  <Item className="intro">
                    <div className="sub-title">營業時間：</div>
                    <div>
                      {getOpenTime([
                        bsSu,
                        bsMo,
                        bsTu,
                        bsWe,
                        bsTh,
                        bsFr,
                        bsSa,
                        bsAll,
                      ])}
                    </div>
                    <div className="sub-title">評價：</div>
                    <div>{score}</div>
                    <div className="sub-title">簡介：</div>
                    <div>{intro}</div>
                  </Item>
                  <Item className="addr">
                    <div className="sub-title">地址：</div>
                    <div>{address}</div>
                  </Item>
                  <Item className="tel">
                    <div className="sub-title">電話：</div>
                    <div>{phone}</div>
                  </Item>
                  <Item className="comment">
                    <div className="sub-title">推薦菜單：</div>
                    <div>{recommend}</div>
                  </Item>
                </Content>
              </PosedModal>
            </div>
          </Container>
        )}
      </PoseGroup>
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
    box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.8);
    border-radius: 3px;
    height: 500px;
    width: 800px;
    background: pink;
    padding: 30px;
  }
  .modal-title {
    font-size: 1.34em;
    font-weight: 700;
    height: 10%;
    display: flex;
    color: #ec407a;
    text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.5);
    span {
      white-space: nowrap;
    }
    div {
      overflow: hidden;
    }
  }
  .modal-content {
    display: grid;
    height: 90%;
    grid-gap: 10px;
    grid-template-rows: 9fr 2fr;
    grid-template-columns: 7fr 3fr 7fr;
    & > div {
      background: white;
      overflow: auto;
      border-radius: 3px;
      padding: 0px 10px 10px;
    }
  }
  .sub-title {
    color: #ec407a;
    font-weight: 700;
    margin-top: 10px;
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

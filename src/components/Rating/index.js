import React, { useState } from 'react';
import styled from 'styled-components';

function Rating({ value, maxValue, className, size, onChange }) {
  const [width, setWidth] = useState(value * size);
  function onClick(e) {
    const nextValue = Math.round((e.nativeEvent.offsetX / size) * 2) / 2;
    onChange(nextValue);
    setWidth(nextValue * size);
  }
  function onMouseMove(e) {
    setWidth(e.nativeEvent.offsetX);
  }
  function onMouseLeave(e) {
    setWidth(value * size);
  }
  return (
    <div className={className}>
      <div className="stars gray">
        {Array(maxValue)
          .fill()
          .map(_ => '★')}
      </div>
      <div
        className="stars"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        style={{ width }}
      >
        {Array(maxValue)
          .fill()
          .map(_ => '★')}
      </div>
    </div>
  );
}

export default styled(Rating)`
  cursor: pointer;
  text-shadow: none;
  width: ${({ maxValue, size }) => maxValue * size}px;
  height: ${({ size }) => size}px;
  font-size: ${({ size }) => size}px;
  line-height: ${({ size }) => '80%'};
  position: relative;
  transition: transform 0.1s;
  .stars {
    background-color: yellow;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  &:hover {
    transform: scale(1.03);
  }
  .gray {
    text-shadow: 0 0 1px black;
    color: #636e72;
  }
`;

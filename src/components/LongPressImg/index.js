import React, { useEffect } from 'react';

const LongPressImg = ({ onLongPress, src, alt, className }) => {
  let timer = null;
  function onMouseDown() {
    timer = setTimeout(() => {
      onLongPress();
    }, 500);
  }
  function onMouseUp() {
    clearTimeout(timer);
  }
  useEffect(() => () => clearTimeout(timer));
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    />
  );
};

export default LongPressImg;

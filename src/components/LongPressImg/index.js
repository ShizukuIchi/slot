import React, { useEffect } from 'react';

function LongPressImg({ onLongPress, pressTime, alt, ...otherProps }) {
  let timer;
  useEffect(() => {
    timer = null;
    return () => {
      clearTimeout(timer);
    };
  });
  function onMouseDown() {
    timer = setTimeout(() => {
      onLongPress();
    }, pressTime);
  }
  function onMouseUp() {
    clearTimeout(timer);
  }
  return (
    <img
      {...otherProps}
      alt={alt}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    />
  );
}

export default LongPressImg;

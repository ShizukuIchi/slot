import React, { useEffect } from 'react';

function LongPressImg({ onLongPress, pressTime, src, alt, className }) {
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
      src={src}
      alt={alt}
      className={className}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    />
  );
}

export default LongPressImg;

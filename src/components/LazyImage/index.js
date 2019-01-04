import React, { useState } from 'react';

const LazyImage = ({ alt, src, children, placeholder, ...rest }) => {
  const [isLoaded, setLoaded] = useState(false);
  const img = new Image();
  img.src = src;
  img.onload = () => {
    setLoaded(true);
  };
  if (children) return children(isLoaded);
  else return isLoaded ? <img alt={alt} src={src} {...rest} /> : placeholder();
};

export default LazyImage;

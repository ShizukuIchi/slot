import React, { useState, useEffect } from 'react';

const LazyImage = ({ alt, src, children, placeholder, ...rest }) => {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
    };
    return () => {
      img.onload = null
    }
  })
  if (children) return children(isLoaded);
  else return isLoaded ? <img alt={alt} src={src} {...rest} /> : placeholder();
};

export default LazyImage;

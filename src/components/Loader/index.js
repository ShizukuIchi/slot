import React, { useState } from 'react';
import posed from 'react-pose';

export default function Loader(props) {
  const [loaded, setLoaded] = useState(false);

  function onLoaded() {
    setLoaded(true);
  }
  return (
    <>
      <PosedDiv
        className={props.className}
        style={{ position: 'absolute' }}
        pose={loaded ? 'enter' : 'exit'}
      >
        <props.component />
      </PosedDiv>
      <PosedDiv
        className={props.className}
        style={{ position: 'absolute' }}
        pose={loaded ? 'exit' : 'enter'}
      >
        {props.loader(onLoaded)}
      </PosedDiv>
    </>
  );
}

const PosedDiv = posed.div({
  enter: {
    opacity: 1,
    delay: 100,
  },
  exit: {
    opacity: 0,
  },
});

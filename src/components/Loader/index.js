import React, { useState } from 'react';
import posed, { PoseGroup } from 'react-pose';

export default function Loader(props) {
  const [loaded, setLoaded] = useState(false);
  function onLoaded() {
    setLoaded(true);
  }
  return (
    <PoseGroup>
      {!loaded && (
        <PosedDiv
          key="loader"
          className={props.className}
          style={{ position: 'absolute' }}
        >
          {props.loader(onLoaded)}
        </PosedDiv>
      )}
      {loaded && (
        <PosedDiv key="app" className={props.className}>
          <props.component />
        </PosedDiv>
      )}
    </PoseGroup>
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

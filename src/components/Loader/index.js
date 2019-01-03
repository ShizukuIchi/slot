import React, { useState, useEffect } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLocationArrow,
  faMapMarkedAlt,
  faClock,
  faUtensils,
  faDollarSign,
  faMoneyBillAlt,
} from '@fortawesome/free-solid-svg-icons';

export default function Loader(props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    library.add(
      faLocationArrow,
      faMapMarkedAlt,
      faClock,
      faUtensils,
      faDollarSign,
      faMoneyBillAlt,
    );
  });
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

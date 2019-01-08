import { Component } from 'react';
import WebFont from 'webfontloader';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLocationArrow,
  faClock,
  faUtensils,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';

import { wakeHost } from '../../api';

export default class Initiator extends Component {
  componentDidMount() {
    wakeHost()
      .then(console.log)
      .catch(console.log);
    const fontPromise = new Promise((resolve, reject) => {
      WebFont.load({
        google: {
          families: ['Noto Sans TC'],
        },
        active: () => {
          resolve();
        },
      });
    });
    Promise.all([fontPromise]).then(() => {
      this.props.setLoaded();
    });
    library.add(faLocationArrow, faClock, faUtensils, faDollarSign);
  }
  render() {
    return 'loading';
  }
}

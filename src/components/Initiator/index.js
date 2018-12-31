import React, { Component } from 'react';
import WebFont from 'webfontloader';

const imageUrls = [
  () => import('../../assets/first-image1.png'),
  () => import('../../assets/first-image2.png'),
  () => import('../../assets/first-image3.png'),
  () => import('../../assets/first-image4.png'),
  () => import('../../assets/first-image5.png'),
  () => import('../../assets/first-image6.png'),
  () => import('../../assets/first-image7.png'),
  () => import('../../assets/first-image8.png'),
  () => import('../../assets/slot.png'),
  () => import('../../assets/slot-button.png'),
  () => import('../../assets/handle-small.png'),
  () => import('../../assets/handle-large.png'),
];

export default class Initiator extends Component {
  componentDidMount() {
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
    const imagePromises = imageUrls.map(
      url =>
        new Promise(res => {
          url().then(m => {
            const img = new Image();
            img.src = m.default;
            img.onload = () => {
              console.log(m.default, 'loaded');
              res();
            };
          });
        }),
    );
    Promise.all([fontPromise, ...imagePromises]).then(() => {
      this.props.setLoaded();
    });
  }
  render() {
    return <div />;
  }
}

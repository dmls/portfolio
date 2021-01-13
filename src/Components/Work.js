import React from 'react';
import Tiles from './Tiles';

import imgDiversity from '../assets/images/work/diversity-in-music.png';
import imgParallax from '../assets/images/work/parallax-gallery.png';
import imgSlideNav from '../assets/images/work/slide-nav.png';
import imgDjaSolutions from '../assets/images/work/dja-solutions.jpg';
import imgBuckeye from '../assets/images/work/buckeye.jpg';
import imgModelo from '../assets/images/work/modelo.jpg';
import imgLocator from '../assets/images/work/locator.jpg';
import imgEstimates from '../assets/images/work/estimates.jpg';
import imgMarriott from '../assets/images/work/marriott.jpg';

class Work extends React.Component {
  render() {
    let items = [{
      title: 'Diversity in Music',
      description: 'PHP',
      image: imgDiversity,
      url: 'https://google.com'
    }, {
      title: 'Slide Navigation',
      description: 'React',
      image: imgSlideNav,
      url: 'https://google.com'
    }, {
      title: 'Parallax Tilt Gallery',
      description: 'React',
      image: imgParallax,
      url: 'https://google.com'
    }, {
      title: 'DJA Solutions',
      description: 'PHP',
      image: imgDjaSolutions,
      url: 'https://google.com'
    }, {
      title: 'Modelo Gold Cup',
      description: 'PHP',
      image: imgModelo,
      url: 'https://google.com'
    }, {
      title: 'Buckeye Internet',
      description: 'PHP - Magento',
      image: imgBuckeye,
      url: 'https://google.com'
    }, {
      title: 'Store Locator',
      description: 'PHP - Magento',
      image: imgLocator,
      url: 'https://google.com'
    }, {
      title: 'Estimate Dash',
      description: 'PHP',
      image: imgEstimates,
      url: 'https://google.com'
    }, {
      title: 'Marriott Rewards',
      description: 'PHP',
      image: imgMarriott,
      url: 'https://google.com'
    }];

    return (
      <Tiles id="work" items={items} />
    );
  }
}

export default Work;
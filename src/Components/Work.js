import React from 'react';
import Tiles from './Tiles';

class Work extends React.Component {
  render() {
    let items = [{
      title: 'Foo',
      image: 'https://picsum.photos/800/800',
      url: 'https://google.com'
    }, {
      title: 'Foo',
      image: 'https://picsum.photos/800/800',
      url: 'https://google.com'
    }, {
      title: 'Foo',
      image: 'https://picsum.photos/800/800',
      url: 'https://google.com'
    }, {
      title: 'Foo',
      image: 'https://picsum.photos/800/800',
      url: 'https://google.com'
    }, {
      title: 'Foo',
      image: 'https://picsum.photos/800/800',
      url: 'https://google.com'
    }, {
      title: 'Foo',
      image: 'https://picsum.photos/800/800',
      url: 'https://google.com'
    }];

    return (
      <Tiles items={items} />
    );
  }
}

export default Work;
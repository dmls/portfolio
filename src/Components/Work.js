import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
      title: 'Diversity in Music<br />Talent Directory',
      subtitle: 'PHP',
      description: 
      <>
        <p>Culture Collective reached out to me to build a site to help people from the music industry find work who have found themselves jobless due to the COVID-19 pandemic. Users can register to create a profile and prospective employers can easily find them based on several search parameters.</p>
        <FontAwesomeIcon className="mr-2" icon={faLink} />
        <a href="http://staging.diversityinmusic.org" target="_blank" rel="noreferrer">Visit site</a>
      </>,
      image: imgDiversity
    }, {
      title: 'React Slide<br />Navigation',
      subtitle: 'React',
      description:
      <>
        <p>A great looking animated full page navigation menu that I saw on a website. I decided to take a stab at rebuilding it on my own. I built this one using React and the animations use good old fashioned CSS/SASS without any JavaScript.</p>
        <FontAwesomeIcon className="mr-2" icon={faLink} />
        <a href="http://danmlsv.com/full-page-slide-nav" target="_blank" rel="noreferrer">Visit site</a>
        <br />
        <FontAwesomeIcon className="mr-2" icon={faGithub} />
        <a href="https://github.com/dmls/full-page-slide-nav" target="_blank" rel="noreferrer">Github Repo</a>
      </>,
      image: imgSlideNav
    }, {
      title: 'Parallax Tilt<br />Gallery',
      subtitle: 'React',
      description: 
      <>
        <p>I created an image gallery with some cool tilt and parallax scrolling effects in React based on a design that was presented to me. It would make for a great product or case study gallery. Some of the effects still need some work in certain mobile browsers.</p>
        <FontAwesomeIcon className="mr-2" icon={faLink} />
        <a href="http://danmlsv.com/parallax-gallery" target="_blank" rel="noreferrer">Visit site</a>
        <br />
        <FontAwesomeIcon className="mr-2" icon={faGithub} />
        <a href="https://github.com/dmls/parallax-gallery" target="_blank" rel="noreferrer">Github Repo</a>
      </>,
      image: imgParallax
    }, {
      title: 'DJA Digital<br />Solutions',
      subtitle: 'PHP',
      description:
      <>
        <p>DJA had a lot of great work and experience to offer perspective clients but they had nowhere to show it off. That changed when I worked on this gallery for them. The items in the gallery are stored in a database file and can be easily edited and added/removed.</p>
        <FontAwesomeIcon className="mr-2" icon={faLink} />
        <a href="https://templategallery.dja.com" target="_blank" rel="noreferrer">Visit site</a>
      </>,
      image: imgDjaSolutions
    }, {
      title: 'Modelo Gold Cup',
      subtitle: 'PHP',
      description: 
      <>
        <p>I built a site for Modelo that ran during the 2019 Gold Cup. Users would arrive at the site, register, and then be able to select which teams they thought would win each day's match. If they guessed the winner correctly then they would win some exclusive soccer gear.</p>
      </>,
      image: imgModelo
    }, {
      title: 'Buckeye<br />Broadband',
      subtitle: 'PHP - Magento',
      description: 
      <>
        <p>Buckeye Broadband's Magento based eCommerce site that provides customers with the ability to view and purchase plans and services. I worked on features such as the question-answer tree that helps users select a plan and getting available plans from the database to display on the front end.</p>
        <FontAwesomeIcon className="mr-2" icon={faLink} />
        <a href="https://buckeyebroadband.com" target="_blank" rel="noreferrer">Visit site</a>
      </>,
      image: imgBuckeye
    }, {
      title: 'Sport Store<br />Locator',
      subtitle: 'PHP - Magento',
      description: 
      <>
        <p>A sporting goods manufacturer wanted to provide their site visitors with an easy place to find stores that sold their equipment. I created a database of locations that sold their goods and tied it in with Google Maps so that users could search for nearby stores and see that store's contact and address info.</p>
      </>,
      image: imgLocator
    }, {
      title: 'DJA Estimate<br />Dashboard',
      subtitle: 'PHP',
      description:
      <>
        <p>A utility I built for an agency so that sales could put in estimate requests to their development department. The form to create these requests contains all of the most common features that the agency builds into their sites and provides extra fields for custom behavior as well. The development department would be notified of new requests and could price them out with forms of their own, send questions or comments back to the person who submitted, and view all of the requested features that were submitted in the request.</p>
      </>,
      image: imgEstimates
    }, {
      title: 'Marriott Rewards<br />Program',
      subtitle: 'PHP',
      description:
      <>
        <p>To show some appreciation for its valued meeting planners, Marriott decided to give away some goodies. The planners were directed to this site that I built where they would register and then play a spin the wheel game which would run some game code on the backend to tell them which prize they would be receiving.</p>
      </>,
      image: imgMarriott
    }];

    return (
      <Tiles id="work" items={items} />
    );
  }
}

export default Work;
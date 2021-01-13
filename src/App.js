import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';
import { Helmet } from 'react-helmet';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Work from './Components/Work';
import Services from './Components/Services';
import Tech from './Components/Tech';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Helmet>
        <title>Dan | Web Development</title>
      </Helmet>

      <Header />
      <Intro />
      <Work />
      <Services />
      <Tech />
      <Contact />
    </>
  );
}

export default App;

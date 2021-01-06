import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';
import { Helmet } from 'react-helmet';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Work from './Components/Work';
import Services from './Components/Services';

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
    </>
  );
}

export default App;

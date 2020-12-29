import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Intro from './Components/Intro';

function App() {
  return (
    <>
      <Helmet>
        <title>Dan | Web Development</title>
      </Helmet>

      <Header />
      <Intro />
    </>
  );
}

export default App;

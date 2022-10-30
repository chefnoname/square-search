import { useEffect, useRef } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import Portfolio from './Portfolio';
import About from './About';
import Team from './Team';
import Clients from './Clients';
import Contact from './Contact';
import JobsPreview from './JobsPreview';
import Modal from './Modal';
import HomeIntro from './HomeIntro';
import Services from './Services';
import Regions from './Regions';

const HomePage = () => {
  const underConstructionRef = useRef(null);

  useEffect(() => {
    fetch('/api')
      .then((response) => {
        console.log('response', response);
        return response;
      })
      .then((response) => response.json())
      .then((result) => console.log('result', result))
      .catch((err) => {
        console.log(err);
      });

    // underConstructionRef.current.click();
  }, []);

  return (
    <div>
      <button
        ref={underConstructionRef}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#under-construction-modal"
        style={{ display: 'none' }}
      >
        Under Construction Button
      </button>
      {/* <NavBar /> */}
      <Header />
      <Services />
      <HomeIntro />
      <JobsPreview />
      <Regions />
      {/* <Portfolio /> */}
      {/* <About />
      <Team />
      <Clients /> */}
      <Contact />
      <Footer />
      <Modal />
    </div>
  );
};

export default HomePage;

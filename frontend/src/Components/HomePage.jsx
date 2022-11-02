import { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
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
      <Header />
      <Services />
      <HomeIntro />
      <JobsPreview />
      <Regions />
      <Contact />
      <Footer />
      <Modal />
    </div>
  );
};

export default HomePage;

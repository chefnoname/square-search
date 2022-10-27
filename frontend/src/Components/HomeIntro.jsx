
import React from 'react';
import './HomeIntro.scss'


const HomeIntro = () => {
  return (
    <section className="page-section bg-light" id="home-intro">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">What is Square Search<span className="text-danger">?</span></h2>
          <h3 className="section-subheading text-muted">And why should you go with us?</h3>
        </div>
        <div className="container-fluid d-flex justify-content-center align-items-center p-2">
        <div className="row">
          <div className="col-12 col-lg-8">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nesciunt laborum dolorum qui perspiciatis totam illo perferendis quam possimus, cupiditate quisquam unde, nam quaerat nisi cum, numquam nobis repellendus recusandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis assumenda quasi perferendis accusantium reprehenderit itaque expedita doloribus eum sit iste, debitis quas quia soluta fuga voluptates cupiditate illum. Laborum, eius?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis assumenda quasi perferendis accusantium reprehenderit itaque expedita doloribus eum sit iste, debitis quas quia soluta fuga voluptates cupiditate illum. Laborum, eius?</p>
          </div>
          <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
              <img className="img-fluid" src="assets/img/portfolio/4.jpg" alt="..." />
          </div>
        </div>
      </div>
        <div className="row my-5 p-2 d-flex justify-content-center">
          <div className="video-wrapper col-12">
          <iframe src="https://www.youtube.com/embed/QD0Wlsm_Sdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
    </div>
    </section >
  )
}

export default HomeIntro;

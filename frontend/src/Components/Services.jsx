import React from 'react';
import {
  cloudSeverSvg,
  codingSvg,
  emergingTechnologiesSvg,
  cyberSecuritySvg,
} from '../Icons';

const Service = ({ icon, title }) => (
  <>
    <span className="fa-stack fa-4x">
      <i className="fas fa-circle fa-stack-2x text-primary"></i>
      {icon}
    </span>
    <h4 className="my-3">{title}</h4>
    <p className="text-muted">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime
      quam architecto quo inventore harum ex magni, dicta impedit.
    </p>
  </>
);

const Services = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row text-center">
          <div className="col-md-3">
            <Service icon={codingSvg} title="E-Commerce" />
          </div>
          <div className="col-md-3">
            <Service icon={cyberSecuritySvg} title="Responsive Design" />
          </div>
          <div className="col-md-3">
            <Service icon={cloudSeverSvg} title="Cloud" />
          </div>
          <div className="col-md-3">
            <Service icon={emergingTechnologiesSvg} title="Web Security" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

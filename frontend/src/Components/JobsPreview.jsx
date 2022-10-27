import React from 'react';
import { JOBS } from '../jobs';
import JobCard from './JobCard';
import useScreenType from 'react-screentype-hook';
import classNames from 'classnames';

const JobsPreview = () => {
  const { isLargeDesktop, isDesktop, isMobile, isTablet } = useScreenType();

  return (
    <section className="page-section" id="jobs">
      <div className="container jobs-preview">
        <div
          className={classNames(
            'row d-flex justify-content-between card-group',
            {
              'flex-row': isLargeDesktop || isDesktop,
              'flex-column px-2': isTablet || isMobile,
            },
          )}
        >
          {JOBS.slice(0, 4).map(({ jobTitle, location, term, _id }) => (
            <JobCard
              key={_id.$oid}
              title={jobTitle}
              location={location}
              term={term}
              description={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam quae sint eos at officiis odit officia modi rerum quaerat minima ex, fugiat atque eum tempore repudiandae iste nulla accusantium.'
              }
              className={classNames('', {
                'mx-2': isLargeDesktop || isDesktop,
                'my-3': isTablet || isMobile,
              })}
            />
          ))}
        </div>
        <div className="d-flex justify-content-center my-5">
          <button
            type="button"
            className="btn btn-primary btn-xl text-uppercase"
          >
            <strong>View more jobs</strong>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobsPreview;

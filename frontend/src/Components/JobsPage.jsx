import { useState } from 'react';
import { JOBS } from '../jobs';
import JobCard from './JobCard';
import './JobsPages.scss';

const JobsPage = () => {
  const [useJobInfo, setUseJobInfo] = useState(null);

  const sendJobInfo = ({ title, description, location }) => {
    const clickedJob = { title, description, location };

    setUseJobInfo(clickedJob);
  };
  console.log(useJobInfo);

  // const {
  //   title: jobTitle,
  //   description: jobDescription,
  //   location: jobLocation,
  // } = useJobInfo;

  return (
    <div>
      <div className="jobsHeader"></div>

      {/* Create a search bar  */}

      {/* Style Cards below */}

      <div className="container jobs-page-preview">
        <div className="row d-flex justify-content-between card-group flex-column px-2 col-sm jobsCard">
          {JOBS.slice(3, 7).map(({ jobTitle, location, term, _id }) => (
            <JobCard
              key={_id.$oid}
              title={jobTitle}
              location={location}
              term={term}
              description={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam quae sint eos at officiis odit officia modi rerum quaerat minima ex, fugiat atque eum tempore repudiandae iste nulla accusantium.'
              }
              className={'my-5'}
              sendJobInfo={sendJobInfo}
            />
          ))}
        </div>
        <div className="jobDetails container">
          <div className="card">
            {useJobInfo && (
              <div className="jobCardContainer">
                <div className="title-container d-flex bg-info align-items-center justify-content-center text-center mt-5 jobHeading">
                  <h5 className="title">{useJobInfo.title}</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <i class="bi bi-geo-alt-fill"></i> {useJobInfo.location}
                  </p>
                </div>
                <div className="card-body">{useJobInfo.description}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;

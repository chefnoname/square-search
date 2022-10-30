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
  const onSubmit = () => console.log('heyyy');

  return (
    <div>
      <div className="jobsHeader">
        <div className="searchBar">
          <form onSubmit={onSubmit}>
            <input
              className="form-control form-control-lg"
              id="jobsearch"
              type="text"
              placeholder="Search jobs..."
              // value={search}
              // onChange={setSearch}
              // onKeyDown={handleKeyDown}
            />
          </form>
          <button type="button" className="btn btn-xl text-uppercase searchBtn">
            <strong>find</strong>
          </button>
        </div>
      </div>

      {/* Create a search bar  */}

      {/*Need to make div fixed on scroll. */}

      <div className="container jobs-page-preview">
        <div className="row d-flex justify-content-between card-group flex-column px-1 col-sm jobsCard">
          {JOBS.slice(3, 7).map(({ jobTitle, location, term, _id }) => (
            <JobCard
              key={_id.$oid}
              title={jobTitle}
              location={location}
              term={term}
              description={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam quae sint eos at officiis odit officia modi rerum quaerat minima ex, fugiat atque eum tempore repudiandae iste nulla accusantium.'
              }
              className={'my-3'}
              sendJobInfo={sendJobInfo}
            />
          ))}
        </div>
        <div className="jobDetails container">
          <div className="card">
            {useJobInfo && (
              <div className="jobCardContainer">
                <div className="title-container d-flex bg-info align-items-center justify-content-center text-center mt-5 jobTitle">
                  <h5 className="title">{useJobInfo.title}</h5>
                </div>
                <div className="card-body jobLocation">
                  <p className="card-text">
                    <i class="bi bi-geo-alt-fill"></i> {useJobInfo.location}
                  </p>
                </div>
                <div className="card-body jobDescription">
                  <h6>Full Job Description</h6>
                  <p>{useJobInfo.description}</p>
                </div>

                <div className="candidate">
                  <h6>About You</h6>
                  <p>{useJobInfo.description}</p>
                </div>
                <button
                  type="button"
                  className="btn btn-xl text-uppercase jobsPageBtn"
                >
                  <strong>Apply</strong>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;

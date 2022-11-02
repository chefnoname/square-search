import { useState } from 'react';
import { JOBS } from '../jobs';
import JobCard from './JobCard';
import SearchBar from './SearchBar';
import './JobsPages.scss';

const JobsPage = () => {
  const [useJobInfo, setUseJobInfo] = useState({
    title: 'Senior Waffler Engineer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam quae sint eos at officiis odit officia modi rerum quaerat minima ex, fugiat atque eum tempore repudiandae iste nulla accusantium.',
    location: 'Somalia',
  });

  const sendJobInfo = ({ title, description, location }) =>
    setUseJobInfo({ title, description, location });

  console.log(useJobInfo);

  const {
    title: jobTitle,
    description: jobDescription,
    location: jobLocation,
  } = useJobInfo;

  return (
    <div className="pageContainer">
      <div className="jobsHeader">
        {/* Bring in search bar component */}
        <div className="searchBar">
          {/* <form onSubmit={onSubmit}>
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
          <button
            type="button"
            className="btn btn-xl text-uppercase searchBtn btn-primary"
          >
            <strong>find</strong>
          </button> */}
          <SearchBar />
        </div>
      </div>

      {/* Create a search bar  */}

      <div className="container jobs-page-preview">
        <div className="row px-1 col-sm jobsCard">
          {JOBS.slice(0, JOBS.length / 10).map(
            ({ jobTitle, location, term, _id }) => (
              <div className="singleJob" key={_id.$oid}>
                <JobCard
                  title={jobTitle}
                  location={location}
                  term={term}
                  description={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam quae sint eos at officiis odit officia modi rerum quaerat minima ex, fugiat atque eum tempore repudiandae iste nulla accusantium.'
                  }
                  className={'my-3'}
                  sendJobInfo={sendJobInfo}
                />
              </div>
            ),
          )}
        </div>
        <div className="jobDetails container">
          <div className="card mt-3">
            <div className="jobCardContainer">
              <div className="title-container d-flex bg-info align-items-center justify-content-center text-center jobTitle">
                <h5 className="title">{jobTitle}</h5>
              </div>
              <div className="card-body jobLocation">
                <p className="card-text">
                  <i class="bi bi-geo-alt-fill"></i> {jobLocation}
                </p>
              </div>
              <div className="card-body jobDescription">
                <h6>Full Job Description</h6>
                <p>{jobDescription}</p>
              </div>

              <div className="candidate">
                <h6>About You</h6>
                <p>{jobDescription}</p>
              </div>
              <button
                type="button"
                className="btn btn-xl text-uppercase jobsPageBtn"
              >
                <strong>Apply</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;

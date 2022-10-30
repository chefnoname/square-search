import './JobCard.scss';

const JobCard = ({
  title,
  description,
  location,
  term,
  className,
  sendJobInfo,
}) => {
  return (
    <div
      className={`jobcard card ${className}`}
      onClick={() => sendJobInfo({ title, description, location })}
    >
      <div className="title-container d-flex bg-info align-items-center justify-content-center text-center">
        <h5 className="title">{title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          <span className="location">
            <i class="bi bi-geo-alt-fill"></i> {location}
          </span>
          <span className="term">
            <i class="bi bi-card-text"></i> {term}
          </span>
          <span>{description}</span>
        </p>
      </div>
      <div className="card-body link">
        <a href="#" className="card-link text-info">
          {' '}
          Read more
        </a>
      </div>
    </div>
  );
};

export default JobCard;

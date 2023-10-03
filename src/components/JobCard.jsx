const JobCard = (props) => {
  const { role, level, languages, tools } = props.data;
  const keywords = [role, level, ...languages, ...tools];
  return (
    <div className="card-container">
      <div className="logo">
        <img src={props.data.logo} alt="logo" />
      </div>
      <div className="part1">
        <div className="company-name">{props.data.company}</div>
        <div className="position">{props.data.position}</div>
        <div className="details">
          <span>{props.data.postedAt}</span> *<span>{props.data.contract}</span>{" "}
          *<span>{props.data.location}</span>
        </div>
      </div>
      <div className="part2">
        {keywords.map((key, id) => (
          <button onClick={() => props.setKeywords(key)} key={id}>
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobCard;

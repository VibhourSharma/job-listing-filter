const JobCard = (props) => {
  const { role, level, languages, tools } = props.data;
  const keywords = [role, level, ...languages, ...tools];
  return (
    <div className="flex w-3/4 bg-bgcolor items-center py-6 px-6 my-5 mx-0 rounded-md shadow-custom">
      <div className="flex items-center pr-6">
        <img src={props.data.logo} alt="logo" className="" />
      </div>
      <div className="flex flex-col grow">
        <span className="font-bold text-primary">{props.data.company}</span>
        <span className="font-bold text-lg inline-block py-3 px-0">
          {props.data.position}
        </span>
        <div className="text-darkgreyish">
          <span>{props.data.postedAt}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{props.data.contract}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{props.data.location}</span>
        </div>
      </div>
      <div className="flex flex-wrap">
        {keywords.map((key, id) => (
          <span
            className="mr-6 bg-filtertable text-primary font-bold p-2 rounded-sm cursor-pointer"
            onClick={() => props.setKeywords(key)}
            key={id}
          >
            {key}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;

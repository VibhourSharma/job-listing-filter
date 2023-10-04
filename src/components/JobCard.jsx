const JobCard = (props) => {
  const { role, level, languages, tools } = props.data;
  const keywords = [role, level, ...languages, ...tools];
  return (
    <div className="flex w-3/4 bg-white items-center py-4 px-6 my-4 mx-0 rounded-md shadow-custom first:mt-12 xs:flex-col xs:w-4/5 xs:items-start xs:pb-4 font-roboto">
      <div className="flex items-center pr-6 xs:-top-8">
        <img src={props.data.logo} alt="logo" className="xs:w-16 xs:h-auto" />
      </div>
      <div className="flex flex-col grow xs:grow-0 py-5 px-0">
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
            className="mr-6 bg-filtertable text-primary font-bold p-2 rounded-sm cursor-pointer hover:text-bgcolor hover:bg-primary transition-all duration-300 xs:mr-2 xs:mb-2"
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

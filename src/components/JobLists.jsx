import data from "../../data";
import JobCard from "./JobCard";
console.log(data);

const JobLists = ({ setKeywords }) => {
  return (
    <>
      <div className="jobs">
        {data.map((d) => (
          <JobCard data={d} setKeywords={setKeywords} />
        ))}
      </div>
    </>
  );
};

export default JobLists;

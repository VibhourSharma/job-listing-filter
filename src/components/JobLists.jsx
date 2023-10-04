import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const JobLists = ({ data, setKeywords, keywords }) => {
  console.log(data);
  console.log(keywords);
  const [filteredData, setFilteredData] = useState([]);

  const modifiedData = () => {
    if (keywords.length > 0) {
      const newData = filteredData.filter((job) => {
        return keywords.every((key) => {
          return (
            job.role == key ||
            job.level == key ||
            job.languages.includes(key) ||
            job.tools.includes(key)
          );
        });
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  useEffect(() => {
    modifiedData();
  }, [keywords]);

  return (
    <div className="flex flex-col items-center bg-filtertable">
      {filteredData.map((jobs) => (
        <JobCard key={jobs.id} data={jobs} setKeywords={setKeywords} />
      ))}
    </div>
  );
};

export default JobLists;

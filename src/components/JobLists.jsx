import data from "../../data";
console.log(data);

const JobLists = () => {
  return (
    <div className="jobs">
      {data.map((d) => (
        <div>{d.company}</div>
      ))}
    </div>
  );
};

export default JobLists;

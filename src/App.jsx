import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import JobLists from "./components/JobLists";

const App = () => {
  const [filterKeyword, setFilterKeyword] = useState([]);

  const addFilteredKeywords = (data) => {
    if (!filterKeyword.includes(data)) {
      setFilterKeyword([...filterKeyword, data]);
    }
  };

  return (
    <>
      <header className="bg-primary bg-[url('../images/bg-header-desktop.svg')] w-full h-40 bg-cover bg-center"></header>
      {filterKeyword.length > 0 && <Navbar keywords={filterKeyword} />}
      <JobLists setKeywords={addFilteredKeywords} />
    </>
  );
};

export default App;

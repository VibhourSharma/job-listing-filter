import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import JobLists from "./components/JobLists";
import data from "../data";

const App = () => {
  const [filterKeyword, setFilterKeyword] = useState([]);

  const addFilteredKeywords = (data) => {
    if (!filterKeyword.includes(data)) {
      setFilterKeyword([...filterKeyword, data]);
    }
  };

  const removeKeyword = (data) => {
    const newKeyword = filterKeyword.filter((key) => key != data);
    setFilterKeyword(newKeyword);
  };

  const clearAll = () => {
    setFilterKeyword([]);
  };

  return (
    <>
      <header className="bg-primary bg-[url('../images/bg-header-desktop.svg')] w-full h-40 bg-cover bg-center"></header>
      {filterKeyword.length > 0 && (
        <Navbar
          keywords={filterKeyword}
          deleteKeyword={removeKeyword}
          clearAll={clearAll}
        />
      )}
      <JobLists
        data={data}
        keywords={filterKeyword}
        setKeywords={addFilteredKeywords}
      />
    </>
  );
};

export default App;

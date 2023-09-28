import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/header";
import JobLists from "./components/JobLists";
// import data from "../data";

export default function App() {
  return (
    <>
      <Header />
      <Filter />
      <JobLists />
    </>
  );
}

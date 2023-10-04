const Navbar = ({ keywords, deleteKeyword, clearAll }) => {
  return (
    <div className="flex flex-col items-center bg-filtertable">
      <ul className="flex w-3/4 bg-bgcolor items-center  relative py-6 px-6 my-5 mx-0 rounded-md shadow-custom -mt-8">
        {keywords.map((key, id) => {
          return (
            <li
              key={id}
              className="flex items-center list-none mr-6 bg-filtertable text-primary font-bold rounded-sm"
            >
              {key}
              <button onClick={() => deleteKeyword(key)}>
                <img
                  src="../images/icon-remove.svg"
                  alt="x"
                  className="bg-primary border-none rounded-sm p-2 ml-2 hover:bg-verydark transition-all duration-200 cursor-pointer"
                />
              </button>
            </li>
          );
        })}
        <a
          href="#"
          onClick={() => clearAll()}
          className="text-verydark absolute right-6 no-underline hover:text-primary hover:underline"
        >
          Clear
        </a>
      </ul>
    </div>
  );
};

export default Navbar;

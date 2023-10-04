const Navbar = ({ keywords, deleteKeyword, clearAll }) => {
  return (
    <>
      <div>
        <ul>
          {keywords.map((key, id) => {
            return (
              <li key={id}>
                {key}
                <button onClick={() => deleteKeyword(key)}>
                  <img
                    src="../images/icon-remove.svg"
                    alt="x"
                    className="bg-primary"
                  />
                </button>
              </li>
            );
          })}
          <a href="#" onClick={() => clearAll()}>
            Clear
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

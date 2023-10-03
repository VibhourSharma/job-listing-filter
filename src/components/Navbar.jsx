const Navbar = ({ keywords }) => {
  console.log(keywords);
  return (
    <>
      <div>
        {keywords.map((key, id) => {
          return <button key={id}>{key}</button>;
        })}
      </div>
    </>
  );
};

export default Navbar;

const Search = ({ handleSearch }) => {
  return (
    <input
      id="myInput"
      type="text"
      placeholder="¿A quién buscas?"
      onChange={(e) => handleSearch(e)}
    />
  );
};

export default Search;

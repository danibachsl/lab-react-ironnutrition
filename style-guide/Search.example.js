import { useState } from 'react';

function SearchFood(props) {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
    props.searchFood(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" name="search" value={search} onChange={handleChange} />
    </div>
  );
}

export default SearchFood;
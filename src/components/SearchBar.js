import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <form onChange={event=>props.sortOption(event.target.value)}>
        <label>
          <input type="radio" name="sort" value="Alphabetically" checked={null} />
          Alphabetically
        </label>
        <label>
          <input type="radio" name="sort" value="Price" checked={null} />
          Price
        </label>
      </form>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={event=>props.filterOption(event.target.value)}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;

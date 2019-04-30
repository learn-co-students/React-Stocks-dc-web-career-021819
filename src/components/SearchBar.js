import React from "react";

const SearchBar = ({ sort, sortType, filter }) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          name="group1"
          type="radio"
          value="Alphabetically"
          checked={sortType === "Alphabetically" ? true : null}
          onChange={sort}
        />
        Alphabetically
      </label>
      <label>
        <input
          name="group1"
          type="radio"
          value="Price"
          checked={sortType === "Price" ? true : null}
          onChange={sort}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={filter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;

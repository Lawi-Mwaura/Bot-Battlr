import React, { useState } from 'react';

function FilterBar({ onFilter }) {
  // State for filter text
  const [filterText, setFilterText] = useState('');

  // Handle filter text change
  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value);
  };

  // Handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onFilter(filterText);
  };

  return (
    <div>
      <h2>Filter Bar</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Filter by name:
          <input type="text" value={filterText} onChange={handleFilterTextChange} />
        </label>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
}

export default FilterBar;

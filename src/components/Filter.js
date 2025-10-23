import React from "react";

function Filter({
  searchText,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div className="Filter">
      <label htmlFor="search">Search</label>
      <input
        id="search"
        placeholder="Search items..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <label htmlFor="filter-category">Category</label>
      <select
        id="filter-category"
        data-testid="filter-category"
        value={selectedCategory}
        onChange={onCategoryChange}
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

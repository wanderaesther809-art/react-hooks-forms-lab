import React, { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({ id: Date.now().toString(), name, category });
    setName("");
    setCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item-name">Name</label>
      <input
        id="item-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="item-category">Category</label>
      <select
        id="item-category"
        data-testid="item-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

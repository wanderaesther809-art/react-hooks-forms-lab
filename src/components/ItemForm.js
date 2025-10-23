import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem);

    setItemName("");
    setItemCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item-name">Name</label>
      <input
        id="item-name"
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
      />

      <label htmlFor="item-category">Category</label>
      <select
        id="item-category"
        value={itemCategory}
        onChange={(e) => setItemCategory(e.target.value)}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      <button type="submit">Add to List</button>
    </form>
  );
}

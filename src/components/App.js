import React, { useState } from "react";
import ShoppingList from "./ShoppingList";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Apples", category: "Produce" },
    { id: 2, name: "Milk", category: "Dairy" },
    { id: 3, name: "Cake", category: "Dessert" },
  ]);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return <ShoppingList items={items} onItemFormSubmit={handleAddItem} />;
}

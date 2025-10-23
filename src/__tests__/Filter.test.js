import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";
import ShoppingList from "../components/ShoppingList";

const noop = () => {};

const testData = [
  { id: "1", name: "Cheese", category: "Dairy" },
  { id: "2", name: "Apples", category: "Produce" },
];

test("displays search term in input field", () => {
  render(
    <Filter
      searchText="testing"
      onSearchChange={noop}
      selectedCategory="All"
      onCategoryChange={noop}
    />
  );
  const input = screen.getByPlaceholderText("Search items...");
  expect(input.value).toBe("testing");
});

test("calls onSearchChange when input changes", () => {
  const onChange = jest.fn();
  render(
    <Filter
      searchText=""
      onSearchChange={onChange}
      selectedCategory="All"
      onCategoryChange={noop}
    />
  );
  const input = screen.getByPlaceholderText("Search items...");
  fireEvent.change(input, { target: { value: "testing123" } });
  expect(onChange).toHaveBeenCalledWith("testing123");
});

test("filters shopping list based on search term", () => {
  render(<ShoppingList items={testData} />);
  const input = screen.getByPlaceholderText(/Search/);
  fireEvent.change(input, { target: { value: "Cheese" } });
  expect(screen.getByText(/Cheese/)).toBeInTheDocument();
  expect(screen.queryByText(/Apples/)).not.toBeInTheDocument();
});

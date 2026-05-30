import { useEffect, useState } from "react";

export default function GroceryList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const plan = JSON.parse(localStorage.getItem("plan")) || {};
    const items = [];

    Object.values(plan).forEach((meal) => {
      meal?.ingredients?.forEach((i) => items.push(i));
    });

    setList([...new Set(items)]);
  }, []);

  return (
    <div className="card">
      <h2>Grocery List</h2>
      <ul>
        {list.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

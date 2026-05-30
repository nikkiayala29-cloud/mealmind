import { useEffect, useState } from "react";

export default function Nutrition() {
  const [stats, setStats] = useState({ cal: 0, protein: 0 });

  useEffect(() => {
    const plan = JSON.parse(localStorage.getItem("plan")) || {};
    let cal = 0;
    let protein = 0;

    Object.values(plan).forEach((m) => {
      if (m) {
        cal += m.calories;
        protein += m.protein;
      }
    });

    setStats({ cal, protein });
  }, []);

  return (
    <div className="card">
      <h2>Nutrition</h2>
      <p>Total Calories: {stats.cal}</p>
      <p>Total Protein: {stats.protein}g</p>
    </div>
  );
}

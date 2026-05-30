import { useState } from "react";
import { recipes } from "../data/recipes";

export default function MealPlanner() {
  const [plan, setPlan] = useState(
    JSON.parse(localStorage.getItem("plan")) || {}
  );

  const setMeal = (day, recipe) => {
    const updated = { ...plan, [day]: recipe };
    setPlan(updated);
    localStorage.setItem("plan", JSON.stringify(updated));
  };

  return (
    <div className="card">
      <h2>Meal Planner</h2>

      {["Mon", "Tue", "Wed"].map((day) => (
        <div key={day} className="meal-row">
          <strong>{day}</strong>

          <select
            onChange={(e) =>
              setMeal(day, recipes.find(r => r.name === e.target.value))
            }
          >
            <option>Select meal</option>
            {recipes.map((r) => (
              <option key={r.name}>{r.name}</option>
            ))}
          </select>

          <span>{plan[day]?.name || "No meal"}</span>
        </div>
      ))}
    </div>
  );
}

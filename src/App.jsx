import Navbar from "./components/Navbar";
import MealPlanner from "./components/MealPlanner";
import GroceryList from "./components/GroceryList";
import Nutrition from "./components/Nutrition";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="grid">
        <MealPlanner />
        <Nutrition />
        <GroceryList />
      </div>
    </div>
  );
}

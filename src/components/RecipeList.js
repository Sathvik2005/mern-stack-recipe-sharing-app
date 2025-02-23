import { Link } from "react-router-dom";
import { FaPizzaSlice, FaLeaf, FaUtensils, FaDrumstickBite, FaFish } from "react-icons/fa";
import { GiNoodles, GiTacos, GiChopsticks, GiIndianPalace, GiSushis } from "react-icons/gi";
import { MdSoupKitchen } from "react-icons/md";
import "./styles.css";

function RecipeList() {
  const recipes = [
    // 🌱 Indian Vegetarian Dishes
    { id: 1, title: "Paneer Butter Masala", cuisine: "Indian (Vegetarian)", time: "40 mins", icon: <GiIndianPalace /> },
    { id: 2, title: "Chole Bhature", cuisine: "Indian (Vegetarian)", time: "50 mins", icon: <GiIndianPalace /> },
    { id: 3, title: "Masala Dosa", cuisine: "Indian (Vegetarian)", time: "45 mins", icon: <GiIndianPalace /> },
    { id: 4, title: "Palak Paneer", cuisine: "Indian (Vegetarian)", time: "35 mins", icon: <GiIndianPalace /> },
    { id: 5, title: "Aloo Paratha", cuisine: "Indian (Vegetarian)", time: "30 mins", icon: <GiIndianPalace /> },
    { id: 6, title: "Vegetable Biryani", cuisine: "Indian (Vegetarian)", time: "1 hr", icon: <GiIndianPalace /> },
    { id: 7, title: "Rajma Chawal", cuisine: "Indian (Vegetarian)", time: "50 mins", icon: <GiIndianPalace /> },
    { id: 8, title: "Baingan Bharta", cuisine: "Indian (Vegetarian)", time: "40 mins", icon: <GiIndianPalace /> },
    { id: 9, title: "Dhokla", cuisine: "Indian (Vegetarian)", time: "25 mins", icon: <GiIndianPalace /> },
    { id: 10, title: "Pav Bhaji", cuisine: "Indian (Vegetarian)", time: "40 mins", icon: <GiIndianPalace /> },

    // 🌍 International Vegetarian Dishes
    { id: 11, title: "Greek Salad", cuisine: "Greek (Vegetarian)", time: "15 mins", icon: <FaLeaf /> },
    { id: 12, title: "Miso Soup", cuisine: "Japanese (Vegetarian)", time: "20 mins", icon: <GiChopsticks /> },
    { id: 13, title: "Caprese Salad", cuisine: "Italian (Vegetarian)", time: "10 mins", icon: <FaPizzaSlice /> },
    { id: 14, title: "Vegetable Paella", cuisine: "Spanish (Vegetarian)", time: "50 mins", icon: <FaUtensils /> },
    { id: 15, title: "Falafel Wrap", cuisine: "Middle Eastern (Vegetarian)", time: "30 mins", icon: <FaLeaf /> },

    // 🍗 Non-Vegetarian Dishes
    { id: 16, title: "Spaghetti Carbonara", cuisine: "Italian", time: "30 mins", icon: <FaPizzaSlice /> },
    { id: 17, title: "Tandoori Chicken", cuisine: "Indian", time: "45 mins", icon: <FaDrumstickBite /> },
    { id: 18, title: "Sushi Rolls", cuisine: "Japanese", time: "50 mins", icon: <GiSushis /> },
    { id: 19, title: "Beef Tacos", cuisine: "Mexican", time: "25 mins", icon: <GiTacos /> },
    { id: 20, title: "French Onion Soup", cuisine: "French", time: "40 mins", icon: <MdSoupKitchen /> },
    { id: 21, title: "Kung Pao Chicken", cuisine: "Chinese", time: "35 mins", icon: <GiChopsticks /> },
    { id: 22, title: "Paella", cuisine: "Spanish", time: "50 mins", icon: <FaUtensils /> },
    { id: 23, title: "Cheeseburger", cuisine: "American", time: "20 mins", icon: <FaUtensils /> },
    { id: 24, title: "Biryani", cuisine: "Indian", time: "1 hr", icon: <GiIndianPalace /> },
    { id: 25, title: "Pad Thai", cuisine: "Thai", time: "30 mins", icon: <GiNoodles /> },
    { id: 26, title: "Korean BBQ Short Ribs", cuisine: "Korean", time: "1 hr", icon: <FaDrumstickBite /> },
    { id: 27, title: "Shepherd’s Pie", cuisine: "British", time: "45 mins", icon: <FaUtensils /> },
    { id: 28, title: "Pho", cuisine: "Vietnamese", time: "1 hr 30 mins", icon: <MdSoupKitchen /> },
    { id: 29, title: "Goulash", cuisine: "Hungarian", time: "1 hr", icon: <FaUtensils /> },
    { id: 30, title: "Churros", cuisine: "Spanish", time: "35 mins", icon: <FaUtensils /> },
    { id: 31, title: "Chicken Shawarma", cuisine: "Middle Eastern", time: "50 mins", icon: <FaDrumstickBite /> },
    { id: 32, title: "Lobster Roll", cuisine: "American", time: "25 mins", icon: <FaFish /> },
  ];

  return (
    <div className="container">
      <h2>🍛 All Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h3>{recipe.icon} {recipe.title}</h3>
          <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
          <p><strong>Cooking Time:</strong> {recipe.time}</p>
          <Link to={`/recipe/${recipe.id}`}>
            <button>View Recipe</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;

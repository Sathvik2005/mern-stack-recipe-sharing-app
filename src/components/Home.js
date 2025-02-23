import { Link } from "react-router-dom";
import "./styles.css";

function Home() {
  return (
    <div className="container">
      <h1>🍽️ Welcome to Recipe Share</h1>
      <p>Discover & share amazing recipes from around the world!</p>
      <Link to="/recipes">
        <button>Browse Recipes</button>
      </Link>
      <Link to="/create-recipe">
        <button>Share Your Recipe</button>
      </Link>
    </div>
  );
}

export default Home;

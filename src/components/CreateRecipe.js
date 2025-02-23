import { useState } from "react";
import "./styles.css";

function CreateRecipe() {
  const [recipe, setRecipe] = useState({ title: "", ingredients: "", instructions: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe Created:", recipe);
  };

  return (
    <div className="container">
      <h2>📝 Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Recipe Title" required 
          value={recipe.title} onChange={(e) => setRecipe({ ...recipe, title: e.target.value })} />
        
        <textarea placeholder="Ingredients" required 
          value={recipe.ingredients} onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })} />
        
        <textarea placeholder="Instructions" required 
          value={recipe.instructions} onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })} />
        
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
}

export default CreateRecipe;

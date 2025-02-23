import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import RecipeList from './components/RecipeList';
import CreateRecipe from './components/CreateRecipe';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

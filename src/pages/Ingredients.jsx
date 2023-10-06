import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import "@/scss/ingredients.scss";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/ingredients/").then((res) => {
      setIngredients(res.data.results);
    });
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="alltales">Ингредиенты</h1>
      {ingredients ? (
        <div className="cocktails-grid">
          {ingredients.map((ingredient) => (
            <div key={ingredient.id} className="cocktail-card">
              <Link to={`/ingredients/${ingredient.id}`}>
                <img src={ingredient.image} alt={ingredient.name} className="cocktail-image" />
                <div className="cocktail-details">
                  <p className="cocktail-name">{ingredient.name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Ingredients;

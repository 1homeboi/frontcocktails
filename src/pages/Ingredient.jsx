import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import "@/scss/talepage.scss";

const Ingredient = () => {
  const { id } = useParams();
  const [ingredient, setIngredient] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/ingredients/${id}/`).then((res) => {
      setIngredient(res.data);
    });
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="cocktail-container">
        {ingredient ? (
          <>
            <div className="cocktail-header">
              <img
                src={ingredient.image}
                alt={ingredient.name}
                className="solo_ingredient_image"
              />
              <p className="titlecocktail">{ingredient.name}</p>
            </div>
            <div className="cocktail-description">
              <h2>Описание</h2>
              <p className="text-solo">{ingredient.description}</p>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Ingredient;

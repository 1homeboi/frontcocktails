import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import "@/scss/styles.scss";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/ingredients/").then((res) => {
      setCocktails(res.data.results);
    });
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="alltales">Ингредиенты</h1>
      {cocktails ? (
        <div className="cocktails-grid">
          {cocktails.map((cocktail) => (
            <div key={cocktail.id} className="cocktail-card">
              <Link to={`/cocktails/${cocktail.id}`}>
                <img src={cocktail.image} alt={cocktail.name} className="cocktail-image" />
                <div className="cocktail-details">
                  <p className="cocktail-name">{cocktail.name}</p>
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

export default Cocktails;

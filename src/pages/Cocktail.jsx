// React Component (Cocktail.js)

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import "@/scss/talepage.scss";

const Cocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/cocktails/${id}/`).then((res) => {
      setCocktail(res.data);
    });
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="cocktail-container">
        {cocktail ? (
          <>
            <div className="cocktail-header">
              <img
                src={cocktail.image}
                alt={cocktail.name}
                className="solo_cocktail_image"
              />
              <p className="titlecocktail">{cocktail.name}</p>
            </div>
            <div className="cocktail-description">
              <h2>Описание</h2>
              <p className="text-solo">{cocktail.description}</p>
            </div>
            <div className="cocktail-instructions">
              <h2>Инструкция</h2>
              <p className="text-instructions">{cocktail.instructions}</p>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Cocktail;

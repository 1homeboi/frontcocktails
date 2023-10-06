import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import "@/scss/styles.scss";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    axios.get("http://localhost:8000/api/cocktails/").then((res) => {
      setCocktails(res.data.results);
    });
  }, []);

  // Function to filter cocktails based on the search term
  const filterCocktails = () => {
    if (!searchTerm) {
      return cocktails; // Return all cocktails if search term is empty
    }

    const regex = new RegExp(searchTerm, "i");
    return cocktails.filter((cocktail) => cocktail.name.match(regex));
  };

  return (
    <>
      <Navbar />
      <h1 className="alltales">Коктейли</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Поиск..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {cocktails ? (
        <div className="cocktails-grid">
          {filterCocktails().map((cocktail) => (
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

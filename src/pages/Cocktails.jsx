import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import cartService from "@/utils/cart";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState(null);

  const addToCart = (cocktail) => {
    cartService.addToCart(cocktail);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/api/cocktails/").then((res) => {
      setCocktails(res.data.results);
    });
  }, []); 

  return (
    <>
      <Navbar />
      <h1>Коктейли</h1>
      {cocktails ? (
        <div>
          {cocktails.map((cocktail) => (
            <div key={cocktail.id}>
              <Link to={`/cocktails/${cocktail.id}`}>
                <img src={cocktail.image} alt={cocktail.name} />
                <p>{cocktail.name}</p>
                <p>{cocktail.description}</p>
                <p>{cocktail.instructions}</p>
                <p>{cocktail.rating}</p>
              </Link>
              <button onClick={() => addToCart(cocktail)}>Add to cart</button>
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

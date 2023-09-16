import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";

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
      <h1>Cocktail</h1>
      {cocktail ? (
        <div>
          <img src={cocktail.image} alt={cocktail.name} />
          <p>{cocktail.name}</p>
          <p>{cocktail.price}</p>
          <p>{cocktail.description}</p>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Cocktail;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';
import "../scss/home.scss";

const CocktailList = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);

  useEffect(() => {
    // Генерация случайного числа для выбора случайного коктейля
    axios.get('http://localhost:8000/api/cocktails/')
      .then((res) => {
        const cocktails = res.data.results;
        const randomIndex = Math.floor(Math.random() * cocktails.length);
        setRandomCocktail(cocktails[randomIndex]);
      });
  }, []);

  return (
    <div className="containerStyle">
      <Navbar />
      <h1 className="alltales">Добро пожаловать!</h1>
      <h1 className="titleStyle">
        Ваш Случайный коктейль
      </h1>
      {randomCocktail ? (
        <div className="randomCocktailStyle">
          <div className="randomCocktailContent">
            <Link to={`/cocktails/${randomCocktail.id}`} className="cocktailLink">
              <img src={randomCocktail.image} alt={randomCocktail.name} className="cocktailImageStyle" />
            </Link>
            <Link to={`/cocktails/${randomCocktail.id}`} className="cocktailLink2">
              <h2 className="cocktailTitleStyle">{randomCocktail.name}</h2>
            </Link>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CocktailList;

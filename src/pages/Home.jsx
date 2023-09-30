import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import "@/scss/styles.scss";

const Home = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);

  useEffect(() => {
    // Функция для получения случайного коктейля с вашего API
    const fetchRandomCocktail = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/cocktails/random");
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }
        const data = await response.json();
        setRandomCocktail(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRandomCocktail();
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="alltales">Добро пожаловать!</h1>
      {randomCocktail && (
        <div>
          <h2>Случайный коктейль:</h2>
          <p>Название: {randomCocktail.name}</p>
        </div>
      )}
    </>
  );
};

export default Home;


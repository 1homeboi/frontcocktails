import Navbar from "@/components/Navbar";
import React from "react";
import "@/scss/about.scss";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-content">
        <h1>О сайте</h1>
        <p className="about-description">
          Добро пожаловать на наш сайт о коктейлях! Здесь вы найдете огромное
          количество интересных рецептов и информации о самых разнообразных
          коктейлях. Давайте вместе погрузимся в мир коктейлей и искусства
          барменов.
        </p>
        <div className="about-image">
          <img src="/about-cocktails.jpg" alt="Коктейль" />
        </div>
      </div>
    </>
  );
};

export default About;
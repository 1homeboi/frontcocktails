import { Link } from "react-router-dom";
import "@/scss/styles.scss"

const Navbar = () => {
  const routes = [
    {
      path: "/",
      title: "Главная страница",
    },
    {
      path: "/about",
      title: "О сайте",
    },
    {
      path: "/cocktails",
      title: "Коктейли",
    },
    {
      path: "/cart",
      title: "Ингредиенты",
    }
  ];

  const navStyle = {
    display: "flex",
    justifyContent: "center", // Центрирование элементов по горизонтали
    alignItems: "center", // Выравнивание элементов по вертикали
    backgroundColor: "#E8BBBB",
  };
  const ulStyle = {
    listStyle: "none",
    display: "flex",
  };

  const liStyle = {
    margin: "0 40px 0 0",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black", // цвет текста
    borderBottom: "none", // Уберите подводку
    fontSize: "20px",
  };

  return (
    <nav style={navStyle}>
            <h1 className="title">Tail It!</h1>
      <img src="../src/images/logo.svg" className="logo-img" alt="" />
      <ul style={ulStyle}>
        {routes.map((route, idx) => {
          return (
            <li key={idx} style={liStyle}>
              <Link to={route.path} style={linkStyle}>{route.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

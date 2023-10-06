import { Link } from "react-router-dom";

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
      path: "/ingredients",
      title: "Ингредиенты",
    },
    {
      path: "/register", // Добавляем ссылку на страницу регистрации
      title: "Регистрация",
    },
    {
      path: "/login", // Добавляем ссылку на страницу входа
      title: "Вход",
    },
  ];

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8BBBB",
    padding: "10px", // Add padding for spacing
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
    color: "black",
    borderBottom: "none",
    fontSize: "20px",
  };

  return (
    <nav style={navStyle}>
      <h1 className="title">Tail It!</h1>
      <img src="../src/images/logo.svg" className="logo-img" alt="" />
      <ul style={ulStyle}>
        {routes.map((route, idx) => (
          <li key={idx} style={liStyle}>
            <Link to={route.path} style={linkStyle}>
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

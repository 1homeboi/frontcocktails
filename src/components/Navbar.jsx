import { Link } from "react-router-dom";
import { useState } from "react";

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
  ];

  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const handleSearchInputChange = (query) => {
    setSearchQuery(query);
    // Perform search or filtering here based on the query
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    color: "black",
    borderBottom: "none",
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
              <Link to={route.path} style={linkStyle}>
                {route.title}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Search Input Field */}
      <input
        type="text"
        placeholder="Поиск..."
        onChange={(e) => handleSearchInputChange(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;

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
      path: "/cart",
      title: "Корзина",
    }
  ];

  return (
    <>
      <nav>
        <ul>
          {routes.map((route, idx) => {
            return (
              <li key={idx}>
                <Link to={route.path}>{route.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

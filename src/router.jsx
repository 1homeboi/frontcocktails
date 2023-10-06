import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Cocktails from "@/pages/Cocktails";
import Cocktail from "@/pages/Cocktail";
import Ingredients from "@/pages/Ingredients";
import Ingredient from "@/pages/Ingredient";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cocktails",
    element: <Cocktails />,
  },
  {
    path: "/cocktails/:id",
    element: <Cocktail />,
  },
  {
    path: "/ingredients",
    element: <Ingredients />,
  },
  {
    path: "/ingredients/:id",
    element: <Ingredient />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;

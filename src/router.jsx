import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Cocktails from "@/pages/Cocktails";
import Cocktail from "@/pages/Cocktail";
import Cart from "@/pages/Cart";

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
    path: "/cart",
    element: <Cart />,
  }
]);

export default router;

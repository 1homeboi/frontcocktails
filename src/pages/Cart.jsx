import cartService from "@/utils/cart";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(cartService.getCart());
  }, [cart]);

  const removeFromCart = (dish) => {
    cartService.removeFromCart(dish);
    setCart(cartService.getCart());
  };

  const addQuantity = (dish) => {
    cartService.addQuantity(dish);
    setCart(cartService.getCart());
  };

  const subtractQuantity = (dish) => {
    cartService.subtractQuantity(dish);
    setCart(cartService.getCart());
  };

  return (
    <>
      <Navbar />
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <>
          <button onClick={() => cartService.clearCart()}>Clear cart</button>
          <ul>
            {cart.map((dish) => (
              <li key={dish.id}>
                <p>{dish.name}</p>
                <p>price: {dish.price}$</p>
                <button onClick={() => addQuantity(dish)}>+</button>
                <button onClick={() => subtractQuantity(dish)}>-</button>
                <p>quantity: {dish.quantity}</p>
                <button onClick={() => removeFromCart(dish)}>
                  Remove from cart
                </button>
                <hr />
              </li>
            ))}
          </ul>
          <p>Total: {cartService.getCartTotal()}$</p>
        </>
      ) : (
        <p>Cart is empty</p>
      )}
    </>
  );
};

export default Cart;

import "./Cart.css";

import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li className="border-b border-gray-500 pb-4">
      <img className="aspect-[16/9] w-full" src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer className="flex gap-2 justify-center items-center">
        <small>Cantidad: {quantity}</small>
        <button className="p-2" onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label className=" cart-button items-center bg-sky-500 rounded-full cursor-pointer flex h-8 justify-center p-1 absolute right-2 top-2 transition-all duration-300 w-24 z-[9999]" htmlFor={cartCheckboxId}>
        <CartIcon />
        <span>Cart</span>

      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
            <span>Cart</span>


      <aside className="cart bg-slate-200 fixed none hidden p-8 right-0 top-0 w-[200px] overflow-scroll ">
        <h1 className=" mt-5" >Shopping Cart</h1>
        <ul className="mt-5">
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button className=" mt-5 rounded-lg border border-transparent p-2 font-semibold bg-red-500 cursor-pointer focus:outline-4 hover:border-co "
         onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}

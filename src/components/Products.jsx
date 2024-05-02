import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="mb-20">
      <ul className="grid grid-cols-200px gap-4">
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li className=" flex flex-col gap-4 shadow-lg rounded bg-white text-black p-4" key={product.id}>
              <img
              className="rounded-md w-full aspect-[16/9] block object-cover bg-white" 
              src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button className=" rounded-lg border border-transparent p-2 font-semibold bg-sky-500 cursor-pointer focus:outline-4 "
                  style={{ backgroundColor: isProductInCart ? "red" : "#09f" }}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

import { useContext } from "react";
import { CartContext } from "./contexts";

export default function Header () {
  const [cart] = useContext(CartContext) ;
  /* you don't need setCart here because we just want to read the cart length */
  /*it is difficult to khnow where the state is modofied  => a challenge of context !!!!!  */
  return (
    <nav>
      <h1 className="logo">Padze Gino's Pizza</h1>
      <div className="nav-cart">
        <span className="nav-cart-number">{cart.length}</span>
      </div>
    </nav>
  )
}
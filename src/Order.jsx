
/*statsfull component Order.jsx*/

import Pizza from "./Pizza.jsx";


export default function Order() {

  /*variables constant*/
  const pizzaType = "pepperoni";
  const pizzaSize = "M";

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <label htmlFor="pizza-type">Pizza Type: </label>
          <select name="pizza-type" value={pizzaType}>
            <option value="margherita">Margherita</option>
            <option value="pepperoni">Pepperoni</option>
            <option value="veggie supreme">Veggie Supreme</option>
          </select>
        </div>
        <div>
          <label htmlFor="pizza-size">Pizza Size: </label>
          <div>
            <span>
              <input 
                checked={pizzaSize === "S"}
                type="radio"
                name="pizza-size"
                value="S"
                id="pizza-s"
              />
              <label htmlFor="pizza-s">Small</label>
            </span>
            <span>
              <input 
                checked={pizzaSize === "M"}
                type="radio"
                name="pizza-size"
                value="M"
                id="pizza-m"
              />
              <label htmlFor="pizza-m">Medium</label>
            </span>
            <span>
              <input 
                checked={pizzaSize === "L"}
                type="radio"
                name="pizza-size"
                value="L"
                id="pizza-l"
              />
              <label htmlFor="pizza-l">Large</label>
            </span>
            </div>
            <button type="submit">Add to Cart</button>
            <div className="order-pizza">
              <Pizza
                name="Pepperoni"
                description="A classic American taste! Relish the delectable flavor of Pepperoni, topped with extra cheese"
                image={"/src/Assets/pizzas/pepperoni.webp"}
              />
              <p>$13.37</p>
            </div>
        </div>
      </form>

    </div>
    );
}
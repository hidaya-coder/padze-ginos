/*statsfull component Order.jsx*/
import { useState } from "react";
import { useEffect} from "react";
import Pizza from "./Pizza.jsx";

const intl = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export default function Order() {
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading , setLoading] = useState(true);

  let price , selectedPizza;
  
  /*extract info of pizza selected from api*/ 
  if (!loading) {
    selectedPizza = pizzaTypes.find ((pizza) => pizzaType === pizza.id);
  }

  price = intl.format(selectedPizza?.sizes[pizzaSize]);

  /*FETCH LIST FO PIZZA FROM API*/
  async function fetchPizzaTypes() {
    const pizzaRes = await fetch ("/api/pizzas");
    const pizzaJson = await pizzaRes.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, [pizzaSize]);
  

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type: </label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              {pizzaTypes.map((pizza) => (
                <option value ={pizza.id} key={pizza.id}>
                  {pizza.name}</option>
              ))}
            </select>
          </div>
          <div>
          <label htmlFor="pizza-size">Pizza Size: </label>
          <span>
            <input
              checked={pizzaSize === "S"}
              type="radio"
              name="pizza-size"
              value="S"
              id="pizza-s"
              onChange = { (e) => setPizzaSize(e.target.value)}
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
              onChange = { (e) => setPizzaSize(e.target.value)}
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
              onChange = { (e) => setPizzaSize(e.target.value)}
            />
            <label htmlFor="pizza-l">Large</label>
          </span>
          </div>
          <button type="submit">Add to Cart</button>
          { loading ? (<h1>Loading...</h1>) : (
          <div className="order-pizza">
            <Pizza
              name={selectedPizza?.name}
              description = {selectedPizza?.description}
              image={selectedPizza?.image}
            />
            <p>{price}</p>
          </div>
          )}
        </div>
      </form>
    </div>
  );
}

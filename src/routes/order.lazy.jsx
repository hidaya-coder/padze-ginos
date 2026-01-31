/*statsfull component Order.jsx that */
import { useState , useEffect , useContext } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import Pizza from "../Pizza.jsx";
import Cart from "../Cart.jsx";
import { CartContext } from "../contexts.jsx";
const intl = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });



export const Route =  createLazyFileRoute ("/order")({
  component: Order,
}) 

/*Route to component Order that is lazy loaded (lorsque user demande le component) */

function Order() { 

  /*component that allow user to create order is a lazy loaded component */

  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading , setLoading] = useState(true);
  const [cart , setCart] = useContext(CartContext) ;

  async function checkout() {
    setLoading(true);
    await fetch ("/api/order" , {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify ({ cart })
    } );
    setCart ( [] );
    setLoading (false);
  }

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
      <form onSubmit={ (e) => {
        e.preventDefault();
        setCart([...cart , {pizza : selectedPizza , size : pizzaSize , price}]);
      }}>
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
      {
        loading ? <h2>Loading ..</h2> :
        <Cart cart ={cart} checkout={checkout} />
      }
    </div>
  );
}

import   usePizzaOfDay from "./usePizzaOfDay";

const intl = new Intl.NumberFormat("en-US", { 
  style: "currency",
   currency: "USD" 
});
  /*PizzaOfday is component (design)*/

const PizzaOfDay = () => {
  /*use custom function with state to fetch pizza of day => is logique */
  const pizzaOfDay = usePizzaOfDay();

  if(!pizzaOfDay) {
    return <div> Loading...</div>
  }

  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the Day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{pizzaOfDay.name}</h3>
          <p>{pizzaOfDay.description}</p>
          <p className="pizza-of-the-day-price">
            {intl.format(pizzaOfDay.sizes.S)}
          </p>
        </div>
        <img className="pizza-of-the-day-image" 
        src={pizzaOfDay.image} 
        alt={pizzaOfDay.name}
        />
      </div>
    </div>
  )

}

export default PizzaOfDay;

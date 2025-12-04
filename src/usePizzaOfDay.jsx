import {useState , useEffect} from "react";

export default function usePizzaOfDay() {

  const [pizzaOfDay , setPizzaOfDay] = useState(null);

  async function fetchPizzaOfDay() {
    const res = await fetch ("/api/pizza-of-the-day");
    const resjson = await res.json();
    setPizzaOfDay(resjson);
  }

  useEffect(() => {
    fetchPizzaOfDay();
  }, []);

  return pizzaOfDay;

}

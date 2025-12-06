import {useState , useDebugValue , useEffect} from "react";

export  default function usePizzaOfDay() {

  const [pizzaOfDay , setPizzaOfDay] = useState(null);
  useDebugValue(pizzaOfDay , `${pizzaOfDay?.id} : ${pizzaOfDay?.name} `
  );

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

import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfDay  from "./PizzaOfDay";

const App = () => {
  return (
    <div>
      <h1 className="logo">Padze Gino's - Order Now</h1>
      <Order />
      <PizzaOfDay />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(  <StrictMode>
    <App />
  </StrictMode>);

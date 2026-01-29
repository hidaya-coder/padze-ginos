import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfDay  from "./PizzaOfDay";
import Header from './Header';
import { CartContext } from './contexts';

const App = () => {
  const cartHook = useState([]);
  return (
    <CartContext.Provider value={cartHook}>
      <div>
        <Header />
        <Order />
        <PizzaOfDay />
      </div>
    </CartContext.Provider>  
  );
};

/*you can use the hook in the whole app ans set the carthook anywhere with useContext */ 

const container = document.getElementById("root");
const root = createRoot(container);
root.render(  <StrictMode>
    <App />
  </StrictMode>);

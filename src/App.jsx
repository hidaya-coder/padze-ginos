import {strictMode} from react
import { createRoot } from "react-dom/client";
import Order from "./Order";

const App = () => {
  return (
    <strictMode>
    <div>
      <h1>Padze Gino's - Order Now</h1>
      <Order />
    </div>
    </strictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

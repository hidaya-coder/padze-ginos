import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";

const App = () => {
  return (
    <div>
      <h1>Padze Gino's - Order Now</h1>
      <Pizza
        name="Margherita"
        description="Classic delight with 100% real mozzarella cheese"
        image={"/public/pizzas/mexicana.webp"}
      />
      <Pizza
        name="Pepperoni"
        description="A classic American taste! Relish the delectable flavor of Pepperoni, topped with extra cheese"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Veggie Supreme"
        description="Loaded with crunchy onions, crisp capsicum, juicy tomatoes, and jalapeno with extra cheese"
        image={"/public/pizzas/veggie_veg.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

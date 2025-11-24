import { createRoot } from 'react-dom/client';
import Pizza from './Pizza.jsx';

const App = () => {
 return(
  <div>
    <x-my-webcomponent></x-my-webcomponent>
    <input type="text" />
    <h1>Padze Gino's Pizzeria - Order Now</h1>
    <Pizza name="Margherita" description="Classic delight with 100% real mozzarella cheese" />
    <Pizza name="Pepperoni" description="A classic American taste! Relish the delectable flavor of Pepperoni, topped with extra cheese" />
    <Pizza name="Veggie Supreme" description="Loaded with crunchy onions, crisp capsicum, juicy tomatoes, and jalapeno with extra cheese" />
  </div>
 );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
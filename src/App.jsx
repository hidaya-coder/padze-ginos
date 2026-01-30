import { StrictMode} from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider , createRouter } from "@tanstack/react-router"; 
import { routeTree } from "./routeTree.gen";


const router = createRouter({ routeTree }) 
/*create the router from routeTree qui contain the all navigations from page to another page */

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

/*you can use the hook in the whole app and set the carthook anywhere with useContext */ 

const container = document.getElementById("root");
const root = createRoot(container);
root.render(  <StrictMode>
    <App />
  </StrictMode>);

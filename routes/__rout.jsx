/*route from page to another page */
import { useState } from "react" ;
import { createRootRoute,  Outlet } from "@tanstack/react-router";  
import { TanStackRouterDevtools} from "@tanstack/router-devtools";
import PizzaOfDay from "../src/PizzaOfDay";
import Header from "../src/Header";
import { CartContext } from "../src/contexts";


export const Route = createRootRoute({
  component: () => { /*app component*/
      const cartHook = useState([]);
      return (
        <>
          <CartContext.Provider value={cartHook}>
            <div>
              <Header />
              <Outlet />
              <PizzaOfDay />
            </div>
          </CartContext.Provider> 
          <TanStackRouterDevtools/>
        </>
      ) 
  }
})

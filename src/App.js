const Pizza = (props) => {
  return React.createElement("div", {} , [
    React.createElement("h1" ,{} ,props.name ),
    React.createElement("p" , {} , props.description ),
  ] );
};

const App = () => {
  return React.createElement(
    'div', 
    {},
    [
      React.createElement('h1', {}, "Padze Gino's Pizzeria"),
      React.createElement(Pizza , {
        name: "Margherita",
        description: "Classic pizza with tomato sauce, mozzarella, and basil."}),
      React.createElement(Pizza ,{
          name : "Pepperoni",
          description  : "Topped with pepperoni slices and cheese."
        }),
      React.createElement(Pizza ,{
        name : "Veggie Delight",
        description :" Loaded with bell peppers, onions, mushrooms, and olives."
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
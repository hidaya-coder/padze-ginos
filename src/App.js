const Pizza = () => {
  return React.createElement("div", {} , [
    React.createElement("h1" ,{} , " the peppperoni pizza" ),
    React.createElement("p" , {} , "Mozzarella cheese, pepperoni, tomato sauce"),
  ] );
};

const App = () => {
  return React.createElement(
    'div', 
    {},
    [
      React.createElement('h1', {}, "Padze Gino'"),
      React.createElement(Pizza),
      React.createElement(Pizza),
      React.createElement(Pizza),
      React.createElement(Pizza),
      React.createElement(Pizza),
    ]
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createElementRoot(container);
root.render(React.createElement(App));
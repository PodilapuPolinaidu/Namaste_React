const parent = React.createElement("div", {id:"parent"}, [
  React.createElement("div", {id:"child1"}, [
    React.createElement("h1", {}, "Hello World!"),
    React.createElement("h2", {}, "Hello World!"),
  ]),
  React.createElement("div", {id:"child1"}, [
    React.createElement("h1", {}, "Hello World!"),
    React.createElement("h2", {}, "Hello World!"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

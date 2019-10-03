import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";
const App = () => {
  //return React.createElement("div",{}, React.createElement("h1", {}, "Adopt Me!"));
  // return React.createElement("div", { id: "something-important" }, [
  //   React.createElement("h1", {}, "Adopt Me!!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cockatil"
  //   }),
  //   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "aaaa" })
  // ]);
  return (
    <div id="something important">
      <h1>Adopt Me!!</h1>
      <Pet name="Luna" animal="Dog" Breed="Havanese" />
      <Pet name="Pepper" animal="Bird" Breed="Cockatil" />
      <Pet name="Doink" animal="Cat" Breed="Mixed" />
    </div>
  );
};

//render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));

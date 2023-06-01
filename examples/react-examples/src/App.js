import React, { useState } from "react";

import "./App.css";
import Counter from "./components/Counter";
import FireEvent from "./components/FireEvent";
import Posts from "./components/Posts";

const App = () => {
  const myFavoriteNumber = useState(7);
  console.log(myFavoriteNumber); // logs: [1, function dispatchSetState()]

  const [myFavoriteColor, setMyFavoriteColor] = useState("black");
  console.log(myFavoriteColor); // logs: black
  console.log(setMyFavoriteColor); // logs: function dispatchSetState()

  return (
    <div className="App">
      <p>Hello World!</p>
      <Counter />
      <Posts />
      <FireEvent />
    </div>
  );
};

export default App;

import react, { useState } from "react";

const FireEvent = () => {
  const [displayHelloWorld, setDisplayHelloWorld] = useState(false);

  const sayhi = () => {
    setDisplayHelloWorld(true);
  };

  return (
    <div>
      <button onClick={sayhi}>Say Hi</button>
      {displayHelloWorld && <h2>Hello World!</h2>}
    </div>
  );
};

export default FireEvent;

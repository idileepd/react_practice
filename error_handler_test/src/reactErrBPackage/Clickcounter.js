import { useState } from "react";

import React from "react";

const Clickcounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Counter {count}</button>
    </div>
  );
};

export default Clickcounter;

import React from "react";
import WithCounter from "./WithCounter";

const HoverCounter = ({ count, incrementCounter }) => {
  return (
    <>
      <button onMouseOver={incrementCounter}>ClickM</button>
      <h1>{count}</h1>
    </>
  );
};

export default WithCounter(HoverCounter);

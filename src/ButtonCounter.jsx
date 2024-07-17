import React from "react";
import WithCounter from "./WithCounter";

const ButtonCounter = ({ count, incrementCounter }) => {
  return (
    <>
      <button onClick={incrementCounter}>ClickM</button>
      <h1>{count}</h1>
    </>
  );
};

export default WithCounter(ButtonCounter);

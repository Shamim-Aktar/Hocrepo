import React from "react";
import ButtonCounter from "./ButtonCounter";
import HoverCounter from "./HoverCounter";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ButtonCounter />
      <HoverCounter />
    </div>
  );
}

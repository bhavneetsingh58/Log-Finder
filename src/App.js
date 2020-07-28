import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import InputCard from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Components">
        <InputCard />
        <InputCard />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import "./tailwind.output.css";
import { RuneCalculator } from "./components/RuneCalculator/RuneCalculator";
import { Header } from "./layout/Header/Header";
import { Footer } from "./layout/Footer/Footer";
function App() {
  return (
    <div className="App p-5 h-full w-full">
      <Header />
      <RuneCalculator></RuneCalculator>
      <Footer />
    </div>
  );
}

export default App;

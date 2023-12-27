import { useState } from "react";
import Navbar from "./components/Nav/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;

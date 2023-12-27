import { useState } from "react";
import Navbar from "./components/Nav/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Featured from "./components/Featured/Featured";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Featured />
    </>
  );
}

export default App;

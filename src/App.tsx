import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Store } from "./Pages/Store";
import { NavBar } from "./Components/NavBar";
import { ShoppingCartProvider } from "./Content/ShoppingCartContext";
function App() {
  const [count, setCount] = useState(0);

  return (
    <ShoppingCartProvider>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;



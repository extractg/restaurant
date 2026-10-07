import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Products from "./pages/Products.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    <Footer />
    <BackToTop />

  </>
  )
}

export default App

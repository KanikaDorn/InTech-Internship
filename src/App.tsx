import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import ProductsSection from "./components/ProductsSection";
import AboutSection from "./components/AboutSection";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <HomeSection />
        <ProductsSection />
        <AboutSection />
      </div>
      <Footer />
    </>
  );
};

export default App;

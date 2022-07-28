import React from "react";
import "./App.css";
import Banner from "./content/Banner";
import Content from "./content/Content";
import Footer from "./content/Footer";

function App() {
  return (
    <div className="container">
      <Banner />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

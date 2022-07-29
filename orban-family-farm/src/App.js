import React from "react";
import "./App.css";
import Banner from "./content/Banner";
import Content from "./content/Content";
import Footer from "./content/Footer";
import Title from "./content/Title";

function App() {
  return (
    <div className="container">
      <Title />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

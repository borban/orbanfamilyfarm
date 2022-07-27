import React from "react";
import "./App.css";
import Banner from "./content/Banner";
import Content from "./content/Content";
import Title from "./content/Title";
import Footer from "./content/Footer";

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

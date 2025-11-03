import React from "react";
import NavBar from "../components/homePage/NavBar";
import Hero from "../components/homePage/Hero";
import Pricing from "../components/homePage/Pricing";
import AboutUs from "../components/homePage/AboutUs";
import FAQ from "../components/homePage/FAQ";

const Home = () => {
  return (
    <div>
      <Hero />
      <Pricing />
      <AboutUs />
      <FAQ />
    </div>
  );
};

export default Home;

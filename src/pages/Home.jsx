import React from "react";
import NavBar from "../components/homePage/NavBar";
import Hero from "../components/homePage/Hero";
import Pricing from "../components/homePage/Pricing";
import AboutUs from "../components/homePage/AboutUs";
import Testimonials from "../components/homePage/Testimonials";
import FAQ from "../components/homePage/FAQ";

const Home = () => {
  return (
    <div>
      <Hero />
      <Pricing />
      <AboutUs />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;

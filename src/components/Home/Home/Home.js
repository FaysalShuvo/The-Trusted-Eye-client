import React from "react";
import Contact from "../Contact/Contact";
import Detectives from "../Detectives/Detectives";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import News from "../News/News";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Experience />
      <Services />
      <Testimonials />
      <Detectives />
      <News />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;

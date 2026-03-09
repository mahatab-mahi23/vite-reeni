import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Service from "./Components/Service/Service";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/project/Project";
import Skill from "./Components/Skill/Skill";
import Education from "./Components/Education/Education";
import Fatima from "./Components/Fatima/Fatima";
import Company from "./Components/Company/Company";
import Portfolio from "./Components/Portfolio/Portfolio";
import Design from "./Components/Design/Design";
import Collaboration from "./Components/Collaboration/Collaboration";
import Testimonial from "./Components/Testimonial/Testimonial";
import Message from "./Components/Message/Message";
import Branding from "./Components/Branding/Branding";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Banner />
        <Service />
        <Experience />
        <Project />
        <Skill />
        <Education />
        <Fatima />
        <Company />
        <div className="bg-[#F4F4F4]">
          <Portfolio />
          <Design />
        </div>
        <Collaboration />
        <Testimonial />
        <Message/>
        <Branding/>
        <Footer/>
      </div>
    </>
  );
};

export default App;

import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import About from "../About";
import Portfolio from "../Portfolio";
import Skills from "../Skills";
import Education from "../Education";
import Contact from "../Contact";
const Home = () => {
  return (
    <Wrapper>
      <div className="mt-4 wrap">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Education />
        <Contact />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`

 `;
export default Home;

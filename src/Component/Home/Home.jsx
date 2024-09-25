import React from "react";
import styled from "styled-components";
import Navbar from "../NavBar/Navbar";
import Hero from "./Hero";
import About from "../About";

const Home = () => {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default Home;

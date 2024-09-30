import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Component/GlobalStyle/GlobalStyle";
import Navbar from "./Component/NavBar/Navbar";
import Home from "./Component/Home/Home";
import About from "./Component/About";
import Hero from "./Component/Home/Hero";
import Skills from "./Component/Skills";
import Education from "./Component/Education";
import Portfolio from "./Component/Portfolio";
import Contact from "./Component/Contact";
import Nav from "./Component/Nav";

function App() {
  const theme = {
    colors: {
      JetBlack: "#343a40",
      CharcoalBlack: "#2c2f33",
      OnyxBlack: "#0f0f0f",
      GraphiteBlack: "#383838",
      MatteBlack: "#1b1b1b",
      whiteColor: "#ffffff",
 
      headingColor: "#031426",
    
    },
  };

  return (
    <Wrapper>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Nav/>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/hero" element={<Hero />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/education" element={<Education />} />
                <Route path="/showcase" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
              </Routes>
          
        </ThemeProvider>
      </BrowserRouter>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
export default App;

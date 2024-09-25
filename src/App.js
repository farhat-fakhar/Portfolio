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

function App() {
  const theme = {
    colors: {
      greenColor: "#009f7f",
      bgColor: "#f3f4f6",
      borderColor: "#e5e7eb",
      textColor: "#333333",
      yellowColor: "#eab308",
      whiteColor: "#ffffff",
      menuColor: "#7E7E7E",
      headingColor: "#031426",
    },
  };

  return (
    <Wrapper>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/hero" element={<Hero />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/education" element={<Education />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />

              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </Wrapper>
  );
}
const Wrapper=styled.div`
  @media only screen and (max-width: 600px) {
    .app-container{
     }
}
`
export default App;

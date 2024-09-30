import React from "react";
import styled from "styled-components";
import Title from "./Home/Title";
import { Image } from "react-bootstrap";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import portfolio1 from "./assets/portfolio1.PNG";
import portfolio2 from "./assets/portfolio2.PNG";
import portfolio3 from "./assets/project3.PNG";
import { FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,

    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Title title="Web Development Showcase" />
      <div className="description">
        <p>
          "My projects showcase a range of web development skills, built using
          HTML, CSS, JavaScript, and React. Leveraging Styled Components for
          custom styling and Material-UI (MUI) for responsive, modern UI
          components, these projects demonstrate my ability to create dynamic,
          user-friendly web applications with clean design and seamless
          functionality."
        </p>
      </div>
      <div className="slider-container mt-3 ">
        <Slider {...settings}>
          <div className="item">
            <NavLink
              to="https://farhat-fakhar.github.io/Real-estate-website-demo/"
              style={{ textDecoration: "none" }}
            >
              <Image src={portfolio1} fluid />
              <div className="heading">
                <p>Build in HTML, CSS & JAVASCRIPT</p>
                <p><FaExternalLinkAlt/></p>

              </div>
            </NavLink>
          </div>
          <div className="item">
            <NavLink
              to="https://farhat-fakhar.github.io/project/"
              style={{ textDecoration: "none" }}
            >
              <Image src={portfolio2} fluid />
              <div className="heading">
                <p>Build in HTML, CSS & JAVASCRIPT</p>
                <p><FaExternalLinkAlt/></p>

              </div>
            </NavLink>
          </div>
          <div className="item">
            <Image src={portfolio3} fluid />
            <div className="heading  ">
              <p>Build in REACT JS, MUI & Styled component</p>
              <p><FaExternalLinkAlt/></p>
            </div>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 0 100px;
  overflow-x: hidden;

  p {
    text-align: justify;
    color: ${({ theme }) => theme.colors.headingColor};
    font-weight: 500;
  }
  .heading{
    display: flex;
    justify-content: space-between;
     padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.headingColor};
    p {
      font-size: 17px;
      font-weight: 600;
      color: white;
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
     padding: 10px 20px;
      
    
  }
  .slick-slide {
    padding: 0 10px;
  }
  .slider-container {
    padding: 60px 0;
  }
  .slick-dots {
    margin-bottom: -200px;
  }
  .slick-prev,
  .slick-next {
    top: 40%;
    margin: 0 5px;
  }
  @media only screen and (max-width: 992px) {
    .heading{
     padding: 10px ;
     p {
      font-size: 12px;
      font-weight:500;
    }
  }
  }
  @media only screen and (max-width: 767px) {
    padding-top: 50px;
   }
   @media only screen and (max-width: 500px) {
    padding: 20px;
   }
`;
export default Portfolio;

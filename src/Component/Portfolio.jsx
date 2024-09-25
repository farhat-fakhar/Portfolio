import React from "react";
import styled from "styled-components";
import Title from "./Home/Title";
import { Col, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

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
        <p>"My projects showcase a range of web development skills, built using HTML, CSS, JavaScript, and React. Leveraging Styled Components for custom styling and Material-UI (MUI) for responsive, modern UI components, these projects demonstrate my ability to create dynamic, user-friendly web applications with clean design and seamless functionality."</p>
      </div>
      <div className="slider-container mt-3 ">
        <Slider {...settings}>
          <div className="item">
            <NavLink to="https://farhat-fakhar.github.io/Real-estate-website-demo/" style={{textDecoration:"none"}}>
              <Image src="/images/portfolio1.png" fluid />
              <div className="title">
                <p>Build in HTML, CSS & JAVASCRIPT</p>
              </div>
            </NavLink>
          </div>
          <div className="item">
            <NavLink to="https://farhat-fakhar.github.io/project/" style={{textDecoration:"none"}}>
              <Image src="/images/portfolio2.png" fluid />
              <div className="title">
                <p>Build in HTML, CSS & JAVASCRIPT</p>
              </div>
            </NavLink>
          </div>
          <div className="item">
            <Image src="/images/project3.png" fluid />
            <div className="title">
                <p>Build in REACT JS, MUI & Styled component</p>
              </div>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
 padding-top:20px;
  p {
    text-align: justify;
    color: ${({ theme }) => theme.colors.headingColor};
    font-weight: 500;
  }
  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    p{
      font-size: 17px;
      font-weight: 600;
      color: black;
    }
  }
  .slick-slide {
    padding:0 10px;
  }
  .slider-container{
    padding: 60px 0;
   }
   .slick-dots {
   margin-bottom : -170px;  
  }
  .slick-prev,
  .slick-next {
    top: 40%;
    margin: 0 5px;
  }
`
export default Portfolio;

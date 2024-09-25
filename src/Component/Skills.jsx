import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Title from "./Home/Title";
 
import { FaRegDotCircle } from "react-icons/fa";

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    
    slidesToShow: 3,
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
      <Title title="Frontend Development & UI/UX Design Expertise" />
      <p>
        "I specialize in front-end technologies like HTML, CSS, JavaScript, and
        React.js, focusing on developing responsive, interactive user
        interfaces. With experience in Bootstrap, Material UI, and
        styled-components, I craft sleek, efficient designs. I'm also adept at
        using GitHub for streamlined version control and team collaboration."
      </p>
      <div className="slider-container py-5">
        <Slider {...settings}>
          <div className="item d-flex flex-column ">
            <h5> Frontend Development</h5>
            <ul className="m-0 p-0">
              <li><span className="me-3"><FaRegDotCircle/></span>HTML5</li>
              <li><span className="me-3"><FaRegDotCircle/></span>CSS3</li>
              <li><span className="me-3"><FaRegDotCircle/></span>JavaScript (ES6+)</li>
            </ul>
          </div>

          <div className="item d-flex flex-column  ">
            <h5>Component Libraries & UI/UX Design</h5>
            <ul className="m-0 p-0">
              <li><span className="me-3"><FaRegDotCircle/></span>MUI (Material Design)</li>
              <li><span className="me-3"><FaRegDotCircle/></span>Styled-components</li>
              <li><span className="me-3"><FaRegDotCircle/></span>React Bootstrap</li>
            </ul>
          </div>

          <div className="item d-flex flex-column  ">
            <h5>Version Control & Collaboration</h5>
            <ul className="m-0 p-0">
              <li><span className="me-3"><FaRegDotCircle/></span>Git & GitHub</li>
              <li><span className="me-3"><FaRegDotCircle/></span>Collaboration Tools</li>
              
            </ul>
          </div>
          <div className="item d-flex flex-column  ">
            <h5>JavaScript Ecosystem</h5>
            <ul className="m-0 p-0">
              <li><span className="me-3"><FaRegDotCircle/></span>ES6+ Features</li>
              <li><span className="me-3"><FaRegDotCircle/></span>JavaScript Libraries</li>
              <li><span className="me-3"><FaRegDotCircle/></span>API Integration</li>
              
            </ul>
          </div>
          <div className="item d-flex flex-column  ">
            <h5>Tooling & Build Process</h5>
            <ul className="m-0 p-0">
              <li><span className="me-3"><FaRegDotCircle/></span>NPM & Yarn</li>
              <li><span className="me-3"><FaRegDotCircle/></span>Webpack</li>
              <li><span className="me-3"><FaRegDotCircle/></span>Babel</li>
              
            </ul>
          </div>
          <div className="item d-flex flex-column  ">
            <h5>Testing & Debugging</h5>
            <ul className="m-0 p-0">
              <li><span className="me-3"><FaRegDotCircle/></span>React Component Testing</li>
              <li><span className="me-3"><FaRegDotCircle/></span>Browser Developer Tools</li>
             
              
            </ul>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
 
  p {
    text-align: justify;
    color: ${({ theme }) => theme.colors.headingColor};
    font-weight: 500;
  }

  h3 {
    color: ${({ theme }) => theme.colors.headingColor};
    font-weight: 500;
  }
  h5 {
    font-weight: 600;
    font-size: 18px;
  }
  .item {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 15px 25px;
    height: 200px;
   }
   .slider-container{
    padding: 60px 0;
   }
  ul {
    list-style: none;
    li {
      padding-top: 7px ;
    }
  }
  .slick-slide {
  margin: 10px; /* Adjust this value to increase or decrease spacing */
}
@media only screen and (max-width: 1224px) {
  .item {
     height: 250px;
   }
}
`;

export default Skills;

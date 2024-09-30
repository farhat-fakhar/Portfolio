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
        breakpoint: 1024, // Below this width, apply settings
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Below this width, apply settings
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Title title="Front-end Development & UI/UX Design Expertise" />
      <p>
        "I specialize in front-end technologies like HTML, CSS, JavaScript, and
        React.js, focusing on developing responsive, interactive user
        interfaces. With experience in Bootstrap, Material UI, and
        styled-components, I craft sleek, efficient designs. I'm also adept at
        using GitHub for streamlined version control and team collaboration."
      </p>
      <div className="slider-container pt-5">
        <Slider {...settings}>
          <div className="item d-flex flex-column ">
            <h5> Front-End Languages:</h5>
            <ul className="m-0 p-0">
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                HTML5
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                CSS3
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                JavaScript (ES6+)
              </li>
            </ul>
          </div>

          <div className="item d-flex flex-column  ">
            <h5>Front-End Frameworks/Libraries:</h5>
            <ul className="m-0 p-0">
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                React.js
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Redux
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Next.js
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                jQuery
              </li>
            </ul>
          </div>

          <div className="item d-flex flex-column  ">
            <h5>Styling</h5>
            <ul className="m-0 p-0">
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Bootstrap
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Tailwind CSS
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Styled Components
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Material-UI (MUI)
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Ant Design
              </li>
            </ul>
          </div>
          <div className="item d-flex flex-column  ">
            <h5>Version Control</h5>
            <ul className="m-0 p-0">
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Git
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                GitHub
              </li>
            </ul>
          </div>
          <div className="item d-flex flex-column  ">
            <h5>Tooling & Build Process</h5>
            <ul className="m-0 p-0">
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                NPM & Yarn
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Webpack
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Babel
              </li>
            </ul>
          </div>
          <div className="item d-flex flex-column  ">
            <h5>Testing & Debugging</h5>
            <ul className="m-0 p-0">
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                React Component Testing
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Browser Developer Tools
              </li>
            </ul>
          </div>
          <div className="item d-flex flex-column  ">
            <h5>Other</h5>
            <ul className="m-0 p-0">
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Web performance optimization
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Responsive design
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Cross-browser compatibility
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Mobile-first development
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                UX/UI principles
              </li>
            </ul>
          </div>
          <div className="item d-flex flex-column  ">
            <h5>Deployment</h5>
            <ul className="m-0 p-0">
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Netlify
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Vercel
              </li>
              <li>
                <span className="me-3">
                  <FaRegDotCircle />
                </span>
                Firebase
              </li>
            </ul>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding:20px 100px 0px 100px;
  overflow-x: hidden;

   .slick-slide {
    margin: 0;
  }
  .slick-dots {
    bottom: 200px;
  }
  .slick-prev,
  .slick-next {
    top: 25%;
  }
  .py-5{
    padding-bottom:0;
    
  }
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
    height: 250px;
  }
 
  ul {
    list-style: none;
    li {
      padding-top: 7px;
    }
  }
  .slick-slide {
    margin: 10px; /* Adjust this value to increase or decrease spacing */
  }
  @media only screen and (max-width: 767px) {
    .slick-dots {
    bottom: -50px;
  }
  .slick-prev,
  .slick-next {
    top: 50%;
  }
  .slick-slide {
    margin: 0;
  }
  }
  @media only screen and (max-width: 500px) {
    padding: 20px;
    
    .slick-slide {
      margin: 0;
    }
    p {
      font-size: 14px;
    }
    .item {
      height: 300px;
    }
    .slick-slide {
      margin: 0;
    }
    .slick-dots {
      bottom: 50px;
    }
    .slick-prev,
    .slick-next {
      top: 45%;
    }
  }
`;

export default Skills;

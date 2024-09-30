import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import Title from "./Home/Title";
import { LiaDotCircleSolid } from "react-icons/lia";
import logo from "../Component/assets/logo.jpg";
const About = () => {
  return (
    <Wrapper>
      <Title title="Professional Summary" />
      <Row>
        <Col lg={12} md={12}>
          <div className="details">
            <p>
              “I am a dedicated and results-driven Front-End Developer with 1
              year of web development experience and a Master’s in Information
              Technology from the University of Sargodha. My core skills include
              HTML5, CSS3, JavaScript, React.js, Redux, API integration, and a
              passion for creating responsive and optimized web applications. I
              have worked on freelancing projects, developing websites and
              applications that are performant, visually appealing, and
              user-centric. Proficient in modern frameworks like React.js, I
              also have experience with Bootstrap, Tailwind CSS, Styled
              Components, Material-UI (MUI), and Web performance optimization. I
              excel at collaborating with cross-functional teams using tools
              like GitHub, Jira, and Trello and prioritize clean, scalable code
              through Git version control. My goal is to secure a front-end
              development position at a company that values modern web
              technologies and development practices. I am constantly learning
              and improving, having completed numerous online courses in web
              development. Let’s connect and build something great together.”
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-4 d-flex justify-content-center ">
        <Col
          lg={4}
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          <Image src={logo} fluid className="img" />
        </Col>
        <Col lg={6} md={8} className=" ">
          <h4 className="mt-2">Front-end Web Developer</h4>
          <div className="menu">
            <ul className="m-0 p-0">
              <li>
                <span className="dot">
                  <LiaDotCircleSolid />
                </span>
                <strong>
                  <b>Name: </b>
                </strong>
                <p>Farhat Fakhar</p>
              </li>
              <li>
                <span className="dot">
                  <LiaDotCircleSolid />
                </span>
                <strong>
                  <b>Nationality: </b>
                </strong>
                <p>Pakistani</p>
              </li>
              <li>
                <span className="dot">
                  <LiaDotCircleSolid />
                </span>
                <strong>
                  <b>Phone: </b>
                </strong>
                <p>+92 345 7746737</p>
              </li>
              <li>
                <span className="dot">
                  <LiaDotCircleSolid />
                </span>
                <strong>
                  <b>Address: </b>
                </strong>
                <p>Kallur Kot, Bhakkar, Punjab, Pakistan</p>
              </li>
              <li>
                <span className="dot">
                  <LiaDotCircleSolid />
                </span>
                <strong>
                  <b>Qualification: </b>
                </strong>
                <p>Master of Science in Information Technology</p>
              </li>
              <li>
                <span className="dot">
                  <LiaDotCircleSolid />
                </span>
                <strong>
                  <b>Email: </b>
                </strong>
                <p>farhatfakhar819@gmail.com</p>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 20px 100px;
  overflow-x: hidden;

  .details {
    p {
      text-align: justify;
      color: ${({ theme }) => theme.colors.headingColor};
      font-weight: 500;
    }
  }

  ul {
    list-style: none;
    li {
      display: flex;
      padding-top: 15px;
      p {
        font-weight: 600;
        padding: 0;
        margin-left: 15px;
      }
      .dot {
        margin-right: 10px;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    h4 {
      font-size: 20px;
      margin: 0;
    }
    ul {
      li {
        padding-top: 5px;
      }
    }
    .img {
      display: none;
     }
  }
  @media only screen and (max-width: 500px) {
    padding:  20px;
    .details {
      p {
        font-size: 14px;
      }
    }
    .img {
      display: none;
    }
  }
  .menu {
    ul {
      li {
        .dot {
          margin-right: 5px;
        }
        p {
          margin-left: 5px;
        }
      }
    }
  }
`;
export default About;

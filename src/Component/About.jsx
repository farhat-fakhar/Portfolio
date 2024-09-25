import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import Title from "./Home/Title";
import { LiaDotCircleSolid } from "react-icons/lia";

const About = () => {
  return (
    <Wrapper>
      <Title title="Introduction" />
      <Row>
        <Col>
          <div className="details">
            <p>
              "Hello, I'm Farhat, a front-end web developer with a Master's in
              IT from the University of Sargodha. I specialize in building
              responsive, user-friendly web applications using HTML, CSS,
              JavaScript, React.js, and Bootstrap. With expertise in Material UI
              and styled-components, I create clean, scalable designs. I'm also
              skilled in GitHub for efficient project collaboration and version
              control."
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg={5} className="">
          <Image src="/images/logo.jpg" fluid />
        </Col>
        <Col lg={7} className=" ">
          <h4 className="mt-2">Front-end Web Developer</h4>
          <div className="menu">
            <ul className="m-0 p-0">
              <li>
                <span className="me-3">
                  <LiaDotCircleSolid />
                </span>
                <strong>
                  <b>Name: </b>
                </strong>
                <p>Farhat Bibi</p>
              </li>
              <li>
                <span className="me-3">
                  <LiaDotCircleSolid />
                </span>
                <strong>
                  <b>Nationality: </b>
                </strong>
                <p>Pakistani</p>
              </li>
              <li>
                <span className="me-3">
                  <LiaDotCircleSolid />
                </span>
                <strong>
                  <b>Phone: </b>
                </strong>
                <p>+92 345 7746737</p>
              </li>
              <li>
                <span className="me-3">
                  <LiaDotCircleSolid />
                </span>
                <strong>
                  <b>Address: </b>
                </strong>
                <p>Kallur Kot, Bhakkar, Punjab, Pakistan</p>
              </li>
              <li>
                <span className="me-3">
                  <LiaDotCircleSolid />
                </span>
                <strong>
                  <b>Qualification: </b>
                </strong>
                <p>Master of Science in Information Technology</p>
              </li>
              <li>
                <span className="me-3">
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
  width: 100%;
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
    }
  }
  @media only screen and (max-width: 600px) {
  

 ul {
     li {
       padding-top: 5px;
       strong{
        font-size: 12px;

       }
      p {
        font-weight: 500;
         margin-left: 5px;
         font-size: 12px;
      }
    }
  }
  }
`;
export default About;

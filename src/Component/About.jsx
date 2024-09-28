import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import Title from "./Home/Title";
import { LiaDotCircleSolid } from "react-icons/lia";
import logo from "../Component/assets/logo.jpg";
const About = () => {
  return (
    <Wrapper>
      <Title title="Introduction" />
      <Row>
        <Col lg={12} md={12}>
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
        <Col lg={5} md={12} className="d-flex justify-content-center align-items-center">
          <Image src={logo} fluid className="img"/>
        </Col>
        <Col lg={7} md={12} className=" ">
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
  @media only screen and (max-width: 700px) {
    h4 {
      font-size: 20px;
      margin: 0;
    }
    ul{
      li{
        padding-top: 5px;
      }
    }
    .img{
      height: 300px;
    }
  }
`;
export default About;

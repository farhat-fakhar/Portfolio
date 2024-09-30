import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { DataContext } from "./Context/Context";
import { NavLink } from "react-router-dom";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaEnvelope,
  FaFacebookF,
  FaHome,
} from "react-icons/fa";
import { ImMenu } from "react-icons/im";

import { BsPersonFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { PiGraduationCapFill } from "react-icons/pi";
import { TbBriefcaseFilled } from "react-icons/tb";
import { MdPermContactCalendar } from "react-icons/md";
const Nav = () => {
  const { SelectValue, selectValue } = DataContext();
  const whatsappNumber = "0345 7746737";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <Wrapper>
      <Row>
        <Col
          lg={3}
          md={12}
        
          className="logo d-flex justify-content-center align-items-center"
        >
          <p>Farhat Fakhar</p>
        </Col>
        <Col
          lg={7}
          md={10}
           className="  d-flex justify-content-center align-items-center"
        >
          <div className="menu mt-2  ">
            <ul className="d-flex">
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <li onClick={() => SelectValue("Home")}>
                  <span>
                    <FaHome />
                  </span>
                  <p
                    style={{
                      borderBottom:
                        selectValue === "Home" ? "2px solid white" : "",
                    }}
                  >
                    Home
                  </p>
                </li>
              </NavLink>
              <NavLink to="/about" style={{ textDecoration: "none" }}>
                <li onClick={() => SelectValue("About")}>
                  <span>
                    <BsPersonFill />
                  </span>
                  <p
                    style={{
                      borderBottom:
                        selectValue === "About" ? "2px solid white" : "",
                    }}
                  >
                    About
                  </p>
                </li>
              </NavLink>
              <NavLink to="/skills" style={{ textDecoration: "none" }}>
                <li onClick={() => SelectValue("Skills")}>
                  <span>
                    <GiSkills />
                  </span>
                  <p
                    style={{
                      borderBottom:
                        selectValue === "Skills" ? "2px solid white" : "",
                    }}
                  >
                    Skills
                  </p>
                </li>
              </NavLink>
              <NavLink to="/education" style={{ textDecoration: "none" }}>
                <li onClick={() => SelectValue("Education")}>
                  <span>
                    <PiGraduationCapFill />
                  </span>
                  <p
                    style={{
                      borderBottom:
                        selectValue === "Education" ? "2px solid white" : "",
                    }}
                  >
                    Education
                  </p>
                </li>
              </NavLink>
              <NavLink to="/showcase" style={{ textDecoration: "none" }}>
                <li onClick={() => SelectValue("Portfolio")}>
                  <span>
                    <TbBriefcaseFilled />
                  </span>
                  <p
                    style={{
                      borderBottom:
                        selectValue === "Portfolio" ? "2px solid white" : "",
                    }}
                  >
                    Portfolio
                  </p>
                </li>
              </NavLink>
              <NavLink to="/contact" style={{ textDecoration: "none" }}>
                <li onClick={() => SelectValue("Contact")}>
                  <span>
                    <MdPermContactCalendar />
                  </span>
                  <p
                    style={{
                      borderBottom:
                        selectValue === "Contact" ? "2px solid white" : "",
                    }}
                  >
                    Contact
                  </p>
                </li>
              </NavLink>
            </ul>
          </div>{" "}
        </Col>
        <Col lg={2} md={2} className="d-none d-lg-block d-md-block">
          <div className="social_icons d-flex justify-content-center align-items-center">
            <ul className="m-0 p-0 d-flex mt-3">
              <li className="d-flex justify-content-center align-items-center pt-1">
                <a
                  href={whatsappLink}
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // Prevents security issues with external links
                  aria-label="WhatsApp"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <FaWhatsapp />
                </a>
              </li>
              <NavLink
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.linkedin.com/in/farhatbibiofficial/"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <FaLinkedinIn />
                </li>
              </NavLink>
              <NavLink
                to="farhatfakhar819@gmail.com"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <FaEnvelope />
                </li>
              </NavLink>
              <NavLink
                target="_blank"
                rel="noopener noreferrer"
                to="https://web.facebook.com/profile.php?id=100024326713598"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <FaFacebookF />
                </li>
              </NavLink>
            </ul>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};
const Wrapper = styled.div`
overflow-x: hidden;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
  color: ${({ theme }) => theme.colors.whiteColor};
  background-color: ${({ theme }) => theme.colors.headingColor};
  .social_icons {
    ul {
      list-style: none;
      li {
        margin-right: 10px;
        font-weight: 600;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.whiteColor};
      }
    }
  }

  .menu {
    ul {
      list-style: none;
      li {
        color: ${({ theme }) => theme.colors.whiteColor};
        display: flex;
        font-weight: 550;
        padding: 5px 0;
        margin-right: 15px;
        font-family: "poppins";
        a {
          color: ${({ theme }) => theme.colors.whiteColor};
        }
        span {
          font-size: 20px;
          margin-right: 10px;
        }
      }
    }
  }
  .logo {
    p {
      font-family: "Great Vibes", cursive;
      font-weight: 600;
      font-style: normal;
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 880px) {
    .menu {
      ul {
        li {
          font-weight: 500;
          margin-right: 8px;

          span {
            font-size: 17px;
            margin-right: 8px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .logo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
       p {
        font-weight: 500;
        font-size: 20px;
        padding-top: 15px;
      }
    }
    .menu {
      ul {
        li {
          font-weight: 500;
          margin-right: 8px;

          span {
            display: none;
          }
        }
      }
    }
  }
`;
export default Nav;

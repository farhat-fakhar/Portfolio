import React from "react";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.jpg";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaEnvelope,
  FaFacebookF,
  FaHome,
} from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { PiGraduationCapFill } from "react-icons/pi";
import { TbBriefcaseFilled } from "react-icons/tb";
import { MdPermContactCalendar } from "react-icons/md";
import { DataContext } from "../Context/Context";

const Navbar = () => {
  const { SelectValue, selectValue } = DataContext();

  const whatsappNumber = "0345 7746737";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <Wrapper>
      <div className="main ">
        <div className="img ">
          <Image src={logo} fluid className="logo" />
        </div>
        <div className="name">
          <h1>Farhat Bibi</h1>
        </div>
        <div className="social_icons d-flex justify-content-center align-items-center">
          <ul className="m-0 p-0 d-flex mt-3">
            <li className="d-flex justify-content-center align-items-center">
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
                  color: "white ",
                  paddingLeft: "6px",
                }}
              >
                <FaWhatsapp style={{ marginRight: "8px" }} />
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
        <div className="menu mt-2  ">
          <ul>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <li onClick={() => SelectValue("Home")}>
                <span className="me-3">
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
                <span className="me-3">
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
                <span className="me-3">
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
                <span className="me-3">
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
            <NavLink to="/portfolio" style={{ textDecoration: "none" }}>
              <li onClick={() => SelectValue("Portfolio")}>
                <span className="me-3">
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
                <span className="me-3">
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
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 300px;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
  color: ${({ theme }) => theme.colors.whiteColor};
  background-color: ${({ theme }) => theme.colors.headingColor};
  .active {
    border-bottom: 1px solid white;
    transform: translateX(5px);
  }
  .img {
    margin: 30px auto;
    display: block;
    width: 180px;
    .logo {
      border-radius: 17px;
    }
  }
  .social_icons {
    ul {
      list-style: none;
      li {
        margin-right: 10px;
        font-weight: 700;
        font-size: 17px;
        background-color: #182a36;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
      }
    }
  }

  .menu {
    margin-left: 25px;
    ul {
      list-style: none;
      li {
        color: white;
        display: flex;
        font-weight: 550;
        padding: 5px 0;
        span {
          font-size: 20px;
        }
      }
    }
  }
  @media only screen and (max-width: 700px) {
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      margin: 50px auto;
      display: block;
      width: 120px;
    }
    .menu {
      margin-left: 15px;

      ul {
        padding-left: 0;
        li {
          margin-top: 20px;
        }
      }
    }
  
  .social_icons {
    ul {
      li {
        margin-top: 20px;
        margin-right: 10px;
        font-weight: 500;
        font-size: 13px;
        border-radius: 50%;
        width: 24px;
        height: 24px;
      }
    }
  }}
`;
export default Navbar;

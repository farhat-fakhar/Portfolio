import React from "react";
import styled from "styled-components";
import Title from "./Home/Title";
import { Col, Image, Row } from "react-bootstrap";
import { IoLocationSharp } from "react-icons/io5";
import contacting from "./assets/contact.png";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <Wrapper>
      <Title title="Contact" />
      <Row className="d-flex justify-content-around ">
        <Col lg={5} md={12} className="p-0" >
          <div className="info ">
            <div className="address d-flex">
              <div className="icon  d-flex justify-content-center align-items-center">
                <p>
                  <IoLocationSharp />
                </p>
              </div>
              <div className="contact   d-flex flex-column mt-1">
                <h6>
                  <strong>Location:</strong>
                </h6>
                <p>Kallur Kot, District Bhakkar, Punjab Pakistan</p>
              </div>
            </div>
            <div className="email d-flex ">
              <div className="icon d-flex justify-content-center align-items-center">
                <p>
                  <FaEnvelope />
                </p>
              </div>
              <div className="contact d-flex flex-column mt-4">
                <h6>
                  <strong>
                    <strong>Email:</strong>
                  </strong>
                </h6>
                <p>farhatfakhar819@gmail.com</p>
              </div>
            </div>
            <div className="phone d-flex mt-4 justify-content-start align-items-start">
              <div className="icon d-flex justify-content-center align-items-center">
                <p>
                  <FaPhoneAlt />
                </p>
              </div>
              <div className="contact">
                <h6>
                  <strong>Call:</strong>
                </h6>
                <p>+92 345 7746737</p>
              </div>
            </div>
            <div className="img d-flex justify-content-center align-items-center pt-1">
              <Image className="image" src={contacting} fluid style={{ height: "300px" }} />
            </div>
          </div>
        </Col>
        <Col lg={6} md={12}   className="  contact_form">
          <form action="https://formspree.io/f/xwpevbdw" method="post">
            <Row>
              <Col lg={6} className="d-flex">
                <div className="fn w-100">
                  <label htmlFor="">First Name: </label>
                  <input
                    type="text"
                    name="fname"
                    placeholder="Enter First Name"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="ln w-100">
                  <label htmlFor="">Last Name: </label>
                  <input
                    type="text"
                    name="lname"
                    placeholder="Enter Last Name"
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div className="email w-100 mt-3">
                  <label htmlFor="">Email: </label>
                  <input type="email" name="email" placeholder="Enter Email" />
                </div>
              </Col>
              <Col lg={12}>
                <div className="subject w-100 mt-3">
                  <label htmlFor="">Subject: </label>
                  <input type="text" name="subject" />
                </div>
              </Col>
              <Col lg={12}>
                <div className="msg w-100 mt-3">
                  <label htmlFor="">Message: </label>
                  <textarea
                    className="form-control mt-2"
                    rows="5"
                    required
                  ></textarea>
                </div>
              </Col>
              <Col lg={12}>
                <div className="buton w-100 mt-4 d-flex justify-content-end">
                  <button type="submit" className="submitButton">
                    Submit
                  </button>
                </div>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 0 100px;
overflow-x: hidden;
  .info,
  .contact_form {
     padding:30px;
    background: #fff;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  }
  label {
    font-weight: 600;
    font-size: 18px;
  }
  input {
    border-radius: 0;
    box-shadow: none;
    font-size: 16px;
    display: block;
    width: 100%;
    padding: 8px 12px;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.headingColor};
    border: 1px solid #cbd0d5;
    margin-top: 10px;
  }
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.headingColor};
  }
  .icon {
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 26px;
      font-weight: 600;
    }
  }
  h6 {
    /* padding: 0 0 0 60px; */
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.headingColor};
  }
  .submitButton {
    padding: 7px 20px;
    background-color: ${({ theme }) => theme.colors.headingColor};
    color: white;
    font-weight: 600;
    font-size: 18px;
    border-radius: 7px;
    border: none;
    outline: none;
  }
  @media only screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h6 {
     font-size: 16px;
  }
  .icon {
    margin-right: 15px;
  
    p {
      font-size: 18px;
      font-weight: 500;
    }
  }
  }
  @media only screen and (max-width: 500px) {
    padding: 20px;
    .info{
      padding: 15px ;
    }
.img{
  .image{
    display: none;
  }
}
  }
`;
export default Contact;

import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import hero from "../assets/logo.jpg";
import resume from "../assets/Farhat-Resume-Front-end-developer.pdf"
import { NavLink } from "react-router-dom";
 const Hero = () => {
  const handleDownload = () => {
    const resumeUrl = "https://raw.githubusercontent.com/farhat-fakhar/project/main/src/assets/Farhat-Resume-Front-end-developer.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Farhat-Resume-Front-end-developer.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  
  return (
    <Wrapper>
      <Row className="d-flex justify-content-center align-items-center">
        <Col
          lg={6}
          md={8}
           className="content d-flex justify-content-center align-items-start flex-column pe-5"
        >
          <h2>Hello! I'm</h2>
          <h1>Farhat Fakhar</h1>

          <h3>
          Front-End Developer  
          </h3>
         <div className="buttons d-flex">
         <div className="download_btn my-3 me-3">
            <NavLink to="/contact"><Button
              variant="contained"
               sx={{ backgroundColor: "#1b1b1b" }}
            >
              Hire me
            </Button></NavLink>
          </div>
          <div className="download_btn my-3">
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handleDownload}
              sx={{ backgroundColor: "#1b1b1b" }}
            >
              Download RESUME
            </Button>
          </div>
         </div>
        </Col>
        <Col
          lg={4}
          md={4}
          
          className="title d-flex justify-content-center align-items-center pt-2"
        >
          <Image className="img" src={hero} fluid />
        </Col>
      </Row>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 20px 100px;
  overflow-x: hidden;

  .title {
    .img {
      border-radius: 10%;
    }
  }
  h1 {
    margin: 0 0 10px 0;
    font-size: 36px;
    font-weight: 600;
    line-height: 30px;
    color: ${({theme})=>theme.colors.JetBlack};
    font-family: "Poppins", sans-serif;
  }
  h2 {
    color: ${({theme})=>theme.colors.CharcoalBlack};

    font-size: 26px;
    margin-bottom: 10px;
    font-family: "Poppins", sans-serif;
  }
  h3 {
    color: ${({theme})=>theme.colors.OnyxBlack};

    font-size: 38px;
    margin-bottom: 10px;
    font-family: "Poppins", sans-serif;
  }
  p {
    color: ${({ theme }) => theme.colors.headingColor};

    margin-bottom: 20px;
    font-size: 23px;
    font-family: "Poppins", sans-serif;
  }
  .content {
    p {
      color: ${({ theme }) => theme.colors.headingColor};
      letter-spacing: 1px;
      font-size: 18px;
      font-family: "Poppins", sans-serif;
      text-align: justify;
      font-weight: 500;
    }
  }
  @media only screen and (max-width: 767px) {
    h1 {
      font-size: 36px;
    }
    h3{
      font-size: 30px;
    }
    .content{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 0 20px;
    h1 {
      margin: 0 0 10px 0;
      font-size: 25px;
      line-height: 20px;
    }
    p {
      margin-bottom: 10px;
    }
    .content {
      p {
        font-size: 16px;
      }
    }
  }
`;
export default Hero;

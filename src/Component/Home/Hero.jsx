import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
const Hero = () => {
  const handleDownload = () => {
    const resumeUrl = "/images/Farhat-resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Wrapper>
      <Row>
        <Col
          lg={4}
          md={12}
          className="content d-flex justify-content-center align-items-start flex-column"
        >
          <h2>Hello! I'm</h2>
          <h1>Farhat Bibi</h1>

          <p>
            "I’m a passionate Front-End Developer with a focus on building
            responsive, user-friendly, and dynamic web applications. I thrive in
            bringing creative solutions to life through coding."
          </p>
          <div className="download_btn my-3">
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handleDownload}
              sx={{ backgroundColor: "#004999" }}
            >
              Download Resume
            </Button>
          </div>
        </Col>
        <Col lg={8} md={12} className="title ">
          <Image className="img" src="/images/pngwing.com (3).png" fluid />
        </Col>
      </Row>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 70px 0;

  h1 {
    margin: 0 0 10px 0;
    font-size: 50px;
    font-weight: 600;
    line-height: 56px;
    color: #004999;
    font-family: "Poppins", sans-serif;
  }
  h2 {
    color: #004999;

    font-size: 26px;
    margin-bottom: 15px;
    font-family: "Poppins", sans-serif;
  }
  p {
    color: ${({ theme }) => theme.colors.headingColor};

    margin-bottom: 30px;
    font-size: 26px;
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
  @media only screen and (max-width: 1267px) {
    h1 {
      font-size: 30px;
      margin: 0;
    }
    p {
      margin-bottom: 10px;
      font-size: 14px;
      text-align: start;
    }
    h2 {
      font-size: 20px;
      margin-bottom: 0;
    }
  }
  @media only screen and (max-width: 667px) {
    margin: 20px 0;
 
  }
`;
export default Hero;

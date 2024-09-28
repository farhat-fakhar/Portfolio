import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline"; // Correct import for Timeline component
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Title from "./Home/Title";
const Education = () => {
  return (
    <Wrapper>
      <Title title="Educational Background" />
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="item  ">
              <h3> Master of Science in Information Technology (MSc IT)</h3>
              <div className="detail  ">
                <p>
                  <strong>Session: </strong>
                </p>
                <p>2020 - 2022 </p>
              </div>
              <div className="detail  ">
                <p>
                  <strong>University: </strong>
                </p>
                <p>University Of Sargodha, Sargodha</p>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="item">
              <div className="heading d-flex justify-content-start align-items-start">
                <h3> ADP in Computer Science</h3>
              </div>

              <div className="detail ">
                <p>
                  <strong>Session: </strong>
                </p>
                <p>2018 - 2020</p>
              </div>
              <div className="detail  ">
                <p>
                  <strong>University: </strong>
                </p>
                <p>Punjab College of Commerce, Jauharabad</p>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="item ">
              <h3>Intermediate of Computer Science</h3>
              <div className="detail  ">
                <p>
                  <strong>Session: </strong>
                </p>
                <p>2016 - 2018</p>
              </div>
              <div className="detail  ">
                <p>
                  <strong>College: </strong>
                </p>
                <p>Punjab Group of Colleges, Kallur Kot</p>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
          </TimelineSeparator>
          <TimelineContent>
            <div className="item">
              <div className="heading d-flex justify-content-start">
                <h3>Matriculation in Science</h3>
              </div>
              <div className="detail  ">
                <p>
                  <strong>Session: </strong>
                </p>
                <p>2014 - 2016</p>
              </div>
              <div className="detail  ">
                <p>
                  <strong>School: </strong>
                </p>
                <p>Allied School, Bhakkar</p>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  h3 {
    font-family: "poppins";
    font-weight: 550;
    font-size: 1.25rem;
  }
  .item {
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 5px;
    padding: 13px 20px;
    .detail {
      display: flex;
      justify-content: flex-start;
      align-items: left;
      p {
        margin-right: 15px;
      }
    }
  }
 
  @media only screen and (max-width: 700px) {
    h3 {
     font-size: 16px;
  }
  }
`;
export default Education;

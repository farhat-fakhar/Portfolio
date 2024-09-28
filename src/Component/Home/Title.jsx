import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

const Title = ({title}) => {
  return (
    <Wrapper>
       <Row>
        <Col lg={12}>
          <div className="title d-flex justify-content-center align-items-center">
            <h4>{title}</h4>
          </div>
        </Col>
      </Row>
    </Wrapper>
  )
}
const Wrapper=styled.div`
.title{
 padding-top:20px ;
}
@media only screen and (max-width: 700px) {
  h4{
        font-size: 20px;
 

}
}
`
export default Title

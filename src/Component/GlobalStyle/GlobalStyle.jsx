import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box;
    font-family: "Quicksand";
  
}
 p{
  margin: 0;
  padding: 0;
  padding-top: 5px;
 }
.app-container {
  display: flex;
  height: 100vh;
}

.main-content {
  flex: 1;
  padding: 0 50px;
  width: 70%;  
  height: 100vh;
  overflow-x: hidden; 
}
 
 
h1{
  font-size: 24px;
  margin: 0;
  padding: 0;
  font-weight: 600;
  -moz-text-align-last: center;
  text-align-last: center;
  color: ${({theme})=>theme.colors.JetBlack};

 }
   
 h2{
  font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.headingColor};
   
}
h3{
  font-size: 25px;
    font-weight: 600;
    margin-bottom: 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.headingColor};
   
}

h4{
  font-weight: 600;
      margin-bottom: 10px;
       font-size: 30px;
      color: ${({ theme }) => theme.colors.headingColor};
      cursor: pointer;
      font-family: "Poppins";

}
.slick-prev,
  .slick-next {
     border-radius: 50%;
      height: 30px;
 width: 30px;
    z-index: 1;
    top: 25%; // Adjust vertical alignment
    margin: 0 20px;
    opacity: 1;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 22px;  
    color: black; 
    opacity:1 ;
   }
  .slick-dots {
    bottom: 150px;  
  }

  .slick-dots li button:before {
    font-size: 12px;  
    color: silver; 
    opacity:1 ;
  }

  .slick-dots li.slick-active button:before {
    color:  ${({ theme }) => theme.colors.headingColor}; 
    opacity:1 ; 
  }
  @media only screen and (max-width: 500px) {

  }
  @media only screen and (max-width: 700px) {

.main-content {
 
  padding: 0 20px;
  
}
  }
  
  `;

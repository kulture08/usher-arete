import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ),
    url("./images/Hero.png");
  background-size: cover;
  background-position: center bottom;
  text-align: left;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  max-height: 100%;
  width: 100vw;
  justify-content: center;
  height: 100vh;
 
  p {
    font-family: ${(props) => props.theme.fonts.primary};
    margin-top: 20px;
    color: #fff;
    font-size: 12px;
    line-height: 2;
  }
  .banner {
    .inner {
      position: relative;
      .box {
        display:none;
      position:absolute;
      right:0;
      top:50%;
      padding:10px;
      border:1px solid rgba(255, 255, 255, 0.45);
      transform:translateY(-50%);
    
      }
    }
  }

  .text {
    padding: 20px;
    position: relative;
    z-index: 1;
    color: rgb(255, 255, 255);
  }

  h1 {
    color: #fff;
    font-size: 40px;
  }

  @media (min-width: 768px) {
    .banner{
       .inner {
        transform:translateY(0px);
      max-width:650px;
      .box{
        display: block;
        .box-inner{
          height: 300px;
      
      width: 300px;
      background:rgba(249, 82, 67, 0.45);
        }
      }
         }
    }
   
      }
      
    
    .text {
      padding-right: 50px;
      padding-top: 50px;
    }
  
  
  @media (min-width: 992px) {
    .box{
      display: block;
    right: unset;
    left: 65%;
    transform: translate(-50%, -50%);
    width: 52.5%;
    margin-left: -171px;
    .box-inner{
      height: 320px;
    width: 320px;
}
    }
    }
    
    
  
  @media (min-width: 1200px) {
    .box{
      margin-left: -267px;
      width: 53%;
    }
    .text{
      margin-bottom: -24%;
    margin-left: -22%;
}
    }
  
`;

function Banner() {
  return (
    <Wrapper>
      <div className="banner">
        <div className="inner">
          <div className="box">
            <div className="box-inner"></div>
          </div>
          <div className="text">
            <h1 className="bafo">Arete Growth Partners</h1>

            <p className="zwa">
              ἀρετή / [ahr-i-tey] / Arete is a concept in ancient greek
              philosophy that refers to the
              <br /> perpetual pursuit of excellence and moral virtue. It means
              the act of living up to one’s full <br />
              potential by using all faculties to achieve real results and the
              highest effectiveness.
            </p>
            <p className="zwa">
              Arete Growth Partners seeks to continue the pursuit of excellence
              for small business owners <br />
              by way of acquisition entrepreneurship.
            </p>
            <p>hello@aretegrowthpartners.com</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Banner;

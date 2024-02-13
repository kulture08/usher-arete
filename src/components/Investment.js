import React from "react";
import styled from "styled-components";
import { VscArrowRight } from "react-icons/vsc";

const Wrapper = styled.section`
  padding: 10% 5%;
  background-color: #000;

  .kwesta {
    height: 13px;
    background-color: #fff;
    margin-top: -28px;
    margin-left: 177px;
  }
  ul li {
    color: #fff;
  }
  li a {
    margin-bottom: 5px;
    font-family: ${(props) => props.theme.fonts.primary};
    line-height: 1.6;
    color: #fff;
    font-size: 13px;
    text-decoration: none;
  }
  h6 {
    font-family: ${(props) => props.theme.fonts.primary};
   font-weight: 700;
    font-size: 20px;
    color: #fff;
    margin-bottom: 30px;

}


  h2 {
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 700;
    font-size: 30px;
    color: #fff;
   
  }
 .mimi{
  margin-top: 30px;
    margin-bottom: 30px;
}
 

  .saliwa {
    img {
      width: 90%;
      height: 100%;
    }

    .left {
      position: relative;
      .text {
        position: absolute;
        top: 50%;
        left: 45%;
        transform: translate(-50%, -50%);
        padding: 10px;

        border: 1px solid rgba(255, 255, 255, 0.5);
        .inner {
          width: 250px;
          height: 250px;
          background: rgba(249, 83, 67, 0.45);
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          flex-direction: column;
        }

        .button {
          padding: 0px 10%;
          border: 1px solid rgb(255, 255, 255);
          background: transparent;
          border-radius: 7px;
          height: 40px;
          display: flex;
          width: 200px;
          transition: all 0.7s ease 0s;
          justify-content: space-around;
          -webkit-box-align: center;
          align-items: center;
          .btn-text {
            color: #fff;
            font-size: 14px;
            transition: all 0.7s ease;
            @media (min-width: 768px) {
              transform: translateX(30px);
            }
          }
          @media (min-width: 768px) {
            &:hover {
              .btn-icon {
                transform: translateX(0) scale(1);
                opacity: 1;
                svg {
                  opacity: 1;
                  transform: scale(1);
                }
              }
              .btn-text {
                transform: translateX(0);
              }
            }
            .btn-text {
              transform: translateX(0);
            }
          }
        }
        .btn-icon {
          height: 25px;
          width: 25px;
          background: #fff;
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.7s ease;

          @media (min-width: 768px) {
            transform: translateX(-10px) scale(0);
            opacity: 0;
          }
          svg {
            height: 12px;
            width: 12px;
            transition: all 1s ease;

            @media (min-width: 768px) {
              opacity: 0;
              transform: scale(0);
            }
          }
        }

        /* .kwesta{
      position: relative;
    top: -5px;
    right: 20px;
} */
      }
    }

    .h6 {
      line-height: 1.5;
      margin-bottom: 20px;
      font-family: ${(props) => props.theme.fonts.primary};
      color: #fff;
    }
  }

  @media (min-width: 667px) {
    .inner {
      flex-direction: column;
    }
    .kwesta {
      height: 14px;
      background-color: #fff;
      margin-top: -28px;
      margin-left: 177px;
      width: 15px;
    }
  }

  @media (min-width: 768px) {
    .saliwa {
      img {
        float: left;
      }
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      .left {
        .text {
          position: absolute;
          top: 50%;
          right: 21%;
          width: 68%;
          height: 50%;
          background: #ff120042;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          .inner {
            width: 108%;
            height: 100%;
          }
        }
      }
      .wwe {
        width: 40% !important;
        h6{
          margin-bottom: 20px;
    margin-top: 30px;
}
        }
      }
    }
  
  @media (min-width: 1024px) {
    .left {
      .text {
        position: absolute;
        top: 22%;
        background: #ff120042;
        right: 13%;
        width: 68%;
        height: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
     
      }
     
    }
    .wwe {
      width: 79% !important;
      h2{
        margin-bottom: 20px;
        line-height:1.5;
        margin-top: 30px;
         
      }
      .mimi{
        line-height: 1.4;
     
      }
     
    }

  }
  @media (min-width: 1200px) {
    .saliwa {
      .left {
        .text {
          background: #ff120042;
          position: absolute;
          top: 50%;
          width: 40%;
          height: 50%;
          margin-left: 4px;
        }
      }
      img {
        width: 60%;
        height: 100%;
        margin-left: 120px;
      }
    }
  }

 
    ul li a {
      line-height: 1.7;

  }
`;

function Investment() {
  return (
    <>
      <Wrapper>
        <div className=" saliwa">
          <div className="left">
            <img src="./Images/Frame 22 (1).png" alt="image" />
            <div className="text">
              <div className="inner">
                <h6 className="h6">
                  Get in touch <br />
                  with us for an <br /> introductory call
                </h6>
                <button className="button">
                  <span className="btn-text">Get in touch</span>
                  <span className="btn-icon">
                    <VscArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="wwe">
            <h2>Investment <br/>Criteria</h2>
            <div className="mimi">
              <h6>Financial Attributes</h6>
              <ul>
                <li>
                  <a href="#">Annual EBITDA: $1M-$3M+ </a>
                </li>
                <li>
                  <a href="#">Minimum 10% EBITDA marginj</a>
                </li>
                <li>
                  <a href="#">Strong, consistent cash flon</a>
                </li>
                <li>
                  <a href="#">Low to moderate capital intensity</a>
                </li>
              </ul>
            </div>

            <div className="mimi">
              <h6 >Business Models</h6>
              <ul>
                <li>
                  <a href="#">B2B/B2C products or servicej</a>
                </li>
                <li>
                  <a href="#">
                    Enduringly profitable with platform growth potentia ̈
                  </a>
                </li>
                <li>
                  <a href="#">
                    Competitive offering and strong stakeholder relationship
                  </a>
                </li>
                <li>
                  <a href="#">
                    Recurring or repeat revenues with low customer concentration
                  </a>
                </li>
              </ul>
            </div>
            <div className="mimi">
              <h6 >Industry Targets</h6>
              <ul>
                <li>
                  <a href="#">Building Product</a>
                </li>
                <li>
                  <a href="#">Niche Manufacturing</a>
                </li>
                <li>
                  <a href="#">Industrial Internet of Things (IoTÉ)</a>
                </li>
                <li>
                  <a href="#">Transportation and Logistics</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Investment;

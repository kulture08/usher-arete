import React from "react";
import styled from "styled-components";
import { CgArrowRightR } from "react-icons/cg";
import TextField from "@mui/material/TextField";

const Wrapper = styled.section`
  background-color: #000000;
  padding-bottom: 3px;
  .dlamanzi {
    padding: 2rem;
    margin-top: -100px;
    text-align: center;
    margin-bottom: 50px;
  }

  .button {
    margin-top: 20px;
    padding: 0px;
    border: 1px solid rgb(249, 83, 67);
    background: transparent;
    border-radius: 7px;
    height: 40px;
    display: flex;
    width: 250px;
    transition: all 0.7s ease 0s;
    justify-content: space-evenly;
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
    background: rgba(249, 83, 67, 0.45);
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
  .name-input {
    margin-bottom: 10px;
    width: 321px;
    background-color: gray;
    color: #fff;
    border-color: 1px solid red;
  }
  .businessname-input {
    margin-bottom: 10px;
    width: 321px;
    background-color: gray;
    border-color: 1px solid red;
  }
  .message-input {
    margin-bottom: 10px;
    width: 321px;
    background-color: grey;
    border-color: 1px solid red;
  }

  .emailaddress-input {
    margin-bottom: 10px;
    width: 321px;
    background-color: gray;
    border-color: 1px solid red;
  }
  .businesslocation-input {
    margin-bottom: 10px;
    width: 321px;
    background-color: gray;
    border-color: 1px solid red;
  }

  .ryt {
    position: relative;
    bottom: 34px;
    left: 80px;
    border-radius: 5px;
    padding: -12px;
    color: red;
  }
  .potso {
    padding: 15px;
    width: 288px;
    margin-left: -33px;
    border-color: red;
    margin-top: 27.1px;
    color: #fff;
    background-color: #000000;
  }
  .mtshana {
    margin-left: 50px;
    padding: -240px;
    width: 210px;
    top: 175px;
  }
  h2 {
    font-family: ${(props) => props.theme.fonts.primary};
    text-align: left;
    font-size: 30px;
    font-weight: 800;
    color: #fff;
    margin-bottom: 50px;
  }

  p {
    font-family: ${(props) => props.theme.fonts.primary};
    color: #fff;
  }

  a {
    font-family: ${(props) => props.theme.fonts.primary};
    text-decoration: none;
    color: #fff;
  }

  .ithole {
    padding: 10%;
    display: flex;
    flex-direction: column;
  }
  .mama {
    text-align: left;
    margin-top: 20px;
    padding: 37px;
    font-size: 12px;
    width: 247px;
    background: #6a221c;
  }

  .line {
    border-bottom: solid red;
    width: 283px;
    margin-left: -56px;
  }
  @media (min-width: 667px) {
    .solo {
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
    }
    .message-input {
      width: 50%;
    }
  }

  @media (min-width: 768px) {
    .solo {
      display: flex;
      justify-content: center;
    }
    .V {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .dlamanzi {
      margin-top: -80px;
    }
    .name-input {
      margin-right: 60px;
      width: 80%;
      margin-top: 29px;
    }
    .businessname-input {
      margin-top: 20px;
      margin-right: 60px;
      width: 80%;
    }
    .emailaddress-input {
      margin-top: 20px;
      margin-left: 60px;
      width: 80%;
    }
    .businesslocation-input {
      margin-top: 20px;
      margin-left: 60px;
      width: 80%;
    }
    .message-input {
      margin-top: 20px;
      width: 100%;
    }

    .ryt {
      left: 25px;
    }
    h2 {
      margin-left: 10px;
    }

    .zakwe {
      margin-left: 40px;

      width: 210px;
      top: 165px;
    }
    .mtshana {
      top: 275px;
      left: 105px;
    }
    .potso {
      margin-top: 20px;
      margin-left: -111px;
      width: 218px;
    }
  }
  @media (min-width: 1024px) {
    .potso {
      margin-left: 90px;
    }
    h2 {
      margin-left: 17px;
    }
    .mama {
      margin-left: 14px;
    }
    .ryt {
      left: 119px;
    }
    .message-input {
      width: 97% !important;
    }
    .button {
      margin-right: 140px;
    }
  }

  @media (min-width: 1200px) {
    .ithole {
      display: flex;
      justify-content: space-between;
    }
    .ryt {
      margin-top: 5px;
      margin-left: 200px;
    }
    .dlamanzi {
    }
    .button {
      width: 300px;
      margin-right: 252px;
    }
    .mama {
      text-align: left;
      height: 100px;
      margin-left: 169px;
      padding: 30px;
      background-color: #6a221c;
      width: 334px;
    }
    .message-input {
      width: 74% !important;
    }
    h2 {
      margin-left: 174px;
    }
    .potso {
      margin-left: 268px;
      border-radius: 10px;
      border-color: red;
      color: #fff;
      background: #000000;
      width: 349px;
      padding: 10px;
    }
  }
`;

function Contact() {
  return (
    <>
      <Wrapper>
        <div className="dlamanzi">
          <div className="swift">
            <h2 className="velaphi"> Let’s Get in Touch.</h2>
          </div>

          <div className="form">
            <div className="solo">
              <div>
                <TextField
                  id="filled-basic"
                  label="name"
                  variant="filled"
                  className="name-input"
                />

                <TextField
                  id="filled-basic"
                  label="businessname"
                  variant="filled"
                  className="businessname-input"
                />
              </div>
              <div>
                <TextField
                  id="filled-basic"
                  label="emailaddress"
                  variant="filled"
                  className="emailaddress-input"
                />
                <TextField
                  id="filled-basic"
                  label="businesslocation"
                  variant="filled"
                  className="businesslocation-input"
                />
              </div>
            </div>
            <div className="mesej">
              <TextField
                id="filled-basic"
                label="message"
                variant="filled"
                className="message-input"
              />
            </div>
          </div>

          <div className="V">
            <div className="mama">
              <a href="#">helo@aretegrowthpartners.com</a>
              <p>(816) 729 6585</p>
              <p>Something, Florida</p>
            </div>

            <div className="bhova">
              <button className="button">
                <span className="btn-text">Get in touch</span>
                <span className="btn-icon">
                  <CgArrowRightR />
                </span>
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Contact;
